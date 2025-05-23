function fetchPage(pageNumber, callback) {
    var url= "https://api.hypixel.net/skyblock/auctions?page=" + pageNumber;
    var nextXhr = new XMLHttpRequest;
    nextXhr.open("GET", url, true);
    // Sets up a callback function to send data onto next function
    nextXhr.onreadystatechange = function () {
    // Checks if the request is complete (readyState 4) and successful (status 200)
    if (nextXhr.readyState == 4 && nextXhr.status == 200) {
        // Parses the data
        var response = JSON.parse(nextXhr.responseText);
        // Calls the callback function with the response as argument
        callback(null, response);
        //console.log(`Hypixel API with page number ${pageNumber} has been called and sent to workData`);
    }   
    else {
        callback('Error fetching data. Status code: ' + nextXhr.status, null, pageNumber)
        }
    }
    nextXhr.send();
}
function workData(error, data, pageNumber) {
    if (error) {
        console.log(error);
    }
    else {
    //let greaterBackpacks = [];
    const auctions = data['auctions'];
    for (let x of auctions) {
        if (x['item_name'] == "Greater Backpack" && x['bin'] == true) {
            //greaterBackpacks.push(x['starting_bid']);
            if (localStorage.getItem("lbinGreaterBackpack") == null) {
                localStorage.setItem("lbinGreaterBackpack", x['starting_bid']);
            }
            else {
                if (x['starting_bid'] < parseInt(localStorage.getItem("lbinGreaterBackpack"))) {
                    localStorage.removeItem("lbinGreaterBackpack");
                    localStorage.setItem("lbinGreaterBackpack", x['starting_bid']);
                    console.log(`this backpack is the new lbin detected: ${x['starting_bid']}`);
                }
            }
            //console.log(`Backpack found, price is: ${x['starting_bid']}`);
            }
        }
    }

    }

function testingAuctions() {
    if (localStorage.getItem("lbinGreaterBackpack") != null) {
        localStorage.removeItem("lbinGreaterBackpack");
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://api.hypixel.net/skyblock/auctions", true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText);
            let totalPages = data['totalPages'];
            
            for (let page = 0; page < totalPages; page++) {
                fetchPage(page, workData);
                
            }

        }
    }
}

export default testingAuctions;
//document.querySelector("#TEST").addEventListener('click', testingAuctions);