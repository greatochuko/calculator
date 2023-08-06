let numButtons = document.querySelectorAll(".num-btn");
let operationHistoryHtml = document.querySelector(".before");
let operationButtons = document.querySelectorAll(".operation-btn");
let allClearButton = document.getElementById("ac-btn");
let deleteButton = document.getElementById("delete-btn");
let answer = 0;
let operationHistory = "";
let hasDecimalPoint = false;

allClearButton.addEventListener("click", clearAll);
deleteButton.addEventListener("click", deleteLast);

function updateHistoryHtml() {
  operationHistoryHtml.innerHTML = operationHistory;
}

function clearAll() {
  operationHistory = " ";
  hasDecimalPoint = false;
  updateHistoryHtml();
}

function deleteLast() {
  if (operationHistory[operationHistory.length - 1] === ".") {
    hasDecimalPoint = false;
  }
  operationHistory = operationHistory.substring(0, operationHistory.length - 1);
  updateHistoryHtml();
}

function enterNum(event) {
  let numberPressed = event.target.innerHTML;
  if (numberPressed === ".") {
    if (hasDecimalPoint) {
      return;
    } else {
      operationHistory = operationHistory + numberPressed;
      updateHistoryHtml();
      hasDecimalPoint = true;
    }
  } else {
    operationHistory = operationHistory + numberPressed;
    updateHistoryHtml();
  }
}

numButtons.forEach((numButton) => {
  numButton.addEventListener("click", enterNum);
});

operationButtons.forEach((operationButton) => {
  operationButton.addEventListener("click", () => {
    if (operationHistory != "") {
      operationHistory = operationHistory + operationButton.innerHTML;
    }
    updateHistoryHtml();
  });
});
