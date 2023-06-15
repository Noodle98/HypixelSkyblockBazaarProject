import itemNames from './bazaarItems.js';
<<<<<<< HEAD
import parseUserInput from './parseUserInput.js';
const bazaarItemNames = itemNames;
// loadJSON method to open the JSON file.
function loadJSON(path, success, successArgs, successArgsRaw) {
=======
const bazaarItemNames = itemNames;
// loadJSON method to open the JSON file.
function loadJSON(path, success, successArgs) {
>>>>>>> 3453ce6ed0efa5c739a75536416f0c67bc13e95c
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
<<<<<<< HEAD
        success(JSON.parse(xhr.responseText), successArgs, successArgsRaw);
      }
      else {
        document.getElementById('buy_order_price').innerHTML = 'Unknown item name. Check your spelling.';
        document.getElementById('sell_offer_price').innerHTML = '';
=======
        success(JSON.parse(xhr.responseText), successArgs);
      }
      else {
        document.getElementById('buy_order_price').innerHTML = 'There was an error getting data, try again later';
>>>>>>> 3453ce6ed0efa5c739a75536416f0c67bc13e95c
      }
    }
}
// mainData function to parse the JSON API data,
// And use it to alter the HTML code
<<<<<<< HEAD
function mainData(Data, itemName, rawUserInput)
=======
function mainData(Data, itemName)
>>>>>>> 3453ce6ed0efa5c739a75536416f0c67bc13e95c
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
  
<<<<<<< HEAD
  //console.log('hello');
    let userInput = document.getElementById('item_input').value;

    const parsedUserInput = parseUserInput(userInput);
    console.log(parsedUserInput);
    loadJSON("https://api.hypixel.net/skyblock/bazaar", mainData, parsedUserInput, userInput);
    
    //console.log(bazaarItemNames['Diamond']);
  //document.getElementById('buy_order_price').innerHTML = userInput;
=======
  console.log('hello');
    let userInput = document.getElementById('item_input').value.toLowerCase();
    console.log(userInput);

    loadJSON("https://api.hypixel.net/skyblock/bazaar", mainData, userInput);
    
    console.log(bazaarItemNames['Diamond']);
  document.getElementById('buy_order_price').innerHTML = userInput;
>>>>>>> 3453ce6ed0efa5c739a75536416f0c67bc13e95c
    
}
document.querySelector('#item_input_button').addEventListener('click', speak);
/* Website til loadJSON funktionen:
https://www.educative.io/answers/how-to-read-a-json-file-from-a-url-in-javascript
*/