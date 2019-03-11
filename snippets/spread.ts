// With Arrays
const salad: string[] = ['lettuce', 'tomato', 'onions'];
const burger: string[] = ['meat', 'bread', ...salad];
console.log(burger);
// [ 'meat', 'bread', 'lettuce', 'tomato', 'onions' ]

// With Objects
const config: object = {env: 'prod', path: '/'};
const extendedConfig: object = {port: 9000, ...config};

console.log(extendedConfig);
// { port: 9000, env: 'prod', path: '/' }
