import express, { Request, Response } from "express";
import "dotenv/config";
import jwt from "jsnowebtoken";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.post("/login", async (req: Request, res: Response) => {
  res.json({
    status: 200,
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
