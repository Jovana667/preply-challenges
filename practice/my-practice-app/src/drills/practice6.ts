// Category 5: useMemo

// Q1. Given items: CartItem[], compute itemCount — the total quantity across all items
// (sum of all quantity values) — using useMemo, dependent on items.

// First attempt:
const itemCount = useMemo () => item.price + item.quantity [item]

// Second attempt:
const total = useMemo(() => {
return items.reduce((acc, item) => acc + item.price * item.quantity, 1);
}, [items]);

// Correct:
const itemCount = useMemo(() => {
  return items.reduce((acc, item) => acc + item.quantity, 0);
}, [items]);


// Q2. Given tickets: Ticket[], compute unresolvedCount — the number of tickets where
// resolved is false — using useMemo, dependent on tickets.

// First attempt:
const unresolvedCount = useMemo((id: string) => {
return tickets.filter((t) => t.id
}, [items]);

// Second attempt:
const unresolvedCount = useMemo(() => {
return tickets.filter((t) => t.resolved !== true);
}, [items]);

// Third attempt:
const unresolvedCount = useMemo(() => {
return tickets.filter((t) => !t.resolved);
length.tickets
}, [tickets]);

// Correct:
const unresolvedCount = useMemo(() => {
  return tickets.filter((t) => !t.resolved).length;
}, [tickets]);


// Q3. Given products: Product[], compute averagePrice — the average price across all
// products — using useMemo, dependent on products.

// First attempt:
const averagePrice = useMemo(() => {
return products.reduce((acc, item) => acc + item.quantity * item.price, 0));
[products]
}

// Second attempt:
const averagePrice = useMemo(() => {
return products.reduce((acc, p) => acc + p.price, 0).length;
[products]
)}

// Correct:
const averagePrice = useMemo(() => {
  return products.reduce((acc, p) => acc + p.price, 0) / products.length;
}, [products]);


// Q4. Given users: User[] (each has isActive: boolean), compute activePercentage —
// what percent of users are active, as a number (e.g. 50 for 50%) — using useMemo,
// dependent on users.

// First attempt:
const activePercentage = useMemo(() => {
return users.reduce((acc, u) => acc + u.isActive, 0) / u.length;
[users]
)}

// Second attempt:
const activePercentage = useMemo(() => {
const activeCount = activeUsers.length;
const totalCount = totalUsers.length;
return activeCount / totalCount * 100;
}, [users]);

// Third attempt:
const activePercentage = useMemo(() => {
const activeCount = users.filter((u) => u.isActive).length
const totalCount = totalUsers.length;
return activeCount / totalCount * 100;
}, [users]);

// Correct:
const activePercentage = useMemo(() => {
  const activeCount = users.filter((u) => u.isActive).length;
  const totalCount = users.length;
  return activeCount / totalCount * 100;
}, [users]);


// Q5. Given notes: Note[], compute longestNoteLength — the length of the longest
// text string among all notes — using useMemo, dependent on notes.

// First attempt:
const longestNoteLength = useMemo(() => {
const notes =
return ;
}, [notes]);

// Second attempt:
const longestNoteLength = useMemo(() => {
notes.map((n) => n.text.length) =>
return Math.max(...someArrayOfNumbers);
}, [notes]);

// Correct:
const longestNoteLength = useMemo(() => {
  return Math.max(...notes.map((n) => n.text.length));
}, [notes]);