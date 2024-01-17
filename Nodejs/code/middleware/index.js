import express from "express";

const app = express();

const productsArr = [
  {
    id: "1",
    name: "nokia",
    price: "500",
    desc: "sadasfaffsadfsdgfdgfdhsgh",
  },
  {
    id: "2",
    name: "samsung",
    price: "1000",
    desc: "sadasfaffsadfsdgfdgfdhsgh",
  },
  {
    id: "3",
    name: "qmobile",
    price: "800",
    desc: "sadasfaffsadfsdgfdgfdhsgh",
  },
  {
    id: "4",
    name: "apple",
    price: "2000",
    desc: "sadasfaffsadfsdgfdgfdhsgh",
  },
  {
    id: "5",
    name: "oneplus",
    price: "900",
    desc: "sadasfaffsadfsdgfdgfdhsgh",
  },
];

app.use((req, res, next) => {
  req.studentName = "Haroon";
  console.log("main hun middleware");
  next();
});
app.use((req, res, next) => {
  console.log(req.studentName, "====>> dusra middle ware , student 1");
  req.studentName2 = "AJ";
  console.log("main hun middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("yeh meri / ki api hai");
});
app.get("/products", (req, res) => {
  res.json({
    status: true,
    data: productsArr,
  });
});
app.get("/products/:id", (req, res) => {
  console.log(req.studentName, "===>> meri api, student 1");
  console.log(req.studentName2, "===>> meri api, student 2");
  console.log(req.params, "===>> request params");
  const findProd = productsArr.find((prod) => {
    return prod.id === req.params.id;
  });
  if (!findProd)
    return res.json({
      status: false,
      message: "No Data found",
    });
  console.log(findProd, "===>> findProd");
  res.json({
    status: true,
    data: findProd,
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("main chal gaya " + PORT);
});
