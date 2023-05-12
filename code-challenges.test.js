// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibResult1 = fib(fibLength1);
expect(fibResult1).toEqual([1, 1, 2, 3, 5, 8]);

const fibResult2 = fib(fibLength2);
expect(fibResult2).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);

// b) Create the function that makes the test pass.

const fib = (length) => {
  const arr = [1, 1];
  for (let i = 2; i < length; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
};


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

expect(addArr(studyMinutesWeek1)).toEqual([15,15,20,30,30,60,90])
expect(addArr(studyMinutesWeek2)).toEqual([10,15,20,45,60,65,100])

// b) Create the function that makes the test pass.

const addArr = (object) => {
  return object.values(object).sort((a, b) => a - b)
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []


const accountTransactions1 = [100, -17, -23, -9];
expect(accountTransactions1.reduce((acc, val) => acc + val, 0)).toEqual(151);

const accountTransactions2 = [250, -89, 100, -96];
expect(accountTransactions2.reduce((acc, val) => acc + val, 0)).toEqual(165);

const accountTransactions3 = [];
expect(accountTransactions3).toEqual([]);

// b) Create the function that makes the test pass.

function test() {
  const accountTransactions1 = [100, -17, -23, -9];
  const accountTransactions2 = [250, -89, 100, -96];
  const accountTransactions3 = [];

  const result1 = accountTransactions1.reduce((acc, curr) => acc + curr, 0);
  const result2 = accountTransactions2.reduce((acc, curr) => acc + curr, 0);

  expect(result1).toBe(100);
  expect(result2).toBe(165);
  expect(accountTransactions3).toEqual([]);
}