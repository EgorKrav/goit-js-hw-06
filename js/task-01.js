const categoriesList = document.querySelector("#categories");
const categoriesItems = [...categoriesList.children];
const allItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

allItems.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent} \nNumber: ${item.lastElementChild.childElementCount}`);
});
