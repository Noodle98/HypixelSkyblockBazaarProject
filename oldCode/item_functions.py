import requests
import json
import math
import locale
from flask import jsonify
import time

def item_bazaar_price(product_name):
        pull_data = requests.get('https://api.hypixel.net/skyblock/bazaar')
        prices = {}
        #price names are reversed because in-game, the buy order price is the same as sell instantly, and vice versa
        prices['buy_order_price'] = pull_data.json()['products'][product_name]['sell_summary'][0]['pricePerUnit']
        prices['sell_order_price'] = pull_data.json()['products'][product_name]['buy_summary'][0]['pricePerUnit']
        return prices

# Function for large storage math
def oak_calc(count_entry):
        count = int(count_entry)
        oak_count = ((160*264)+64)*count
        enchanted_oak_count = 264*count
        left_over_oak_count = 64*count
        locale.setlocale(locale.LC_ALL, 'en_US.UTF-8')
        

        oak_wood_pris = item_bazaar_price('LOG')['buy_order_price']
        enchanted_oak_wood_pris = item_bazaar_price('ENCHANTED_OAK_LOG')['buy_order_price']
        large_storage_avg_price = 400000
        if (oak_wood_pris* 160) < enchanted_oak_wood_pris:
            return """The recipe for Large Storage comes from Oak /collection level IX (9),
And requires 1 Medium Storage and 256 Enchanted Oak logs.
One Medium storage requires 1 Small Storage and 8 Enchanted Oak logs.
One Small Storage requires 64 normal Oak logs.
In total, 1 Large storage requires 264 Enchanted oak logs, and 64 normal oak logs.

To create {str_count} Large storage(s),
The cheapest right now, is to buy {str_oak_count} Oak Wood.
This is most space-effeciently done, by creating {oak_count_71680} buy orders of 71.680 oak wood
Plus 1 additional buy order of {oak_count_modulus_71680} oak wood.
\nThis will in total cost {thousand_cost} coins.
Each large storage should sell for roughly {storage_avg_price} coins.
For {str_count} large storages, this would be roughly {profit} coins profit.""".format(str_count=str(count), str_oak_count=str(thousand_sep(oak_count)),
                                                                             oak_count_71680=str(thousand_sep(math.floor(oak_count/71680))),
                                                                                             oak_count_modulus_71680=str(thousand_sep(oak_count % 71680)),
                                                                                             thousand_cost=str(thousand_sep(oak_count*oak_wood_pris)),
                                                                                             storage_avg_price=str(large_storage_avg_price),
                                                                                             profit=str(thousand_sep(round((large_storage_avg_price*count)-(oak_count*oak_wood_pris), 1))))
        else:
            return """The recipe for Large Storage comes from Oak /collection level IX (9),
And requires 1 Medium Storage and 256 Enchanted Oak logs.
One Medium storage requires 1 Small Storage and 8 Enchanted Oak logs.
One Small Storage requires 64 normal Oak logs.
In total, 1 Large storage requires 264 Enchanted oak logs, and 64 normal oak logs.

Right now, the cheapest is to buy {} enchanted oak wood,
And {} normal oak wood.
This will in total cost {} coins.
Each large storage should sell for roughly {storage_avg_price} coins.
For {str_count} large storages, this would be roughly {profit} coins profit.""".format(str(thousand_sep(enchanted_oak_count)),
                                            str(thousand_sep(left_over_oak_count)),
                                            str(thousand_sep(round(enchanted_oak_wood['buy_order_price'] * enchanted_oak_count, 1))),
                                            str(large_storage_avg_price),
                                            str(count),
                                            str(thousand_sep(round((large_storage_avg_price-(oak_count*oak_wood_pris))*count))))
# Function for treecapitator math
def treecapitator_calc(count_entry):
        count = int(count_entry)
        obsidian_count = (160*512)*count
        enchanted_obsidian_count = 512*count
        jungle_count = (3*160)*count
        enchanted_jungle_count = 3*count
        
        locale.setlocale(locale.LC_ALL, 'en_US.UTF-8')
        obsidian_pris = item_bazaar_price('OBSIDIAN')['buy_order_price']
        enchanted_obsidian_pris = item_bazaar_price('ENCHANTED_OBSIDIAN')['buy_order_price']
        jungle_wood_pris = item_bazaar_price('LOG:3')['buy_order_price']
        enchanted_jungle_pris = item_bazaar_price('ENCHANTED_JUNGLE_LOG')['buy_order_price']
        rough_treecap_price = 1200000

        if (obsidian_pris * 160) < enchanted_obsidian_pris:
            return """The Treecapitator is from the Obsidian /collection IX (9),
And requires 512x Enchanted Obsidian and 1x Jungle Axe.
The Jungle axe is from Jungle Wood /collection VII (7),
And requires 3x Enchanted Jungle Wood and 2x stick.
Each of these enchanted items are created from 160x Obsidian, and 160x Jungle wood,
Respectively.

I recommend using a treecapitator for your own,
To easily be able to farm the 3 enchanted jungle wood needed.
This should take about 2 minutes at most, per 3 enchanted jungle wood.

To create {str_count} Treecapitator(s),
The cheapest right now, is to buy {str_obsidian_count} Obsidian,
And auto-enchant it with a Personal Compactor 4000 or above.
This is most space-effeciently done, by creating {obsidian_71680} buy orders of 71.680 Obsidian,
Plus 1 additional buy order of {obsidian_modulus_71680} Obsidian.

This will in total cost {thousand_cost} coins.
Each treecapitator should sell for roughly {treecapitator_estimated_price} coins.
For {str_count} treecapitators, this would be roughly {profit} coins profit.""".format(str_count=str(thousand_sep(count)),
str_obsidian_count=str(thousand_sep(obsidian_count)),
obsidian_71680=str(thousand_sep(math.floor(obsidian_count/71680))),
obsidian_modulus_71680=str(thousand_sep(obsidian_count % 71680)), thousand_cost=str(thousand_sep(round(obsidian_pris * obsidian_count, 1))),
treecapitator_estimated_price=str(thousand_sep(round(rough_treecap_price, 1))), profit=thousand_sep(round((rough_treecap_price - (obsidian_pris*81920))*count, 1)))
            
        else:
            return """The Treecapitator is from the Obsidian /collection IX (9),
And requires 512x Enchanted Obsidian and 1x Jungle Axe.
The Jungle axe is from Jungle Wood /collection VII (7),
And requires 3x Enchanted Jungle Wood and 2x stick.
Each of these enchanted items are created from 160x Obsidian, and 160x Jungle wood,
Respectively.

Right now, the cheapest is to buy {str_enchanted_obsidian_count} Enchanted obsidian

This will in total cost {thousand_cost} coins.
Each treecapitator should sell for roughly {treecapitator_estimated_price} coins.
For {str_count} treecapitators, this would be roughly {profit} coins profit.""".format(str_enchanted_obsidian_count=str(enchanted_obsidian_count),
                                                             enchanted_jungle_count=enchanted_jungle_count,
                                                             thousand_cost=str(round(enchanted_obsidian_pris*512*count, 1)),
                                                             treecapitator_estimated_price=rough_treecap_price,
                                                             str_count=count,
                                                             profit=str(thousand_sep(round(rough_treecap_price-(enchanted_obsidian_count*enchanted_obsidian_pris), 1))),
                                                             )

def backpacks_calc(type, amount):
    locale.setlocale(locale.LC_ALL, 'en_US.UTF-8')
    # Amounts
    count = int(amount)
    leather_count_per_enchanted = 576
    leather_count_small_backpack = 80
    leather_count_medium_upgrade = 512
    enchanted_leather_count_large_upgrade = 16
    enchanted_leather_count_greater_upgrade = 32
    medium_backpack_leather_count = 592

    large_backpack_in_leather = 592+(576*16)
    greater_backpack_in_leather = 592+(576*48)

    # Prices
    leather_price = item_bazaar_price("LEATHER")['buy_order_price']
    enchanted_leather_price = item_bazaar_price("ENCHANTED_LEATHER")['buy_order_price']
    medium_avg_price = 35000
    large_avg_price = 190000
    greater_avg_price = 450000

    medium_backpack_cost = 592*leather_price
    large_backpack_cost_normal_leather = ((576*16)+592)*leather_price
    greater_backpack_cost_normal_leather = ((576*48)+592)*leather_price

    
# -----------------------------------------------Medium Backpack-----------------------------------------------
    # This part of the function is ran if the user asks for "medium backpack".
    if type == "medium":
        return """The medium backpack is from leather /collection V (5),
And requires 1x small backpack and 512x leather.
1x small backpack requires 80 leather.
In total, 1 medium backpack requires 592 leather.

To craft {str_count} medium backpack(s),
The cheapest right now, is to buy {str_total_leather_count} leather.
In total, this will cost {str_cost} coins.
Each medium backpack usually sells for about {avg_price} coins.
This means that {str_count} medium backpack(s), should be about {profit} coins profit.""".format(str_count=str(count),
                                                                                               str_total_leather_count=str(thousand_sep(medium_backpack_leather_count*count)),
                                                                                               str_cost=str(thousand_sep(round(medium_backpack_cost*count, 1))),
                                                                                               avg_price=str(medium_avg_price),
                                                                                               profit=str(thousand_sep(round((medium_avg_price-medium_backpack_cost)*count, 1))))

# -----------------------------------------------Large Backpack-----------------------------------------------
    # This part of the function is ran if the user asks for "large backpack".
    elif type == "large":
        # This is ran if 576 leather is cheaper than enchanted leather.
        if (leather_price*leather_count_per_enchanted) < enchanted_leather_price:
            return """The large backpack is from leather /collection VIII (8),
And requires 1x medium backpack, and 16x Enchanted Leather.
1x medium backpack requires 1x small backpack and 512 leather.
1x small backpack requires 80 leather.
In total, 1 large backpack requires 16 enchanted leather and 592 regular leather.

To craft {str_count} large backpack(s),
the cheapest right now, is to buy {str_total_leather_count} leather.
In total this will cost {str_cost} coins.
Each large backpack usually sells for about {avg_price} coins.
This means that {str_count} large backpack(s), should be about {profit} coins profit.""".format(str_count=str(count),
                                                                str_total_leather_count=str(count*(large_backpack_in_leather)),
                                                                str_cost=str(thousand_sep(round(large_backpack_cost_normal_leather*count, 1))),
                                                                avg_price=str(large_avg_price),
                                                                profit=str(thousand_sep(round((large_avg_price-large_backpack_cost_normal_leather)*count))))

        # This is ran if enchanted leather is cheaper than 576 regular leather.
        else:
            return """The large backpack is from leather /collection VIII (8),
And requires 1x medium backpack, and 16x Enchanted Leather.
1x medium backpack requires 1x small backpack and 512 leather.
1x small backpack requires 80 leather.
In total, 1 large backpack requires 16 enchanted leather and 592 regular leather.

To craft {str_count} large backpack(s),
the cheapest right now, is to buy {str_leather_count} leather, and {str_enchanted_count} enchanted leather.
In total this will cost {str_cost} coins.
Each large backpack usually sells for about {avg_price} coins.
This means that {str_count} large backpack(s), should be about {profit} coins profit.""".format(str_count=str(count),
                                                                str_leather_count=str(count*(medium_backpack_leather_count)),
                                                                str_enchanted_count=str(16*count),
                                                                str_cost=str(thousand_sep(round(((592*leather_price)+(16*enchanted_leather_price))*count, 1))),
                                                                avg_price=str(large_avg_price),
                                                                profit=str(thousand_sep(round((large_avg_price-((592*leather_price)+(16*enchanted_leather_price)))*count, 1))))

# -----------------------------------------------Greater Backpack-----------------------------------------------
    # This part of the function is ran if the user asks for "greater backpack".
    elif type == "greater":
        # This is ran if 576 leather is cheaper than enchanted leather.
        if (leather_price*leather_count_per_enchanted) < enchanted_leather_price:
            return """The greater backpack is from leather /collection X (10),
And requires 1x large backpack, and 32x Enchanted Leather.
1x large backpack requires 1x medium backpack, and 16x Enchanted Leather.
1x medium backpack requires 1x small backpack and 512 leather.
1x small backpack requires 80 leather.
In total, 1 large backpack requires 16 enchanted leather and 592 regular leather.

To craft {str_count} greater backpack(s),
the cheapest right now, is to buy {str_total_leather_count} leather.
In total this will cost {str_cost} coins.
Each large backpack usually sells for about {avg_price} coins.
This means that {str_count} large backpack(s), should be about {profit} coins profit.""".format(str_count=str(count),
                                                                str_total_leather_count=str(count*(greater_backpack_in_leather)),
                                                                str_cost=str(thousand_sep(round(greater_backpack_cost_normal_leather*count, 1))),
                                                                avg_price=str(greater_avg_price),
                                                                profit=str(thousand_sep(round((large_avg_price-greater_backpack_cost_normal_leather)*count))))

        # This is ran if enchanted leather is cheaper than 576 regular leather
        else:
            return """The greater backpack is from leather /collection X (10),
And requires 1x large backpack, and 32x Enchanted Leather.
1x large backpack requires 1x medium backpack, and 16x Enchanted Leather.
1x medium backpack requires 1x small backpack and 512 leather.
1x small backpack requires 80 leather.
In total, 1 large backpack requires 16 enchanted leather and 592 regular leather.

To craft {str_count} large backpack(s),
the cheapest right now, is to buy {str_leather_count} leather, and {str_enchanted_count} enchanted leather.
In total this will cost {str_cost} coins.
Each large backpack usually sells for about {avg_price} coins.
This means that {str_count} large backpack(s), should be about {profit} coins profit.""".format(str_count=str(count),
                                                                str_leather_count=str(medium_backpack_leather_count*count),
                                                                str_enchanted_count=str(48*count),
                                                                str_cost=str(thousand_sep(round(((592*leather_price)+(48*enchanted_leather_price))*count, 1))),
                                                                avg_price=str(greater_avg_price),
                                                                profit=str(thousand_sep(round((greater_avg_price-((592*leather_price)+(48*enchanted_leather_price)))*count, 1))))


# Function for Lava Talisman maths.
def lava_talisman(amount):
    count = int(amount)
