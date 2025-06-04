// task to complete a code playground

// 1. Destructure an object
const user = { name: 'John', age: 25, email: 'john@example.com' };

const { name, email } = user;
console.log(user)

// 2. Use async/await to fetch mock data
const getData = async () => {
    return await Promise.resolve('Data loaded');
};

getData().then(data => console.log(data));

// 3. Use .reduce to sum numbers 
const nums = [1, 2, 3, 4];
const total = nums.reduce((acc, val) => acc + val, 0);
console.log(total);