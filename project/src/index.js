import express from "express";
import userRoutes from "./routes/user.js";
// import bodyparser from "body-parser";
const app = express();
const port = 4000;

app.use(express.json());
app.use("/", userRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
