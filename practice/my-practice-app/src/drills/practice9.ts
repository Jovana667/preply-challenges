// Category 4 Check-in: .filter()/.map() Inside a Setter Call
// Assume: setTasks (a Task[] state setter), Task = { id: string; title: string; completed: boolean }

// Q1. Remove the task with a given id.
// Q2. Update the title of the task matching a given id to a new newTitle.
// Q3. Toggle the completed status of the task matching a given id.

// First attempt:
const removeTask = (id: string) => {
setTask(tasks.filter((t) => t.id !== id));
};

const updateTitle = (id: string, newTitle: string) => {
setTask(tasks.map((t) => t.id === id ? {...t, title: newTitle} : t));
};

const updateStatus = (id: string) => {
setTask(tasks.map((t) => t.id === id ? {...t, status: "completed"}: t));
};

// Correct:
const removeTask = (id: string) => {
  setTasks(tasks.filter((t) => t.id !== id));
};

const updateTitle = (id: string, newTitle: string) => {
  setTasks(tasks.map((t) => t.id === id ? { ...t, title: newTitle } : t));
};

const updateStatus = (id: string) => {
  setTasks(tasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
};


// ============================================================


// Category 5 Round 4: useMemo (weighted toward reduce/divide sequencing)

// Q1. Given tasks: Task[] (with estimatedHours: number), compute totalEstimatedHours —
// sum of all estimatedHours.

// First attempt:
const totalEstimateHours = useMemo(() => {
return Math.sum(estimatedHours.length + tasks.length));
}, [tasks]);

// Second attempt:
const totalEstimatedHours = useMemo(() => {
return tasks.reduce((acc, t) => acc + t.estimateHours, 0)
} [tasks]);

// Correct:
const totalEstimatedHours = useMemo(() => {
  return tasks.reduce((acc, t) => acc + t.estimatedHours, 0);
}, [tasks]);


// Q2. Given tasks: Task[], compute completionPercentage — what percent are completed.

// First attempt:
const completionPercentage = useMemo(() => {
const completedTotal = tasks.filer((t) => t.id === t.completed.length);
const totalTasks = tasks.length
return completedTotal / totalTasks * 100
}, [tasks])

// Correct:
const completionPercentage = useMemo(() => {
  const completedTotal = tasks.filter((t) => t.completed).length;
  const totalTasks = tasks.length;
  return completedTotal / totalTasks * 100;
}, [tasks]);


// Q3. Given orders: Order[] (with itemCount: number), compute averageItemsPerOrder —
// sum of itemCount divided by number of orders.

// First attempt (structure correct, one extra operation):
const averageItemsPerOrder = useMemo(() => {
  const totalItems = orders.reduce((acc, o) => acc + o.itemCount, 0);
  const orderCount = orders.length;
  return totalItems / orderCount * 100;
}, [orders]);

// Correct:
const averageItemsPerOrder = useMemo(() => {
  const totalItems = orders.reduce((acc, o) => acc + o.itemCount, 0);
  const orderCount = orders.length;
  return totalItems / orderCount;
}, [orders]);


// Q4. Given products: Product[], compute priceRange — the highest price minus the
// lowest price.

// First attempt:
const priceRange = useMemo(() => {
const highestPrice = Math.max(products.price);
const lowestPrice = Math.min(products.price);
return highestPrice - lowestPrice
}; [products])

// Correct:
const priceRange = useMemo(() => {
  const highestPrice = Math.max(...products.map((p) => p.price));
  const lowestPrice = Math.min(...products.map((p) => p.price));
  return highestPrice - lowestPrice;
}, [products]);


// Q5. Given users: User[] (with loginCount: number), compute totalLogins — sum of all
// loginCount.

// First attempt:
const totalLogins = useMemo(() => {
return users.reduce((acc, u) => acc + u.loginCount, 0);
}, [users]

// Correct:
const totalLogins = useMemo(() => {
  return users.reduce((acc, u) => acc + u.loginCount, 0);
}, [users]);


// Q6. Given reviews: Review[], compute fiveStarCount — the number of reviews where
// rating === 5.

// First attempt:
const fiveStarCount = useMemo(() => {
return reviews.filter((r) => r.rating === 5);
}, [reviews]);

// Correct:
const fiveStarCount = useMemo(() => {
  return reviews.filter((r) => r.rating === 5).length;
}, [reviews]);


// Q7. Given comments: Comment[], compute averageTextLength — written using two separate
// named variables (totalLength, commentCount) before dividing, instead of one dense line.

// First attempt:
const averageTextLength = useMemo(() => {
const totalLength = comments.reduce((acc, c) => acc + c, 0).length
const commentCount = comments.length;
return commentCount/totalLength
}, [comments]);

// Second attempt:
const averageTextLength = useMemo(() => {
const totalLength = comments.reduce((acc, c) => acc + c.text.length, 0);
const commentCount = comments.length;
return totalLength / comments.length
}, [comments]);

// Correct:
const averageTextLength = useMemo(() => {
  const totalLength = comments.reduce((acc, c) => acc + c.text.length, 0);
  const commentCount = comments.length;
  return totalLength / commentCount;
}, [comments]);