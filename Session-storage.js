// sessionStorage.setItem("user", "Saiful");
// sessionStorage.setItem("user2", "Saiful Islam");

// // const item = sessionStorage.getItem("user");
// // console.log(item);

// sessionStorage.clear();

const user = { id: "101", name: "Saiful" };
sessionStorage.setItem("user", JSON.stringify(user));

const userInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);
