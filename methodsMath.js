import itemNames from './bazaarItems.js';
export default function gemstoneMixtureCalc(data, amount) {
    console.log("This is gemstoneMixtureCalc");
    console.log(itemNames['Gemstone Mixture']);


    document.getElementById("GemstoneMixtureCostToCraft").innerHTML = `Hej gange ${amount}`;
}