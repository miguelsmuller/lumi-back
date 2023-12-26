import express from "express";
import cors from "cors";

import Routers from "./routers/Routers";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", Routers);

app.listen(3000, () => {
  console.log("Server Listening on PORT: 3000");
});
