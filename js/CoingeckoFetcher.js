// reponsible for fetching the API data and proccessing it;
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=30&page=1&sparkline=false

const geckoUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"; 

class CoingeckoFetcher{
    constructor(_url){
        this.url = _url;
    }

    async getAllData(){
        let response = await fetch(this.url);
        let allData = response.json();

        return await allData;
    };

    async getCryptosList(){
        // gets the name of the cryptos
        let cryptosList = [];
        let allData = await this.getAllData();

        allData.forEach(crypto => {
            cryptosList.push(crypto.name);
        });

        return cryptosList;
    };

    async cryptoSearcher(_cryptoName){
        this.cryptoName = _cryptoName;
        let cryptoList = await this.getAllData();

        for(let crypto of cryptoList){
            if(crypto.name.toUpperCase() == this.cryptoName.toUpperCase()){
                let results = {
                    'price': crypto.current_price,
                    'market_cap': crypto.market_cap,
                };
                return results;
            };
        };
    };
};