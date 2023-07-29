let numButtons = document.querySelectorAll(".num-btn");
let operationButtons = document.querySelectorAll(".operation-btn");
let operationHistoryHtml = document.querySelector(".before");
let answer = 0;
let operationHistory = "";


function updateHistoryHtml(text) {
    operationHistoryHtml.innerHTML = text;
}

numButtons.forEach(numButton => {
    numButton.addEventListener("click", () => {
        let numberPressed = numButton.innerHTML;
        if (operationHistory.includes(".")) {
            return;
        }
        operationHistory = operationHistory + numberPressed;
        updateHistoryHtml(operationHistory);
        console.log(operationHistory);
    });
});

operationButtons.forEach(operationButton => {
    operationButton.addEventListener("click", () => {
        if (operationHistory != "") {
            operationHistory = operationHistory + operationButton.innerHTML;
        }
        updateHistoryHtml(operationHistory);
        console.log(operationHistory);
    });
});