import * as fs from 'fs';

console.log('start of ex06 execution');
const filename = 'package.json';
// task: check if the filename exists
// and if yes, then read the content, convert the same in to uppercase, and write it to a new file
fs.access(filename, (err) => {
  if (err) {
    throw err;
  }
  // the file is accessible
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }
    // no error while reading the content
    const content = data.toUpperCase();
    const newFilename = 'UPPER_' + filename;
    fs.writeFile(newFilename, content, 'utf-8', (err) => {
      if (err) {
        throw err;
      }
      console.log(newFilename, 'created with uppercase version of', filename);
    });
  });
});

console.log('end of ex06 execution');
