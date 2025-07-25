import React from 'react';

const languages = [
  'c', 'cpp', 'csharp', 'javascript', 'typescript',
  'python', 'html', 'css', 'alzol'
];

const LanguageSelector = ({ language, setLanguage }) => (
  <select value={language} onChange={e => setLanguage(e.target.value)}>
    {languages.map(lang => <option key={lang} value={lang}>{lang.toUpperCase()}</option>)}
  </select>
);

export default LanguageSelector;