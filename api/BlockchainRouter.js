import {Router} from "express";
import {OK} from "../helper.js";
import {BlockchainService} from "../services/BlockchainService.js";

const BlockchainRouter = Router();

BlockchainRouter.get('/symbols', async (req, res) => {
    try {
        const symbols = await BlockchainService.getSymbols();
        if (Object.keys(symbols).length) return OK(symbols,res)
        res.status(500).send('Ошибка сервера')
    } catch (e) {
        res.status(500).send('Ошибка сервера')
    }

})

export default BlockchainRouter;
