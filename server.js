import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config({ path: "Config.env" });

app.get("/", (req, res) => {
  res.send("You also can see the Change here !  ");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});
