const input_resetButton = document.querySelector("input.resetButton");

function resetNum() {
    p_outputNum.innerText = 0;
}

input_resetButton.addEventListener("click", resetNum);