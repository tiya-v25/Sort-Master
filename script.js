let array = [];
const container = document.getElementById("array-container");

function generateArray(size = 5) {
  console.log("generateArray called with size:", size);
  console.log("container element:", container);
  container.innerHTML = "";
  array = [];

  for (let i = 0; i < size; i++) {
    let value = Math.floor(Math.random() * 300) + 10;
    array.push(value);
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}px`;
    container.appendChild(bar);
  }
}

async function bubbleSort() {
  const bars = document.getElementsByClassName("bar");

  if (bars.length === 0) {
      alert("Please generate an array first!");
      return;
  }

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";

      await new Promise(resolve => setTimeout(resolve, 80));

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];

        bars[j].style.height = `${array[j]}px`;
        bars[j + 1].style.height = `${array[j + 1]}px`;
      }

      bars[j].style.backgroundColor = "teal";
      bars[j + 1].style.backgroundColor = "teal";
    }

    bars[array.length - i - 1].style.backgroundColor = "green";
  }

  bars[0].style.backgroundColor = "green";
}

console.log("Adding event listener for generate button");
document.getElementById("generate").addEventListener("click", function() {
  console.log("Generate button clicked");
  const size =parseInt(document.getElementById(array-size).value);
  generateArray(size);
});
document.getElementById("sort").addEventListener("click", bubbleSort);

window.onload = function(){ generateArray(10)};