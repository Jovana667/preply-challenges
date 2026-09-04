// Category 3 Round 4: Arrow Functions with Typed Parameters

// Q1. calculateTip — takes billTotal: number and tipPercent: number, returns number (the tip amount).

// First attempt:
const calculateTip = (billTotal: number, tipPercent: number): number => {
const Tip = billTotal * tipPercent
return Tip
}

// Correct:
const calculateTip = (billTotal: number, tipPercent: number): number => {
  const tip = billTotal * (tipPercent / 100);
  return tip;
};


// Q2. isValidUsername — takes username: string, returns boolean, checking username.length >= 3.

// First attempt:
const isValidUsername = (username: string): boolean => {
username.length >= 3
return
}

// Correct:
const isValidUsername = (username: string): boolean => {
  return username.length >= 3;
};


// Q3. logReview — takes review: { productId: string; rating: number }, returns void, logs it.

// First attempt (correct — no changes needed):
const logReview = (review: {productId: string; rating: number}): void => {
  console.log(`product review for ${review.productId} has a ${review.rating}`);
}

// Correct:
const logReview = (review: { productId: string; rating: number }): void => {
  console.log(`product review for ${review.productId} has a ${review.rating}`);
};


// Q4. deactivateAccount — takes accountId: string, returns void, logs that it was deactivated.

// First attempt (correct — no changes needed):
const deactivateAccount = (accountId: string): void => {
  console.log(`The account ${accountId} has been deactivated`);
}

// Correct:
const deactivateAccount = (accountId: string): void => {
  console.log(`The account ${accountId} has been deactivated`);
};


// Q5. getHighRated — takes products: (Product & { rating: number })[], returns the same type,
// filtered for rating >= 4.

// First attempt:
const getHighRated = (products: (Product & { rating: number })[]): products => {
return products.filter((p)
}

// Correct:
const getHighRated = (products: (Product & { rating: number })[]): (Product & { rating: number })[] => {
  return products.filter((p) => p.rating >= 4);
};


// ============================================================


// Category 4 Round 4: .filter()/.map() Inside a Setter Call
// Assume: setEvents (an Event[] state setter), Event = { id: string; title: string; attendeeCount: number }

// Q1. Remove the event with a given id.

// First attempt:
const removeEvent = (Event = { id: string; title: string; attendeeCount: number}) => {
setEvents((e) => e.id === id)
}

// Correct:
const removeEvent = (id: string) => {
  setEvents(events.filter((e) => e.id !== id));
};


// Q2. Add a new event parameter onto the events array.

// First attempt:
const addEvent = (event: Event) => {
setEvents((e) => [...events, e]
}

// Correct:
const addEvent = (event: Event) => {
  setEvents([...events, event]);
};


// Q3. Update the title of the event matching a given id to a new newTitle.

// First attempt (correct — no changes needed):
const updateEventTitle = (id: string, newTitle: string) => {
  setEvents(events.map((e) => e.id === id ? {...e, title: newTitle} : e));
}

// Correct:
const updateEventTitle = (id: string, newTitle: string) => {
  setEvents(events.map((e) => e.id === id ? { ...e, title: newTitle } : e));
};


// Q4. Increment the attendeeCount of the event matching a given id by exactly 1
// (add one to whatever it currently is).

// First attempt:
const increaseAttendeeCount = (id: string, attendeeCount: number) => {
setEvents(events.map((e) => e.id === id ? {...e, attendeeCount: ++} : e);
}

// Correct:
const increaseAttendeeCount = (id: string) => {
  setEvents(events.map((e) => e.id === id ? { ...e, attendeeCount: e.attendeeCount + 1 } : e));
};


// Q5. Reset the attendeeCount of the event matching a given id back to 0.

// First attempt (correct — no changes needed):
const resetAttendeeCount = (id: string) => {
  setEvents(events.map((e) => e.id === id ? {...e, attendeeCount: 0 } : e));
}

// Correct:
const resetAttendeeCount = (id: string) => {
  setEvents(events.map((e) => e.id === id ? { ...e, attendeeCount: 0 } : e));
};