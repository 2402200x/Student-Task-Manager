console.log("script loaded hello");
let backendData = fetch("http://localhost:5000/todos");

backendData
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("this is done"));
