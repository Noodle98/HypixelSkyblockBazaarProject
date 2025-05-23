import itemNames from './bazaar/bazaarItems.js';
import parseUserInput from './parseUserInput.js';
const bazaarItemNames = itemNames;

// function that calls the hypixel API every 5 sec and refreshes the data into local storage
async function addToLocalStorage() {
  try {
    const response = await fetch("https://api.hypixel.net/skyblock/bazaar");
    if (localStorage.getItem("hypixelSkyblockBazaarData") !== null) localStorage.removeItem("hypixelSkyblockBazaarData");
    localStorage.setItem("hypixelSkyblockBazaarData", JSON.stringify(await response.json()));
    console.log("Data was added to Local storage without errors");
  } catch {
    console.error("Error: Could not load hypixel API data into localStorage");
  }
}

setInterval(addToLocalStorage, 10000);


// loadJSON method to open the JSON file.
async function loadJSON(path, success, successArgs, successArgsRaw) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      document.getElementById('buy_order_price').innerHTML = 'Unknown item name. Check your spelling.';
      document.getElementById('sell_offer_price').innerHTML = '';
    }
    const data = await response.json();
    success(data, successArgs, successArgsRaw);
  } catch {
    document.getElementById('buy_order_price').innerHTML = 'Unknown item name. Check your spelling.';
    document.getElementById('sell_offer_price').innerHTML = '';
  }
}

// mainData function to parse the JSON API data,
// And use it to alter the HTML code
function mainData(Data, itemName, rawUserInput)
{
    let buyOrderPrice = Data['products'][itemName]['sell_summary'][0]['pricePerUnit'];
    let sellOfferPrice = Data['products'][itemName]['buy_summary'][0]['pricePerUnit'];

    document.getElementById('buy_order_price').innerHTML = `Current buy order (instant sell) price for ${itemName} is: ${buyOrderPrice.toLocaleString("en-US")} coins.`;
    document.getElementById('sell_offer_price').innerHTML = `Current sell offer (instant buy) price for ${itemName} is: ${sellOfferPrice.toLocaleString("en-US")} coins.`;
  }
// speak() function which is called by the HTML code,
// And parses user input, and then passes it along to
// loadJSON function, in order to be used in mainData function,
// To gather the correct data from the API 
function speak() {
  
  //console.log('hello');
    let userInput = document.getElementById('item_input').value;

    const parsedUserInput = parseUserInput(userInput);
    console.log(parsedUserInput);
    loadJSON("https://api.hypixel.net/skyblock/bazaar", mainData, parsedUserInput, userInput);
    
    //console.log(bazaarItemNames['Diamond']);
  //document.getElementById('buy_order_price').innerHTML = userInput;
    
}

// function that is called when the page loads
// and sets the dark mode class to the body element

function callOnLoad() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// function that switches the dark mode class on and off
// when the button is clicked
function switchLighting(){
  var element = document.body;
  element.classList.toggle("dark-mode");
  
}


window.onload = callOnLoad;
document.querySelector('#item_input_button').addEventListener('click', speak);
document.querySelector("#switchLighting").addEventListener('click', switchLighting);
//document.querySelector("#switchToMoneyMethods").addEventListener('click', switchtoMoneyMethods);


/* Website til loadJSON funktionen:
https://www.educative.io/answers/how-to-read-a-json-file-from-a-url-in-javascript
*/