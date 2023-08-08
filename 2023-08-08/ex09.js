let p1 = {
  name: 'Vinod Kumar',
  gender: 'Male',
  address: {
    city: 'Bangalore',
  },
};

let p2 = {
  name: 'Shyam sundar',
  gender: 'Male',
};

// `?.` is called optional chaining
console.log(`${p1.name} lives in ${p1.address?.city}`);
console.log(`${p2.name} lives in ${p2.address?.city}`);

console.log('end of script');
