web3 = new Web3(web3.currentProvider)
let contractInstance = web3.eth.contract(abi).at("0x4d7b4a8551adaf78ab6e0ace32c639fc455129a6")

function getAllArticles() {
  contractInstance.articlesCounter((err, amountOfArticles) => {
    amountOfArticles = parseInt(amountOfArticles)

    for(let i = 0; i < amountOfArticles; i++) {
      contractInstance.articles(i, (err, article) => {
        let articlesHTML = `<div class="article" id="${parseInt(article[4])}">
          <div class="title">${article[0]}<span class="author"> by ${article[2]}</span></div>
          <div class="author">${Date(parseInt(article[3]))}</div>
          ${article[1]} <br/>
        </div>`

        document.querySelector('#root').insertAdjacentHTML('beforeend', articlesHTML)
      })
    }
  })
}

getAllArticles()
