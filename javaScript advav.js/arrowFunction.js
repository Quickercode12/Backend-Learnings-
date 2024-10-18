// syntex of the arrow function

//(parameters) => {/

// body

// }

// addition of the two  number by the arrow function
let add = (a, b) => {
  return a + b;
};

// calling the function
console.log(add(5, 5)); // output 12

// check in array number is presented or not
// this is sync function sync function always executed the code line by line if any function if taking a time then it is wait for her example interval throwing if you are making etc

const arr = [2, 3, 4, 6, 7]; // all the number is unique
const target = 10;

let check = (array, target) => {
  for (let i of array) {
    if (i === target) {
      return true;
    }
  }
  return false;
};

if (check(arr, target)) {
  console.log("your is present");
} else {
  console.log("your number is not");
}

// sync arrowFunction
async function added(a, b) {
  let sum = a + b;

  if (sum % 2 === 0) {
    const setIntervalId = setInterval(() => {
      console.log("packet is sending ...");
    }, 2000);
    console.log("Your are processing state");

    // optional: clear the interval after a certain condition or time
    setTimeout(() => {
      // clearInterval is build-in function to clear the time
      clearInterval(setIntervalId);
      console.log("Processing completed, Your packet send clear");
    }, 10000);
  } else {
    console.log("packet is not sending ...");
  }
}

added(10, 6);
