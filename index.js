import express from "express";
import BlockchainRouter from "./api/BlockchainRouter.js";
import fetch from "node-fetch";
import cors from 'cors';

globalThis.fetch = fetch;
const PORT = process.env.PORT || 5000;
const app = express();


app.use(cors())
app.use(express.json())
app.use('/api', BlockchainRouter)

function startApp(){
    try {
        app.listen(PORT,() => console.log('server listen on port ',PORT))
    } catch (e) {
        console.log(e)
    }
}
startApp()




