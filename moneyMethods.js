import itemNames from './bazaarItems.js';
import gemstoneMixtureCalc from './methodsMath.js';
const bazaarItemNames = itemNames;
// loadJSON method to open the JSON file.
function loadJSON(path, success, amountArg = null) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if (amountArg == null) {
          success(JSON.parse(xhr.responseText));
        }
        else {
          success(JSON.parse(xhr.responseText), amountArg);
        }
      }
      else {
        document.getElementById('GemstoneMixtureCostToCraft').innerHTML = 'Error: Data not Found';
      }
    }
}

function onLoadPrices(data) {
    const fineJadeBuyOrderPrice = data['products']["FINE_JADE_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineAmberBuyOrderPrice = data['products']["FINE_AMBER_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineSapphireBuyOrderPrice = data['products']["FINE_SAPPHIRE_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineAmethystBuyOrderPrice = data['products']["FINE_AMETHYST_GEM"]['sell_summary'][0]['pricePerUnit'];
    const sludgeJuiceBuyOrderPrice = data['products']["SLUDGE_JUICE"]['sell_summary'][0]['pricePerUnit'];

    const totalCost = Math.floor((4 * fineJadeBuyOrderPrice) + (4 * fineAmberBuyOrderPrice) + (4 * fineSapphireBuyOrderPrice) + (4 * fineAmethystBuyOrderPrice) + (320 * sludgeJuiceBuyOrderPrice));
    
    const gemstoneMixtureSellOfferPrice = Math.floor(data['products']["GEMSTONE_MIXTURE"]['buy_summary'][0]['pricePerUnit']);

    const gemstoneMixtureProfit = Math.floor(gemstoneMixtureSellOfferPrice - totalCost);
    document.getElementById("GemstoneMixtureCostToCraft").innerHTML = `Current total material cost to buy order: ${totalCost} coins.`;
    document.getElementById("GemstoneMixtureValue").innerHTML = `Current Gemstone Mixture sell offer price: ${gemstoneMixtureSellOfferPrice} coins.`;
    document.getElementById("GemstoneMixtureProfit").innerHTML = `Current fine jade gemstone price: ${fineJadeBuyOrderPrice}`;//`Current profit: ${gemstoneMixtureProfit} coins.`;
}



  function callOnLoad() {
    loadJSON("https://api.hypixel.net/skyblock/bazaar", onLoadPrices);
    const buyOrderPara = document.querySelector('#emptyDiv1');
    buyOrderPara.innerHTML = "Hejsa med digsa";
    document.querySelector('#emptyDiv1').append(buyOrderPara);
  }

function gemstoneCalc() {
    var amountInput = document.getElementById("GemstoneMixtureAmount").value;
    console.log(amountInput);
    //gemstoneMixtureCalc(amountInput);
    loadJSON("https://api.hypixel.net/skyblock/bazaar", gemstoneMixtureCalc, amountInput);
}

window.onload = callOnLoad;
document.querySelector("#GemstoneMixtureButton").addEventListener('click', gemstoneCalc);