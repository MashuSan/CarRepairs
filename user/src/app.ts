import * as express from "express";
//import {Request, Response} from "express";

const app = express();
/*
app.get("/tasks", async function(req: Request, res: Response) {
    const tasks = await taskRepository.find();
    res.json(tasks);
    res.send('hello world');
});*/

app.listen(3000);


