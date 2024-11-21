// Create an array of 100 items with labels "item 1" to "item 100"
const items = Array.from({ length: 100 }, (_, i) => `item ${i + 1}`);

// Number of items to display per page
const itemsPerPage = 10;

// Tracks the current page (initially set to page 1)
let currentPage = 1;

// DOM element where items will be rendered
const itemsEl = document.getElementById("items");

// DOM element where pagination controls will be rendered
const paginationEl = document.getElementById("pagination");

// Function to render the items for the current page
const renderItems = () => {
  itemsEl.innerHTML = ""; // Clear previous items
  const start = (currentPage - 1) * itemsPerPage; // Calculate start index
  const end = start + itemsPerPage; // Calculate end index
  const visibleItems = items.slice(start, end); // Extract items for the current page

  // Create and append a <div> for each visible item
  visibleItems.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item; // Set the item's text
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
  prevButton.onclick = () => changePage(currentPage - 1);
  paginationEl.appendChild(prevButton);

  // Create page number buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i; // Set button text to page number
    pageButton.onclick = () => changePage(i); // Change page when clicked
    paginationEl.appendChild(pageButton);
  }

  // Create "Next" button and attach its functionality
  const nextButton = document.createElement("button");
  nextButton.textContent = "▶";
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

// Initial render of pagination controls and items
pagination();
renderItems();
