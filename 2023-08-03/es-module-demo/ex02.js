import functions from './author-info.js'; // gets the default exported member from author-info.js
import { authorEmail as email, authorName } from './author-info.js';
import * as a from './author-info.js'; // gets all the labelled/named exports as a single object from author-info.js

functions.info();
functions.funFact();

console.log('Name = %s', authorName);
console.log('Personal email = %s', email.personal);
console.log('Official email = %s', email.official);
console.log('Phone numbers = %s', a.authorPhones);
