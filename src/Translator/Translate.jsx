import React, { useState } from 'react';
import './Translate.css';

const Translate = () => {
  const [language, setLanguage] = useState('en');
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    // Add more languages as needed
  ];

  const handleTranslate = async () => {
    // This is where you would call your translation API
    // For demonstration, we'll just mock the translation
    const translation = `${text} translated to ${language}`;
    setTranslatedText(translation);
  };

  return (
    <div className="translate-container">
      <h2>Translate Text</h2>
      <div className="translate-form">
        <label htmlFor="language">Select Language:</label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>

        <label htmlFor="text">Enter Text:</label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your text here..."
        ></textarea>

        <button onClick={handleTranslate}>Translate</button>

        {translatedText && (
          <div className="translated-text">
            <h3>Translated Text:</h3>
            <p>{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Translate;
