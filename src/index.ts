import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "backend is running well",
  });
});

app.listen(3000, () => {
  console.log("backend is running on port 3000");
});
