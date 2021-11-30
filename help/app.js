const text = document.querySelector("#text");
const button = document.querySelector("button");
const result = document.querySelector("#result");
button.addEventListener("click", (arg) => {
    console.log(arg)
    arg.preventDefault();
    const input = text.value;
    const inputArr = input.split("\n");
    console.log(inputArr);
    const inputArrRev = inputArr.reverse();
    console.log(inputArrRev.join(", "));
    result.textContent = inputArrRev.join(", ");
})
