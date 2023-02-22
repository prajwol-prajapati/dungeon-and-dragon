import { API } from "../utils";

export const getAllSpells = () => {
  return API.get(`/api/spells`);
};

export const getSpellDetails = (data: any) => {
  return API.get(`/api/spells/${data?.queryKey[0]}`);
};
