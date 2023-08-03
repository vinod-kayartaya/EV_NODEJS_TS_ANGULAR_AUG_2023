import * as fs from 'fs';

console.log('start of ex05 execution');

const filename =
  '/Users/vinod/Desktop/northwind-microservices/docker-compose.yml';

fs.readFile(filename, 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

console.log('end of ex05 execution');
