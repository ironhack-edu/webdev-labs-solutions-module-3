import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import User from "../components/User";

describe("User component", () => {
  const tweet = {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message: "the human likes to say. that i live here rent free.",
  };

  test("renders name and handle correctly", () => {
    render(
      <User userData={{ name: "Thoughts of Dog®", handle: "dog_feelings" }} />
    );
    const name = screen.getByText("Thoughts of Dog®");
    const handle = screen.getByText("@dog_feelings");

    expect(name).toBeInTheDocument();
    expect(handle).toBeInTheDocument();
  });
});
