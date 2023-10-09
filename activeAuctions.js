function testingAuctions() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://api.hypixel.net/skyblock/auctions", true);
    xhr.send();

    let greaterBackpacks = [];
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText);
            let totalPages = data['totalPages'];
            console.log(totalPages);
            //console.log(xhrParsed);

            let i = 0;
            while (i < totalPages) {
                let baseURL = "https://api.hypixel.net/skyblock/auctions?page=";
                let newURL = baseURL.concat(i);
                var nextXhr = new XMLHttpRequest;
                nextXhr.open("GET", newURL, true);
                nextXhr.onreadystatechange
                const newData = JSON.parse(nextXhr.responseText);
                const auctions = newData['auctions'];
                for (let x of auctions) {
                    if (x['item_name'] == "Greater Backpack" && x['bin'] == true) {
                        greaterBackpacks.push(x['starting_bid']);
                        console.log(`Backpack found, price is: ${x['starting_bid']}`)
                    }
                }

                console.log(`Page number ${i} is now done`);
                i++;
            }



        }
    }
    console.log(greaterBackpacks);
   
}

export default testingAuctions;

document.querySelector("#TEST").addEventListener('click', testingAuctions);