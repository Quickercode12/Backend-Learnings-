// async and await function
// NOTE :   async functions: They allow you to write functions that return a promise. When you call an async function, it returns a promise that can be resolved or rejected.

//await keyword: This is used inside an async function to wait for a promise to resolve. It pauses the execution of the function until the awaited promise resolves.

// Example -1

async function firstFunction() {
  // Simulate some async work
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("First function resolved");
    }, 1000);
  });
}

async function secondFunction() {
  const result = await firstFunction(); // Wait for firstFunction to resolve
  console.log(result); // Logs "First function resolved"
}

secondFunction(); // Calls secondFunction and starts the async process

// Example 2: Fetching Data and Logging Results

async function fetchData() {
  // Simulate an API request with a delay of 2 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe", age: 25 });
    }, 2000);
  });
}

async function processData() {
  console.log("Fetching data...");

  // Wait for fetchData to resolve
  const data = await fetchData();

  console.log("Data fetched:", data);

  // Process the data further
  const message = `User ${data.name} is ${data.age} years old.`;
  return message;
}

async function main() {
  const result = await processData(); // Await the result of processData
  console.log("Processed Result:", result);
}

main(); // Starts the whole async flow
