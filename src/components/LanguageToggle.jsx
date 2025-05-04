import { useState } from 'react';

const LanguageToggle = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  return (
    <button onClick={toggleLanguage}>
      {language === "en" ? (
        <span>
          <span className='text-[#4731D3]'>TÜRKÇE</span> 'YE GEÇ
        </span>
      ) : (
        <span>
          SWITCH TO <span className='text-[#4731D3]'>ENGLISH</span>
        </span>
      )}
    </button>
  );
};

export default LanguageToggle;