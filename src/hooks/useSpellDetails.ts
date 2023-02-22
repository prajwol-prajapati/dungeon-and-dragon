import { useQuery } from "react-query";
import { getSpellDetails } from "../services/spell";

export const useSpellDetails = (params: any) => {
  return useQuery<any>([params?.id], getSpellDetails, {
    enabled: !!params?.id,
  });;
};
