const resultBox = document.querySelector("#resultsBox");

class DOM_manipulator{
    constructor(){
    }

    async appendResult(dataObj, assetAName, assetBName){
        resultBox.innerHTML = '';
        let obj = await dataObj;
    
        //checks if the right data comes to the DOM manipulator module.
        if(!Object.is(NaN, obj.price)){
            resultBox.innerHTML +=
            `
            <div class="resultElement">
                <h2 class="resultsPrice"><span class="boldText">${obj.price.toFixed(2)}$</span> would be the price</h2>
                <p class="resultsText">
                    of <span class="boldText">${assetAName}</span> with the marketcap of <span class="boldText"> ${assetBName} (${parseInt(obj.bMarketcap.toFixed(2))}$)</span>;
                </p>
                </br>
                <p class="resultsText">
                    The price is equivalent to <span class="boldText">${(obj.multiplier*100).toFixed(2)}%</span> of the original. 
                </p>
            </div>
            `;
        }else{
            resultBox.innerHTML +=
            `
            <div class="resultElement">
                <h2 class="resultsPrice"><span class="boldText">Asset not found!</span></h2>
            </div>
            `;
        };

    };
};