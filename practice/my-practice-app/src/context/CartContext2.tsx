// Challenge 3 — Cart Context
// Build a Context that manages a shopping cart and exposes a computed total.
// Requirements:
// type CartItem = { id: string; price: number; quantity: number }.
// CartProvider holds items: CartItem[] state, starting as an empty array (no localStorage this time — just useState<CartItem[]>([])).
// addItem(item: CartItem) — adds a new item to the array. If an item with the same id already exists, don't add a duplicate — instead increase that existing item's quantity by the new item's quantity.
// removeItem(id: string) — removes the item with that id.
// Compute a total: number — the sum of price * quantity across all items — using .reduce(). Wrap this calculation in useMemo, so it only recalculates when items changes, rather than on every render.
// Type the context properly (same pattern as last time — a type for the shape, | null in createContext).
// Export a custom hook useCart().

import { useMemo, useState } from "react";

type CartItem = {
  id: string;
  price: number;
  quantity: number;
};

const [items, setItems] = useState<CartItem[]>([]);

const addItem = (item: CartItem) => {
  if (items.some((i) => i.id === item.id)) {
    setItems(
      items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i,
      ),
    );
  } else {
    setItems([...items, item]);
  }
};

const removeItem = (id: string) => {
    setItems(items.filter((i) => i.id !== id));
};


const total = useMemo(() => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}, [items]);
