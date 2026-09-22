// HeartLink Drills — Category 3: Arrow Functions with Typed Parameters
// Based on the actual User, LikeRecord, Match, Message types from HeartLink's types.ts

// Q1. isAdult — takes age: number, returns boolean (same idea as HeartLink's own
// signup check, age >= 18).

// First attempt (correct — no changes needed):
const isAdult = (age: number) => {
  return age >= 18;
};

// Correct:
const isAdult = (age: number): boolean => {
  return age >= 18;
};


// Q2. formatUserSummary — takes user: User, returns string, e.g. "Alex Morgan, 27, Lagos".

// First attempt:
const formatUserSummary = (user: User) => {
return (`${user.name}, ${user.age}, ${user.location}`)
};

// Correct:
const formatUserSummary = (user: User): string => {
  return `${user.name}, ${user.age}, ${user.city}`;
};
// Note: User has "city", not "location".


// Q3. hasSharedInterest — takes userA: User and userB: User, returns boolean — true if
// they share at least one interest. Needs .some() + .includes() combined (new pattern —
// .some() drives the loop over userA's interests; .includes() is the check run inside
// the callback, asking whether each interest exists in userB's interests).

// First attempt:
const hasSharedInterest = (userA: User, userB: User) => {
const
// (stopped here, unsure how .some() and .includes() combine)

// Second attempt:
const hasSharedInterests = (userA: User, userB: User) => {
return userA.interests.some(interests) => userB.interests.includes(interes));
};

// Correct:
const hasSharedInterest = (userA: User, userB: User): boolean => {
  return userA.interests.some((interest) => userB.interests.includes(interest));
};

// Key mechanics recap:
// - .some() is the array method driving the loop — it calls its callback once per
//   element in userA.interests, and returns true the moment any single call returns true
//   (stopping early), or false if it gets through the whole array with no true result.
// - .includes(value) is a plain existence check — "is this one specific value present
//   in this array?" It doesn't loop or iterate on its own.
// - Here, .includes() is simply the logic written INSIDE .some()'s callback. .some()
//   calls the callback once per interest; that callback's entire body is one
//   .includes() check; .some() looks at what that check returned each time to decide
//   whether to stop (found a match) or continue to the next interest.


// Q4. logMatch — takes match: Match, returns void, logs it.

// First attempt (missing match.id — was interpolating the whole object):
const logMatch = (match: Match): void => {
console.log(`a match ${match} has been made`);
};

// Correct:
const logMatch = (match: Match): void => {
  console.log(`a match ${match.id} has been made`);
};
// Note: interpolating ${match} alone prints the unhelpful "[object Object]" — always
// interpolate a specific property, not the whole object.


// Q5. getVerifiedProfiles — takes users: User[], returns User[], filtered for users
// with a non-empty bio.

// First attempt (correct — no changes needed):
const getVerifiedProfiles = (users: User[]): User[] => {
  return users.filter((u) => u.bio !== "");
};

// Correct:
const getVerifiedProfiles = (users: User[]): User[] => {
  return users.filter((u) => u.bio !== "");
};


// ============================================================
const removeUser = (id: string) => {
setUsers(users.filter((u) => u.id !== id);
};

const updateBio = (id: string, newBio: string) => {
setUsers(user.map((u) => u.id === id ? {...u, u.bio: newBio}: u);
};

const getUnblockedUsers = (id: string) => {
users.filter((u) => !u.blocked);
};

const likeCount = useMemo(() => {
return likes.length;
}, [likes];

const totalMatches = useMemo(() => {
return matches;
}, [matches];

const messagesFromMe = useMemo(() => {
return messages.filter((m) => m.id === m.currentUserId).length;
}, [messages];

const averageAge = useMemo(() => {
const age = users.
const totalUsers = users.reduce((acc, u) => acc + u, 0);
return age/totalUsers
}, [users];