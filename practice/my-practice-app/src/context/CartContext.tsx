// first attempt
import  { createContext, useContext, useState, useEffect } from 'react';

// type alias uses = not :
type CartItem: {
id: string;
price: number;
quantity: number;
}

// a function body placed inside createContext ()
// createContext can only take one plain value as its argument, never followed up by {} 
// and logic. CartProvider needs to be a sepatae function declaration 
const AppContext = createContext (){

    // cartItem is the type name it cant also be used as the variable name. 
    // the state is also missing a pair
const CartItem = useState<CartItem[]>([]);

const addItem(item:CartItem) {
if id.CartItem === cartItem;
return CartItem ++
};

const removeItem(id: string){
if CartItem.filter(id.CartItem !== CartIem)
return ...CartItems
}

// usememo was not imported
const total = useMemo (price * quantity) [items, price]
CartItems.reduce

// missing the provider return
export useCart() = CartProvider<total>