window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    const api_key = "XhIHTkEpMJW1XVzlVjJRbQJCaNXyDpVZ"

    const showSearchResults = (data => {
        console.log('the data fro the API is', data)


        //loop over data/items
        //grab the video id from the item
        //once you grab the video id and console log it out
        //use the iframe code above to embed the video id in it
        //once you have a bunch of iframe share codes for the result videos
        //update the UI with iframe share codes


    })

    const fecthDataFromGiphy = (searchStr) => {

        let url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=20&part=snippet&q=${searchStr}&limit=15`

        console.log('the url is', url)

        fetch(url)
            .then((res) => {
                return res.json()
            }).then((data) => {
                for (i = 0; i < data.data.length; i++) {
                    var img = '<img height="300" widhth = "300" src="' + data.data[i].images.downsized_large.url + '"/>'
                    document.getElementById('giphy-image').innerHTML += img;
                }
            })



    }

    document.getElementById('enter').addEventListener('click', (event) => {
        console.log('the button was clicked')

        // allows search entry to communicate to console

        let searchStr = document.getElementById('search-box').value

        console.log('the search string is', searchStr)

        fecthDataFromGiphy(searchStr)

    })

    // Make Enter button on Keyboard select Enter/Search function on website

    let searchBox = document.getElementById("search-box");

    searchBox.addEventListener("keydown", e => {
        if (e.key === 'Enter') {
            console.log("Enter is pressed");

            let searchStr = document.getElementById('search-box').value

            console.log('the search string is', searchStr)

            fecthDataFromGiphy(searchStr)
        }
    })





})


    //const apiKey = 'XhIHTkEpMJW1XVzlVjJRbQJCaNXyDpVZ';

    //const searchURL = https://www.api.giphy.com/v1/gifs/search?key=XhIHTkEpMJW1XVzlVjJRbQJCaNXyDpVZ&part=snippet&q=${searchStr}

