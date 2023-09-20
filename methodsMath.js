import itemNames from './bazaarItems.js';
export default function gemstoneMixtureCalc(data, amount) {
    //console.log("This is gemstoneMixtureCalc");
    console.log(itemNames['gemstone mixture']);
    const fineJadeBuyOrderPrice = data['products']["FINE_JADE_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineAmberBuyOrderPrice = data['products']["FINE_AMBER_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineSapphireBuyOrderPrice = data['products']["FINE_SAPPHIRE_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineAmethystBuyOrderPrice = data['products']["FINE_AMETHYST_GEM"]['sell_summary'][0]['pricePerUnit'];
    const sludgeJuiceBuyOrderPrice = data['products']["SLUDGE_JUICE"]['sell_summary'][0]['pricePerUnit'];

    const totalCost = Math.floor(((4 * fineJadeBuyOrderPrice) + (4 * fineAmberBuyOrderPrice) + (4 * fineSapphireBuyOrderPrice) + (4 * fineAmethystBuyOrderPrice) + (320 * sludgeJuiceBuyOrderPrice)) * amount)
    
    const gemstoneMixtureSellOfferPrice = Math.floor((data['products']["GEMSTONE_MIXTURE"]['buy_summary'][0]['pricePerUnit']) * amount);

    const gemstoneMixtureProfit = Math.floor(gemstoneMixtureSellOfferPrice - totalCost);
    // Changing the amount of gemstones to be the same as amount.
    document.querySelector("#gemMixToMakeX").innerHTML = `To make ${amount}x Gemstone Mixture, you need to buy order the following materails at the bazaar:`;
    // Changing the 5 material amounts to buy order to be multiplied by amount
    document.querySelector("#gemMixJade").innerHTML = `${amount * 4}x Fine Jade Gemstone`;
    document.querySelector("#gemMixAmber").innerHTML = `${amount * 4}x Fine Amber Gemstone`;
    document.querySelector("#gemMixSapphire").innerHTML = `${amount * 4}x Fine Sapphire Gemstone`;
    document.querySelector("#gemMixAmethyst").innerHTML = `${amount * 4}x Fine Amethyst Gemstone`;
    document.querySelector("#gemMixSludgeJuice").innerHTML = `${amount * 320}x Sludge Juice`;
    // Chaning the cost, sell offer price, and profit to be multiplied by amount
    document.getElementById("GemstoneMixtureCostToCraft").innerHTML = `Current total material cost to buy order: ${totalCost.toLocaleString("en-US")} coins.`;
    document.getElementById("GemstoneMixtureValue").innerHTML = `Current total sell offer price for ${amount} Gemstone Mixtures: ${gemstoneMixtureSellOfferPrice.toLocaleString("en-US")} coins.`;
    document.getElementById("GemstoneMixtureProfit").innerHTML = `Current profit: ${gemstoneMixtureProfit.toLocaleString("en-US")} coins.`;
}