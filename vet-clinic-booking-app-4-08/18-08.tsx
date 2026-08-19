// Write a function calculateCartTotal(items) that takes an array of cart items 
// and returns the total price.

// my answer
const items = [
    { name: "Sneakers", price: 89.99, quantity: 2 },
    { name: "Socks", price: 12.50, quantity: 3 }
];

function calculateCartTotal() {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

// correct answer
const items = [
    { name: "Sneakers", price: 89.99, quantity: 2 },
    { name: "Socks", price: 12.50, quantity: 3 }
];

function calculateCartTotal(items: { name: string; price: number; quantity: number }[]) {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

// An inline object type is fine for a shape used once; a type alias is better once that 
// shape is reused across multiple functions — destructuring is unrelated to typing, it's 
// just a shorthand for pulling properties out of a parameter.