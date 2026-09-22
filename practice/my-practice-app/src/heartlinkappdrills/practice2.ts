// HeartLink Drills — Category 3 (with verbal explanation practice)
// Practicing articulating the code aloud with precise technical vocabulary,
// as if explaining working-out to a tutor.

// ============================================================
// Q1. isValidPassword — takes password: string, returns boolean
// (check password.length >= 6, matching HeartLink's own signup rule)

const isValidPassword = (password: string): boolean => {
  return password.length >= 6;
};

// Explanation:
// We declare isValidPassword as a constant holding an arrow function, which takes
// one parameter, password, typed as a string. The function returns the result of
// the comparison — if the password's length is equal to or greater than 6 characters,
// it evaluates to true; if under, it evaluates to false. We use a return type
// annotation after the parameter list to state that this function's output will
// always be a boolean.
//
// Note: this is a direct comparison, not an if/else — the comparison itself already
// produces true or false, so it's returned as-is with no branching needed.
//
// Terminology check: the ": boolean" here is a RETURN TYPE ANNOTATION, not a "type
// assertion." Type assertion is a different, separate TypeScript concept (using
// "as SomeType" to tell TypeScript to treat a value as a specific type) — not what's
// happening in a function signature.


// ============================================================
// Q2. formatMatchSummary — takes match: Match, returns string,
// e.g. "Match between userA and userB"

const formatMatchSummary = (match: Match): string => {
  return `Match between ${match.userA} and ${match.userB}`;
};

// Explanation:
// We declare formatMatchSummary as a constant holding an arrow function, which
// takes one parameter, match, typed as Match, with a return type annotation of
// string. The function returns a template literal — a string using ${} interpolation
// — that inserts match.userA and match.userB's values directly into the sentence
// "Match between [userA] and [userB]".
//
// Note: match.userA and match.userB are ID strings (e.g. "user-1"), not display
// names — Match's actual shape only stores id references, not names.
//
// Terminology check: this is a TEMPLATE LITERAL, not JSX. JSX is React-specific
// markup syntax for rendering UI (<div>...</div>) — a template literal is plain
// JavaScript string-building with backticks and ${}. They can look similar in
// casual speech ("dynamically inserting a value") but are fundamentally different.


// ============================================================
// Q3. isCloseInAge — takes userA: User and userB: User, returns boolean —
// true if their ages differ by 5 or less

const isCloseInAge = (userA: User, userB: User): boolean => {
  const ageDifference = Math.abs(userA.age - userB.age);
  return ageDifference <= 5;
};

// Explanation:
// We declare isCloseInAge as a constant holding an arrow function which takes two
// parameters, userA and userB, both typed as User, and a return type annotation of
// boolean after the parameter list to reaffirm this function's output will always
// be a boolean.
// This is a two-step calculation. First, we assign a constant called ageDifference,
// using Math.abs to ensure that regardless of which user is older, the result is
// always a positive number — protecting the calculation's integrity, since a plain
// subtraction (userA.age - userB.age) could be negative depending on the order.
// Then the function returns the result of the comparison ageDifference <= 5 — this
// evaluates to true when the age gap is 5 or less, and false when it's greater.
//
// Terminology check: Math.abs, Math.max, and Math.min are METHODS — functions that
// live on the built-in Math object, called with dot notation, the same way array
// methods like .filter() live on arrays. "Method" = a function attached to an
// object; "function" is the general category.


// ============================================================
// Q4. logMessage — takes message: Message, returns void, logs it

const logMessage = (message: Message): void => {
  console.log(`Message from ${message.senderId} sent at ${message.createdAt}`);
};

// Explanation:
// We declare logMessage as a constant holding an arrow function which takes one
// parameter, message, typed as Message, and a return type annotation of void, since
// this function performs an action — logging to the console — rather than producing
// a value for something else to use.
// We console.log a template literal that dynamically reads back who sent the
// message and when, by extracting the senderId and createdAt properties directly
// off the message object.
//
// First attempt used "return" instead of "console.log" — a real mismatch against
// the function's own stated purpose (void = side effect, not a returned value).
// void doesn't mean "returns no value" in the sense of explicitly returning
// undefined — it means the function's entire purpose is a side effect, not a
// computation whose result matters to the caller.


// ============================================================
// Still to do next session:
// Q5. getUsersInCity — takes users: User[] and city: string, returns User[],
//     filtered for users whose city matches the given city.
//
// Category 4 (setMessages, a Message[] setter):
//   Q6. Remove the message with a given id.
//   Q7. Add a new message parameter onto the array.
//   Q8. Given mutedMatchIds: string[] already in scope, write getVisibleMessages —
//       standalone function returning messages whose matchId is not in mutedMatchIds.
//
// Category 5 (useMemo):
//   Q9. Given users: User[], compute oldestAge — the highest age.
//   Q10. Given likes: LikeRecord[], compute passCount — number where decision === "pass".
//   Q11. Given matches: Match[] and currentUserId: string (already in scope), compute
//        myMatchCount — count where userA === currentUserId OR userB === currentUserId.
//   Q12. Given messages: Message[], compute averageMessageLength — average length of
//        text across all messages, two named steps.