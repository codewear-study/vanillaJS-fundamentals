const input_resetButton = document.querySelector("input.resetButton");

function resetNum() {
    textarea_outputNum.textContent = 0; //input.js변수
    input_stepArea.value = 1;
}

input_resetButton.addEventListener("click", resetNum);