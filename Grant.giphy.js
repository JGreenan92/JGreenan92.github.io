window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    const api_key = "XhIHTkEpMJW1XVzlVjJRbQJCaNXyDpVZ"


    const btn = document.querySelector('button')
    btn.addEventListener('click', getData)

    function getData() {
        const searchStr = document.querySelector('#search-box').value

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=20&part=snippet&q=${searchStr}&limit=15`

        const output = document.getElementById("container")
        output.innerHTML = ""
        console.log('the url is', url)
        console.log('you have searched for', searchStr)
        const searchResults =

        fetch(url).then(funtion(rep){
            return rep.json()
        }).then(function (data) {
            console.log(data)
            data.data.forEach((item) => {

            console.log(item.images.original.webp)

            output.innerhtml += 'img class="img-fluid p-2" src=${item.image.original.webp} onerror="this.onerror=null; alt="">'

            output.style.alignItems= 'center'
            })
        });





    }

    document.getElementById("search-box")
      .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
          document.getElementById("btn").click();
      }

});





