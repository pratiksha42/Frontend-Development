let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})



const filterItems = document.querySelectorAll(".filter-item");
const postBoxes = document.querySelectorAll(".post-box");

filterItems.forEach(item => {
    item.addEventListener("click", () => {
        const filter = item.getAttribute("data-filter");
        filterItems.forEach(i => i.classList.remove("active-filter"));
        item.classList.add("active-filter");

        postBoxes.forEach(box => {
            box.style.display = box.classList.contains(filter) || filter === "all" ? "block" : "none";
        });
    });
});

