// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// RED-GREEN-REFACTOR process

// basic jest test 

// describe("greeter", () => {
//   it("returns a generic greeting", () => {
//     expect(greeter()).toEqual("Hello, LEARN student!")
//   })
// })

// Write the test
// See the test fail
// Write the code
// See the test pass
// Refactor, if necessary

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fib", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]

    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fib(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// b) Create the function that makes the test pass.

// pseudo code: 
// input: number greater than 2
// output/return: array with a length of the input
// name of function: fib
// function took in a parameter called number
const fib = (number) => {
// fibi sequence begins with two values. stored two values in an array
  const arr = [1, 1];
// used for loop to begin the count at the index of the next value needed, used the number to stop the for loop in incroments of 1
  for (let i = 2; i < number; i++) {
// we use the push method to add values to the end of the array and we get the next value by adding the previous 2 values and we get those two values by using bracket notation
    arr.push(arr[i - 1] + arr[i - 2]);
// console.log(arr) - if i wanted to see data(before return)
  }
  return arr;
// return array outisde of for loop to allow the for loop to complete itself
};


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("addArray", () => {
    it("takes in an object and returns an array of the values sorted from least to greatest", () => {
      expect(addArray(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
      expect(addArray(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
    })
  })

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

// b) Create the function that makes the test pass.

// pseudo code: 
// input: function that takes in an object 
// output/return: array sorted from least to greatest
// function took in an object and returned an array
// used the .sort method to sort the objects

const addArray = (object) => {
  return object.values(object).sort((a, b) => a - b)
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("greeter", () => {
    it("returns a generic greeting", () => {
      expect(greeter(accountTransactions1)).toEqual([100, 83, 60, 51])
      expect(greeter(accountTransactions2)).toEqual([250, -89, 100, -96])
      expect(greeter(accountTransactions3)).toEqual([])
  })
})
const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// pseudo code: 
// input: function that takes in an array 
// output/return: array with accumalting sum
// used the add method to create this function

const addArr = (array) => {
  return array.values(array).add(a + b)
}