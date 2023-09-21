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
    // onLoad prices for the fine gemstones
    const fineJadeBuyOrderPrice = data['products']["FINE_JADE_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineAmberBuyOrderPrice = data['products']["FINE_AMBER_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineSapphireBuyOrderPrice = data['products']["FINE_SAPPHIRE_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineAmethystBuyOrderPrice = data['products']["FINE_AMETHYST_GEM"]['sell_summary'][0]['pricePerUnit'];
    const sludgeJuiceBuyOrderPrice = data['products']["SLUDGE_JUICE"]['sell_summary'][0]['pricePerUnit'];
    // onLoad price for the cost of 1 Gemstone Mixture
    const totalCost = Math.floor((4 * fineJadeBuyOrderPrice) + (4 * fineAmberBuyOrderPrice) + (4 * fineSapphireBuyOrderPrice) + (4 * fineAmethystBuyOrderPrice) + (320 * sludgeJuiceBuyOrderPrice))
    // onLoad price for the sell offer price of 1 Gemstone Mixture
    const gemstoneMixtureSellOfferPrice = Math.floor(data['products']["GEMSTONE_MIXTURE"]['buy_summary'][0]['pricePerUnit'])
    // onLoad prices for profit from crafting and sell offering 1 Gemstone Mixture
    const gemstoneMixtureProfit = Math.floor(gemstoneMixtureSellOfferPrice - totalCost);
    // onLoad prices with localeString, for cost, value, and profit for 1 Gemstone Mixture
    document.getElementById("GemstoneMixtureCostToCraft").innerHTML = `Current total material cost to buy order: ${totalCost.toLocaleString("en-US")} coins.`;
    document.getElementById("GemstoneMixtureValue").innerHTML = `Current Gemstone Mixture sell offer price: ${gemstoneMixtureSellOfferPrice.toLocaleString("en-US")} coins.`;
    document.getElementById("GemstoneMixtureProfit").innerHTML = `Current profit: ${gemstoneMixtureProfit.toLocaleString("en-US")} coins.`;
}

  function callOnLoad() {
    // Loads the onLoad prices
    loadJSON("https://api.hypixel.net/skyblock/bazaar", onLoadPrices);
    // Loads dark mode by default
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
//
function gemstoneCalc() {
    var amountInput = document.getElementById("GemstoneMixtureAmount").value;
    //console.log(amountInput);
    //gemstoneMixtureCalc(amountInput);
    loadJSON("https://api.hypixel.net/skyblock/bazaar", gemstoneMixtureCalc, amountInput);
}
function switchLighting(){
  var element = document.body;
  element.classList.toggle("dark-mode");
  
}

window.onload = callOnLoad;
document.querySelector("#GemstoneMixtureButton").addEventListener('click', gemstoneCalc);
document.querySelector("#switchLighting").addEventListener('click', switchLighting);

// MIND KLEMENT OM FLEX BOX OG GRID TIL CSS
