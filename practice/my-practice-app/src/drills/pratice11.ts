// Category 4: .filter()/.map() Inside a Setter Call
// Assume: setInvoices (an Invoice[] state setter), Invoice = { id: string; total: number; paid: boolean }

// Q1. Remove the invoice with a given id.
// Q2. Update the total of the invoice matching a given id to a new newTotal.
// Q3. Toggle the paid status of the invoice matching a given id.

// First attempt (all three written with return instead of the setter):
const removeInvoice = (id: string) => {
return invoices.filter((i) => i.id !== id);
};

const updateTotal = (id: string, newTotal: number) => {
return invoices.map((i) => i.id === id ? {...i, total: newTotal}: i);
};

const paidStatus = (id: string) => {
return invoices.map((i) => i.id === id ? {...i, paid: !paid}: i);
};

// Second attempt (Q3 still had property-name mix-up):
const paidStatus = (id: string) => {
setInvoices(invoices.map((i) => i.id === id ? {...i, i.status: !i.status}: i));
};

// Correct:
const removeInvoice = (id: string) => {
  setInvoices(invoices.filter((i) => i.id !== id));
};

const updateTotal = (id: string, newTotal: number) => {
  setInvoices(invoices.map((i) => i.id === id ? { ...i, total: newTotal } : i));
};

const togglePaid = (id: string) => {
  setInvoices(invoices.map((i) => i.id === id ? { ...i, paid: !i.paid } : i));
};


// ---- Extra drills: left side (property name, no prefix) vs. right side
// (reading a value off the object, needs the prefix) ----

// Drill 1: toggle favorited on a Book
const toggleFavorited = (id: string) => {
  setBooks(books.map((b) => b.id === id ? { ...b, favorited: !b.favorited } : b));
};

// Drill 2: toggle enrolled on a Student
// First attempt: used setStudent (wrong, should be setStudents)
const toggleEnrolled = (id: string) => {
  setStudents(students.map((s) => s.id === id ? { ...s, enrolled: !s.enrolled } : s));
};

// Drill 3: set shipped to fixed true on an Order
// First attempt: used setOrder (wrong, should be setOrders)
const orderStatus = (id: string) => {
  setOrders(orders.map((o) => o.id === id ? { ...o, shipped: true } : o));
};


// ============================================================


// Category 5: useMemo

// Q1. Given invoices: Invoice[], compute outstandingTotal — sum of total across all
// invoices NOT paid (filter + reduce combo).

// First attempt (stopped mid-way, unsure what to filter by):
const outstandingTotal = useMemo(() => {
const unpaidInvoices = invoices.filter((i) => i.notPaid === notPaid

// Correct:
const outstandingTotal = useMemo(() => {
  const unpaidInvoices = invoices.filter((i) => !i.paid);
  return unpaidInvoices.reduce((acc, i) => acc + i.total, 0);
}, [invoices]);


// Q2. Given products: Product[], compute outOfStockCount — number where inStock is false.

// First attempt (used reduce instead of a simple length count):
const outOfStockCount = useMemo(() => {
const outOfStock = products.filter((p) => !p.inStock)
return outOfStock.reduce((acc, p) => acc + p, 0)
}, [products]);

// Correct:
const outOfStockCount = useMemo(() => {
  return products.filter((p) => !p.inStock).length;
}, [products]);


// Q3. Given tasks: Task[] (with estimatedHours: number), compute hoursRange — highest
// minus lowest.

// First attempt (missing .map() + spread):
const hoursRange = useMemo(() => {
const highestEstimatedHours = Math.max(tasks.estimatedHours)
const lowestEstimatedHours = Math.min(tasks.estimatedHours)
return highestEstimatedHours - lowestEstimatedHours
}, [tasks]);

// Second attempt (closing structure — semicolon instead of comma):
const hoursRange = useMemo(() => {
const highestHours = Math.max(...tasks.map((t) => t.estimatedHours))
const lowestHours = Math.min(...tasks.map((t) => t.estimatedHours))
return highestHours - lowestHours
}; [tasks]);

// Correct:
const hoursRange = useMemo(() => {
  const highestHours = Math.max(...tasks.map((t) => t.estimatedHours));
  const lowestHours = Math.min(...tasks.map((t) => t.estimatedHours));
  return highestHours - lowestHours;
}, [tasks]);


// Q4. Given reviews: Review[] (with rating: number), compute averageRating — written
// as two named steps.

// First attempt (calculated a RANGE instead of an average — wrong task entirely):
const averageRating = useMemo(() => {
const highestRating = Math.max(...reviews.map((r) => r.rating));
const lowestRating = Math.min(...reviews.map((r) => r.rating));
return highestRating - lowestRating;
}, [reviews]);

// Second attempt (correct approach, mismatched variable name in return):
const averageRating = useMemo(() => {
const totalValue = reviews.reduce((acc, r) => acc + r.rating, 0);
const reviewsCount = reviews.length;
return totalValue / orderCount;
}, [reviews]);

// Correct:
const averageRating = useMemo(() => {
  const totalValue = reviews.reduce((acc, r) => acc + r.rating, 0);
  const reviewsCount = reviews.length;
  return totalValue / reviewsCount;
}, [reviews]);


// Q5. Given orders: Order[] (with itemCount: number), compute largestOrderItemCount —
// the highest itemCount.

// First attempt (correct — no changes needed):
const largestOrderItemCount = useMemo(() => {
  return Math.max(...orders.map((o) => o.itemCount));
}, [orders]);

// Correct:
const largestOrderItemCount = useMemo(() => {
  return Math.max(...orders.map((o) => o.itemCount));
}, [orders]);


// Q6. Given users: User[], compute totalUserCount — just the count.

// First attempt (logic correct, typo in name):
const totalUerCount = useMemo(() => {
return users.length;
}, [users]);

// Correct:
const totalUserCount = useMemo(() => {
  return users.length;
}, [users]);


// Q7. Given payments: Payment[], compute refundedPercentage — what percent have
// refunded === true.

// First attempt (correct — no changes needed):
const refundedPercentage = useMemo(() => {
  const refundedPayments = payments.filter((p) => p.refunded).length;
  const paymentTotal = payments.length;
  return refundedPayments / paymentTotal * 100;
}, [payments]);

// Correct:
const refundedPercentage = useMemo(() => {
  const refundedPayments = payments.filter((p) => p.refunded).length;
  const paymentTotal = payments.length;
  return refundedPayments / paymentTotal * 100;
}, [payments]);