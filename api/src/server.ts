// import 'reflect-metadata';
// import "./database";
// import express from 'express';
// import { router } from './routes';

import { app } from "./app";

// const app = express();

// app.use(express.json());
// app.use(router);

/*
app.get("/", (request, response) => {
    return response.json({message: "Hello World NLW 4!"});
})

app.post("/", (request, response) => {
    return response.json({message: "Os dados foram salvos com sucesso!"});
})
*/

app.listen(3333, () => console.log("Server is running!"));
