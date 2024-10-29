const bagCards = document.querySelector('.bag-cards');
const h2title = document.querySelector('.h2-title');


// Call the displayResults function and pass the temples array
createBagleCard(bags);




//Home - displays all the temples stored in the array.
let homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    createBagCard(bags);
    h2title.innerHTML = "Home";
})

//Old - temples built before 1900
let oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
    createBagsCard(bags.filter(bag => new Date(bag.dedicated).getFullYear() < 1990));
    h2title.innerHTML = "Old Temples";
})

//New - temples built after 2000
let newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    createBagCard(temples.filter(temple => new Date(bag.dedicated).getFullYear() > 2000));
    h2title.innerHTML = "New Temples";
})

//Large - temples larger than 90000 square feet
let largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    createBagCard(temples.filter(bag => bag.area > 90000));
    h2title.innerHTML = "Large Temples";
})

//Small - temples smaller than 10000 square feet
let smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    createBagCard(temples.filter(temple => temple.area < 10000));
    h2title.innerHTML = "Small Temples";
})


function createBagCard(filteredBags) {
    bagCards.innerHTML = "";
    filteredBags.forEach(bag => {
        // Create a figure element for each temple
        let figure = document.createElement("figure");
        // Create elements for each templeCards
        let figcaption = document.createElement("figcaption");
        let bagName = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        // Set the content of the elements
        bagName.innerHTML = `${bag.productName}`;
        location.innerHTML = `Location: <span class="span-temple">${bag.location}</span>`;
        dedicated.innerHTML = `Dedicated: <span class="span-temple">${bag.dedicated}</span>`;
        area.innerHTML = `area: <span class="span-temple">${bag.area} sq ft</span>`;
        img.setAttribute("src", bag.imageUrl);
        img.setAttribute("alt", `${bag.bagName} Temple image`);
        img.setAttribute("loadding", "lazy");
        // Append the temple details to the figcaption
        figcaption.appendChild(bagName);
        figcaption.appendChild(location);
        figcaption.appendChild(dedicated);
        figcaption.appendChild(area);
        // Append the image and the figcaption to the figure
        figure.appendChild(figcaption);
        figure.appendChild(img);
        //add class to p1 & figure
        figure.classList.add('bag');
        // Finally, append the figure to the document 
        templeCards.appendChild(figure);
    });
}

/* async getProducts Function using fetch()*/
let productList = [];
//Create another function expression called getProducts. Make it an async anonymous, arrow function.
const getProducts = async () => {
    const response = await fetch("https://stdog210420.github.io/project/scripts/products.json");
    if (response.ok) {
        productList = await response.json();
        displayProducts(productList);
        console.log(productList)
    }
}

getProducts();
