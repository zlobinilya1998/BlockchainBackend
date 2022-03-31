import {Router} from "express";
import BlockchainRouter from "./BlockchainRouter.js";
import EmailRouter from "./EmailRouter.js";
import UserRouter from "./UserRouter.js";

const ApiRouter = Router();

ApiRouter.use('/bc', BlockchainRouter)
ApiRouter.use('/email', EmailRouter)
ApiRouter.use('/user', UserRouter)
export default ApiRouter;
