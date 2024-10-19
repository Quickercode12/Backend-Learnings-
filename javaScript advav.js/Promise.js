// Example - 1 simple code to understand

const promise = new Promise((resolve, reject) => {
  const choise = true;

  if (choise === true) {
    resolve("Good choise");
  } else {
    reject("Bad choise");
  }
});

promise
  .then((data) => {
    console.log(`i agree your ${data}`);
  })
  .catch((error) => {
    console.log(`i am not agree your ${error}`);
  });

// Example -2 timeout with

const delayedPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Resolved after 3 seconds");
  }, 3000); // 3-second delay
});

// Handling the promise
delayedPromise.then((message) => {
  console.log(message); // Will print after 3 seconds
});

// Example -3 Using Good Practices

// Simulate fetching user data from an API
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "John Doe", age: 30 });
      } else {
        reject("Invalid user ID");
      }
    }, 2000); // Simulate network delay
  });
}

// Simulate fetching user posts from an API
function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve([
          { postId: 1, content: "Hello World!" },
          { postId: 2, content: "JavaScript is great!" },
        ]);
      } else {
        reject("No posts found for this user");
      }
    }, 1500); // Simulate network delay
  });
}

// Function to fetch both user data and posts concurrently
function fetchUserDetails(userId) {
  return Promise.all([fetchUserData(userId), fetchUserPosts(userId)])
    .then(([userData, userPosts]) => {
      return {
        user: userData,
        posts: userPosts,
      };
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      throw error; // Re-throw to allow further handling if needed
    });
}

// Usage
fetchUserDetails(1)
  .then((details) => {
    console.log("User Details:", details.user);
    console.log("User Posts:", details.posts);
  })
  .catch((error) => {
    console.log("Failed to fetch user details:", error);
  })
  .finally(() => {
    console.log("Completed fetching user details (success or fail).");
  });
