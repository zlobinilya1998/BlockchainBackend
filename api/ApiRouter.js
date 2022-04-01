import {Router} from "express";
import BlockchainRouter from "./BlockchainRouter.js";
import EmailRouter from "./EmailRouter.js";
import UserRouter from "./UserRouter.js";
import authMiddleware from "../middleware/authMiddleware.js";
import AuthRouter from "./AuthRouter.js";

const ApiRouter = Router();

ApiRouter.use('/bc',authMiddleware, BlockchainRouter);
ApiRouter.use('/email', EmailRouter);
ApiRouter.use('/user', UserRouter);
ApiRouter.use('/auth', AuthRouter);
export default ApiRouter;
