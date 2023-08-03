import * as fs from 'fs'; // core module, 'file-system'

const filename = 'author-info.js';

console.log('start of ex04 execution');

const content = fs.readFileSync(filename, 'utf-8');

console.log(content);

console.log('end of ex04 execution');
