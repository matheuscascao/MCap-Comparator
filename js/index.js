// @ts-check
const datalistElementId = document.querySelector("#assetsList");
const button = document.querySelector("#calcSubmit");
const priceInput = document.querySelector("#assetPrice");
const mcapInput = document.querySelector("#assetMCap");
let geckoData = new CoingeckoFetcher(geckoUrl);

//appends data to the datalist element
async function appendAll(){
    let cryptosNameList = await geckoData.getCryptosList();

    let showCryptos = new DatalistFiller(cryptosNameList, datalistElementId);
    showCryptos.appendOn();
};
appendAll();

button.addEventListener('click', async () => {
    let cryptosNameList = await geckoData.getCryptosList();

    let priceElement = new Calculate(priceInput.value, cryptosNameList);
    let mcapElement = new Calculate(mcapInput.value, cryptosNameList);

    let assetAdata = await priceElement.getData();
    let assetBdata = await mcapElement.getData();

    let result = Calculate.calculateMultiplier(assetAdata.market_cap, assetBdata.market_cap, assetAdata.price);
    let append = new DOM_manipulator;

    append.appendResult(result, priceInput.value, mcapInput.value);
});
