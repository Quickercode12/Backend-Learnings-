const express = require("express");

const userData = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();

const Port = 2000;

// middleware
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route
// if user is coming at the root then i am showing the json(javascript object notation) data
app.get("/api", (req, res) => {
  res.send(userData);
});

app.get("/user", (req, res) => {
  // html data sending

  const html = `
        <ul>
            ${userData.map((data) => {
              return `<li>${data.first_name}</li>`;
            })}
        </ul>
    `;

  // we will send
  res.send(html);
});

// if we want that id through user json data then
app.get("/api/user/:id", (req, res) => {
  // get the id from the user
  const userId = Number(req.params.id);

  // then we will find
  const user = userData.find((user) => user.id === userId);

  return res.json(user);
});

app.post("/api/user", (req, res) => {
  const body = req.body;
  console.log("body", body);

  userData.push({ ...body, id: userData.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(userData), (err, data) => {
    return res.json({ status: "Sucess", id: userData.length + 1 });
  });
});

app.listen(Port, () => {
  console.log(`Server is running at ${Port}`);
});
