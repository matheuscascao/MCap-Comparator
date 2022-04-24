// get's a ticket and fetches the stock data from the polygon api;
//https://api.polygon.io/v3/reference/tickers/BRK.A?apiKey=EGuuAu0c0S8NTGtE6UwnnfEnur9y6bT9

class StockFetcher{
    constructor(_stock){
        this.stock = _stock;
    }

    async getAllStockData(){
        let url = 'https://api.polygon.io/v3/reference/tickers/'+this.stock+'?apiKey=EGuuAu0c0S8NTGtE6UwnnfEnur9y6bT9';
        let response = await fetch(url);
        let allData = await response.json();
        
        return await allData;
    };

    async getStockInfos(){
        let stockData = await this.getAllStockData();
        let marketcap = stockData.results.market_cap;
        let shares = stockData.results.share_class_shares_outstanding;

        let price = marketcap/shares;

        let results = {
          'price': price,
          'market_cap': marketcap,
          'shares': shares,  
        };

        return results
    };
};