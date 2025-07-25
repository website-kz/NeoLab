import { exec } from 'child_process';
import fs from 'fs';

export const runC = (code) => new Promise((resolve) => {
  fs.writeFileSync('temp.c', code);
  exec('gcc temp.c -o temp.out && ./temp.out', (err, stdout, stderr) => {
    resolve(stderr || stdout);
  });
});