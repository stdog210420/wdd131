const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const templeCards = document.querySelector('.temple-cards');
const h2title = document.querySelector('.h2-title');


hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Adelaide Australia",
        location: "Marden, Australia",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x225/adelaide-australia-temple-lds-866420-wallpaper.jpg"
    },
    {
        templeName: "Apia Samoa",
        location: "Apia, Samoa",
        dedicated: "2005, September, 4",
        area: 18691,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/400x250/apia-samoa-temple-lds-460475-wallpaper.jpg"
    },
    {
        templeName: "Chicago Illinois",
        location: "Illinois, United States",
        dedicated: "1989, October, 8",
        area: 37062,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/chicago-illinois/400x250/Chicago-Temple_0738.jpg"
    },
    {
        templeName: "Anchorage Alaska",
        location: "Alaska, United States",
        dedicated: "2004, February, 8",
        area: 11937,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/400x225/anchorage-temple-lds-253274-wallpaper.jpg"
    },
    {
        templeName: "Asunción Paraguay",
        location: "Asunció, Paraguay",
        dedicated: "2019, November, 3",
        area: 11906,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/2-5b20486ae3876279c35be147ef9e63aec256a459.jpeg"
    },
];

// Call the displayResults function and pass the temples array
createTempleCard(temples);

//Home - displays all the temples stored in the array.
let homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    createTempleCard(temples);
    h2title.innerHTML = "Home";
})

//Old - temples built before 1900
let oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1990));
    h2title.innerHTML = "Old Temples";
})

//New - temples built after 2000
let newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000));
    h2title.innerHTML = "New Temples";
})

//Large - temples larger than 90000 square feet
let largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
    h2title.innerHTML = "Large Temples";
})

//Small - temples smaller than 10000 square feet
let smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
    h2title.innerHTML = "Small Temples";
})


function createTempleCard(filteredTemples) {
    templeCards.innerHTML = "";
    filteredTemples.forEach(temple => {
        // Create a figure element for each temple
        let figure = document.createElement("figure");
        // Create elements for each templeCards
        let figcaption = document.createElement("figcaption");
        let templeName = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        // Set the content of the elements
        templeName.innerHTML = `${temple.templeName}`;
        location.innerHTML = `Location: <span class="span-temple">${temple.location}</span>`;
        dedicated.innerHTML = `Dedicated: <span class="span-temple">${temple.dedicated}</span>`;
        area.innerHTML = `area: <span class="span-temple">${temple.area} sq ft</span>`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple image`);
        img.setAttribute("loadding", "lazy");
        // Append the temple details to the figcaption
        figcaption.appendChild(templeName);
        figcaption.appendChild(location);
        figcaption.appendChild(dedicated);
        figcaption.appendChild(area);
        // Append the image and the figcaption to the figure
        figure.appendChild(figcaption);
        figure.appendChild(img);
        //add class to p1 & figure
        figure.classList.add('temple');
        // Finally, append the figure to the document 
        templeCards.appendChild(figure);
    });
}

