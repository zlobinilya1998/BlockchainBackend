import {fetchUrl} from "../helper.js";

export class BlockchainService {
    static baseUrl = 'https://api.blockchain.com/v3/exchange';

    static async getSymbols(){
        const res = await fetchUrl(this.baseUrl + '/symbols')
        return res;
    }
}
