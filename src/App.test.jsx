import { describe, it } from "vitest";
import App from "./App";
import { render } from "../test-utils";
import { MemoryRouter as Router } from "react-router-dom";

describe("<App />", () => {
  it("Should render the App without any problem", () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});
