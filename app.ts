import express from "express";

import todoRoutes from "./routes/todos";

import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())

app.use(todoRoutes);

app.listen({ port: 3000 });
