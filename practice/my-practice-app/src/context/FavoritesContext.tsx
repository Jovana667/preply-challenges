import { createContext, useContext, useState, useEffect } from "react";
import { getLocalStorage } from "../utils/localStorage";

const KEY = "favorites";
const FavoritesContext = createContext(null);

export function FavoritesProvider({children}) {
 const [favorites, setFavorites] = useState<string[]>(() => getLocalStorage(KEY, []));

useEffect(() => localStorage.setItem(KEY, JSON.stringify(favorites)), [favorites]);

const addFavorite = (item: string) => {
    if (favorites.includes(item)) {
        return;
    }
    setFavorites([...favorites, item]);
};

const removeFavorite = (item: string) => {
    setFavorites(favorites.filter((favorite) => favorite !== item));
};

return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
        {children}
    </FavoritesContext.Provider>
);
}

export const useFavorites = () => useContext(FavoritesContext);

