import itemNames from './bazaarItems.js';
export default function gemstoneMixtureCalc(data, amount) {
    //console.log("This is gemstoneMixtureCalc");
    console.log(itemNames['gemstone mixture']);
    console.log(data['products']["FINE_AMBER_GEM"]['sell_summary'][0]['pricePerUnit']);
    const fineJadeBuyOrderPrice = data['products']["FINE_JADE_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineAmberBuyOrderPrice = data['products']["FINE_AMBER_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineSapphireBuyOrderPrice = data['products']["FINE_SAPPHIRE_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineAmethystBuyOrderPrice = data['products']["FINE_AMETHYST_GEM"]['sell_summary'][0]['pricePerUnit'];
    const sludgeJuiceBuyOrderPrice = data['products']["SLUDGE_JUICE"]['sell_summary'][0]['pricePerUnit'];

    const totalCost = Math.floor(((4 * fineJadeBuyOrderPrice) + (4 * fineAmberBuyOrderPrice) + (4 * fineSapphireBuyOrderPrice) + (4 * fineAmethystBuyOrderPrice) + (320 * sludgeJuiceBuyOrderPrice)) * amount);
    
    const gemstoneMixtureSellOfferPrice = Math.floor((data['products']["GEMSTONE_MIXTURE"]['buy_summary'][0]['pricePerUnit']) * amount);

    const gemstoneMixtureProfit = Math.floor(gemstoneMixtureSellOfferPrice - totalCost);
    document.getElementById("GemstoneMixtureCostToCraft").innerHTML = `Current total material cost to buy order: ${totalCost} coins.`;
    document.getElementById("GemstoneMixtureValue").innerHTML = `Current total sell offer price for ${amount} Gemstone Mixtures: ${gemstoneMixtureSellOfferPrice} coins.`;
    document.getElementById("GemstoneMixtureProfit").innerHTML = `Current profit: ${gemstoneMixtureProfit} coins.`;
}