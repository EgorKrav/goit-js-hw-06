const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.children;

console.log(`Number of categories: ${categoriesItems.length}`);

Array.from(categoriesItems).forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryItems = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryName} \nNumber: ${categoryItems}`);
});