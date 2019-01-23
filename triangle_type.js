

function findtriangletype() {

var a = parseInt(document.triangleform.num1.value);
var b = parseInt(document.triangleform.num2.value);
var c = parseInt(document.triangleform.num3.value);

if (isNaN(a) || isNaN(b) || isNaN(c)) { //check if the input is not NAN
   alert('Please enter Number only.');
    return;
    } else {
    if (a == b && b ==c) {
   alert("Triangle Type is Equalateral");
} else if (a == b &&b !=c) {
   alert("Triangle Type is Isosceles");
}
//else if (a != b!=c!= a) {
    //alert("Scalene!");
    //}
else  {
    alert("Triangle Type is Scalene!");
    }
}
}


