const plus = () => {
    const num1 = document.querySelector("#num1").value;
    const num2 = document.querySelector("#num2").value;
    const ans = Number(num1) + Number(num2);
    alert('Answer : ' + `${ans}`)
}
const divide = () => {
    const num1 = document.querySelector("#num1").value;
    const num2 = document.querySelector("#num2").value;
    const ans = Number(num1) / Number(num2);
    alert('Answer : ' + `${ans}`)
}
const minus = () => {
    const num1 = document.querySelector("#num1").value;
    const num2 = document.querySelector("#num2").value;
    const ans = Number(num1) - Number(num2);
    alert('Answer : ' + `${ans}`)
}
const times = () => {
    const num1 = document.querySelector("#num1").value;
    const num2 = document.querySelector("#num2").value;
    const ans = Number(num1) * Number(num2);
    alert('Answer : ' + `${ans}`)
} 