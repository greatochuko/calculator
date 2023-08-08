let numButtons = document.querySelectorAll(".num-btn");
let operationHistoryHtml = document.querySelector(".before");
let answerHtml = document.querySelector(".current");
let operationButtons = document.querySelectorAll(".operation-btn");
let allClearButton = document.getElementById("ac-btn");
let deleteButton = document.getElementById("delete-btn");
let equalButton = document.getElementById("equal-btn");
let answer = 0;
let operationHistory = "";
let hasDecimalPoint = false;
let hasOperation = false;

allClearButton.addEventListener("click", clearAll);
deleteButton.addEventListener("click", deleteLast);

function updateHistoryHtml() {
  operationHistoryHtml.innerHTML = operationHistory;
}

function updateAnswerHtml() {
  const ans = eval(operationHistory);
  answerHtml.innerHTML = ans;
}

function updateAnswerHtmlByOperator() {
  if (operationHistory === "") {
    answerHtml.innerHTML = "0";
    return;
  }
  const ans = eval(operationHistory.slice(0, operationHistory.length - 1));
  answerHtml.innerHTML = ans;
}

function clearAll() {
  operationHistory = " ";
  hasDecimalPoint = false;
  updateHistoryHtml();
  answerHtml.innerHTML = "0";
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
  hasOperation = false;
  updateAnswerHtml();
}

function enterOperator(event) {
  if (!hasOperation) {
    if (operationHistory != "") {
      operationHistory = operationHistory + event.target.value;
      hasOperation = !hasOperation;
    }
    updateHistoryHtml();
    updateAnswerHtmlByOperator();
  } else {
    return;
  }
}

numButtons.forEach((numButton) => {
  numButton.addEventListener("click", enterNum);
});

operationButtons.forEach((operationButton) => {
  operationButton.addEventListener("click", enterOperator);
});

equalButton.addEventListener("click", updateAnswerHtml);
