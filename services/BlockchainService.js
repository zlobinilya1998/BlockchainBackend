import {fetchUrl} from "../helper.js";

export class BlockchainService {
    static baseUrl = 'https://api.blockchain.com/v3/exchange';

    static async getSymbols(){
        return await fetchUrl(this.baseUrl + '/symbols')
    }
    static async getSymbol(symbol){
        return await fetchUrl(this.baseUrl + `/symbols/${symbol}`);
    }
    static async getTickersForSymbol(symbol){
        return await fetchUrl(this.baseUrl + `/tickers/${symbol}`);
    }
    static async getOrderBook(currency){
        return await fetchUrl(this.baseUrl + `/l2/${currency}`)
    }
    static async getTickers(){
        return await fetchUrl(this.baseUrl + '/tickers');
    }
    static async getSymbolsList() {
        let list = await this.getSymbols();
        list = Object.keys(list).sort().map(item => ({
            text: item,
            value: item,
        }));
        return list;
    }
}
