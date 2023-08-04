import fs from 'fs/promises';

console.log('start...');

const filename = 'package-lock.json';

fs.access(filename)
  .then(() => fs.readFile(filename, 'utf-8'))
  .then((content) => content.toUpperCase())
  .then((content) => fs.writeFile(`UPPER_${filename}`, content))
  .then(() => console.log('uppercase version of the input file created'))
  .catch(console.error);

console.log('end!');
