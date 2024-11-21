// Number of items to display per page
const itemsPerPage = 9;

// Tracks the current page (initially set to page 1)
let currentPage = 1;

// Stores the fetched items
let items = [];

// DOM element where items will be rendered
const itemsEl = document.getElementById("items");

// DOM element where pagination controls will be rendered
const paginationEl = document.getElementById("pagination");

// Fetch data from the API
async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();
    items = data.products; // Store full product objects
    renderItems();
    pagination();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to render the items for the current page
const renderItems = () => {
  itemsEl.innerHTML = ""; // Clear previous items
  const start = (currentPage - 1) * itemsPerPage; // Calculate start index
  const end = start + itemsPerPage; // Calculate end index
  const visibleItems = items.slice(start, end); // Extract items for the current page

  // Create and append a card for each visible item
  visibleItems.forEach((item) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${item.thumbnail}" alt="${item.title}" class="product-image" />
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <p><strong>Price:</strong> $${item.price}</p>
      <p><strong>Rating:</strong> ${item.rating} ⭐</p>
    `;
    itemsEl.appendChild(div); // Add the item to the DOM
  });
};

// Function to render pagination controls
const pagination = () => {
  paginationEl.innerHTML = ""; // Clear previous pagination controls
  const totalPages = Math.ceil(items.length / itemsPerPage); // Calculate total pages

  // Create "Previous" button and attach its functionality
  const prevButton = document.createElement("button");
  prevButton.textContent = "◀";
  prevButton.disabled = currentPage === 1; // Disable if on the first page
  prevButton.onclick = () => changePage(currentPage - 1);
  paginationEl.appendChild(prevButton);

  // Create page number buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i; // Set button text to page number
    pageButton.className = i === currentPage ? "active" : ""; // Highlight the active page
    pageButton.onclick = () => changePage(i); // Change page when clicked
    paginationEl.appendChild(pageButton);
  }

  // Create "Next" button and attach its functionality
  const nextButton = document.createElement("button");
  nextButton.textContent = "▶";
  nextButton.disabled = currentPage === totalPages; // Disable if on the last page
  nextButton.onclick = () => changePage(currentPage + 1);
  paginationEl.appendChild(nextButton);
};

// Function to handle page changes
function changePage(selectedPage) {
  const totalPages = Math.ceil(items.length / itemsPerPage); // Calculate total pages

  // Update currentPage if the selected page is valid
  if (selectedPage >= 1 && selectedPage <= totalPages) {
    currentPage = selectedPage;
  }

  // Re-render items and pagination controls
  renderItems();
  pagination();
}

// Fetch data and initialize pagination
fetchData();
