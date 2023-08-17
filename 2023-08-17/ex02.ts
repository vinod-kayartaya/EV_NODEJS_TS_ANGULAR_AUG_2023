import * as fs from 'fs/promises';

fs.readFile('package.json', 'utf-8')
.then(console.log);
