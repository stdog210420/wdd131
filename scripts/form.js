const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


let productSelect = document.querySelector('#product');

function createProducts(products) {
    productSelect.innerHTML = '<option value="" disabled selected>Choose a Product ...</option>'; // Reset with default option
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = `${product.name} (Rating: ${product.averagerating})`;
        productSelect.appendChild(option);
    });
}
createProducts(products);

// Get the current review count from localStorage, or initialize to 0 if it doesn't exist
const reviewForm = document.querySelector('#reviewForm');
let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;


function incrementReviewCounter() {
    reviewCount += 1;  // Increment the counter
    localStorage.setItem('reviewCount', reviewCount);  // Save updated count to localStorage
}

// Event listener for form submission
reviewForm.addEventListener('submit', function (event) {
    incrementReviewCounter();  // Increment the counter on submit
    // No need to prevent default here, as I want to redirect to review.html
});

