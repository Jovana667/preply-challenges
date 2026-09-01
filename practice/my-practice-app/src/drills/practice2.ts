// # Drills Log — TypeScript / React Practice

// ## Category 1: Type Aliases

// **Q1.** A type alias `User` with `id: string`, `name: string`, `email: string`.

// First attempt:
type User = {
  id: string;
  name: string;
  email: string;
};

// Correct:
type User = {
  id: string;
  name: string;
  email: string;
};


// **Q2.** A type alias `Product` with `id: string`, `name: string`, `price: number`, `inStock: boolean`.
// First attempt:
type Product = {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
};

// Correct:
type Product = {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
};


// **Q3.** A type alias `Comment` with `id: string`, `authorId: string`, `text: string`, `createdAt: string`.

// First attempt:
type Comment = {
  id: string;
  authorId: string;
  text: string;
  createdAt: string;
};

// Correct:
type Comment = {
  id: string;
  authorId: string;
  text: string;
  createdAt: string;
};

// **Q4.** A type alias `Playlist` with `id: string`, `title: string`, `songIds: string[]`.
// First attempt:
type Playlist = {
  id: string;
  title: string;
  songIds: string[];
};

// Correct:
type Playlist = {
  id: string;
  title: string;
  songIds: string[];
};

// **Q5.** A type alias `AuthContextType` with `user: User | null`, `login: (email: string) => void`, `logout: () => void`.

// First attempt:
type AuthContextType = {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
};

// Correct:
type AuthContextType = {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
};

// ## Category 2: useState Declarations with Generics

// **Q1.** `useState` for `count`, a `number`, starting at `0`.
// First attempt:
const [count, setCount] = useState(0);

// Correct:
const [count, setCount] = useState(0);

// **Q2.** `useState` for `isOpen`, a `boolean`, starting `false`.
// First attempt:
const [isOpen, setIsOpen] = useState(false);

// Correct:
const [isOpen, setIsOpen] = useState(false);

// **Q3.** `useState` for `tags`, an array of `string`, starting empty.
// First attempt:
const [tags, setTags] = useState<string>([]);

// Correct:
const [tags, setTags] = useState<string[]>([]);

// **Q4.** `useState` for `selectedUser`, typed as `User | null`, starting as `null`.
// First attempt:
const [selectedUser, setSelectedUser] = useState<User | null>(null);

// Correct:
const [selectedUser, setSelectedUser] = useState<User | null>(null);

// **Q5.** `useState` for `favorites`, an array of `Product`, using a lazy initializer that calls `loadFavorites()`.
// First attempt:
const [favorites, setFavorites] = loadFavorites() => useState<Product>([]);

// Correct:
const [favorites, setFavorites] = useState<Product[]>(() => loadFavorites());

// ---

// ## Category 2b: Extra Lazy Initializer Reps

// **Q1.** `useState` for `theme`, typed `"light" | "dark"`, lazy initializer calling `getStoredTheme()`.
// First attempt:
const [theme, setTheme] = useState<light | dark>(() => getStoredTheme());

// Correct:
const [theme, setTheme] = useState<"light" | "dark">(() => getStoredTheme());

// **Q2.** `useState` for `cart`, typed `Product[]`, lazy initializer calling `loadCart()`.
// First attempt:
const [cart, setCart] = useState<Product[]>(() => loadCart());

// Correct:
const [cart, setCart] = useState<Product[]>(() => loadCart());

// **Q3.** `useState` for `currentUser`, typed `User | null`, lazy initializer calling `getSession()`.
// First attempt:
const [currentUser, setCurrentUser] = useState<User | null>(() => getSession());

// Correct:
const [currentUser, setCurrentUser] = useState<User | null>(() => getSession());

// **Q4.** `useState` for `settings`, typed `{ volume: number; muted: boolean }`, lazy initializer calling `loadSettings()`.
// First attempt:
const [settings, setSettings] = useState<{volume: number; muted: boolean}(() => loadSettings());

// Correct:
const [settings, setSettings] = useState<{ volume: number; muted: boolean }>(() => loadSettings());

// **Q5.** `useState` for `history`, typed `string[]`, lazy initializer calling `read('gs_history', [])`.
// First attempt:
const [history, setHistory] = useState<string[]>(() => read('gs_history', []));

// Correct:
const [history, setHistory] = useState<string[]>(() => read('gs_history', []));

// ---

// ## Category 3: Arrow Functions with Typed Parameters

// **Q1.** `formatPrice` — takes `amount: number`, returns `string`.
// First attempt:
const formatPrice(amount: number) =>
return string

// Correct:
const formatPrice = (amount: number): string => {
  return `$${amount}`;
};

// **Q2.** `isAdult` — takes `age: number`, returns `boolean`.
// First attempt:
const isAdult = (age: number): boolean => {
return
}

// Correct:
const isAdult = (age: number): boolean => {
  return age >= 18;
};

// **Q3.** `greetUser` — takes `user: User`, returns `void`, logs a greeting using `user.name`.
// First attempt:
const greetUser = (user: User) => {
return void
}

// Correct:
const greetUser = (user: User): void => {
  console.log(`Hello, ${user.name}`);
};

// **Q4.** `updateQuantity` — takes `id: string` and `quantity: number`, returns `void`.
// First attempt:
const updateQuantity = (id: string, quantity: number): void => {
console.log(`${product.name} quantity updated}`);
};

// Correct:
const updateQuantity = (id: string, quantity: number): void => {
  console.log(`Updated item ${id} to quantity ${quantity}`);
};

// **Q5.** `filterInStock` — takes `products: Product[]`, returns `Product[]`, implemented with `.filter()` on `inStock`.
// First attempt:
const filterInStock = (products: Product[]): Product[] => {
productsinStock.filter(

// Correct:
const filterInStock = (products: Product[]): Product[] => {
  return products.filter((product) => product.inStock);
};

// ---

// ## Category 4: .filter()/.map() Used Inside a Setter Call

// **Q1.** Given `setUsers` (a `User[]` state setter), write a call that removes the user with a given `id` parameter.
// First attempt:
const removeUser = (user: User[]): setUsers {
users.filter(u) => u.id !== user.id
return (users)
}

// Correct:
const removeUser = (id: string) => {
  setUsers(users.filter((u) => u.id !== id));
};

// **Q2.** Given `setProducts` (a `Product[]` state setter), write a call that adds a new `product` parameter onto the existing array.
// First attempt:
const addProduct = (id: string) => {
setProducts(products.map((p) =>
// (incomplete — unsure how to write .map())

// Correct:
const addProduct = (product: Product) => {
  setProducts([...products, product]);
};

// **Q3.** Given `setTags` (a `string[]` state setter), write a call that removes a specific `tag` parameter from the array (exact match).
// First attempt:
const removeTag = (id: string) => {
setTags.filter((t) => id.tag !== id)
};

// Correct:
const removeTag = (tag: string) => {
  setTags(tags.filter((t) => t !== tag));
};

// **Q4.** Given `setProducts` (a `Product[]` state setter), write a call that updates the `price` of the product matching a given `id` to a new `newPrice` parameter — leaving all other products unchanged.
// First attempt:
const updatePrice = (id: string, price: string) => {
products.map((p) => p.id ==== id ? {...p, price: newPrice}: p)
return setProducts
};

// Correct:
const updatePrice = (id: string, newPrice: number) => {
  setProducts(products.map((p) => p.id === id ? { ...p, price: newPrice } : p));
};

// **Q5.** Given `setUsers` (a `User[]` state setter), write a call that marks the user matching a given `id` as `{ ...user, isActive: true }` — leaving all other users unchanged.
// First attempt:
const updateStatus = (id: string, isActive: boolean) =>
users.map((u) => u.id === id ? {...u, isActive: true}: u)
return setUsers
}

// Correct:
const updateStatus = (id: string) => {
  setUsers(users.map((u) => u.id === id ? { ...u, isActive: true } : u));
};