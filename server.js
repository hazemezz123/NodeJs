import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("You also can see the Change here !  ");
});

app.listen(8001, () => {
  console.log("The app is running on port 8000");
});
