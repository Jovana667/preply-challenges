// Category 3 Round 6: Arrow Functions with Typed Parameters

// Q1. calculateShipping — takes weight: number and ratePerKg: number, returns number.

// First attempt (correct — no changes needed):
const calculateShipping = (weight: number, ratePerKg: number): number => {
  return weight * ratePerKg;
}

// Correct:
const calculateShipping = (weight: number, ratePerKg: number): number => {
  return weight * ratePerKg;
};


// Q2. isEligibleForDiscount — takes orderTotal: number and threshold: number, returns boolean.

// First attempt (correct — no changes needed):
const isEligibleForDiscount = (orderTotal: number, threshold: number): boolean => {
  return orderTotal >= threshold;
}

// Correct:
const isEligibleForDiscount = (orderTotal: number, threshold: number): boolean => {
  return orderTotal >= threshold;
};


// Q3. logRefund — takes refund: { orderId: string; amount: number }, returns void, logs it.

// First attempt (correct — no changes needed):
const logRefund = (refund: { orderId: string; amount: number }): void => {
  console.log(`A refund of ${refund.amount} has been logged for ${refund.orderId}`);
}

// Correct:
const logRefund = (refund: { orderId: string; amount: number }): void => {
  console.log(`A refund of ${refund.amount} has been logged for ${refund.orderId}`);
};


// Q4. banUser — takes userId: string, returns void, logs it was banned.

// First attempt (correct — no changes needed):
const banUser = (userId: string): void => {
  console.log(`the ${userId} has been banned`);
}

// Correct:
const banUser = (userId: string): void => {
  console.log(`the ${userId} has been banned`);
};


// Q5. getUnreadNotes — takes notes: (Note & { read: boolean })[], returns the same type,
// filtered for notes where read is false.

// First attempt:
const getUnreadNotes = (notes: (Note & {read: boolean})[]): notes (Note & {read: boolean}[]) => {
return notes.filter((n) => n.read === false)
};

// Correct:
const getUnreadNotes = (notes: (Note & { read: boolean })[]): (Note & { read: boolean })[] => {
  return notes.filter((n) => n.read === false);
};


// ============================================================


// Category 4 Round 6: .filter()/.map() Inside a Setter Call
// Assume: setComments (a Comment[] state setter), Comment = { id: string; authorId: string; text: string; createdAt: string }

// Q1. Remove the comment with a given id.

// First attempt (correct — no changes needed):
const removeComment = (id: string) => {
  setComments(comments.filter((c) => c.id !== id));
}

// Correct:
const removeComment = (id: string) => {
  setComments(comments.filter((c) => c.id !== id));
};


// Q2. Add a new comment parameter onto the comments array.

// First attempt:
const addComment = (comment: Comment) => {
setComments([comment, ...coments]);
}

// Correct:
const addComment = (comment: Comment) => {
  setComments([comment, ...comments]);
};


// Q3. Update the text of the comment matching a given id to a new newText.

// First attempt:
const updateComment = (id: string, newText: string) => {
setComments(comments.map((c) => c.id === id ? {...c, text: newText} : c)
}

// Correct:
const updateComment = (id: string, newText: string) => {
  setComments(comments.map((c) => c.id === id ? { ...c, text: newText } : c));
};


// Q4. Given a pinnedIds: string[] array already in scope (not a parameter), write a
// function getPinnedComments that returns only the comments whose id appears in pinnedIds.

// First attempt:
const getPinnedComments = (Comment {id: string})

// Second attempt:
const getPinnedComments = (comments: Comment[]) => {
setComments(comments.filter((c) =>

// Third attempt:
const getPinnedComments = (comments: Comment[]) => {
return comments.filter((c) => c.id === pinnedIds);
return pinnedIds.includes(c.id)
}

// Correct:
const getPinnedComments = (comments: Comment[]): Comment[] => {
  return comments.filter((c) => pinnedIds.includes(c.id));
};


// Q5. Clear all comments — reset the array back to empty.
// (Not yet attempted — pick up here next session.)