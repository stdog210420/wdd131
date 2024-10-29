const productCards = document.querySelector('.bag-cards');
const h2title = document.querySelector('.h2-title');


let products = [];
const getProducts = async () => {
    const response = await fetch("https://stdog210420.github.io/wdd131/project/scripts/products.json");
    if (response.ok) {
        products = await response.json();
        displayProducts(products);
        console.log(products)
    }
}
getProducts();
creatProductCard(products);

function creatProductCard(filteredProducts) {
    productCards.innerHTML = "";
    filteredProducts.forEach(product => {
        // Create a figure element for each temple
        let figure = document.createElement("figure");
        // Create elements for each templeCards
        let figcaption = document.createElement("figcaption");
        let productName = document.createElement("h4");
        let category = document.createElement("p");
        let price = document.createElement("p");
        let amount = document.createElement("p");
        let img = document.createElement("img");

        // Set the content of the elements
        productName.innerHTML = `${product.Name}`;
        category.innerHTML = `Location: <span class="span-temple">${product.category}</span>`;
        price.innerHTML = `price:$ <span class="span-temple">${product.price}</span>`;
        amount.innerHTML = `Dedicated: <span class="span-temple">${product.quantity}</span>`;
        img.setAttribute("src", product.imageUrl);
        img.setAttribute("alt", `${product.Name} Bags image`);
        img.setAttribute("loading", "lazy");
        // Append the temple details to the figcaption
        figcaption.appendChild(productName);
        figcaption.appendChild(category);
        figcaption.appendChild(price);
        figcaption.appendChild(amount);
        // Append the image and the figcaption to the figure
        figure.appendChild(figcaption);
        figure.appendChild(img);
        //add class to p1 & figure
        figure.classList.add('bags');
        // Finally, append the figure to the document 
        productCards.appendChild(figure);
    });
}


