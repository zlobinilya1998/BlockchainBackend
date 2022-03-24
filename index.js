// import BlockchainRouter from "../BlockchainRouter.js";
// import fetch from "node-fetch";
// import cors from 'cors';
//
// globalThis.fetch = fetch;
// const PORT = 5000;
// const app = express();
//
//
// app.use(cors())
// app.use(express.json())
// app.use('/api', BlockchainRouter)
//
// function startApp(){
//     try {
//         app.listen(PORT,() => console.log('server listen on port ',PORT))
//     } catch (e) {
//         startApp()
//         console.log(e)
//     }
// }
// startApp()




import express from 'express';
import product from "./api/product.js"
const app = express();

const PORT = process.env.PORT || 5050;

app.listen(PORT,() => {
    console.log('server been started on port:',PORT)
})

app.get('/api/product', product)
