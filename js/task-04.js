const counter = document.getElementById("counter");
const counterValue = document.getElementById("value");

let count = 0;

const decrement = () => {
  count -= 1;
  counterValue.textContent = count;
};

const increment = () => {
  count += 1;
  counterValue.textContent = count;
};

counter.addEventListener("click", (event) => {
  const action = event.target.dataset.action;

  if (action === "count") {
    count();
  } else if (action === "count") {
    count();
  }
});
