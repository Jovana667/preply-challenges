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

// Category 4 Round 7: .filter()/.map() Inside a Setter Call
// Assume: setReviews (a Review[] state setter), Review = { id: string; rating: number; verified: boolean }

// Q1. Remove the review with a given id.

// First attempt (correct — no changes needed):
const removeReview = (id: string) => {
  setReviews(reviews.filter((r) => r.id !== id));
};

// Correct:
const removeReview = (id: string) => {
  setReviews(reviews.filter((r) => r.id !== id));
};


// Q2. Add a new review parameter onto the reviews array.

// First attempt (correct — no changes needed):
const addReview = (review: Review) => {
  setReviews([...reviews, review]);
}

// Correct:
const addReview = (review: Review) => {
  setReviews([...reviews, review]);
};


// Q3. Update the rating of the review matching a given id to a new newRating.

// First attempt:
const updateRating = (id: string & Review {rating: newRating}) => {
setReviews(reviews.map((r) => r.id === id ? {...r, rating: string}: r));
};

// Second attempt:
const updateRating = (id: string & newRating: number) => {
setReviews(reviews.map((r) => r.id === id ? {...r, rating: newRating}: r));
};

// Correct:
const updateRating = (id: string, newRating: number) => {
  setReviews(reviews.map((r) => r.id === id ? { ...r, rating: newRating } : r));
};


// Q4. Given flaggedIds: string[] already in scope, write getUnflaggedReviews — a
// standalone function (no setter) returning only reviews whose id is NOT in flaggedIds.

// First attempt:
const getUnflaggedReviews = (id: string) => {
return

// Correct:
const getUnflaggedReviews = (reviews: Review[]): Review[] => {
  return reviews.filter((r) => !flaggedIds.includes(r.id));
};


// Q5. Mark the review matching a given id as verified — fixed value true.

// First attempt:
const markReview = (id: string, newVerified: true) => {
setReviews(reviews.map((r) => r.id === id ? {...r, verified: newVerified} :r));
;

// Correct:
const markReview = (id: string) => {
  setReviews(reviews.map((r) => r.id === id ? { ...r, verified: true } : r));
};