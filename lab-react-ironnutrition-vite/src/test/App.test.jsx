import { describe, test, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";

import foodsJson from "../foods.json";

describe("Iteration 1 | Store Data in the State", () => {
  describe("App component", () => {
    test("renders properly", () => {
      expect(() => render(<App />)).not.toThrow();
    });
  });
});

describe("Iteration 2 | FoodBox component", () => {
  describe("FoodBox component", () => {
    const food = {
      name: "Orange",
      calories: 85,
      image: "https://example.com/orange.jpg",
      servings: 5,
    };

    beforeEach(() => {
      render(<FoodBox food={food} />);
    });

    test("renders food name", () => {
      expect(screen.getByText(food.name)).toBeInTheDocument();
    });

    test("renders food image correctly", () => {
      expect(screen.getByRole("img")).toHaveAttribute("src", food.image);
    });

    test("renders food calories in format 'Calories: <CALORIES>'", () => {
      expect(
        screen.getByText(
          new RegExp(`Calories:?(?:\\s*){0,}${food.calories}`, "i")
        )
      ).toBeInTheDocument();
    });

    test("renders food servings in format 'Servings <SERVINGS>'", () => {
      expect(
        screen.getByText(
          new RegExp(`Servings:?(?:\\s*){0,}${food.servings}`, "i")
        )
      ).toBeInTheDocument();
    });

    test("renders total food calories in format 'Total Calories: <CALORIES> * <SERVINGS>'", () => {
      expect(
        screen.getByText(
          new RegExp(
            `Total Calories:?(?:\\s*){0,}${food.calories * food.servings}`
          )
        )
      ).toBeInTheDocument();
    });

    test("renders a 'Delete' button", () => {
      const deleteButton = screen.getByRole("button", { name: /delete/i });
      expect(deleteButton).toBeInTheDocument();
    });
  });
});

describe("Iteration 3 | Render a List of FoodBox Components", () => {
  describe("App component", () => {
    test("renders all food names from foods.json", () => {
      render(<App />);

      foodsJson.forEach((food) => {
        const foodElement = screen.getByText(food.name);
        expect(foodElement).toBeInTheDocument();
      });
    });
  });
});

describe("Iteration 4 | Delete List Items", () => {
  describe("App component", () => {
    test("removes a specific food item when the 'Delete' button is clicked", () => {
      render(<App />);
      const initialFoodNames = foodsJson.map((food) => food.name);
      initialFoodNames.forEach((name) => {
        expect(screen.getByText(name)).toBeInTheDocument();
      });

      // Choose a random food item to delete
      const randomIndex = Math.floor(Math.random() * initialFoodNames.length);
      const foodToDelete = initialFoodNames[randomIndex];
      const deleteButton = screen.getAllByText("Delete")[randomIndex];

      // Simulate the click event on the Delete button
      fireEvent.click(deleteButton);

      // Check if the food item has been removed from the list
      expect(screen.queryByText(foodToDelete)).not.toBeInTheDocument();

      // Check if other food items are still in the list
      initialFoodNames
        .filter((_, index) => index !== randomIndex)
        .forEach((name) => {
          expect(screen.getByText(name)).toBeInTheDocument();
        });
    });

    test("removes multiple food items when their 'Delete' buttons are clicked", () => {
      render(<App />);
      const initialFoodNames = foodsJson.map((food) => food.name);
      initialFoodNames.forEach((name) => {
        expect(screen.getByText(name)).toBeInTheDocument();
      });

      // Choose and delete 3 random food items
      const deletedItems = [];
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * initialFoodNames.length);
        const foodToDelete = initialFoodNames[randomIndex];
        deletedItems.push(foodToDelete);
        initialFoodNames.splice(randomIndex, 1);

        const deleteButton = screen.getAllByText("Delete")[randomIndex];
        fireEvent.click(deleteButton);
      }

      // Check if the deleted food items have been removed from the list
      deletedItems.forEach((item) => {
        expect(screen.queryByText(item)).not.toBeInTheDocument();
      });

      // Check if other food items are still in the list
      initialFoodNames.forEach((name) => {
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });
  });
});

describe("Iteration 5 | Add New Food - AddFoodForm component", () => {
  describe("AddFoodForm component", () => {
    test("renders a form input with attribute 'name=\"name\"'", () => {
      const { container } = render(<AddFoodForm />);
      const nameInput = container.querySelector('input[name="name"]');

      expect(nameInput).not.toBeNull();
    });

    test("renders a form input with attribute 'name=\"image\"'", () => {
      const { container } = render(<AddFoodForm />);
      const imageInput = container.querySelector('input[name="image"]');

      expect(imageInput).not.toBeNull();
    });

    test("renders a form input with attribute 'name=\"calories\"'", () => {
      const { container } = render(<AddFoodForm />);
      const caloriesInput = container.querySelector('input[name="calories"]');

      expect(caloriesInput).not.toBeNull();
    });

    test("renders a form input with attribute 'name=\"servings\"'", () => {
      const { container } = render(<AddFoodForm />);
      const servingsInput = container.querySelector('input[name="servings"]');

      expect(servingsInput).not.toBeNull();
    });

    test("renders a form with a 'Create' submit button", () => {
      render(<AddFoodForm />);

      expect(screen.getByText("Create")).toBeInTheDocument();
    });

    test("adds new food item to the list on form submission", async () => {
      const testFood = {
        name: "Test Food",
        calories: 2500,
        image: "https://xyz.com/img123.jpg",
        servings: 4,
      };

      const { container } = render(<App />);
      const imageElements = container.getElementsByTagName("img");
      const nameInput = container.querySelector('input[name="name"]');
      const imageInput = container.querySelector('input[name="image"]');
      const caloriesInput = container.querySelector('input[name="calories"]');
      const servingsInput = container.querySelector('input[name="servings"]');

      expect(nameInput).not.toBeNull();
      expect(imageInput).not.toBeNull();
      expect(caloriesInput).not.toBeNull();
      expect(servingsInput).not.toBeNull();

      fireEvent.change(nameInput, { target: { value: testFood.name } });
      fireEvent.change(imageInput, { target: { value: testFood.image } });
      fireEvent.change(caloriesInput, { target: { value: testFood.calories } });
      fireEvent.change(servingsInput, { target: { value: testFood.servings } });
      fireEvent.click(screen.getByRole("button", { name: /create/i }));

      const newFoodImg = Array.from(imageElements).find(
        (img) => img.getAttribute("src") === testFood.image
      );
      expect(newFoodImg).toBeInTheDocument();
      expect(newFoodImg).toHaveAttribute("src", testFood.image);
      expect(screen.getByText(testFood.name)).toBeInTheDocument();

      const caloriesRegex = new RegExp(
        `Calories:?(?:\\s*){0,}${testFood.calories}`,
        "i"
      );
      const servingsRegex = new RegExp(
        `Servings:?(?:\\s*){0,}${testFood.servings}`,
        "i"
      );
      const totalCaloriesRegex = new RegExp(
        `Total Calories:?(?:\\s*){0,}${testFood.calories * testFood.servings}`
      );
      expect(screen.getByText(caloriesRegex)).toBeInTheDocument();
      expect(screen.getByText(servingsRegex)).toBeInTheDocument();
      expect(screen.getByText(totalCaloriesRegex)).toBeInTheDocument();
    });
  });
});
