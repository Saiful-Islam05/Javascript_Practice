// console.clear();

// const makeRequest = async (config) => {
//   return await axios(config);
// };

// const deleteData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "delete",
//     data: JSON.stringify({
//       title: "Saiful Islam",
//       body: "basafsafr",
//       userId: 1,
//     }),
//   })
//     .then((response) => console.log(response.data))
//     .then((error) => console.log(error));
// };

// deleteData();

// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => console.log(response))
//     .then((error) => console.log(error));
// };

// const createData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "POST",
//     data: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }),
//   })
//     .then((response) => console.log(response))
//     .then((error) => console.log(error));
// };

//createData();

// const updateData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "PUT",
//     data: JSON.stringify({
//       title: "Saiful Islam",
//       body: "basafsafr",
//       userId: 1,
//     }),
//   })
//     .then((response) => console.log(response.data))
//     .then((error) => console.log(error));
// };

// updateData();
