const [meat, bread, ...vegan] = [
  'meat',
  'bread',
  'lettuce',
  'tomato',
  'onions'
];
console.log(meat); // meat
console.log(bread); // bread
console.log(vegan); // [ 'lettuce', 'tomato', 'onions' ]
