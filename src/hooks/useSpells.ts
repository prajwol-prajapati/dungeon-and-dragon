import { useQuery } from "react-query";
import { getAllSpells } from "../services/spell";

export const useListOfSpells = () => {
  return useQuery<any>("get-all-spells", getAllSpells);
};
