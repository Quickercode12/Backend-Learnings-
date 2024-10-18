// callback function of the syntex

// STETEMENT : In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after some operation is completed. The syntax for using a callback function can vary depending on how it is implemented, but here’s a general structure

// NOTE : basic syntex of the callback function

// function outerFunction(callback) {
//   //Perform some operations
//   console.log("Outer function is executing.");

//   // Call the callback function
//   callback();
// }

// function innerFunction() {
//   console.log("Callback function is executed.");
// }

// // Pass the innerFunction as a callback to outerFunction
// outerFunction(innerFunction);

// with some example through good practies

// Example -1
//  with parameters

function outerfunction(firstcallBack, secondcallBack) {
  try {
    let first = 4;
    let second = 2;

    let sum = first + second;
    let sub = first - second;

    firstcallBack(sum);
    secondcallBack(sub);
  } catch (error) {
    console.log("An erroe occurred: ", error);
  }
}

// function firstFunction(sum) {
//   console.log("Two number of the sum: " + sum);
// }

// function secondFunction(sub) {
//   console.log("Two number of the sub", sub);
// }

outerfunction(
  (sum) => {
    console.log("Two number of the sum: " + sum);
  },
  (sub) => {
    console.log("Two number of the sub", sub);
  }
);

// Example : 2

function fetchData(callback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const error = null; // or some error condition
    const data = {
      id: 1,
      name: "Shiv",
      age: "infinit",
    };

    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  }, 1000);

  console.log("Your fetching data is processing ...");
}

fetchData((error, data) => {
  if (error) {
    console.error("Error fetching data:", error);
  } else {
    console.log("Fetched data:", data);
  }
});
