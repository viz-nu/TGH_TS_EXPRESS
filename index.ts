import express from "express";
const app: express.Express = express();
const port = 5000;
app.get("/", (req: express.Request, res: express.Response) => res.send("SERVER IS UP AND RUNNING"));
app.listen(port, () => console.log(`Server is running on port : ${port} `));
