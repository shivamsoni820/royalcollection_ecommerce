import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("royalCart");

    try {
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("royalCart", JSON.stringify(cart));
  }, [cart]);


  function addToCart(product) {

    setCart((prev) => {

      const existingProduct = prev.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {

        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

      }

      return [...prev, { ...product, quantity: 1 }];

    });

  }


  function removeFromCart(id) {

    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );

  }


  function increaseQuantity(id) {

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

  }


  function decreaseQuantity(id) {

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );

  }


  function clearCart() {
    setCart([]);
  }


  const totalItems = cart.reduce(
    (total, item) => total + item.quantity, 0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );

}