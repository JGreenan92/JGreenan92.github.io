window.addEventListener('load', (event) => {

    console.log('page is fully loaded');

    console.log('your code runs here')

    document.getElementById('enter').addEventListener('click', (event) => {

        //Promises

        const updateUI = (url) => {
            console.log('the url recieved by updateUI is', url)
            //Javascript sting lterals
            //console.log(`<img src=${url}/>`)

            document.getElementById('giphy-image').innerHTML = `<img src=${url} />`

        }

        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => {
                return response.json()
            }).then((data) => {
                console.log(data)
                console.log(data.message)
                updateUI(data.message)
            })

    })

});