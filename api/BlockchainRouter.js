import {Router} from "express";
import {HttpError, OK} from "../helper.js";
import {BlockchainService} from "../services/BlockchainService.js";

const BlockchainRouter = Router();

BlockchainRouter.get('/symbols', async (req, res) => {
    try {
        const symbols = await BlockchainService.getSymbols();
        if (Object.keys(symbols).length) return OK(symbols,res)
        HttpError(500,'Ошибка сервера', res)
    } catch (e) {
        HttpError(500,'Ошибка сервера', res)
    }

})
BlockchainRouter.get('/symbols/:symbol', async (req, res) => {
    const { symbol } = req.params;
    try {
        const symbols = await BlockchainService.getSymbol(symbol);
        return OK(symbols,res);
    } catch (e) {
        HttpError(404,'Информация по символу не найдена', res)
    }

})
BlockchainRouter.get('/tickers', async (req, res) => {
    try {
        const tickers = await BlockchainService.getTickers();
        if (tickers.length) return OK(tickers,res);
        HttpError(404,'Tickers not found', res)
    } catch (e) {
        HttpError(500,'Ошибка сервера', res)
    }

})
BlockchainRouter.get('/tickers/:symbol', async (req, res) => {
    const { symbol } = req.params;
    try {
        const tickers = await BlockchainService.getTickersForSymbol(symbol);
        return OK(tickers,res);
    } catch (e) {
        HttpError(500,'Ошибка сервера', res)
    }

})
BlockchainRouter.get('/getOrderBook/:currency', async (req, res) => {
    const { currency } = req.params;
    try {
        const orders = await BlockchainService.getOrderBook(currency);
        if (orders.bids.length) return OK(orders,res);
        HttpError(500,'По данному запросу не найдены аукционы', res)
    } catch (e) {
        HttpError(500,'Ошибка сервера', res)

    }

})

export default BlockchainRouter;
