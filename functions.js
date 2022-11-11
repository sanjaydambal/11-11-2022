// random number generation
const a = Math.random() * 10;
document.getElementById("random").innerHTML = (a);

// exact random number
const b = Math.floor(Math.random() * (10 - 1)) + 1;
document.getElementById("prandom").innerHTML = (b);

// // area of triangle
function Area() {
    var base = parseInt(document.getElementById("base").value);
    var hieght = parseInt(document.getElementById("hieght").value);

    document.getElementById("area").value = (base * hieght) / 2;
    // var area = parseInt(document.getElementById("base").value);
}
let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
    Area();
});

// Swapping of two numbers
let x = 5
let y = 10
let temp;
temp = x;
x = y;
y = temp;
document.getElementById("num1").innerHTML = (x);
document.getElementById("num2").innerHTML = (y);

// quadratic equation
var root1=document.getElementById("v1").innerHTML
var root2=document.getElementById("v2").innerHTML
var l = 1;
var m = 6;
var n = 5;
const discriminant = m * m - 4 * l * n;
if (discriminant > 0) {
    root1 = (-m + Math.sqrt(discriminant)) / (2 * l);
    root2 = (-m - Math.sqrt(discriminant)) / (2 * l);
    function res1() {
        return `The roots of quadratic equation are ${root1} and ${root2}`
    }
    document.getElementById("res1").innerHTML = (res1);
}
else if (discriminant == 0) {
    root1 = root2 = -m/ (2 * l);
    function res2() {
        return `The roots of quadratic equation are ${root1} and ${root2}`
    }
    document.getElementById("res2").innerHTML = (res2);
}
else  {
     root1 = (-m / (2 * l)).toFixed(2);
     root2 = (Math.sqrt(-discriminant) / (2 * l)).toFixed(2);

    function res2() {
        return `The roots of quadratic equation are ${root1} and ${root2}`
    }
    document.getElementById("res3").innerHTML = (res3);
}