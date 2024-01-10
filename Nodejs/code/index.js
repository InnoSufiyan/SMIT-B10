const http = require("http");
const url = require("url");

const PORT = 8000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/toffee") {
    res.end("Salaam toffee khaeyga kya");
  } else if (req.url == "/freshup") {
    res.end("Salaam fresh up khaeyga kya");
  } else {
    res.writeHead(404);
    res.end("Hamarey pass nai hai");
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log("haan bhaee server chal raha hai aur port ka number hai " + PORT);
});
