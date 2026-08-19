import { createContext, useContext, useState, useEffect } from "react";
import { getLocalStorage } from "../utils/localStorage";

const FavoritesContext = createContext({
  const [favorites, setFavorites] = useState<string[]>(() => getLocalStorage(KEY, []));
const KEY = "favorites";

const addFavorite = (item: string) => {
    if (favorites.includes(item)) {
        return;
    }
    setFavorites([...favorites, item]);
};

const removeFavorite = (item: string) => {
    setFavorites(favorites.filter((favorite) => favorite !== item));
};

useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(favorites));
}, [favorites]);

return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
        {children}
    </FavoritesContext.Provider>
);