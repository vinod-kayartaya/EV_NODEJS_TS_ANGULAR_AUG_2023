import readline from 'readline';
import process from 'process';

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question('What is your name? ', (answer: string) => {
  console.log(`Hello, ${answer}!`);
  r1.question('Where are you from? ', (answer: string) => {
    console.log(`How is weather in ${answer}?`);
    r1.close();
  });
});

let names: string[];
names = ['vinod', 'kumar'];

let cities: Array<string>;
cities = ['Bangalore', 'Mysore'];
