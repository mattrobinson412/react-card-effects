import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Deck from "./Deck";

it("renders without crashing", function () {
    render(<Deck />);
    let deck = document.querySelector(".Deck");
    expect(deck).toBeInTheDocument();
});

it("matches snapshot", function() {
    const { asFragment } = render(<Deck />);
    expect(asFragment()).toMatchSnapshot();
});