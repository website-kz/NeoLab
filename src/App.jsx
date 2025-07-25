import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LanguageSelector from './LanguageSelector';
import Editor from './Editor';
import Output from './Output';
import './styles.css';
import { runCode } from './runner/runAll';

const App = () => {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleRun = async () => {
    const result = await runCode(language, code);
    setOutput(result);
  };

  return (
    <>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <Editor language={language} code={code} setCode={setCode} />
      <button onClick={handleRun}>▶ Run</button>
      <Output output={output} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));