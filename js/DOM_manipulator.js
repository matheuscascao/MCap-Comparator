const resultBox = document.querySelector("#resultsBox");

class DOM_manipulator{
    constructor(){
    }

    async appendResult(dataObj, assetAName, assetBName){
        let obj = await dataObj;
        resultBox.innerHTML += 
        `
        <div class="resultElement">
            <h2 class="resultsPrice"><span class="boldText">${obj.price}$</span> would be the price</h2>

            <p class="resultsText">of <span class="boldText">${assetAName}</span> with the marketcap of <span class="boldText"> ${assetBName} (${parseInt(obj.bMarketcap)}$)</span></p>
        </div>
        `;
    };
};