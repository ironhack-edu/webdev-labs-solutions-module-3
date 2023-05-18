import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./../App";
import { MemoryRouter } from "react-router-dom";

describe("App component", () => {
  test("renders HomePage component for the `/` route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const homePageText = screen.getByText(
      /WikiCountries: Your Guide to the World/i
    );
    expect(homePageText).toBeInTheDocument();
  });

  test("renders CountryDetailsPage component for the `/:countryId` route", () => {
    render(
      <MemoryRouter initialEntries={["/ESP"]}>
        <App />
      </MemoryRouter>
    );

    const countryDetailsPageText = screen.getByText(/Country Details/i);
    expect(countryDetailsPageText).toBeInTheDocument();
  });
});
