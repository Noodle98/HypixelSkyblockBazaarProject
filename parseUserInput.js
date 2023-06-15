import itemNames from './bazaarItems.js';
export default function parseUserInput(raw_input) {
    let inputArray = raw_input.toLowerCase().split(" ");

    for (var i = 0; i < inputArray.length; i++) {
        
        inputArray[i].toLowerCase();
    }
    const inputFirstCapital = inputArray.join(" ");
    let itemNameMatch = '';
    for (const key in itemNames) {
        if (key == inputFirstCapital) {
            itemNameMatch = key;
            //console.log(key);
        }
    }
    
    //console.log(inputFirstCapital);
    console.log(itemNames[itemNameMatch]);
    return itemNames[itemNameMatch];
    //return [itemNameMatch, itemNames[itemNameMatch]];
}