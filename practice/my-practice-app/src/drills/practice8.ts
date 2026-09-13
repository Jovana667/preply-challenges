// Category 3 Round 7: Arrow Functions with Typed Parameters

// Q1. calculatePricePerUnit — takes totalPrice: number and unitCount: number, returns number.

// First attempt:
const calculatePricePerUnit = (totalPrice: number, unitCount: number): number => {
return totalPrice * unitCount
}

// Correct:
const calculatePricePerUnit = (totalPrice: number, unitCount: number): number => {
  return totalPrice / unitCount;
};


// Q2. isWithinBudget — takes cost: number and budget: number, returns boolean
// (is cost less than or equal to budget?).

// First attempt (correct — no changes needed):
const isWithinBudget = (cost: number, budget: number): boolean => {
  return cost <= budget;
}

// Correct:
const isWithinBudget = (cost: number, budget: number): boolean => {
  return cost <= budget;
};


// Q3. logLogin — takes login: { userId: string; timestamp: string }, returns void, logs it.

// First attempt (correct — no changes needed):
const logLogin = (login: { userId: string; timestamp: string}): void => {
  console.log(`${login.userId} has logged in at ${login.timestamp}`);
}

// Correct:
const logLogin = (login: { userId: string; timestamp: string }): void => {
  console.log(`${login.userId} has logged in at ${login.timestamp}`);
};


// Q4. archiveProject — takes projectId: string, returns void, logs it was archived.

// First attempt (correct — no changes needed):
const archiveProject = (projectId: string): void => {
  console.log(`${projectId} has been archived`);
}

// Correct:
const archiveProject = (projectId: string): void => {
  console.log(`${projectId} has been archived`);
};


// Q5. getRecentOrders — takes orders: (Order & { daysAgo: number })[], returns the same
// type, filtered for orders placed within the last 7 days (daysAgo <= 7).

// First attempt:
const getRecentOrders = (orders: (Order & { daysAgo: number})[]): (Order & { daysAgo: number})[] => {
return orders.daysAgo <=7
};

// Correct:
const getRecentOrders = (orders: (Order & { daysAgo: number })[]): (Order & { daysAgo: number })[] => {
  return orders.filter((o) => o.daysAgo <= 7);
};