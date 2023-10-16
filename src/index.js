const api = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6c82ec66d2ea40c586e897cdc47b4413";

let myPromise = new Promise((myResolve, myReject) => {
    const data = fetch(api)
    .then(response => response.json())
    .then(data => {
        let articles = data.articles;
        let output = "";

        articles.forEach(article =>{
            output += `
            <div class="card">
                <div class="card-header">
                    <h2>${article.title}</h2>
                </div>
                <div class="card-body">
                    <img src="${article.urlToImage}" alt="${article.title}">
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read More</a>
                </div>
            </div>
            `;
        });
        document.getElementById("output").innerHTML = output;

        myResolve(articles);
        myReject("Error");
    })
    .catch(error => console.log(error));

});

myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);

function myDisplayer(data) {
    console.log(data);
}