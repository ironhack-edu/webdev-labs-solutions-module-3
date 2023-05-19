import { describe, test, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
  test("renders the text 'WikiCountries' inside a nav element", async () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const navbarText = await waitFor(() => screen.getByText("WikiCountries"));
    const navElement = await waitFor(() => screen.getByRole("navigation"));

    expect(navbarText).toBeInTheDocument();
    expect(navElement).toContainElement(navbarText);
  });
});
