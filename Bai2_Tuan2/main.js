// GET
async function getUser() {
  try {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  } catch (error) {
    console.error(error);
  }
}

getUser();

// CREATE
async function careteUser() {
  try {
    const dataPost = {
      userId: 1,
      id: 1,
      title: "Demo create",
      body: "Demo create",
    };
    const response = await axios
      .post("https://jsonplaceholder.typicode.com/posts", dataPost)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  } catch (error) {
    console.error(error);
  }
}

careteUser();

// DELETE
async function deleteUser() {
  try {
    const response = await axios
      .delete("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => console.log("Xoa thanh cong"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.error(error);
  }
}

deleteUser();

// UPDATE
async function updateUser() {
  const dataUpdate = {
    userId: 1,
    id: 1,
    title: "Demo update",
    body: "Demo update",
  };
  try {
    const response = await axios
      .put("https://jsonplaceholder.typicode.com/posts/1", dataUpdate)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  } catch (error) {
    console.error(error);
  }
}

updateUser();
