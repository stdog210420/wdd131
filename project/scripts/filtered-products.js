const bagCards = document.querySelector('.bag-cards');
const h2title = document.querySelector('.h2-title');


// Call the displayResults function and pass the temples array
createBagCard(bags);

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
        let bagName = document.createElement("h4");
        let category = document.createElement("p");
        let price = document.createElement("p");
        let amount = document.createElement("p");
        let img = document.createElement("img");

        // Set the content of the elements
        bagName.innerHTML = `${bag.productName}`;
        category.innerHTML = `Location: <span class="span-temple">${bag.category}</span>`;
        price.innerHTML = `price:$ <span class="span-temple">${bag.price}</span>`;
        amount.innerHTML = `Dedicated: <span class="span-temple">${bag.quantity}</span>`;
        img.setAttribute("src", bag.imageUrl);
        img.setAttribute("alt", `${bag.Name} Bags image`);
        img.setAttribute("loadding", "lazy");
        // Append the temple details to the figcaption
        figcaption.appendChild(bagName);
        figcaption.appendChild(category);
        figcaption.appendChild(price);
        figcaption.appendChild(amount);
        // Append the image and the figcaption to the figure
        figure.appendChild(figcaption);
        figure.appendChild(img);
        //add class to p1 & figure
        figure.classList.add('bags');
        // Finally, append the figure to the document 
        templeCards.appendChild(figure);
    });
    const url = "https://stdog210420.github.io/project/scripts/products.json"
    async function getProducts() {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                // console.log(data);
                displayResults(data);
            }
            else {
                throw Error(await response.text());
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    getProducts();
}