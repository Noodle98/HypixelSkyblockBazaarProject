import itemNames from '../bazaar/bazaarItems.js';
function gemstoneMixtureCalc(data, amount, bazaarFlipperLevel) {
    //console.log(data);
    //console.log(itemNames['gemstone mixture']['sell_summary'][0]['pricePerUnit']);
    const fineJadeBuyOrderPrice = data['products']["FINE_JADE_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineAmberBuyOrderPrice = data['products']["FINE_AMBER_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineSapphireBuyOrderPrice = data['products']["FINE_SAPPHIRE_GEM"]['sell_summary'][0]['pricePerUnit'];
    const fineAmethystBuyOrderPrice = data['products']["FINE_AMETHYST_GEM"]['sell_summary'][0]['pricePerUnit'];
    const sludgeJuiceBuyOrderPrice = data['products']["SLUDGE_JUICE"]['sell_summary'][0]['pricePerUnit'];

    const totalCost = Math.floor(((4 * fineJadeBuyOrderPrice) + (4 * fineAmberBuyOrderPrice) + (4 * fineSapphireBuyOrderPrice) + (4 * fineAmethystBuyOrderPrice) + (320 * sludgeJuiceBuyOrderPrice)) * amount)
    
    const gemstoneMixtureSellOfferPrice = Math.floor((data['products']["GEMSTONE_MIXTURE"]['buy_summary'][0]['pricePerUnit']) * amount * bazaarFlipperLevel);

    const gemstoneMixtureProfit = Math.floor(gemstoneMixtureSellOfferPrice - totalCost);
    // Changing the amount of gemstones to be the same as amount.
    document.querySelector("#gemMixToMakeX").innerHTML = `To make ${amount}x Gemstone Mixture, you need to buy order the following materials at the bazaar:`;
    // Changing the 5 material amounts to buy order to be multiplied by amount
    document.querySelector("#gemMixJade").innerHTML = `${amount * 4}x Fine Jade Gemstone`;
    document.querySelector("#gemMixAmber").innerHTML = `${amount * 4}x Fine Amber Gemstone`;
    document.querySelector("#gemMixSapphire").innerHTML = `${amount * 4}x Fine Sapphire Gemstone`;
    document.querySelector("#gemMixAmethyst").innerHTML = `${amount * 4}x Fine Amethyst Gemstone`;
    document.querySelector("#gemMixSludgeJuice").innerHTML = `${amount * 320}x Sludge Juice`;
    // Chaning the cost, sell offer price, and profit to be multiplied by amount
    document.getElementById("GemstoneMixtureCostToCraft").innerHTML = `Current total material cost to buy order: ${totalCost.toLocaleString("en-US")} coins.`;
    document.getElementById("GemstoneMixtureValue").innerHTML = `Current total sell offer price for ${amount} Gemstone Mixtures: ${gemstoneMixtureSellOfferPrice.toLocaleString("en-US")} coins after bazaar fee.`;
    document.getElementById("GemstoneMixtureProfit").innerHTML = `Current profit: ${gemstoneMixtureProfit.toLocaleString("en-US")} coins after bazaar fee.`;
}

function enchLavaBucketCalc(data, amount, bazaarFlipperLevel) {
    // Getting the prices for enchanted coal block, and iron ingot
    const enchCoalBlockBuyOrderPrice = data['products']["ENCHANTED_COAL_BLOCK"]['sell_summary'][0]['pricePerUnit'];
    const ironIngotBuyOrderPrice = data['products']["IRON_INGOT"]['sell_summary'][0]['pricePerUnit'];
    
    // Changing the amount of enchanted lava buckets to be the same amount as input value.
    document.querySelector("#EnchLavaBucketToMakeX").innerHTML = `To make ${amount}x Enchanted Lava Bucket, you need to buy order the following materials at the bazaar:`;

    // Changing the 2 material amounts to buy order to be multiplied by amount
    document.querySelector("#EnchCoalBlockForEnchLavaBucket").innerHTML = `${amount * 2}x Enchanted Coal Block`;
    
    document.querySelector("#IronIngotsForEnchLavaBucket").innerHTML = `${amount * 480}x Iron Ingot`;

    const enchLavaBucketTotalCost = Math.floor(((2 * enchCoalBlockBuyOrderPrice) + (480 * ironIngotBuyOrderPrice)) * amount);
    // Changes price for the sell offer price of Enchanted Lava Bucket multiplied by amount
    const enchLavaBucketSellOfferPrice = Math.floor((data['products']["ENCHANTED_LAVA_BUCKET"]['buy_summary'][0]['pricePerUnit']) * amount);
    // Changes price for profit from crafting and selling Enchanted Lava Bucket multplied by amount
    const enchLavaBucketProfit = Math.floor(enchLavaBucketSellOfferPrice - enchLavaBucketTotalCost);
    // changes elements to prices with localeString, for cost, value, and profit for 1 Enchanted Lava Bucket
    document.querySelector("#EnchLavaBucketCostToCraft").innerHTML = `Current total material cost to buy order: ${enchLavaBucketTotalCost.toLocaleString("en-US")} coins.`;
    document.querySelector("#EnchLavaBucketValue").innerHTML = `Current sell offer price for ${amount} Enchanted Lava Bucket: ${enchLavaBucketSellOfferPrice.toLocaleString("en-US")} coins.`;
    document.querySelector("#EnchLavaBucketProfit").innerHTML = `Current profit: ${enchLavaBucketProfit.toLocaleString("en-US")} coins.`;
}

export {gemstoneMixtureCalc, enchLavaBucketCalc};