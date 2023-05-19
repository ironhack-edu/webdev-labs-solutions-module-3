import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./../App";
import contacts from "./../contacts.json";

describe("Iteration 1 | Display 5 Contacts", () => {
  describe("App component", () => {
    test("renders a table", () => {
      render(<App />);
      const table = screen.getByRole("table");
      expect(table).toBeInTheDocument();
    });

    test("renders a table showing first 5 contacts", () => {
      const { container } = render(<App />);
      const tableRows = container.querySelectorAll("tbody tr");
      expect(tableRows).toHaveLength(5); // 5 tr elements
    });
  });
});

describe("Iteration 2 | Conditionally Display Awards Info", () => {
  describe("App component", () => {
    test("renders Emmy and Oscar award table cells (<td></td>)", () => {
      const { container } = render(<App />);
      const tableRows = container.querySelectorAll("tbody tr");

      Array.from(tableRows).forEach((row) => {
        const oscarCell = row.querySelector("td:nth-child(4)");
        const emmyCell = row.querySelector("td:nth-child(5)");

        expect(oscarCell.tagName).toBe("TD");
        expect(emmyCell.tagName).toBe("TD");
      });
    });

    test("conditionally renders Oscar award emoji for each contact", () => {
      const { container } = render(<App />);
      const tableRows = container.querySelectorAll("tbody tr");

      Array.from(tableRows).forEach((row, index) => {
        const hasOscar = contacts[index].wonOscar;
        const oscarCell = row.querySelector("td:nth-child(4)");

        if (hasOscar) {
          expect(oscarCell).toHaveTextContent("🏆");
        } else {
          expect(oscarCell).toBeEmptyDOMElement();
        }
      });
    });

    test("conditionally renders Emmy award emoji for each contact", () => {
      const { container } = render(<App />);
      const tableRows = container.querySelectorAll("tbody tr");

      Array.from(tableRows).forEach((row, index) => {
        const hasEmmy = contacts[index].wonEmmy;
        const emmyCell = row.querySelector("td:nth-child(5)");

        if (hasEmmy) {
          expect(emmyCell).toHaveTextContent("🌟");
        } else {
          expect(emmyCell).toBeEmptyDOMElement();
        }
      });
    });
  });
});

describe("Iteration 3 | Add New Random Contacts", () => {
  describe("App component", () => {
    test("renders a 'Add Random Contact' button", () => {
      render(<App />);
      const addButton = screen.getByRole("button", {
        name: /Add Random Contact/i,
      });
      expect(addButton).toBeInTheDocument();
    });

    test("adds a random contact to the list when the 'Add Random Contact' button is clicked", () => {
      render(<App />);
      const addButton = screen.getByRole("button", {
        name: /Add Random Contact/i,
      });
      fireEvent.click(addButton);
      const contactRows = screen.getAllByRole("row");
      expect(contactRows).toHaveLength(7); // 6 contacts + header row
    });

    test("adds non-repeated random contacts when the 'Add Random Contact' button is clicked multiple times", () => {
      const { container } = render(<App />);
      const displayedContacts = contacts.slice(0, 5);
      const addButton = screen.getByRole("button", {
        name: /Add Random Contact/i,
      });

      const contactsLength = contacts.length;

      for (let i = 0; i < contactsLength - displayedContacts.length; i++) {
        fireEvent.click(addButton);
      }

      const tableRows = container.querySelectorAll("tbody tr");
      const displayedContactNames = Array.from(tableRows).map(
        (row) => row.querySelector("td:nth-child(2)").textContent
      );

      const hasDuplicates = (array) => new Set(array).size !== array.length;

      expect(tableRows).toHaveLength(contactsLength); // contacts
      expect(hasDuplicates(displayedContactNames)).toBe(false);
    });
  });
});

describe("Iteration 4 | Sort Contacts by Name and Popularity", () => {
  describe("App component", () => {
    test("renders a 'Sort by Name' button", () => {
      render(<App />);
      const addButton = screen.getByRole("button", {
        name: /Sort by Name/i,
      });
      expect(addButton).toBeInTheDocument();
    });

    test("renders a 'Sort by Popularity' button", () => {
      render(<App />);
      const addButton = screen.getByRole("button", {
        name: /Sort by Popularity/i,
      });
      expect(addButton).toBeInTheDocument();
    });

    test("sorts contacts by name when the 'Sort by Name' button is clicked", () => {
      render(<App />);
      const sortByNameButton = screen.getByRole("button", {
        name: /Sort by Name/i,
      });
      fireEvent.click(sortByNameButton);

      const sortedContactsByName = contacts
        .slice(0, 5)
        .sort((a, b) => a.name.localeCompare(b.name));

      const nameCells = screen.getAllByText(/.*/, {
        selector: "tbody tr td:nth-child(2)",
      });

      sortedContactsByName.forEach((contact, index) => {
        expect(nameCells[index]).toHaveTextContent(contact.name);
      });
    });

    test("sorts contacts by popularity when the 'Sort by Popularity' button is clicked", () => {
      render(<App />);
      const sortByPopularityButton = screen.getByRole("button", {
        name: /Sort by Popularity/i,
      });
      fireEvent.click(sortByPopularityButton);

      const sortedContactsByPopularity = contacts
        .slice(0, 5)
        .sort((a, b) => b.popularity - a.popularity);

      const nameCells = screen.getAllByText(/.*/, {
        selector: "tbody tr td:nth-child(2)",
      });

      sortedContactsByPopularity.forEach((contact, index) => {
        expect(nameCells[index]).toHaveTextContent(contact.name);
      });
    });
  });
});

describe("Iteration 5 | Remove Contacts", () => {
  describe("App component", () => {
    test("removes a specific contact from the list when the 'Delete' button is clicked", () => {
      const { container } = render(<App />);
      const initialTableRows = container.querySelectorAll("tbody tr");
      const randomRowIndex = Math.floor(
        Math.random() * initialTableRows.length
      );
      const contactNameToDelete =
        initialTableRows[randomRowIndex].querySelector(
          "td:nth-child(2)"
        ).textContent;

      const deleteButtons = screen.getAllByRole("button", { name: /Delete/i });
      fireEvent.click(deleteButtons[randomRowIndex]);

      const updatedTableRows = container.querySelectorAll("tbody tr");
      const updatedContactNames = Array.from(updatedTableRows).map(
        (row) => row.querySelector("td:nth-child(2)").textContent
      );

      expect(updatedTableRows).toHaveLength(initialTableRows.length - 1);
      expect(updatedContactNames).not.toContain(contactNameToDelete);
    });
  });
});
