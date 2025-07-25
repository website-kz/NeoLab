import { exec } from 'child_process';
import fs from 'fs';

export const runCpp = (code) => new Promise((resolve) => {
  fs.writeFileSync('temp.cpp', code);
  exec('g++ temp.cpp -o temp.out && ./temp.out', (err, stdout, stderr) => {
    resolve(stderr || stdout);
  });
});