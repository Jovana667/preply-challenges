// Category 3 Redo: Arrow Functions with Typed Parameters

// Q1. calculateDiscount — takes price: number and percentOff: number, returns number.

// First attempt:
const calculateDiscount = (price: number, percentOff: number): string => {
return price * percentOff - price
}

// Correct:
const calculateDiscount = (price: number, percentOff: number): number => {
  const discount = price * (percentOff / 100);
  return discount;
};


// Q2. isValidEmail — takes email: string, returns boolean, checking email.includes('@').

// First attempt:
const isValidEmail = (email: string): boolean => {
const email = email.includes('@')
return email;
}

// Correct:
const isValidEmail = (email: string): boolean => {
  const isValid = email.includes('@');
  return isValid;
};


// Q3. logOrder — takes order: { id: string; total: number }, returns void, logs it.

// First attempt:
const logOrder = (order: {id: string; total: number }): void => {
console.log (`order ${id} with a total of $${total} has been placed`);
}

// Correct:
const logOrder = (order: { id: string; total: number }): void => {
  console.log(`order ${order.id} with a total of $${order.total} has been placed`);
};


// Q4. renameTag — takes oldName: string and newName: string, returns void.

// First attempt:
const renameTage = (oldName: string, newName: string): void => {
console.log(`The prior name ${oldName} has now been updated to ${newName}`);
}

// Correct:
const renameTag = (oldName: string, newName: string): void => {
  console.log(`The prior name ${oldName} has now been updated to ${newName}`);
};


// Q5. getActiveUsers — takes users: User[], returns User[], filtered by an isActive property.

// First attempt:
const getActiveUsers = (users: User[]): User[] => {
const isActive.filter

// Correct:
const getActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive);
};

