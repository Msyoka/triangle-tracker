var sideA =parseInt(prompt("Enter lenght of side AB"));
var sideB = parseInt(prompt("Enter length of BC"));
var sideC =parseInt(prompt("Enter length of AC"));
if(sideA ==sideB && sideB==sideC){
alert("Equilateral");
}else if((sideA==sideB && sideB!=sideC ) || (sideA!=sideB && sideC==sideA) || (sideC==sideB && sideC!=sideA)){
alert("isosceles");
}else if(sideA!=sideB && sideB!=sideC && sideC!=sideA){
alert("scalene");
}else if(sideA >= (sideB+sideC) || sideC >= (sideB+sideA) || sideB >= (sideA+sideC)){
alert("No triangle");
}