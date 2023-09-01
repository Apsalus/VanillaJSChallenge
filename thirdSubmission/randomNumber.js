const randomForm = document.getElementById("randomForm");
const selectNumber = document.getElementById("selectNumber");
const getNumber = document.getElementById("getNumber");
const selectSapn = document.getElementById("selectSapn");
const rusultSapn = document.getElementById("rusultSapn");

function inputNumber(event) {
  const comparisonNumber = selectNumber.value;
  const randomNumber = Math.floor(Math.random() * comparisonNumber);
  event.preventDefault();

  if (getNumber.value !== "") {
    selectSapn.innerText =
      "You chose: " +
      getNumber.value +
      ", the machine chose: " +
      randomNumber +
      ".";

    if (getNumber.value > randomNumber) {
      rusultSapn.innerText = "You Won!";
    } else {
      rusultSapn.innerText = "You Lost!";
    }
  }
}

randomForm.addEventListener("submit", inputNumber);
