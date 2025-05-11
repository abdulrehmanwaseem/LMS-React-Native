import express, { Request, Response } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.post("/login", async (req: Request, res: Response) => {
  const { signedToken } = req.body;
  const data = jwt.verify(signedToken, process.env.JWT_SECRET_KEY);
  if (data) {
    const isUserExits = null;
  }
  res.json({
    status: 200,
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
