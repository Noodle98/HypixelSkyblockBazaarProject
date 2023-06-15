items = {
    # --------------------------------------- Farming --------------------------------------- 
    "wheat": {"Wheat": [1, "Wheat", "Harvesting wheat crops"],
              "Enchanted Bread": [60, "Wheat", "Wheat Collection V"],
              "Hay Bale": [9, "Wheat", "No requirements"],
              "Enchanted Hay Bale": [144, "Hay Bale", "Wheat Collection VII"],
              "Tightly-Tied Hay Bale": [144, "Enchanted Hay Bale", "Wheat Collection XI"]},

    "seeds": {"Seeds": [1, "Seeds", "Harvesting wheat crops"],
              "Enchanted Seeds": [160, "Seeds", "No requirements"]},

   "carrot": {"Carrot": [1, "Carrot", "Harvesting carrot crops"],
              "Enchanted Carrot": [160, "Carrot", "Carrot Collection IV"],
              "Enchanted Golden Carrot": [128, "Enchanted Carrot", "Carrot Collection VII - Also requires 288 gold nuggets (32 gold ingots)", [32, "Carrot"], [32, "Gold Ingot"]],
              "Enchanted Carrot On A Stick": [64, "Enchanted Carrot", "Carrot Collection V - Also requires 3 sticks"]},

   "potato": {"Potato": [1, "Potato", "Harvesting potato crops"],
              "Enchanted Potato": [160, "Potato", "Potato Collection IV"],
              "Enchanted Baked Potato": [160, "Enchanted Potato", "Potato Collection VII"],
              "Hot Potato Book": [160, "Enchanted Baked Potato", "Potato Collection VIII - Also requires 3 paper (= 3 sugar cane)", [3, "Sugar Cane"]]},

   "pumpkin": {"Pumpkin": [1, "Pumpkin", "Harvesting pumpkin crops"],
               "Enchanted Pumpkin": [160, "Pumpkin", "Pumpkin Collection III"],
               "Polished Pumpkin": [160, "Enchanted Pumpkin", "Pumpkin Collection X"]},

    "melon": {"Melon": [1, "Melon", "Harvesting melon crops"],
             "Enchanted Melon": [160, "Melon", "Melon Collection IV"],
             "Enchanted Melon Block": [160, "Enchanted Melon", "Melon Collection VI"],
             "Enchanted Glistering Melon": [256, "Melon", "Melon Collection V - Also requires 2304 gold nuggets (256 gold ingots)", [256, "Gold Ingot"]]},

    "red mushroom": {"Red Mushroom": [1, "Red Mushroom", "Harvesting mushroom crops"],
             "Red Mushroom Block": [9, "Red Mushroom", "Mushroom Collection V"],
             "Enchanted Red Mushroom": [160, "Red Mushroom", "Mushroom Collection VI"],
             "Enchanted Red Mushroom Block": [576, "Red Mushroom Block", "Mushroom Collection VIII"]},

    "brown mushroom": {"Brown Mushroom": [1, "Brown Mushroom", "Harvesting mushroom crops"],
             "Brown Mushroom Block": [9, "Brown Mushroom", "Mushroom Collection V"],
             "Enchanted Brown Mushroom": [160, "Brown Mushroom", "Mushroom Collection VI"],
             "Enchanted Brown Mushroom Block": [576, "Brown Mushroom Block", "Mushroom Collection VIII"]},

    "cocoa beans": {"Cocoa Beans": [1, "Cocoa Beans", "Harvesting cocoa bean crops"],
             "Enchanted Cocoa": [160, "Cocoa Beans", "Cocoa Beans Collection IV"],
             "Enchanted Cookie": [128, "Enchanted Cocoa", "Cocoa Beans Collection VI - Also requires 32 wheat", [32, "Wheat"]]},
    
    # Duplicate of cocoa beans, but called "Enchanted Cookie", so 'enchanted cookie' brings back a result.
    "enchanted cookie": {"Cocoa Beans": [1, "Cocoa Beans", "Harvesting cocoa bean crops"],
             "Enchanted Cocoa": [160, "Cocoa Beans", "Cocoa Beans Collection IV"],
             "Enchanted Cookie": [128, "Enchanted Cocoa", "Cocoa Beans Collection VI - Also requires 32 wheat", [32, "Wheat"]]},

    "cactus": {"Cactus": [1, "Cactus", "Harvesting Cacti"],
               "Enchanted Cactus Green": [160, "Cactus", "Cactus Collection IV - Requires Cactus green (Smelted Cactus)"],
               "Enchanted Cactus": [160, "Enchanted Cactus Green", "Cactus Collection VIII"]},

    "sugar cane": {"Sugar Cane": [1, "Sugar Cane", "Harvesting Sugar Cane"],
               "Enchanted Sugar": [160, "Sugar Cane", "Sugar Cane Collection IV"],
               "Enchanted Cake": [1, "Enchanted Egg", "Raw Chicken Collection VII - Also requires 1x Enchanted Egg, 3x Wheat, and 3x Milk Bucket", [1, "Enchanted Egg"]],
               "Enchanted Paper": [192, "Sugar Cane", "Sugar Cane Collection V"],
               "Enchanted Sugar Cane": [160, "Enchanted Sugar", "Sugar Cane Collection VIII"]},

    "nether wart": {"Nether Wart": [1, "Nether Wart", "Harvesting nether wart crops"],
                    "Enchanted Nether Wart": [160, "Nether Wart", "Nether Wart Collection IV"],
                    "Mutant Nether Wart": [160, "Enchanted Nether Wart", "Nether Wart Collection XII"]},

    # Farming animals
    "leather": {"Leather": [1, "Leather", "Killing cows"],
               "Enchanted Leather": [576, "Leather", "Leather Collection VI"]},

    "raw beef": {"Raw Beef": [1, "Raw Beef", "Killing cows"],
               "Enchanted Raw Beef": [160, "Raw Beef", "Leather Collection IV"]},

    "pork": {"Pork": [1, "Pork", "Killing pigs"],
               "Enchanted Pork": [160, "Pork", "Raw Porkchop Collection IV"],
               "Enchanted Grilled Pork": [160, "Enchanted Pork", "Raw Porkchop Collection VII"]},

    "raw chicken": {"Raw Chicken": [1, "Raw Chicken", "Killing chickens"],
               "Enchanted Raw Chicken": [160, "Raw Chicken", "Raw Chicken Collection IV"]},
    
    "egg": {"Enchanted Egg": [1, "Enchanted Egg", "Raw Chicken Collection V - Requires 144 Eggs (which cannot be bought)"],
               "Super Egg": [144, "Enchanted Egg", "Raw Chicken Collection IX"],
               "Enchanted Cake": [1, "Enchanted Egg", "Raw Chicken Collection VII - Also requires 2x Enchanted Sugar, 3x Wheat, and 3x Milk Bucket", [2, "Enchanted Sugar"]]},

    "feather": {"Feather": [1, "Feather", "Killing Chickens"],
               "Enchanted Feather": [160, "Feather", "Feather Collection V"]},

    # Duplicate of the 'enchanted cake' part of the 'egg' dict, so 'enchanted cake' brings back a result
    "enchanted cake": {"Enchanted Cake": [1, "Enchanted Egg", "Raw Chicken Collection VII - Also requires 2x Enchanted Sugar, 3x Wheat, and 3x Milk Bucket", [2, "Enchanted Sugar"]]},

    "mutton": {"Mutton": [1, "Mutton", "Killing sheep"],
               "Enchanted Mutton": [160, "Mutton", "Mutton Collection V"],
               "Enchanted Cooked Mutton": [160, "Enchanted Mutton", "Mutton Collection VIII"]},

    "raw rabbit": {"Raw Rabbit": [1, "Raw Rabbit", "Killing rabbits :slight_frown:"],
               "Enchanted Raw Rabbit": [160, "Raw Rabbit", "No requirements"]},

    "rabbit hide": {"Rabbit Hide": [1, "Rabbit Hide", "Killing rabbits :slight_frown:"],
               "Enchanted Rabbit Hide": [576, "Rabbit Hide", "Raw Rabbit Collection VI"]},

    "rabbit foot": {"Rabbit Foot": [1, "Rabbit Foot", "Killing rabbits :slight_frown:"],
               "Enchanted Rabbit Foot": [160, "Rabbit Foot", "Raw Rabbit Collection IV"]},

    # Duplicate of 'rabbit foot', but called 'rabbit's foot', so "rabbit's foot" brings back a result
    "rabbit's foot": {"Rabbit Foot": [1, "Rabbit Foot", "Killing rabbits :slight_frown:"],
               "Enchanted Rabbit Foot": [160, "Rabbit Foot", "Raw Rabbit Collection IV"]},

    #  --------------------------------------- Mining --------------------------------------- 
    "cobblestone": {"Cobblestone": [1, "Cobblestone", "Mining cobblestone, -and stone without a silk touch pick"],
                    "Enchanted Cobblestone": [160, "Cobblestone", "Cobblestone Collection IV"]},
    
    "coal": {"Coal": [1, "Coal", "Mining coal ore"],
             "Enchanted Coal": [160, "Coal", "Coal Collection IV"],
             "Enchanted Coal Block": [160, "Enchanted Coal", "Coal Collection VII"],
             "Enchanted Charcoal": [128, "Coal", "Coal Collection V - Also requires 32 Oak Wood", [32, "Oak Log"]]},

    "iron": {"Iron Ingot": [1, "Iron Ingot", "Mining iron ore"],
             "Enchanted Iron": [160, "Iron Ingot", "Iron Collection IV"],
             "Enchanted Iron Block": [160, "Enchanted Iron", "Iron Collection VII"]},

    "gold": {"Gold Ingot": [1, "Gold Ingot", "Mining gold ore"],
             "Enchanted Gold": [160, "Gold Ingot", "Gold Collection V"],
             "Enchanted Gold Block": [160, "Enchanted Gold", "Gold Collection VIII"]},    
    
    "diamond": {"Diamond":[1, "Diamond", "Mining diamond ore"],
               "Enchanted Diamond": [160, "Diamond", "Diamond Collection IV"],
               "Enchanted Diamond Block": [160, "Enchanted Diamond", "Diamond Collection VIII"],
               "Refined Diamond": [2, "Enchanted Diamond Block", "Dwarven Mines Forging"]},

    "lapis": {"Lapis Lazuli": [1, "Lapis Lazuli", "Mining lapis lazuli ore"],
              "Enchanted Lapis Lazuli": [160, "Lapis Lazuli", "Lapis Lazuli Collection IV"],
              "Enchanted Lapis Lazuli Block": [160, "Enchanted Lapis Lazuli", "Lapis Lazuli Collection VII"]},

    "emerald": {"Emerald": [1, "Emerald", "Mining emerald ore"],
                "Enchanted Emerald": [160, "Emerald", "Emerald Collection IV"],
                "Enchanted Emerald Block": [160, "Enchanted Emerald", "Emerald Collection VII"]},

    "redstone": {"Redstone": [1, "Redstone", "Mining redstone ore"],
                 "Enchanted Redstone": [160, "Redstone", "Redstone Collection IV"],
                 "Enchanted Redstone Block": [160, "Enchanted Redstone", "Redstone Collection VIII"]},

    "quartz": {"Quartz": [1, "Quartz", "Mining nether quartz ore"],
               "Enchanted Quartz": [160, "Quartz", "Nether Quartz Collection IV"],
               "Enchanted Quartz Block": [160, "Enchanted Quartz", "Nether Quartz Collection VI"]},

    "obsidian": {"Obsidian": [1, "Obsidian", "Mining Obsidian"],
                 "Enchanted Obsidian": [160, "Obsidian", "Obsidian Collection IV"]},

    "glowstone": {"Glowstone Dust": [1, "Glowstone Dust", "Mining glowstone"],
                  "Enchanted Glowstone Dust": [160, "Glowstone Dust", "Glowstone Dust Collection IV"],
                  "Enchanted Glowstone": [192, "Enchanted Glowstone Dust", "Glowstone Dust Collection VI"],
                  "Enchanted Redstone Lamp": [32, "Enchanted Glowstone Dust", "Glowstone Dust Collection VII", [128, "Enchanted Redstone"]]},

    "flint": {"Flint": [1, "Flint", "Mining gravel"],
              "Enchanted Flint": [160, "Flint", "Gravel Collection V"]},

    "gravel": {"Gravel": [1, "Gravel", "Mining gravel"]},

    "ice": {"Ice": [1, "Ice", "Mining ice with a silk touch pickaxe"],
            "Packed Ice": [9, "Ice", "Ice Collection III"],
            "Enchanted Ice": [160, "Ice", "Ice Collection IV"],
            "Enchanted Packed Ice": [160, "Enchanted Ice", "Ice Collection VII"]},

    "netherrack": {"Netherrack": [1, "Netherrack", "Mining netherrack"],
                   "Enchanted Netherrack": [160, "Netherrack", "Netherrack Collection IV"]},

    "sand": {"Sand": [1, "Sand", "Mining sand"],
             "Enchanted Sand": [160, "Sand", "Sand Collection V"]},

    "endstone": {"Endstone": [1, "Endstone", "Mining Endstone"],
                 "Enchanted Endstone": [160, "Endstone", "Endstone Collection IV"]},

    "snow": {"Snow Ball": [1, "Snow Ball", "Mining snow with a shovel"],
             "Snow Block": [4, "Snow Ball", "No requirements"],
             "Enchanted Snow Block": [160, "Snow Block", "No requirements"]},

    "mithril": {"Mithril": [1, "Mithril", "Mining mithril ore"],
                "Enchanted Mithril": [160, "Mithril", "Mithril Collection III"],
                "Refined Mithril": [160, "Enchanted Mithril", "Dwarven Mines Forging"]},

    "titanium": {"Titanium": [1, "Titanium", "Mining titanium ore"],
                 "Enchanted Titanium": [160, "Titanium", "No requirements"],
                 "Refined Titanium": [16, "Enchanted Titanium", "Dwarven Mines Forging"]},

    "hard stone": {"Hard Stone": [1, "Hard Stone", "Mining hard stone"],
                   "Enchanted Hard Stone": [576, "Hard Stone", "Hard Stone Collection III"],
                   "Concentrated Stone": [576, "Enchanted Hard Stone", "Hard Stone Collection VI"]},

    "starfall": {"Starfall": [1, "Starfall", "Killing star sentries"]},

    "treasurite": {"Treasurite": [1, "Treasurite", "Killing Treasure Hoarders"]},

    # Gemstones
    "jade gemstone": {"Rough Jade Gemstone": [1, "Rough Jade Gemstone", "Mining gemstones (colored glass panes) (colored glass panes) and killing mobs in Crystal Hollows"],
                      "Flawed Jade Gemstone": [80, "Rough Jade Gemstone", "Gemstone Collection II"],
                      "Fine Jade Gemstone": [80, "Flawed Jade Gemstone", "Gemstone Collection V"],
                      "Flawless Jade Gemstone": [80, "Fine Jade Gemstone", "Gemstone Collection IX"],
                      "Perfect Jade Gemstone": [80, "Flawless Jade Gemstone", "Gemstone Collection X"]},

    "amber gemstone": {"Rough Amber Gemstone": [1, "Rough Amber Gemstone", "Mining gemstones (colored glass panes) and killing mobs in Crystal Hollows"],
                      "Flawed Amber Gemstone": [80, "Rough Amber Gemstone", "Gemstone Collection II"],
                      "Fine Amber Gemstone": [80, "Flawed Amber Gemstone", "Gemstone Collection V"],
                      "Flawless Amber Gemstone": [80, "Fine Amber Gemstone", "Gemstone Collection IX"],
                      "Perfect Amber Gemstone": [80, "Flawless Amber Gemstone", "Gemstone Collection X"]},

    "topaz gemstone": {"Rough Topaz Gemstone": [1, "Rough Topaz Gemstone", "Mining gemstones (colored glass panes) and killing mobs in Crystal Hollows"],
                      "Flawed Topaz Gemstone": [80, "Rough Topaz Gemstone", "Gemstone Collection II"],
                      "Fine Topaz Gemstone": [80, "Flawed Topaz Gemstone", "Gemstone Collection V"],
                      "Flawless Topaz Gemstone": [80, "Fine Topaz Gemstone", "Gemstone Collection IX"],
                      "Perfect Topaz Gemstone": [80, "Flawless Topaz Gemstone", "Gemstone Collection X"]},

    "sapphire gemstone": {"Rough Sapphire Gemstone": [1, "Rough Sapphire Gemstone", "Mining gemstones (colored glass panes) and killing mobs in Crystal Hollows"],
                      "Flawed Sapphire Gemstone": [80, "Rough Sapphire Gemstone", "Gemstone Collection II"],
                      "Fine Sapphire Gemstone": [80, "Flawed Sapphire Gemstone", "Gemstone Collection V"],
                      "Flawless Sapphire Gemstone": [80, "Fine Sapphire Gemstone", "Gemstone Collection IX"],
                      "Perfect Sapphire Gemstone": [80, "Flawless Sapphire Gemstone", "Gemstone Collection X"]},

    "amethyst gemstone": {"Rough Amethyst Gemstone": [1, "Rough Amethyst Gemstone", "Mining gemstones (colored glass panes) and killing mobs in Crystal Hollows"],
                      "Flawed Amethyst Gemstone": [80, "Rough Amethyst Gemstone", "Gemstone Collection II"],
                      "Fine Amethyst Gemstone": [80, "Flawed Amethyst Gemstone", "Gemstone Collection V"],
                      "Flawless Amethyst Gemstone": [80, "Fine Amethyst Gemstone", "Gemstone Collection IX"],
                      "Perfect Amethyst Gemstone": [80, "Flawless Amethyst Gemstone", "Gemstone Collection X"]},

    "jasper gemstone": {"Rough Jasper Gemstone": [1, "Rough Jasper Gemstone", "Mining gemstones (colored glass panes) and killing mobs in Crystal Hollows"],
                      "Flawed Jasper Gemstone": [80, "Rough Jasper Gemstone", "Gemstone Collection II"],
                      "Fine Jasper Gemstone": [80, "Flawed Jasper Gemstone", "Gemstone Collection V"],
                      "Flawless Jasper Gemstone": [80, "Fine Jasper Gemstone", "Gemstone Collection IX"],
                      "Perfect Jasper Gemstone": [80, "Flawless Jasper Gemstone", "Gemstone Collection X"]},

    "ruby gemstone": {"Rough Ruby Gemstone": [1, "Rough Ruby Gemstone", "Mining gemstones (colored glass panes) and killing mobs in Crystal Hollows"],
                      "Flawed Ruby Gemstone": [80, "Rough Ruby Gemstone", "Gemstone Collection II"],
                      "Fine Ruby Gemstone": [80, "Flawed Ruby Gemstone", "Gemstone Collection V"],
                      "Flawless Ruby Gemstone": [80, "Fine Ruby Gemstone", "Gemstone Collection IX"],
                      "Perfect Ruby Gemstone": [80, "Flawless Ruby Gemstone", "Gemstone Collection X"]},

    #  --------------------------------------- Combat ---------------------------------------
    "rotten flesh": {"Rotten Flesh": [1, "Rotten Flesh", "Killing zombies"],
                     "Enchanted Rotten Flesh": [160, "Rotten Flesh", "Rotten Flesh Collection IV"]},

    "bone": {"Bone": [1, "Bone", "Killing skeletons"],
             "Enchanted Bone": [160, "Bone", "Bone Collection V"],
             "Enchanted Bone Block": [160, "Enchanted Bone", "Bone Collection X"]},

    "string": {"String": [1, "String", "Killing spiders"],
               "Enchanted String": [192, "String", "String Collection IV"]},

    "spider eye": {"Spider Eye": [1, "Spider Eye", "Killing spiders"],
                   "Enchanted Spider Eye": [160, "Spider Eye", "Spider Eye Collection IV"],
                   "Enchanted Fermented Spider Eye": [64, "Enchanted Spider Eye", "Spider Eye Collection VII - Also requires 64 sugar (sugar cane), and 64 brown mushrooms", [64, "Sugar Cane"], [64, "Brown Mushroom"]]},

    "gunpowder": {"Gunpowder": [1, "Gunpowder", "Killing creepers"],
                  "Enchanted Gunpowder": [160, "Gunpowder", "Gunpowder Collection IV"],
                  "Enchanted Firework Rocket": [64, "Enchanted Gunpowder", "Gunpowder Collection VI - Also requires 16 Paper (sugar cane)", [16, "Sugar Cane"]]},

    "ender pearl": {"Ender Pearl": [1, "Ender Pearl", "Killing endermen"],
                    "Enchanted Ender Pearl": [20, "Ender Pearl", "Ender Pearl Collection II"],
                    "Enchanted Eye of Ender": [16, "Enchanted Ender Pearl", "Ender Pearl Collection VI - Also requires 64 blaze powder (32 blaze rod)", [32, "Blaze Rod"]],
                    "Absolute Ender Pearl": [80, "Enchanted Ender Pearl", "Ender Pearl Collection VII"]},

    "ghast tear": {"Ghast Tear": [1, "Ghast Tear", "Killing ghasts"],
                   "Enchanted Ghast Tear": [5, "Ghast Tear", "Ghast Tear Collection IV"]},

    "slime": {"Slimeball": [1, "Slimeball", "Killing slimes"],
              "Enchanted Slimeball": [160, "Slimeball", "Slimeball Collection V"],
              "Enchanted Slime Block": [160, "Enchanted Slimeball", "Slimeball Collection VIII"]},

    "magma cream": {"Magma Cream": [1, "Magma Cream", "Killing magma cubes"],
                    "Enchanted Magma Cream": [160, "Magma Cream", "Magma Cream Collection V"]},

    "blaze": {"Blaze Rod": [1, "Blaze Rod", "Killing blazes"],
              "Enchanted Blaze Powder": [160, "Blaze Rod", "Blaze Rod Collection IV"],
              "Enchanted Blaze Rod": [160, "Enchanted Blaze Powder", "Blaze Rod Collection VII"]},

    # Crystal Hollows mob drops
    "sludge juice": {"Sludge Juice": [1, "Sludge Juice", "Killing level 5+ sludges in Crystal Hollows"]},

    "yoggie": {"Yoggie": [1, "Yoggie", "Killing Yog in Crystal Hollows, or Bal in Khazad-dûm (Crystal Hollows)"]},

    # Mayor Diana's Mythological Ritual drops
    "griffin feather": {"Griffin Feather": [1, "Griffin Feather", "Drops from mythological rituals while Diana is mayor"]},

    "daedalus": {"Daedalus Stick": [1, "Daedalus Stick", "Drops rarely from mythological ritual minotaurs while Diana is mayor"]},

    "ancient claw": {"Ancient Claw": [1, "Ancient Claw", "Drops from mythological rituals while Diana is mayor"],
                     "Enchanted Ancient Claw": [160, "Ancient Claw", "Also drops rarely from mythological rituals while Diana is mayor"]},

    # Slayer items
    "revenant": {"Revenant Flesh": [1, "Revenant Flesh", "Killing revenant horror bosses and mini-bosses"],
                 "Revenant Viscera": [128, "Revenant Flesh", "Zombie Slayer level 2 - Also requires 32 enchanted string", [32, "Enchanted String"]]}




}
