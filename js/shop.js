let storefront = document.getElementById('storefront');


function addProduct(title, desc, price) {
    let article = document.createElement('article');
    article.classList.add('product');
    // article.innerHTML = `
    // <h2 class="product-title">Produkttitel</h2>
    // <p class="product-desc">Lorem ipsum dolor sit amet.</p>
    // <span class="product-price">50 kr</span>
    // `;

    let h2 = document.createElement('h2');
    h2.classList.add('product-title');
    h2.innerText = title;

    let p = document.createElement('p');
    p.classList.add('product-desc');
    p.innerText = desc;

    let span = document.createElement('span');
    span.classList.add('product-price');
    span.innerText = price + ' kr';

    article.append(h2, p, span);
    
    storefront.append(article);
}

addProduct('Produkttitel 1', 'Lorem ipsum dolor sit amet.', 50);
addProduct('Produkttitel 2', 'Lorem ipsum dolor sit amet.', 50);
addProduct('Produkttitel 3', 'Lorem ipsum dolor sit amet.', 50);
addProduct('Produkttitel 4', 'Lorem ipsum dolor sit amet.', 50);
addProduct('Produkttitel 5', 'Lorem ipsum dolor sit amet.', 50);
addProduct('Produkttitel 6', 'Lorem ipsum dolor sit amet.', 50);
