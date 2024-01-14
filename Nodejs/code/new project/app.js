import express from "express";
import fs from "fs";

const app = express();

app.use(express.json());

let users = [];

app.post("/signup", (req, res) => {
  const { userEmail, userName, userPassword } = req.body;
  if (!userEmail || !userPassword || !userName)
    res.status(400).json({
      status: false,
      message: "All Fields are required",
    });
  fs.readFile("./users.js", "utf-8", (err, data) => {
    const parsedData = JSON.parse(data);
    users = parsedData;
    users.push({
      userEmail,
      userPassword,
      userName,
    });
    fs.writeFile("./users.js", JSON.stringify(users), "utf-8", (err) => {
      if (!err)
        res.status(200).json({
          status: "true",
          message: "User signedup successfully",
        });
    });
  });
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    res.status(400).json({
      status: false,
      message: "All fields are required",
    });

  fs.readFile("./users.js", "utf-8", (err, data) => {
    const parsedData = JSON.parse(data);
    users = parsedData;
    const foundUser = users.find((user) => user.userEmail === email);
    if (foundUser) {
      if (foundUser.userPassword === password) {
        return res.json({
          status: true,
          message: "Logged in successfully",
          data: foundUser,
        });
      } else {
        return res.json({
          status: false,
          message: "Credentials are not valid",
        });
      }
    } else {
      return res.json({
        status: false,
        message: "No User Found",
      });
    }
  });
});
app.get("/users", (req, res) => {
  fs.readFile("./users.js", "utf-8", (err, data) => {
    const parsedData = JSON.parse(data);
    users = parsedData;
    res.status(200).json({
      status: true,
      data: users,
    });
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started at port number ${PORT}`);
});
