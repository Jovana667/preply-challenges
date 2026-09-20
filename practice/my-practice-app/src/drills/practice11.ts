// Category 4: .filter()/.map() Inside a Setter Call
// Assume: setSubscriptions (a Subscription[] state setter), Subscription = { id: string; plan: string; active: boolean }

// Q1. Remove the subscription with a given id.
// Q2. Update the plan of the subscription matching a given id to a new newPlan.
// Q3. Toggle the active status of the subscription matching a given id.

// First attempt:
const removeSubscription = (id: string) => {
setSubscriptions(subscriptions.filter((s) => s.id !== id));
};

const updateSubscription = (id: string, newPlan: string) => {
setSubscription(subscriptions.map((s) => s.id === id ? {...s, plan: newPlan}: s));
};

const changeStatus = (id: string) => {
setSubscription(subscriptions.map((s) => s.id === id ? {...s, s.status: !status}: s));
};

// Correct:
const removeSubscription = (id: string) => {
  setSubscriptions(subscriptions.filter((s) => s.id !== id));
};

const updateSubscription = (id: string, newPlan: string) => {
  setSubscriptions(subscriptions.map((s) => s.id === id ? { ...s, plan: newPlan } : s));
};

const toggleActive = (id: string) => {
  setSubscriptions(subscriptions.map((s) => s.id === id ? { ...s, active: !s.active } : s));
};


// ---- Extra toggle drills: left side (property name, no prefix) vs. right side
// (reading the CURRENT value off the object being checked, needs the prefix) ----

// Drill A: toggleOnline on a Device { id: string; name: string; online: boolean }
// First attempt: right side missing prefix (!online instead of !d.online)
const toggleOnline = (id: string) => {
  setDevices(devices.map((d) => d.id === id ? { ...d, online: !d.online } : d));
};

// Drill B: toggleTrackedToday on a Habit { id: string; label: string; trackedToday: boolean }
// First attempt: right side missing prefix (!trackedToday instead of !h.trackedToday)
const toggleTrackedToday = (id: string) => {
  setHabits(habits.map((h) => h.id === id ? { ...h, trackedToday: !h.trackedToday } : h));
};


// ============================================================


// Category 5: useMemo

// Q1. Given subscriptions: Subscription[], compute activeCount — number where active is true.

// First attempt (missing .length, extra/missing parens):
const activeCount = useMemo(() => {
return subscriptions.filter((s) => s.active === true));
}, [subscriptions]

// Correct:
const activeCount = useMemo(() => {
  return subscriptions.filter((s) => s.active).length;
}, [subscriptions]);


// Q2. Given orders: (Order & { total: number; cancelled: boolean })[], compute netRevenue —
// sum of total across all orders NOT cancelled.

// First attempt (collapsed to length too early, mixed assignment/return, wrong property):
const netRevenue = useMemo(() => {
const activeOrders = orders.filter((o) => !o.cancelled).length;
return activeOrderRevenue = activeOrders.reduce((acc, o) => acc + o, 0)
}, [orders]);

// Correct:
const netRevenue = useMemo(() => {
  const activeOrders = orders.filter((o) => !o.cancelled);
  return activeOrders.reduce((acc, o) => acc + o.total, 0);
}, [orders]);


// Q3. Given products: Product[], compute priceSpread — the highest price minus the lowest.

// First attempt (missing .map() + spread):
const priceSpread = useMemo(() => {
const highestPrice = Math.max(products);
const lowestPrice = Math.min(products);
return highestPrice - lowestPrice;
}, [products]);

// Second attempt (fixed map/spread, but missing return):
const priceSpread = useMemo(() => {
const highestPrice = Math.max(...products.map((p) => p.price));
const lowestPrice = Math.min(...products.map((p) => p.price));
}, [products]);

// Correct:
const priceSpread = useMemo(() => {
  const highestPrice = Math.max(...products.map((p) => p.price));
  const lowestPrice = Math.min(...products.map((p) => p.price));
  return highestPrice - lowestPrice;
}, [products]);


// Q4. Given students: Student[] (with grade: number), compute averageGrade — written
// as two named steps.

// First attempt (correct — no changes needed):
const averageGrade = useMemo(() => {
  const totalGrade = students.reduce((acc, s) => acc + s.grade, 0);
  const gradeCount = students.length;
  return totalGrade / gradeCount;
}, [students]);

// Correct:
const averageGrade = useMemo(() => {
  const totalGrade = students.reduce((acc, s) => acc + s.grade, 0);
  const gradeCount = students.length;
  return totalGrade / gradeCount;
}, [students]);


// Q5. Given tickets: Ticket[], compute totalTicketCount — just the count.

// First attempt (correct — no changes needed):
const totalTicketCount = useMemo(() => {
  return tickets.length;
}, [tickets]);

// Correct:
const totalTicketCount = useMemo(() => {
  return tickets.length;
}, [tickets]);


// Q6. Given invoices: Invoice[], compute unpaidPercentage — what percent have paid === false.

// First attempt (typo: invoice.length instead of invoices.length):
const unpaidPercentage = useMemo(() => {
const unpaidInvoices = invoices.filter((i) => !i.paid).length;
const totalInvoices = invoice.length;
return unpaidInvoices/totalInvoices * 100;
}, [invoices]);

// Correct:
const unpaidPercentage = useMemo(() => {
  const unpaidInvoices = invoices.filter((i) => !i.paid).length;
  const totalInvoices = invoices.length;
  return unpaidInvoices / totalInvoices * 100;
}, [invoices]);


// Q7. Given books: Book[] (with pageCount: number), compute totalPages — sum of
// pageCount across all books.

// First attempt (correct — no changes needed):
const totalPages = useMemo(() => {
  return books.reduce((acc, b) => acc + b.pageCount, 0);
}, [books]);

// Correct:
const totalPages = useMemo(() => {
  return books.reduce((acc, b) => acc + b.pageCount, 0);
}, [books]);