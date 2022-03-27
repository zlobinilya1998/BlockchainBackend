import {Router} from "express";
import BlockchainRouter from "./BlockchainRouter.js";

const ApiRouter = Router();

ApiRouter.use('/bc', BlockchainRouter)

export default ApiRouter;
