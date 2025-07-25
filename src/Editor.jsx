import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';

const Editor = ({ language, code, setCode }) => {
  const editorRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    instanceRef.current = monaco.editor.create(editorRef.current, {
      value: code,
      language,
      theme: 'vs-dark',
      automaticLayout: true
    });

    instanceRef.current.onDidChangeModelContent(() => {
      setCode(instanceRef.current.getValue());
    });

    return () => instanceRef.current.dispose();
  }, [language]);

  return <div style={{ height: '500px' }} ref={editorRef}></div>;
};

export default Editor;