// Category 3 Round 3: Arrow Functions with Typed Parameters

// Q1. calculateTax — takes amount: number and taxRate: number, returns number.

// First attempt:
const calculateTax = (amount: number, taxRate: number) : number => {
const total = amount * taxRate
}

// Correct:
const calculateTax = (amount: number, taxRate: number): number => {
  const taxTotal = (taxRate / 100) * amount;
  return taxTotal;
};


// Q2. isStrongPassword — takes password: string, returns boolean, checking password.length >= 8.

// First attempt:
const isStrongPassword = (password: string): boolean => {
return password.length >= 8
}

// Correct (same as first attempt — no changes needed):
const isStrongPassword = (password: string): boolean => {
  return password.length >= 8;
};


// Q3. logShipment — takes shipment: { id: string; weight: number }, returns void, logs it.

// First attempt:
const logShipment = (shipment: { id: string; weight: number}): void => {
console.log(`shipment ${id} with weight ${weight} has been logged`)
}

// Correct:
const logShipment = (shipment: { id: string; weight: number }): void => {
  console.log(`shipment ${shipment.id} with weight ${shipment.weight} has been logged`);
};


// Q4. archiveTag — takes tagId: string, returns void, logs that it was archived.

// First attempt:
const archiveTag = (tagId: string): void => {
console.log(`${tagId} has been archived`)
}

// Correct (same as first attempt — no changes needed):
const archiveTag = (tagId: string): void => {
  console.log(`${tagId} has been archived`);
};


// Q5. getOutOfStock — takes products: Product[], returns Product[], filtered for !product.inStock.

// First attempt:
const getOutOfStock = (products: Product[]): Product[] => {
products.filter((product) => !product.inStock);
return getOutOfStock
}

// Correct:
const getOutOfStock = (products: Product[]): Product[] => {
  return products.filter((product) => !product.inStock);
};

// Category 4 Round 3: .filter()/.map() Inside a Setter Call
// Assume: setBooks (a Book[] state setter), Book = { id: string; title: string; isRead: boolean }

// Q1. Remove the book with a given id.

// First attempt:
const removeBook = (Book: { id: string; title: string; isRead: boolean }) => {
setBooks(book.filter((b) => b.id === id);
}

// Second attempt:
const removeBook = (Book: { id: string}) => {
setBooks(books.filter((b) => b.id !== id));
}

// Correct:
const removeBook = (id: string) => {
  setBooks(books.filter((b) => b.id !== id));
};


// Q2. Add a new book parameter onto the existing books array.

// First attempt:
const addBook = (book: Book) => {
setBooks([...books, newBook])
}

// Correct:
const addBook = (book: Book) => {
  setBooks([...books, book]);
};


// Q3. Update the title of the book matching a given id to a new newTitle parameter.

// First attempt:
const updateBookTitle = (id: string, newTitle: string) => {
setBooks(books.map((b) => b.id === id ? {...book, newTitle: string } : b))
};

// Correct:
const updateBookTitle = (id: string, newTitle: string) => {
  setBooks(books.map((b) => b.id === id ? { ...b, title: newTitle } : b));
};


// Q4. Mark the book matching a given id as read: { ...book, isRead: true }.

// First attempt:
const markBookRead = (id: string, isRead: boolean) =>
setBooks(books.map((b) => b.id === id ? { ...b, isRead: true } : b))
}

// Correct:
const markBookRead = (id: string) => {
  setBooks(books.map((b) => b.id === id ? { ...b, isRead: true } : b));
};


// Q5. Toggle the isRead status of the book matching a given id — flip whatever it currently is.

// First attempt:
const markBookStatus = (id: string, isRead: boolean) => {
setBooks(books.map((b) => b.id === id ?
}

// Correct:
const markBookStatus = (id: string) => {
  setBooks(books.map((b) => b.id === id ? { ...b, isRead: !b.isRead } : b));
};