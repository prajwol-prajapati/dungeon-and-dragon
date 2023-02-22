import { afterEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { HomePage } from "../index";
import { SpellList } from "../../../../__mock__/spellData";
import { useListOfSpells } from "../../../hooks/useSpells";

vi.mock("../../../hooks/useSpells");

describe("<HomePage />", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("Should render the HomePage without any problem", () => {
    (useListOfSpells as any).mockReturnValue({
      isLoading: false,
      data: { results: SpellList },
    });

    render(
      <Router>
        <HomePage />
      </Router>
    );

    expect(useListOfSpells).toHaveBeenCalledTimes(1);
  });
});
