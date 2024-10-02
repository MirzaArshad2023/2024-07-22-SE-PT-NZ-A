
fetch()
.then(response => response.json())
.then(json => json.forEach((product)=>{
    addCard(product.title, product.description)
}))