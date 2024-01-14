import express from "express";
import fs from "fs";

const app = express();

//samjho yeh data database se aya hai

app.use(express.json());

let data2;

// app.get(route, callbackFunction)
//Get Api
app.get("/api/jobs", (req, res) => {
  fs.readFile("./jobsData.js", "utf-8", (err, data) => {
    const parsed = JSON.parse(data);
    console.log(parsed, "=====>> parsed");
    data2 = parsed;
  });
  res.status(200).json({
    data: data2,
  });
});

// app.get(route, callbackFunction)
//Post Api
app.post("/api/jobs", (req, res) => {
  //designation salary location description
  console.log(req.body, "====>>> req");
  data2.push(req.body);
  fs.writeFile("./jobsData.js", JSON.stringify(data2), "utf-8", (err) => {
    if (!err) res.send("post api chal gai");
  });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log("server started on port number " + PORT);
});
