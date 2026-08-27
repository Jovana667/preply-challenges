// tasks:
// Type aliases (5 reps)
// useState declarations with generics (5 reps)
// Arrow functions with typed parameters (5 reps)
// .filter()/.map() used correctly inside a setter call (5 reps)
// useMemo shape (5 reps)
// createContext + typing (5 reps)
------------------------------------------------------
// 1. useState for count, a number, starting at 0.
// 2. useState for isOpen, a boolean, starting false.
// 3. useState for tags, an array of string, starting empty.
// 4. useState for selectedUser, typed as User | null (reuse the User type from before), 
// starting as null.
// 5. useState for favorites, an array of Product (reuse from before), starting empty — 
// but using a lazy initializer that calls a function loadFavorites() instead of a plain empty array.

import { useState } from "react";

// first attempt:
// 1 - correct
const [count, setCount] = useState(0);

// 2 - correct
const [isOpen, setIsOpen] = useState(false);

// 3  - INCORRECT
const [tags, setTags] = useState<string>([]);

// 4 - correct
const [selectedUser, setSelectedUser] = useState<User | null>(null);

// 5 - INCORRECT
const [favorites, setFavorites] = loadFavorites() => useState<Product>([]);

// 3 and 5 - corrected
const [tags, setTags] = useState<string[]>([]);
const [favorites, setFavorites] = useState<Product[]>(() => loadFavorites());




//------------------------------------------------------
// 1. useState for theme, typed "light" | "dark", using a lazy initializer that calls getStoredTheme().
// 2. useState for cart, typed Product[], using a lazy initializer that calls loadCart().
// 3. useState for currentUser, typed User | null, using a lazy initializer that calls getSession().
// 4. useState for settings, typed { volume: number; muted: boolean }, using a lazy initializer that calls loadSettings().
// 5. useState for history, typed string[], using a lazy initializer that calls read('gs_history', []) (two arguments passed into the helper — same as GSS's actual read function).

const [theme, setTheme] = useState<"light" | "dark>(() => getStoredTheme()); 

// the initial state light or dark will be determined by whatever the current state of
//  getstoredtheme is as it is called by the lazy initialiser

const [cart, setCart] = useState<Product[]>(() => loadCart());

// state is written as an array in the shape of Product and the initial value or contents 
// of the cart is loaded by calling the loadCart function by the lazy initialiser

const [currentUser, setCurrentUser] = useState<User | null>(() => getSession());

// the initial state of the current user will either be in the shape of user or null and 
// the initial state of it will be determined by what is retrieveed when getsession is 
// called via the lazy initilaiser

const [settings, setSettings] = useState<{volume: number; muted: boolean}>(() => loadSettings());

// the state of settings is wrttien as an object consisting of a volume typed as a number 
// and a boolean value for muted and the initial value of the state for settinfs is
//  determined by what is currently there when loadsettings is called

const [history, setHistory] = useState<string[]>(() => read('gs_history', []));
// the state of history is written as an array of strings, using the lazy initialiser we
//  call read against something labelled gs_history else if thats empty just return an empty 
// array