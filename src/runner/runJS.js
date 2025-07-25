import { exec } from 'child_process';
import fs from 'fs';

export const runCSharp = (code) => new Promise((resolve) => {
  fs.writeFileSync('Program.cs', code);
  exec('dotnet run Program.cs', (err, stdout, stderr) => {
    resolve(stderr || stdout);
  });
});