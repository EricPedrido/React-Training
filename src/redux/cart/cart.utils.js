export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id == cartItemToAdd.id
  );

  // if it is already in cart, create a new array, adding 1 to the item to add, while cloning te rest of the cartItems
  if (existingCartItem) {  
    return cartItems.map((cartItem) =>
      cartItem.id == cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
