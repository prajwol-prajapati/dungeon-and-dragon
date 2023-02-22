import { MemoryRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { Card } from "../index";

describe("<Card />", () => {
  it("Should render the Card component without any problem", () => {
    const { getByText, getByRole } = render(
      <Router>
        <Card name="Acid Arrow" index="acid-arrow" />
      </Router>
    );
    expect(getByText(/Acid Arrow/i));
  });
});
