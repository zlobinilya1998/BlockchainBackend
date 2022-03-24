import {Router} from "express";
import {ErrorHandler} from "../helper.js";
import {BlockchainService} from "../services/BlockchainService.js";

const BlockchainRouter = Router();

BlockchainRouter.get('/bc/symbols', async (req, res) => {
    const cb = async () => await BlockchainService.getSymbols();
    await ErrorHandler(cb, res);
})

export default BlockchainRouter;
