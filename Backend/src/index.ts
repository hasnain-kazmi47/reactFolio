// src/index.js
import express, { Express, Request, Response, urlencoded } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
import {router as aboutMeRouter} from "./routes/about-me-route"
import cors from 'cors';

dotenv.config();


const app: Express = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
const port = process.env.PORT || 3001;
const mongoDb:string =  "mongodb+srv://portfolio:portfolio@cluster-1.e8qicay.mongodb.net/"
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

const mongoConnection = async (mongoDb:string) => {
 await mongoose.connect(mongoDb);
 console.log("Connnected to mongo")

}
try {
   mongoConnection(mongoDb)
} catch (error) {
    console.log("MongosDb Error:",error)
}

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
app.use("/api",aboutMeRouter)

app.use(express.urlencoded({ extended: false }));
app.use(express.json());