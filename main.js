// loadJSON method to open the JSON file.
function loadJSON(path, success, successArgs) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        success(JSON.parse(xhr.responseText), successArgs);
      }
      else {
        document.getElementById('buy_order_price').innerHTML = 'There was an error getting data, try again later';
      }
    }
}
// mainData function to parse the JSON API data,
// And use it to alter the HTML code
function mainData(Data, itemName)
{
    console.log(Data['products'][itemName.toUpperCase()]['sell_summary'][0]['pricePerUnit']);
    let buyOrderPrice = Data['products'][itemName.toUpperCase()]['sell_summary'][0]['pricePerUnit'];
    let sellOrderPrice = Data['products'][itemName.toUpperCase()]['buy_summary'][0]['pricePerUnit'];

    document.getElementById('buy_order_price').innerHTML = 'Current buy order (instant sell) price for ' + itemName + ' is: ' + buyOrderPrice + ' coins.';
    document.getElementById('sell_offer_price').innerHTML = 'Current sell offer (instant buy) price for ' + itemName + ' is: ' + sellOrderPrice + ' coins.';
}
// speak() function which is called by the HTML code,
// And parses user input, and then passes it along to
// loadJSON function, in order to be used in mainData function,
// To gather the correct data from the API 
function speak() {
    let userInput = document.getElementById('item_input').value.toLowerCase();
    console.log(userInput);

    loadJSON("https://api.hypixel.net/skyblock/bazaar", mainData, userInput);
    

}


/* Website til loadJSON funktionen:
https://www.educative.io/answers/how-to-read-a-json-file-from-a-url-in-javascript
*/