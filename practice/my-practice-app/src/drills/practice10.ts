// Category 4: .filter()/.map() Inside a Setter Call
// Assume: setPayments (a Payment[] state setter), Payment = { id: string; amount: number; refunded: boolean }

// Q1. Remove the payment with a given id.
// Q2. Update the amount of the payment matching a given id to a new newAmount.
// Q3. Toggle the refunded status of the payment matching a given id.

// First attempt:
const removePayment = (id: string) => {
setPayments(payments.filter((p) => p.id !== id);
};

const updatePayment = (id: string, newAmount: number) => {
setPayments(payments.map((p) => p.id === id ? {...p, amount: newAmount}: p));
};

const Status = (id: string) => {
setPayments(payments.map((p) => p.id === id ? {...p, refunded: !refunded}: p));
};

// Correct:
const removePayment = (id: string) => {
  setPayments(payments.filter((p) => p.id !== id));
};

const updatePayment = (id: string, newAmount: number) => {
  setPayments(payments.map((p) => p.id === id ? { ...p, amount: newAmount } : p));
};

const toggleRefunded = (id: string) => {
  setPayments(payments.map((p) => p.id === id ? { ...p, refunded: !p.refunded } : p));
};


// ============================================================


// Category 5: useMemo

// Q1. Given payments: Payment[], compute totalPaid — sum of amount across all payments
// NOT refunded (combine .filter() and .reduce()).

// First attempt:
const totalPaid = useMemo(() => {
const payments = payments.filter((p) => p.refunded === !p.refunded);
const sumOfPayment = payments.reduce((acc, p) => acc + p, 0));
}, [payments]);

// Second attempt:
const totalPaid = useMemo(() => {
const nonRefundedPayments = payments.filter((p) => !p.refunded);
return sumOfPayment = payments.reduce((acc, p) => acc + p.amount, 0);
}, [payments]);

// Correct:
const totalPaid = useMemo(() => {
  const nonRefundedPayments = payments.filter((p) => !p.refunded);
  return nonRefundedPayments.reduce((acc, p) => acc + p.amount, 0);
}, [payments]);


// Q2. Given tasks: Task[], compute incompleteCount — number of tasks where completed is false.

// First attempt:
const incompleteCount = useMemo(() => {
return tasks.filter((t) => !t.completed);
}; [tasks]);

// Correct:
const incompleteCount = useMemo(() => {
  return tasks.filter((t) => !t.completed).length;
}, [tasks]);


// Q3. Given reviews: Review[], compute ratingRange — highest rating minus lowest rating.

// First attempt:
const ratingRange = useMemo(() => {
const highestRating = Math.max(reviews);
const lowestRating = Math.min(reviews);
return highestRating - lowestRating
}, [reviews]);

// Correct:
const ratingRange = useMemo(() => {
  const highestRating = Math.max(...reviews.map((r) => r.rating));
  const lowestRating = Math.min(...reviews.map((r) => r.rating));
  return highestRating - lowestRating;
}, [reviews]);


// Q4. Given orders: Order[] (with total: number), compute averageOrderValue — sum
// divided by count, written as two named steps.

// First attempt:
const averageOrderValue = useMemo(() => {
const averageItemsPerOrder = orders.reduce((acc, o) => acc + o.items, 0);
const averageOrderValue = orders.reduce((acc, 0) => acc + o.value, 0);
return averageItemsPerOrder / averageOrderValue
}, [orders]);

// Correct:
const averageOrderValue = useMemo(() => {
  const totalValue = orders.reduce((acc, o) => acc + o.total, 0);
  const orderCount = orders.length;
  return totalValue / orderCount;
}, [orders]);


// Q5. Given users: User[] (with postCount: number), compute mostActiveUserPosts —
// the highest postCount among all users.

// First attempt:
const mostActiveUserPosts = useMemo(() => {
return Math.max(...users.map((u) => u.postCount)
}, [users]);

// Correct:
const mostActiveUserPosts = useMemo(() => {
  return Math.max(...users.map((u) => u.postCount));
}, [users]);


// Q6. Given comments: Comment[], compute totalCommentCount — just the count.

// First attempt:
const totalCommentCount = useMemo(() =>
return comments.length);
}, [comments]);

// Second attempt:
const totalCommentCount = useMemo(() => {
return comments.length);
}, [comments]);

// Correct:
const totalCommentCount = useMemo(() => {
  return comments.length;
}, [comments]);


// Q7. Given tickets: Ticket[], compute lowPriorityPercentage — what percent have
// priority === "low".
// (Not yet attempted — pick up here next session. Same shape as highPriorityPercentage/
// resolvedPercentage.)