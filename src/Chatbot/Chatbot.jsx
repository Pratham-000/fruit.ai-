import React, { useState } from 'react';
import './chatbot.css'; // Make sure the path is correct

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [cart, setCart] = useState([]);

  const fruits = [
    { name: 'Orange', price: 8.00 },
    { name: 'Cucumber', price: 11.76 },
    { name: 'Tangerine', price: 6.40 }
  ];

  // Function to handle sending messages
  const handleSendMessage = () => {
    const trimmedInput = inputValue.trim().toLowerCase();

    if (trimmedInput === 'bill') {
      const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
      setMessages([
        ...messages,
        { text: inputValue, isUser: true },
        { text: `Your total is $${total}`, isUser: false }
      ]);
    } else {
      setMessages([
        ...messages,
        { text: inputValue, isUser: true },
        { text: 'This is a sample response from the chatbot.', isUser: false }
      ]);
    }
    setInputValue('');
  };

  // Handle adding fruit to the cart and updating its quantity
  const handleAddToCart = (fruit) => {
    const existingFruit = cart.find(item => item.name === fruit.name);

    if (existingFruit) {
      setCart(
        cart.map(item =>
          item.name === fruit.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...fruit, quantity: 1 }]);
    }
    setMessages([
      ...messages,
      { text: `Added ${fruit.name} to your cart. Price: $${fruit.price}`, isUser: false }
    ]);
  };

  // Function to increment the quantity
  const handleIncrement = (fruit) => {
    setCart(cart.map(item =>
      item.name === fruit.name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  // Function to decrement the quantity
  const handleDecrement = (fruit) => {
    setCart(cart.map(item =>
      item.name === fruit.name
        ? { ...item, quantity: Math.max(item.quantity - 1, 0) } // Allow decrement to 0, but not below
        : item
    ));
  };

  return (
    <div className="chatbot-container">
      <div className="chat-header">
        <h2>Chat with FruitBot</h2>
        <hr />
      </div>

      <div className="chat-content">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.isUser ? 'user-message' : 'bot-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* Fruit list */}
      <div className="fruit-list">
        {fruits.map((fruit) => {
          const inCart = cart.find((item) => item.name === fruit.name);
          const quantity = inCart ? inCart.quantity : 0;

          return (
            <div key={fruit.name} className="fruit-card">
              <p>{fruit.name}</p>
              <p>${fruit.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(fruit)} disabled={quantity === 0}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleIncrement(fruit)}>+</button>
              </div>
              <button onClick={() => handleAddToCart(fruit)} className="add-to-cart-btn">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Type a message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <hr />
      <div className="note"><h2>NOTE: Type bill To Calculate Total</h2></div>
    </div>
  );
};

export default Chatbot;
