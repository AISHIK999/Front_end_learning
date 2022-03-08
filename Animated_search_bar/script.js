let searchBarContainerEl = document.querySelector(".search-bar");

let magnifierEl = document.querySelector(".search-icon");

//On clicking the search icon, the 'active' class is toggled, thus triggering the animation as described in the CSS file
magnifierEl.addEventListener("click", () => {
    searchBarContainerEl.classList.toggle("active");
});
