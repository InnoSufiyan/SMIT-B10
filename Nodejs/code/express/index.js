import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Salaam");
});
app.get("/toffee", (req, res) => {
  res.send("Salaam Toffee khaeyga kya");
});
app.get("/cheeps", (req, res) => {
  res.send("Salaam cheeps khaeyga kya");
});

app.listen(8000, () => {
  console.log("Dukaan khul gai");
});
