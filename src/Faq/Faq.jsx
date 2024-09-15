import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FAQ.css';
import { MyComponent } from '../assets/MyComponent';

const API_URL = 'http://127.0.0.1:5000/faqs';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: "", answer: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    // Fetch FAQs from API
    const fetchFaqs = async () => {
      try {
        const response = await axios.get(API_URL);
        setFaqs(response.data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };

    fetchFaqs();
  }, []);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAddFaq = async () => {
    // Validate that both question and answer are not empty
    if (!newFaq.question.trim() || !newFaq.answer.trim()) {
      setError("Both question and answer are required!");
      return;
    }

    setError(""); // Clear error if both fields are filled

    try {
      if (isEditing) {
        // Update FAQ
        await axios.put(`${API_URL}/${faqs[editIndex].id}`, newFaq);
        const updatedFaqs = [...faqs];
        updatedFaqs[editIndex] = { ...newFaq, id: faqs[editIndex].id };
        setFaqs(updatedFaqs);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        // Add FAQ
        const response = await axios.post(API_URL, newFaq);
        setFaqs([...faqs, response.data]);
      }
    } catch (error) {
      console.error('Error adding/updating FAQ:', error);
    }

    setNewFaq({ question: "", answer: "" });
  };

  const handleEditFaq = (index) => {
    setNewFaq(faqs[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDeleteFaq = async (index) => {
    try {
      await axios.delete(`${API_URL}/${faqs[index].id}`);
      setFaqs(faqs.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  };

  return (
    <div className="faq-container">
      {/* Fun Facts About Fruits Section */}
      <h3 className="fruit-facts-title">Fun Facts About Fruits</h3>
      <hr />
      
      <div className="faq-item">
        <div
          className={`faq-question ${openIndex === faqs.length ? 'active' : ''}`}
          onClick={() => toggleOpen(faqs.length)}
        >
          Did you know? (Oranges)
        </div>
        <div className={`faq-answer-wrapper ${openIndex === faqs.length ? 'show' : ''}`}>
          <div className="faq-answer-content">
            <p>Oranges are not always orange! In warmer climates, oranges may remain green when ripe due to the chlorophyll content.</p>
            <img src={MyComponent.oranges} alt="Orange" className="fruit-image" />
          </div>
        </div>
      </div>

      <div className="faq-item">
        <div
          className={`faq-question ${openIndex === faqs.length + 1 ? 'active' : ''}`}
          onClick={() => toggleOpen(faqs.length + 1)}
        >
          Fun fact! (Bananas)
        </div>
        <div className={`faq-answer-wrapper ${openIndex === faqs.length + 1 ? 'show' : ''}`}>
          <div className="faq-answer-content">
            <p>Bananas are berries, but strawberries are not! Botanically speaking, a berry is a fruit with seeds inside.</p>
            <img src={MyComponent.banana} alt="Banana" className="fruit-image" />
          </div>
        </div>
      </div>

      <div className="faq-item">
        <div
          className={`faq-question ${openIndex === faqs.length + 2 ? 'active' : ''}`}
          onClick={() => toggleOpen(faqs.length + 2)}
        >
          Surprise! (Apples)
        </div>
        <div className={`faq-answer-wrapper ${openIndex === faqs.length + 2 ? 'show' : ''}`}>
          <div className="faq-answer-content">
            <p>There are over 7,500 varieties of apples grown worldwide. They range from sweet to sour and even spicy!</p>
            <img src={MyComponent.apple} alt="Apple" className="fruit-image" />
          </div>
        </div>
      </div>

      <div className="faq-item">
        <div
          className={`faq-question ${openIndex === faqs.length + 3 ? 'active' : ''}`}
          onClick={() => toggleOpen(faqs.length + 3)}
        >
          Did you know? (Watermelons)
        </div>
        <div className={`faq-answer-wrapper ${openIndex === faqs.length + 3 ? 'show' : ''}`}>
          <div className="faq-answer-content">
            <p>Watermelon is 92% water, making it a refreshing summer fruit and great for hydration.</p>
            <img src={MyComponent.watermelon} alt="Watermelon" className="fruit-image" />
          </div>
        </div>
      </div>

      {/* Form for adding/editing FAQs */}
      <div className="add-faq-form">
        <h3>{isEditing ? "Edit FAQ" : "Add a New FAQ"}</h3>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          placeholder="Question"
          value={newFaq.question}
          onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
        />
        <textarea
          placeholder="Answer"
          value={newFaq.answer}
          onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
        ></textarea>
        <button onClick={handleAddFaq}>
          {isEditing ? "Update FAQ" : "Add FAQ"}
        </button>
      </div>

      <h2 className="faq-title">Frequently Asked Questions</h2>
      <hr />

      {/* FAQ Section */}
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div
            className={`faq-question ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggleOpen(index)}
          >
            {faq.question}
          </div>
          <div className={`faq-answer-wrapper ${openIndex === index ? 'show' : ''}`}>
            <div className="faq-answer-content">{faq.answer}</div>
            <button onClick={() => handleEditFaq(index)} className="faq-edit-btn">Edit</button>
            <button onClick={() => handleDeleteFaq(index)} className="faq-delete-btn">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
