export class BlockchainService {
    static baseUrl = 'https://api.blockchain.com/v3/exchange';

    static async getSymbols(){
        const res = await fetch(this.baseUrl + '/symbols');
        return res.json();
    }
}
