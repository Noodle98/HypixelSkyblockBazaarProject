import itemNames from './bazaarItems.js';
import parseUserInput from './parseUserInput.js';
const bazaarItemNames = itemNames;

// function that calls the hypixel API every 5 sec and refreshes the data into local storage
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

setInterval(addToLocalStorage, 10000);


// loadJSON method to open the JSON file.
function loadJSON(path, success, successArgs, successArgsRaw) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        success(JSON.parse(xhr.responseText), successArgs, successArgsRaw);
      }
      else {
        document.getElementById('buy_order_price').innerHTML = 'Unknown item name. Check your spelling.';
        document.getElementById('sell_offer_price').innerHTML = '';
      }
    }
}
// mainData function to parse the JSON API data,
// And use it to alter the HTML code
function mainData(Data, itemName, rawUserInput)
{
    let buyOrderPrice = Data['products'][itemName]['sell_summary'][0]['pricePerUnit'];
    let sellOfferPrice = Data['products'][itemName]['buy_summary'][0]['pricePerUnit'];

    document.getElementById('buy_order_price').innerHTML = `Current buy order (instant sell) price for ${rawUserInput} is: ${buyOrderPrice.toLocaleString("en-US")} coins.`;
    document.getElementById('sell_offer_price').innerHTML = `Current sell offer (instant buy) price for ${rawUserInput} is: ${sellOfferPrice.toLocaleString("en-US")} coins.`;
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

function callOnLoad() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

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