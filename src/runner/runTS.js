import { exec } from 'child_process';
import fs from 'fs';

export const runTS = (code) => new Promise((resolve) => {
  fs.writeFileSync('temp.ts', code);
  exec('ts-node temp.ts', (err, stdout, stderr) => {
    resolve(stderr || stdout);
  });
});