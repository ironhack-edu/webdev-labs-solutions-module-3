import { describe, test, expect, vi, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { routes } from "./data";
import axios from "axios";
import App from "../App";
import CountryDetailsPage from "../pages/CountryDetailsPage";

vi.mock("axios");

describe("CountryDetailsPage component", async () => {
  const countryMock = {
    name: {
      common: "United States",
      official: "United States of America",
    },
    capital: ["Washington D.C."],
    borders: ["CAN", "MEX"],
    _id: "644ef419344bc00002674421",
    alpha2Code: "US",
    alpha3Code: "USA",
    area: 9372610,
  };

  afterEach(() => {
    axios.get.mockReset();
  });

  test("renders a headline 'Country Details'", async () => {
    axios.get.mockResolvedValue({ data: countryMock });

    render(
      <MemoryRouter initialEntries={["/USA"]}>
        <CountryDetailsPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      const headlineText = screen.getByText(/Country Details/i);
      expect(headlineText).toBeInTheDocument();
    });
  });

  test("renders a country name", async () => {
    axios.get.mockResolvedValue({ data: countryMock });

    render(
      <MemoryRouter initialEntries={["/USA"]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getByText(/United States/i)).toBeInTheDocument()
    );
  });

  test("renders a name of the country's capital", async () => {
    axios.get.mockResolvedValue({ data: countryMock });

    render(
      <MemoryRouter initialEntries={["/USA"]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getByText(/Washington D.C./i)).toBeInTheDocument()
    );
  });

  test("renders country area info in the format 'AREA km'", async () => {
    axios.get.mockResolvedValue({ data: countryMock });

    render(
      <MemoryRouter initialEntries={["/USA"]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getByText(/9372610 km/i)).toBeInTheDocument()
    );
  });

  test("renders bordering countries as links", async () => {
    const randomIndex = Math.floor(Math.random() * routes.length);
    const randomCountry = routes[randomIndex];
    axios.get.mockResolvedValue({ data: randomCountry });

    render(
      <MemoryRouter initialEntries={[`/${randomCountry.route}`]}>
        <App />
      </MemoryRouter>
    );

    const border1Text = randomCountry.bordersRegex[0];
    const border2Text = randomCountry.bordersRegex[1];
    const border1Code = border1Text.split("|")[1];
    const border2Code = border2Text.split("|")[1];
    const border1Regex = new RegExp(border1Text, "i");
    const border2Regex = new RegExp(border2Text, "i");

    const border1Link = await waitFor(() =>
      screen.getByText(border1Regex).closest("a")
    );
    const border2Link = await waitFor(() =>
      screen.getByText(border2Regex).closest("a")
    );

    expect(border1Link).toBeInTheDocument();
    expect(border2Link).toBeInTheDocument();
    expect(border1Link.getAttribute("href")).toBe(`/${border1Code}`);
    expect(border2Link.getAttribute("href")).toBe(`/${border2Code}`);

    await waitFor(() =>
      expect(
        screen.queryByText(new RegExp(randomCountry.notBordersRegex[0], "i"))
      ).not.toBeInTheDocument()
    );

    await waitFor(() =>
      expect(
        screen.queryByText(new RegExp(randomCountry.notBordersRegex[1], "i"))
      ).not.toBeInTheDocument()
    );
  });
});
