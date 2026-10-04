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


// ============================================================
// Still to do:
//
// Q3. Given messages: Message[], compute totalCharacters, the sum of every
//     message's text.length.
// Q4. Given users: User[], compute sydneyUserCount, the number of users whose
//     city is "Sydney".
// Q5. Given messages: Message[] and currentUserId: string (already in scope),
//     compute messagesFromOthers, the count where senderId is NOT currentUserId.
// Q6. Given users: User[], compute ageSpread, the highest age minus the lowest age
//     (a range, not an average).
// Q7. Given users: User[], compute totalInterestCount, the sum of interests.length
//     across all users.
// Q8. Given users: User[], compute averageInterestCount in two named steps,
//     building on Q7.