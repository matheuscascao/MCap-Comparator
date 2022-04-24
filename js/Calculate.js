class Calculate{
    constructor(_asset, _cryptoList){
        this.asset = _asset;
        this.cryptoList = _cryptoList;
    };

    verifyAsset(){
        // return a value to categorize an asset as an crypto or stock
        if(this.cryptoList.includes(this.asset)){
            return 'crypto';
        } else{
            return 'stock';
        };
    };

    async getData(){
        if(this.verifyAsset() == 'crypto'){
            // return asset price if it is a crypto
            let cryptData = new CoingeckoFetcher(geckoUrl);
            let crypInfo = await cryptData.cryptoSearcher(this.asset);
            return crypInfo;
        } else{
            // return asset price if it is a stock
            let stockData = new StockFetcher(this.asset);
            let stockInfos = await stockData.getStockInfos();
            return stockInfos;
        };
    };

    static async calculateMultiplier(_assetAMCap, _assetBMCap, _assetAPrice){
        // return the "multiplier"
        let assetAMCap =  await _assetAMCap;
        let assetBMCap =  await _assetBMCap;
        let assetAPrice =  await _assetAPrice;

        let mult = parseInt(assetBMCap)/ parseInt(assetAMCap);
        let multipliedPrice = mult * parseInt(assetAPrice);
        let marketcap = parseInt(assetBMCap);

        let result = {
            'price': multipliedPrice,
            'multiplier': mult,
            'bMarketcap': marketcap,
        };

        return result;
    };

};
