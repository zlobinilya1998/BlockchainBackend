import {Router} from "express";
import BlockchainRouter from "./BlockchainRouter.js";
import EmailRouter from "./EmailRouter.js";

const ApiRouter = Router();

ApiRouter.use('/bc', BlockchainRouter)
ApiRouter.use('/email', EmailRouter)

export default ApiRouter;
