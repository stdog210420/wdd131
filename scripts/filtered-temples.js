const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const templeCards = document.querySelector('.temple-cards');


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

function displayResults(temples) {
    temples.forEach(temple => {
        // Create a figure element for each temple
        const figure = document.createElement("figure");

        // Create elements for each templeCards
        const figcaption = document.createElement("figcaption");
        const h3 = document.createElement("h3");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const img = document.createElement("img");
        const span1 = document.createElement('span1');
        const span2 = document.createElement('span2');
        const span3 = document.createElement('span3');

        // Set the content of the elements
        h3.textContent = `${temple.templeName}`;
        p1.textContent = `Location: `;
        p2.textContent = `Dedicated: `;
        p3.textContent = `area: `;
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} image`;

        // Append the temple details to the figcaption
        figcaption.appendChild(h3);
        figcaption.appendChild(p1);
        figcaption.appendChild(p2);
        figcaption.appendChild(p3);
        p1.appendChild(span1);  // Add the span to the p1
        p2.appendChild(span2);  // Add the span to the p2
        p3.appendChild(span3);  // Add the span to the p3

        span1.textContent = `${temple.location}`;
        span2.textContent = `${temple.dedicated}`;
        span3.textContent = `${temple.area} sq ft`;

        //add class to p1 & figure
        figure.classList.add('temple');
        span1.classList.add('span-temple');  // Add class to the span
        span2.classList.add('span-temple');  // Add class to the span
        span3.classList.add('span-temple');  // Add class to the span

        // Append the image and the figcaption to the figure
        figure.appendChild(figcaption);
        figure.appendChild(img);

        // Finally, append the figure to the document 
        templeCards.appendChild(figure);
    });
}

// Call the displayResults function and pass the temples array
displayResults(temples);