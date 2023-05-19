import foodsJSON from "./../foods.json";
import { useState } from "react";
import FoodBox from "./../components/FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function FoodList() {
  const [foods, setFoods] = useState(foodsJSON); // Array that we render/show as a list
  const [updatedFoods, setUpdatedFoods] = useState(foods);

  const addFood = (foodObj) => {
    const updatedFoods = [foodObj, ...foods];

    setFoods(updatedFoods);
    setUpdatedFoods(updatedFoods);
  };

  const deleteFood = (foodNameStr) => {
    const filteredFoods = updatedFoods.filter((oneFood) => {
      return oneFood.name !== foodNameStr; // exclude the food object we want to delete
    });

    setUpdatedFoods(filteredFoods);
  };

  const filterFoodList = (char) => {
    let filteredFoods;

    if (char === "") {
      filteredFoods = foods;
    } else {
      filteredFoods = updatedFoods.filter((eachFood) => {
        return eachFood.name.toLowerCase().includes(char.toLowerCase());
      });
    }
    setUpdatedFoods(filteredFoods);
  };

  return (
    <div className="App">
      <AddFoodForm addFoodHandler={addFood} />

      <Search filterFoodHandler={filterFoodList} />
      <div className="foods-list">
        {!updatedFoods.length && "Oops! There is no more content to show."}

        {updatedFoods.map((oneFood) => (
          <FoodBox food={oneFood} deleteFood={deleteFood} key={oneFood.id} />
        ))}
      </div>
    </div>
  );
}

export default FoodList;
