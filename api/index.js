// import express from 'express';
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





const app = require('express')();
const { v4 } = require('uuid');

app.get('/api', (req, res) => {
    const path = `/api/item/${v4()}`;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
    const { slug } = req.params;
    res.end(`Item: ${slug}`);
});

module.exports = app;
