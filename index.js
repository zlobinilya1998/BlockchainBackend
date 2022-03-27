import express from "express";
import fetch from "node-fetch";
import cors from 'cors';
import ApiRouter from "./api/ApiRouter.js";

globalThis.fetch = fetch;
const PORT = process.env.PORT || 5000;
const app = express();


app.use(cors())
app.use(express.json())
app.use('/api', ApiRouter)

function startApp(){
    try {
        app.listen(PORT,() => console.log('server listen on port ',PORT))
    } catch (e) {
        console.log(e)
    }
}
startApp()




