import { afterEach, describe, expect, vi } from "vitest";
import { QueryFunctionContext } from "react-query";
import { getAllSpells, getSpellDetails } from "../spell";
import { SpellList, spellAcidArrow } from "../../../__mock__/spellData";

vi.mock("../spell");

describe("Services", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const spellsAcidArrowContext: QueryFunctionContext = {
    queryKey: ["acid-arrow"],
    meta: undefined,
  };

  test("should test function getAllSpells to get list of spells from dnd5e API", async () => {
    (getAllSpells as any).mockReturnValue({
      count: 1,
      results: SpellList,
    });

    const data = (await getAllSpells()) as any;
    expect(JSON.stringify(data?.results[0]).length).toEqual(
      JSON.stringify(SpellList[0]).length
    );
  });

  test("should test function getSpellDetails to get the detail of give spell from dnd5e API", async () => {
    (getSpellDetails as any).mockReturnValue(spellAcidArrow);

    const data = (await getSpellDetails(spellsAcidArrowContext)) as any;
    expect(JSON.stringify(data).length).toEqual(
      JSON.stringify(spellAcidArrow).length
    );
  });
});
