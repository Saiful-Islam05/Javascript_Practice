// console.clear();
// const makeRequest = async (url, method, data) => {
//   try {
//     const result = await $.ajax({
//       url: url,
//       method: method,
//       data: data,
//     });
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const deleteData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE", {
//     id: 1,
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }).then((response) => console.log(response));
// };

// deleteData();

// const getData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1", "GET").then(
//       (response) => console.log(response)
//     );
//   };

// const createData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/", "POST", {
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }).then((response) => console.log(response));
//   };

// const putData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
//       id: 1,
//       title: "foo",
//       body: "bar",
//       userId: 1,sssssssssssssssssss
//     }).then((response) => console.log(response));
//   };s

//   putData();

//Local Storage
//SetItem(Key,Value)
/*
localStorage.setItem("userName", "Saiful Islam");
localStorage.setItem("Password", "458838339");
*/

//GetItem(Key)
/*
const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("Password");
console.log(userName, userPassword);
*/

//RemoveItem(Key)
// localStorage.removeItem("userName");
// localStorage.removeItem("Password");

//setItem with array value(key,value)
const countries = ["Bangladesh,Nepal,Bhutan,Palistine"];
localStorage.setItem("countries", JSON.stringify(countries));

//GetItem(Key)
const countriesList = JSON.parse(localStorage.getItem("countries"));
console.log(countries);
