//saved element = [url, div-element]
// $(document).createElement('script');
// // script.src = '//code.jquery.com/jquery-1.11.0.min.js'

// async function deliverUpdate(){
//     const updatedPage = await $.get('https://www.predictit.org/markets/detail/4319/Will-Donald-Trump-be-impeached-by-year-end-2019');
//     const myJSON = await response.json();
//     //const updatedElement = myJSON[div-element]
//     //alert('Your saved element has changed to!' + updatedElement)
//     console.log(myJSON)
// }



// deliverUpdate();

const myFetch = fetch('https://cors-anywhere.herokuapp.com/https://www.predictit.org/api/marketdata/markets/3633')

    .then(response => response.json())
    .then(data => {
    console.log(data)
    for (let i = 0; i < 6; i += 1) {
        console.log('Candidate Name: ' + data.contracts[i].shortName)
        //console.log(data.contracts[i])
        const addTo = document.getElementsByTagName('h1')
        document.write(`<h1>${data.contracts[i].shortName} </h1>`)
        document.write(`<image src=${data.contracts[i].image}>`)
        document.write('|| ')
        document.write('Current Best Buy No Price:   ' + data.contracts[i].bestBuyNoCost + ' ')
        document.write('|| ')
        document.write('Current Best Buy Yes Price:   ' + data.contracts[i].bestBuyYesCost + ' ')
        document.write('|| ')
        document.write('Last Trade Price:   ' + data.contracts[i].lastTradePrice + ' ')
        document.write('|| ')
        document.write('<br></br>')
        // addTo.innerText = data.contracts[i].bestBuyNoCost
    console.log('Current Best Buy No Price:' + data.contracts[i].bestBuyNoCost)
    console.log('Current Best Buy Yes Price:' + data.contracts[i].bestBuyYesCost)
    console.log('Last Trade Price:' + data.contracts[i].lastTradePrice)
    }
     // Prints result from `response.json()` in getRequest
    })
    
    .catch(error => console.error(error))
    // myFetch.mode = 'no-cors'
//create − chrome.notifications.create(string notificationId, NotificationOptions options, function callback)