import express from 'express';
import BlockchainRouter from "./BlockchainRouter.js";
import fetch from "node-fetch";
globalThis.fetch = fetch;

const PORT = 5000;
const app = express();

app.use(express.json())
app.use('/api', BlockchainRouter)

function startApp(){
    try {
        app.listen(PORT,() => console.log('server listen on port ',PORT))
    } catch (e) {
        startApp()
        console.log(e)
    }
}
startApp()




