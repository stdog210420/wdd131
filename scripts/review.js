let counter = document.querySelector('#counter');

const reviewCount = localStorage.getItem('reviewCount') || 0;

// Display the review count in the span with id 'reviewCountDisplay'
counter.textContent = reviewCount;