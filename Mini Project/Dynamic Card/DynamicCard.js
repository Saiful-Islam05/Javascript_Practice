//Dummy Data
// const posts = [
//   {
//     title: "This is title1",
//     body: "This is body1",
//   },

//   {
//     title: "This is title2",
//     body: "This is body2",
//   },
//   {
//     title: "This is title3",
//     body: "This is body3",
//   },

//   {
//     title: "This is title4",
//     body: "This is body4",
//   },
//   {
//     title: "This is title5",
//     body: "This is body5",
//   },

//   {
//     title: "This is title6",
//     body: "This is body6",
//   },

//   {
//     title: "This is title7",
//     body: "This is body7",
//   },

//   {
//     title: "This is title8",
//     body: "This is body8",
//   },
// ];

/* <div class="post">
<h4 class="post-title">Post title 1</h4>
<p class="post-body">post description 1</p>
</div> */

//Fetch Data
const fetchData = async (config) => {
  try {
    const res = await axios(config);
    return res.data;
  } catch (error) {
    throw Error("Data is not fetch");
  }
};

Selection;
const postsElement = document.querySelector(".posts");

const loadAllData = async () => {
  const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
  posts.map((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
        <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>
    `;
    postsElement.appendChild(postElement);
  });
};

loadAllData();
