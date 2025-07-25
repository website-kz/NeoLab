import { exec } from 'child_process';
import fs from 'fs';

export const runPython = (code) => new Promise((resolve) => {
  fs.writeFileSync('temp.py', code);
  exec('python temp.py', (err, stdout, stderr) => {
    resolve(stderr || stdout);
  });
});