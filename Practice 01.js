// const taskOne = () => {
//   console.log("Task1");
// };

// const dataLoading = () => {
//   console.log("Task2.Data Loading");
// };
// const taskTwo = () => {
//   setTimeout(dataLoading, 4000);
// };
// const taskThree = () => {
//   console.log("Task3");
// };
// const taskFour = () => {
//   console.log("Task4");
// };
// const taskFive = () => {
//   console.log("Task5");
// };

// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();

// function square(x) {
//   console.log(`square of ${x} = ${x * x}`);
// }

// // const y = square;
// // y(4);

// function higherOrderFunction(num, callback) {
//   callback(num);
// }

// higherOrderFunction(8, square);

// const taskOne = (callback) => {
//   console.log("Task1");
//   callback();
// };

// const taskTwo = (callback) => {
//   setTimeout(() => {
//     console.log("Task2. Data Loading");
//     callback();
//   }, 3000);
// };
// const taskThree = (callback) => {
//   console.log("Task3");
//   callback();
// };
// const taskFour = (callback) => {
//   console.log("Task4");
//   callback();
// };
// const taskFive = () => {
//   console.log("Task5");
// };

// taskOne(() => {
//   taskTwo(() => {
//     taskThree(() => {
//       taskFour(() => {
//         taskFive();
//       });
//     });
//   });
// });

// console.log("Hi");
// document.querySelector("button").addEventListener("click", () => {
//   console.log("Buttton is clicked");
// });

// console.log("Bye");

//How to create Promise-pending, resolve, reject;
/*
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Completed Promise 1");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Completed Promise 2");
  }, 2000);
});

Promise.race([promise1, promise2]).then((res) => console.log(res));
*/

// const taskOne = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Task 1 is Completed");
//   });
// };

// const taskTwo = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Task 2 is completed");
//     }, 3000);
//   });
// };

// const taskThree = () => {
//   return new Promise((resolve, reject) => {
//     reject("Task 3 is not completed");
//   });
// };

// const taskFour = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Task 4 is completed");
//   });
// };

// taskOne()
//   .then((res) => console.log(res))
//   .then(taskTwo)
//   .then((response) => console.log(response))
//   .then(taskThree)
//   .then((response) => console.log(response))
//   .then(taskFour)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// const callAllTasks = async () => {
//   try {
//     const t1 = await taskOne();
//     console.log(t1);
//     const t2 = await taskTwo();
//     console.log(t2);
//     const t3 = await taskThree();
//     console.log(t3);
//     const t4 = await taskFour();
//     console.log(t4);
//   } catch (error) {
//     console.log(error);
//   }
// };

// callAllTasks();

// event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
// Function - open(), send(),setRequestHeader().

/*
console.clear();

const makeRequest = (method, url, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
      let data = xhr.response;
      console.log(JSON.parse(data));
    };

    xhr.onerror = () => {
      console.log("Error is here");
    };

    xhr.send(JSON.stringify(data));
  });
};

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts").then((res) =>
    console.log(res)
  );
};

// const updateSingleData = () => {
//   makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
//     title: "This is Changed",
//   });
// };

// const deleteData = () => {
//   makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
// };

getData();
*/

// By using fetch.
//1
//console.clear();
/*
fetch("https://jsonplaceholder.typicode.com/possts/101")
  .then((response) => {
    if (!response.ok) {
      const message = `Error: ${response.status}`;
      throw new Error(message);
    }
    return response.json();
  })

  .then((response) => console.log(response))
  .catch((error) => console.log(error));
*/

//Post 2/ update
/*
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((res) => {
    if (!res.ok) {
      const message = `Error: ${res.status}`;
      throw new Error(message);
    }
    return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
  */

//Update 3
/*
const makeRequest = async (url, config) => {
  const res = await fetch(url, config);
  if (!res.ok) {
    const message = `Error: ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
};

const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};


deleteData();
/*
// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
// };

// getData();



