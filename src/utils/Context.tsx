import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface ContextProps {
  favorites: string[];
  setFavorites: Dispatch<SetStateAction<string[]>>;
}

export const Context = createContext<Partial<ContextProps>>({});

export const ContextProvider = (props: any) => {
  const [favorites, setFavorites] = useState([] as string[]);

  useEffect(() => {
    const allFavorites = localStorage.getItem("favorites");
    if (!!allFavorites) {
      setFavorites(allFavorites.split(","));
    }
  }, []);

  return (
    <Context.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
