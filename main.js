import itemNames from './bazaarItems.js';
import parseUserInput from './parseUserInput.js';
const bazaarItemNames = itemNames;
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
    let sellOrderPrice = Data['products'][itemName]['buy_summary'][0]['pricePerUnit'];

    document.getElementById('buy_order_price').innerHTML = 'Current buy order (instant sell) price for ' + rawUserInput + ' is: ' + buyOrderPrice + ' coins.';
    document.getElementById('sell_offer_price').innerHTML = 'Current sell offer (instant buy) price for ' + rawUserInput + ' is: ' + sellOrderPrice + ' coins.';
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

document.querySelector('#item_input_button').addEventListener('click', speak);
/* Website til loadJSON funktionen:
https://www.educative.io/answers/how-to-read-a-json-file-from-a-url-in-javascript
*/