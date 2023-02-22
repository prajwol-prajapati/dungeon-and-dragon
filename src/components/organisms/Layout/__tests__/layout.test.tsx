import { MemoryRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { Layout } from "../index";

describe("<Layout />", () => {
  it("Should render the Layout component without any problem", () => {
    const { getByText } = render(
      <Router>
        <Layout />
      </Router>
    );
  });
});
