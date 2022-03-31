import {Router} from "express";
import {HttpError, OK} from "../helper.js";
import {BlockchainService} from "../services/BlockchainService.js";
import ApiError from "../exceptions/ApiError.js";

const BlockchainRouter = Router();

BlockchainRouter.get('/symbols', async (req, res,next) => {
    try {
        const symbols = await BlockchainService.getSymbols();
        if (Object.keys(symbols).length) return OK(symbols,res)
        HttpError(500,'Ошибка сервера', res)
    } catch (e) {
        next(e);
    }
})
BlockchainRouter.get('/symbolsList', async (req, res,next) => {
    try {
        const list = await BlockchainService.getSymbolsList();
        return OK(list,res)
    } catch (e) {
        next(e);
    }
})
BlockchainRouter.get('/symbols/:symbol',async (req, res,next) => {
    const { symbol } = req.params;
    try {
        const symbols = await BlockchainService.getSymbol(symbol);
        return OK(symbols,res);
    } catch (e) {
       next(e)
    }
})
BlockchainRouter.get('/tickers', async (req, res, next) => {
    try {
        const tickers = await BlockchainService.getTickers();
        if (tickers.length) return OK(tickers,res);
        return new ApiError.BadRequest('Данных по символу не найдено')
    } catch (e) {
        next(e);
    }

})
BlockchainRouter.get('/tickers/:symbol',async (req, res,next) => {
    const { symbol } = req.params;
    try {
        const tickers = await BlockchainService.getTickersForSymbol(symbol);
        return OK(tickers,res);
    } catch (e) {
        next(e);
    }

})
BlockchainRouter.get('/getOrderBook/:currency', async (req, res, next) => {
    const { currency } = req.params;
    try {
        const orders = await BlockchainService.getOrderBook(currency);
        if (orders.bids.length) return OK(orders,res);
        HttpError(500,'По данному запросу не найдены аукционы', res)
    } catch (e) {
        next(e);
    }

})

export default BlockchainRouter;
