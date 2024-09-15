import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { MyComponent } from '../assets/MyComponent'; // Adjust import path as needed

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const sliderRef = useRef(null); // Ref to access the slider container
  const navigate = useNavigate();

  // Handle dot click to change page
  const handleDotClick = (page) => {
    setCurrentPage(page);
    slideToPage(page);
  };

  // Handle navigation
  const handleNavigation = (page) => {
    switch (page) {
      case 0:
        navigate('/chatbot');
        break;
      case 1:
        navigate('/translate');
        break;
      case 2:
        navigate('/faq');
        break;
      case 3:
        navigate('/about');
        break;
      default:
        break;
    }
  };

  // Slide to a specific page
  const slideToPage = (page) => {
    const slider = sliderRef.current;
    if (slider) {
      slider.style.transform = `translateX(-${page * 100}%)`;
    }
  };

  // Handle mouse and touch events for swipe functionality
  const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX || e.touches[0].clientX;
    const slider = sliderRef.current;

    const handleMouseMove = (moveEvent) => {
      const moveX = moveEvent.clientX || moveEvent.touches[0].clientX;
      const diffX = startX - moveX;
      slider.style.transform = `translateX(-${currentPage * 100 - diffX}px)`;
    };

    const handleMouseUp = (upEvent) => {
      const endX = upEvent.clientX || upEvent.touches[0].clientX;
      const diffX = startX - endX;
      const newPage = Math.max(0, Math.min(3, currentPage + (diffX > 0 ? 1 : -1)));
      setCurrentPage(newPage);
      slideToPage(newPage);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const startX = e.touches[0].clientX;
    const slider = sliderRef.current;

    const handleTouchMove = (moveEvent) => {
      const moveX = moveEvent.touches[0].clientX;
      const diffX = startX - moveX;
      slider.style.transform = `translateX(-${currentPage * 100 - diffX}px)`;
    };

    const handleTouchEnd = (endEvent) => {
      const endX = endEvent.changedTouches[0].clientX;
      const diffX = startX - endX;
      const newPage = Math.max(0, Math.min(3, currentPage + (diffX > 0 ? 1 : -1)));
      setCurrentPage(newPage);
      slideToPage(newPage);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <div className="home-container">
      <h1 className="app-title">Fruit.Ai</h1>
      <p className="app-tagline">"Be Healthy!"</p>

      <div className="slider-container">
        <div
          className="slider-content"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="slider-item">
            <button 
              className="fancy-button chat-button" 
              onClick={() => {
                handleNavigation(0);
                handleDotClick(0);
              }}
            >
              Chat
              <img src={MyComponent.chat} alt="Chat" className="chat-icon" />
            </button>
          </div>
          <div className="slider-item">
            <button 
              className="fancy-button translate-button" 
              onClick={() => {
                handleNavigation(1);
                handleDotClick(1);
              }}
            >
              Translate
              <img src={MyComponent.google} alt="Translate" className="translate-icon" />
            </button>
          </div>
          <div className="slider-item">
            <button 
              className="fancy-button faq-button" 
              onClick={() => {
                handleNavigation(2);
                handleDotClick(2);
              }}
            >
              FAQs
              <img src={MyComponent.faq} alt="Translate" className="translate-icon" />
            </button>
          </div>
          <div className="slider-item">
            <button 
              className="fancy-button about-button" 
              onClick={() => {
                handleNavigation(3);
                handleDotClick(3);
              }}
            >
              About
              <img src={MyComponent.about} alt="Translate" className="translate-icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="pagination-dots">
        {[0, 1, 2, 3].map((page) => (
          <span 
            key={page} 
            className={`dot ${currentPage === page ? 'active' : ''}`} 
            onClick={() => handleDotClick(page)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Home;
