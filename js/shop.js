let storefront = document.getElementById('storefront');


function addProduct() {
    let article = document.createElement('article');
    article.classList.add('product');
    article.innerHTML = `
    <h2 class="product-title">Produkttitel</h2>
    <p class="product-desc">Lorem ipsum dolor sit amet.</p>
    <span class="product-price">50 kr</span>
    `;
    
    storefront.append(article);
}

addProduct();
addProduct();
addProduct();
addProduct();
addProduct();
addProduct();