import itemNames from './bazaarItems.js';
import { gemstoneMixtureCalc, enchLavaBucketCalc } from './methodsMath.js';
const bazaarItemNames = itemNames;

// function that calls the hypixel API every 10 sec and refreshes the data into local storage
function addToLocalStorage() {
  localStorage.clear();
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "https://api.hypixel.net/skyblock/bazaar", true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      localStorage.setItem("hypixelSkyblockBazaarData", JSON.stringify(xhr.responseText));
      console.log("Data was added to Local storage without errors");
    }
    else {
      console.log("Error: Could not load hypixel API data into localStorage");
    }
  }
}

setInterval(addToLocalStorage, 30000);


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
        console.log('Error: Failed to retrieve data from localStorage');
      }
    }
}

function onLoadPrices(data) {
    // onLoad prices for the Gemstone Mixture method -----------------------------------------------------
    // onLoad prices for the fine gemstones
    const fineJadeBuyOrderPrice = data['products']["FINE_JADE_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineAmberBuyOrderPrice = data['products']["FINE_AMBER_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineSapphireBuyOrderPrice = data['products']["FINE_SAPPHIRE_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineAmethystBuyOrderPrice = data['products']["FINE_AMETHYST_GEM"]['sell_summary'][0]['pricePerUnit'];
    const sludgeJuiceBuyOrderPrice = data['products']["SLUDGE_JUICE"]['sell_summary'][0]['pricePerUnit'];
    // onLoad price for the cost of 1 Gemstone Mixture
    const gemstoneMixturetotalCost = Math.floor((4 * fineJadeBuyOrderPrice) + (4 * fineAmberBuyOrderPrice) + (4 * fineSapphireBuyOrderPrice) + (4 * fineAmethystBuyOrderPrice) + (320 * sludgeJuiceBuyOrderPrice));
    // onLoad price for the sell offer price of 1 Gemstone Mixture
    const gemstoneMixtureSellOfferPrice = Math.floor(data['products']["GEMSTONE_MIXTURE"]['buy_summary'][0]['pricePerUnit']);
    // onLoad prices for profit from crafting and sell offering 1 Gemstone Mixture
    const gemstoneMixtureProfit = Math.floor(gemstoneMixtureSellOfferPrice - gemstoneMixturetotalCost);
    // onLoad prices with localeString, for cost, value, and profit for 1 Gemstone Mixture
    document.getElementById("GemstoneMixtureCostToCraft").innerHTML = `Current total material cost to buy order: ${gemstoneMixturetotalCost.toLocaleString("en-US")} coins.`;
    document.getElementById("GemstoneMixtureValue").innerHTML = `Current Gemstone Mixture sell offer price: ${gemstoneMixtureSellOfferPrice.toLocaleString("en-US")} coins.`;
    document.getElementById("GemstoneMixtureProfit").innerHTML = `Current profit: ${gemstoneMixtureProfit.toLocaleString("en-US")} coins.`;

    // onLoad prices for the Enchanted Lava Bucket method ------------------------------------------------
    const enchCoalBlockBuyOrderPrice = data['products']["ENCHANTED_COAL_BLOCK"]['sell_summary'][0]['pricePerUnit'];
    const ironIngotBuyOrderPrice = data['products']["IRON_INGOT"]['sell_summary'][0]['pricePerUnit'];
    // onLoad price for the cost of 1 Enchanted Lava Bucket
    const enchLavaBucketTotalCost = Math.floor((2 * enchCoalBlockBuyOrderPrice) + (480 * ironIngotBuyOrderPrice));
    // onLoad price for the sell offer price of 1 Enchanted Lava Bucket
    const enchLavaBucketSellOfferPrice = Math.floor(data['products']["ENCHANTED_LAVA_BUCKET"]['buy_summary'][0]['pricePerUnit']);
    // onLoad price for profit from crafting and selling 1 Enchanted Lava Bucket
    const enchLavaBucketProfit = Math.floor(enchLavaBucketSellOfferPrice - enchLavaBucketTotalCost);
    // onLoad prices with localeString, for cost, value, and profit for 1 Enchanted Lava Bucket
    document.getElementById("EnchLavaBucketCostToCraft").innerHTML = `Current total material cost to buy order: ${enchLavaBucketTotalCost.toLocaleString("en-US")} coins.`;
    document.getElementById("EnchLavaBucketValue").innerHTML = `Current Enchanted Lava Bucket sell offer price: ${enchLavaBucketSellOfferPrice.toLocaleString("en-US")} coins.`;
    document.getElementById("EnchLavaBucketProfit").innerHTML = `Current profit: ${enchLavaBucketProfit.toLocaleString("en-US")} coins.`;
}

  function callOnLoad() {
    // Loads the onLoad prices
    loadJSON("https://api.hypixel.net/skyblock/bazaar", onLoadPrices);
    // Loads dark mode by default
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

// Function for gemstone calculate button
function gemstoneCalc() {
    // Gets the hypixel API data from localStorage
    var data = JSON.parse(JSON.parse(localStorage.getItem('hypixelSkyblockBazaarData')));

    // Gets the number input in the text field
    var amountInput = document.querySelector("#GemstoneMixtureAmount").value;

    // Gets the Bazaar Flipper upgrade level selected in the dropdown menu in topnav
    const bazaarFlipperLevel = parseFloat(document.querySelector("#topSelect").value);
    console.log(bazaarFlipperLevel);

    // Calls GemstoneMixtureCalc function from methodsMath.js with the 3 parameters
    gemstoneMixtureCalc(data, amountInput, bazaarFlipperLevel);
}

// Function for enchanted lava bucket calculate button
function enchbucketcalc() {
  // Gets the hypixel API data from localStorage
  var data = JSON.parse(JSON.parse(localStorage.getItem('hypixelSkyblockBazaarData')));

  // Gets the number input in the text field
  var amountInput = document.querySelector("#EnchLavaBucketAmount").value;

  // Gets the Bazaar Flipper upgrade level selected in the dropdown menu in topnav
  const bazaarFlipperLevel = parseFloat(document.querySelector("#topSelect").value);

  // Calls enchLavaBucketCalc function from methodsMath.js with the 3 parameters
  enchLavaBucketCalc(data, amountInput, bazaarFlipperLevel);
  console.log(bazaarFlipperLevel);
}

function switchLighting(){
  var element = document.body;
  element.classList.toggle("dark-mode");
  
}

window.onload = callOnLoad;
document.querySelector("#GemstoneMixtureButton").addEventListener('click', gemstoneCalc);
document.querySelector("#EnchLavaBucketButton").addEventListener('click', enchbucketcalc);

document.querySelector("#switchLighting").addEventListener('click', switchLighting);


// MIND KLEMENT OM FLEX BOX OG GRID TIL CSS
