import "reflect-metadata";
import {createConnection} from "typeorm";
import {Service} from "./entity/Service";
import {Request, Response} from "express";
import * as express from "express";
import * as bodyParser from  "body-parser";

const app = express();
app.use(bodyParser.json());
import cors = require('cors');
app.use(cors());

createConnection().then(async connection => {
    const taskRepository = connection.getRepository(Service);

    app.get('/services', async function(req: Request, res: Response){
        res.setHeader('Access-Control-Allow-Origin', '*');
        const service = await taskRepository.find();
        res.send(service);
    })

    app.get('/services/:id', async function(req: Request, res: Response){
        const results = await taskRepository.findOne(req.params.id);
        return res.send(results);
    })

    app.post("/services", async function(req: Request, res: Response) {
        const service = taskRepository.create(req.body);
        const results = await taskRepository.save(service);
        return res.send(results);
    });

    app.put("/services/:id", async function(req: Request, res: Response) {
        const service = await taskRepository.findOne(req.params.id);
        taskRepository.merge(service, req.body);
        const results = await taskRepository.save(service);
        return res.send(results);
    });

    app.delete("/services/:id", async function(req: Request, res: Response) {
        const results = await taskRepository.delete(req.params.id);
        return res.send(results);
    });

    app.listen(5000, function() {
        console.log("Application is up and running");
    });

}).catch(error => console.log(error));
