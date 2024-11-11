

const numpadSeven = document.querySelector("#numpad-seven");
const numpadMultiply = document.querySelector("#numpad-multiply");
const total = 0;
const click = 0;


numpadSeven.addEventListener("click",function () {
    alert("numpad-seven clicked")
    click = 7;
})

numpadMultiply.addEventListener("click",function () {
    alert("numpad-multiply clicked")
    
})



function multiply (a,b) {
    return a * b;
    
}
console.log(multiply(5,4));

