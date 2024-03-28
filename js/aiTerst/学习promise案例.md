Sure, here's an example of using promises in JavaScript:

```javascript
// Create a function that returns a promise
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    // Simulate fetching user data from an API
    setTimeout(() => {
      const userData = {
        id: userId,
        username: "exampleUser",
        email: "user@example.com"
      };
      resolve(userData);
    }, 1000); // Simulate 1 second delay
  });
}

// Using the promise function
fetchUserData(123)
  .then(user => {
    console.log("User data:", user);
  })
  .catch(error => {
    console.error("Error fetching user data:", error);
  });
```
In this example, the `fetchUserData` function returns a promise that simulates fetching user data. We then use the promise with `.then` to handle the resolved value and `.catch` to handle any errors.