let studentMarks: readonly [string, string, number]; // name, subject, gpa
studentMarks = ['Harish', 'Maths', 4.5];

// studentMarks.push(100);
// error TS2339: Property 'push' does not exist on type 'readonly [string, string, number]'.

console.log(studentMarks);

let moreStudentMarks: Array<readonly [string, string, number]>;
moreStudentMarks = [
  ['Akash', 'Maths', 4.1],
  ['Shyam', 'Physics', 4.4],
  ['Suresh', 'Physics', 4.8],
  ['Harish', 'Maths', 4.1],
];

// for (let i = 0; i < moreStudentMarks.length; i++) {
//   let st = moreStudentMarks[i];
//   console.log(`${i + 1}. ${st[0]} --> GPA ${st[2]} for ${st[1]}`);
// }

moreStudentMarks.forEach((st, i)=>{
    console.log(`${i + 1}. ${st[0]} --> GPA ${st[2]} for ${st[1]}`);
})