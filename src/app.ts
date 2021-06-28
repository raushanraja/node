import express from "express";
import route from "./routes/auth";

const app: express.Application = express();
const port: number = 3000;

app.use(route);

app.listen(port, () => {
  console.log("Listening on port http://localhost:" + port);
});
