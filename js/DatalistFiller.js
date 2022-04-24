// @ts-check
// fills the HTML datalist element, for ux purposes;
class DatalistFiller{

    constructor(_list, _datalistElement){
        this.list = _list;
        this.datalistElement = _datalistElement
    }

    async appendOn(){
        let assetsList = this.list;

        assetsList.forEach((asset) => {
          let item = document.createElement("option");
          item.value = asset;
          this.datalistElement.appendChild(item);
        });
    };

};