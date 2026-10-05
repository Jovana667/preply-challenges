// HeartLink Drills: useMemo
// Based on HeartLink's types: User (age, city, interests), LikeRecord (decision),
// Message (senderId, text)

// Q1. Given users: User[], compute youngestAge, the lowest age.

// First attempt (missing .map() + spread, and closing structure was off):
const youngestAge = useMemo(() => {
return Math.min(users.age)};
[users]);

// Correct:
const youngestAge = useMemo(() => {
  return Math.min(...users.map((u) => u.age));
}, [users]);


// Q2. Given likes: LikeRecord[], compute likePercentage, the percent of records
// where decision === "like" (two named steps).

// First attempt (missing .length on the filtered array, plus a stray closing paren):
const likePercentage = useMemo(() => {
const totalDecisionLike = likes.filter((l) => l.decision === "like");
const totalLikes = likes.length
return totalDecisionLike/totalLikes * 100);
}, [likes]);

// Correct:
const likePercentage = useMemo(() => {
  const totalDecisionLike = likes.filter((l) => l.decision === "like").length;
  const totalLikes = likes.length;
  return totalDecisionLike / totalLikes * 100;
}, [likes]);


// HeartLink Drills: useMemo (Q3 to Q8)
// Continues from Q1 (youngestAge) and Q2 (likePercentage).
// Based on HeartLink's types: User (age, city, interests), Message (senderId, text)

// Q3. Given messages: Message[], compute totalCharacters, the sum of every
// message's text.length.

// First attempt (m.text is the string itself, needs .length to add up characters):
const totalCharacters = useMemo(() => {
return messages.reduce((sum, m) => sum + m.text, 0);
}, [messages]);

// Correct:
const totalCharacters = useMemo(() => {
  return messages.reduce((sum, m) => sum + m.text.length, 0);
}, [messages]);
// Note: reduce is a running total. Start at 0, add each message's text.length.
// Same pattern as totalOdds in GSS, but adding (start 0) instead of multiplying (start 1).


// Q4. Given users: User[], compute sydneyUserCount, the number of users whose
// city is "Sydney".

// First attempt (missing .length, so it returned the array instead of a number):
const sydneyUserCount = useMemo(() => {
return users.filter((u) => u.city === "Sydney");
}, [users]);

// Correct:
const sydneyUserCount = useMemo(() => {
  return users.filter((u) => u.city === "Sydney").length;
}, [users]);
// Rule: a variable named Count, total or "number of" must end in .length or come out of a reduce.


// Q5. Given messages: Message[] and currentUserId: string (already in scope),
// compute messagesFromOthers, the count where senderId is NOT currentUserId.

// First attempt (wrong property: m.currentUserId doesn't exist, it's m.senderId.
// Also currentUserId was missing from the dependency array):
const messagesFromOthers = useMemo(() => {
return messages.filter((m) => m.currentUserId !== currentUserId).length;
}, [messages]);

// Correct:
const messagesFromOthers = useMemo(() => {
  return messages.filter((m) => m.senderId !== currentUserId).length;
}, [messages, currentUserId]);
// Note: m.senderId reads a property from the current message (m. prefix).
// currentUserId is already in scope, so no prefix. The dependency array lists every
// outside value the callback reads.
// Also check the name against the question: messagesFromOthers (with an "s"),
// not messageFromOthers.


// Q6. Given users: User[], compute ageSpread, the highest age minus the lowest age
// (a range, not an average).

// First attempt (logic correct, brackets off: missing a closing ) on the first two
// lines, and a stray ) on the return line):
const ageSpread = useMemo(() => {
const highestAge = Math.max(...users.map((u) => u.age);
const lowestAge = Math.min(...users.map((u) => u.age);
return highestAge - lowestAge);
}, [users]);

// Correct:
const ageSpread = useMemo(() => {
  const highestAge = Math.max(...users.map((u) => u.age));
  const lowestAge = Math.min(...users.map((u) => u.age));
  return highestAge - lowestAge;
}, [users]);
// Tip: count ( and ) on each line. They should match.


// Q7. Given users: User[], compute totalInterestCount, the sum of interests.length
// across all users.

// First attempt (logic correct, but `interests` isn't a variable in scope, so it
// doesn't belong in the dependency array):
const totalInterestCount = useMemo(() => {
return users.reduce((sum, u) => sum + u.interests.length, 0);
}, [users, interests]);

// Correct:
const totalInterestCount = useMemo(() => {
  return users.reduce((sum, u) => sum + u.interests.length, 0);
}, [users]);


// Q8. Given users: User[], compute averageInterestCount in two named steps,
// building on Q7 (total interests divided by number of users).

// First attempt (filter counted users with an interests array instead of totalling
// interests, * 100 is for percentages not averages, stray ), wrong dependency array):
const averageInterestCount = useMemo(() => {
const totalUsers = users.length;
const totalInterest = users.filter((u) => u.interests).length);
return totalInterest/totalUsers * 100;
}, [users, interests]);

// Correct:
const averageInterestCount = useMemo(() => {
  const totalInterest = users.reduce((sum, u) => sum + u.interests.length, 0);
  const totalUsers = users.length;
  return totalInterest / totalUsers;
}, [users]);
// Average = total / count. Only multiply by 100 for a percentage.