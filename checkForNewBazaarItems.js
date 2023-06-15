import itemNames from './bazaarItems.js';
function loadJSON(path, success) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        success(JSON.parse(xhr.responseText));
      }
      else {
        document.getElementById('new_items_array').innerHTML = 'There was an error getting data, try again later';
      }
    }
}

function parsingAllData(hypixelData) {
    //const hypixelKeys = []

    const hypixelKeys = Object.keys(hypixelData['products']);
    /*for (const product in hypixelData['products']) {
        console.log(product[0]);
    }
    */
    const myValues = Object.values(itemNames);
    const missingValues = [];
    for (const key in hypixelKeys) {
        if (myValues.includes(hypixelKeys[key]) == false) {
            if (hypixelKeys[key].startsWith('ENCHANTMENT') == false) {
                missingValues.push(hypixelKeys[key]);
            }
            //missingValues.push(hypixelKeys[key]);
            //console.log(key);
        }
    }
    console.log(missingValues);

}


function checkForNewItems() {
    loadJSON("https://api.hypixel.net/skyblock/bazaar", parsingAllData);
}
document.querySelector('#new_items_button').addEventListener('click', checkForNewItems);