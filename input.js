const textarea_outputNum = document.querySelector("textarea.outputNum");
const input_increaseButton = document.querySelector("input.increaseButton");
const input_decreaseButton = document.querySelector("input.decreaseButton");

function decreaseButtonAction(e){
    textarea_outputNum.textContent--;
}

function increaseButtonAction(e){
    textarea_outputNum.textContent++;
}

function decreaseKeyAction(e){
    const keyCode = e.key;
    if(keyCode === '-'){
        textarea_outputNum.textContent--;
    }
}

function increaseKeyAction(e){
    const keyCode = e.key;
    if(keyCode === '+'){
        textarea_outputNum.textContent++;
    }
}

document.addEventListener("keydown", increaseKeyAction);
document.addEventListener("keydown", decreaseKeyAction);
input_increaseButton.addEventListener("click", increaseButtonAction)
input_decreaseButton.addEventListener("click", decreaseButtonAction)

/*https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector,
https://developer.mozilla.org/ko/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors - querySelector(), DOM요소 선택자*/
/*https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener, 
https://developer.mozilla.org/ko/docs/Web/Events - addEventListener(), 키보드 에빈트, 마우스 이벤트*/
//https://basketdeveloper.tistory.com/56 - 특정키 입력 이벤트