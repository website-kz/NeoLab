import { runPython } from './runPython';
import { runC } from './runC';
import { runCpp } from './runCpp';
import { runCSharp } from './runCSharp';
import { runJS } from './runJS';
import { runTS } from './runTS';
import { runHTMLCSS } from './runHTMLCSS';
import { runALZOL } from './runALZOL';

export const runCode = async (lang, code) => {
  switch (lang) {
    case 'python': return runPython(code);
    case 'c': return runC(code);
    case 'cpp': return runCpp(code);
    case 'csharp': return runCSharp(code);
    case 'javascript': return runJS(code);
    case 'typescript': return runTS(code);
    case 'html':
    case 'css': return runHTMLCSS(code);
    case 'alzol': return runALZOL(code);
    default: return 'Unsupported language.';
  }
};