function tracker() {
  var sideA = parseInt(document.getElementById('side1'));
  var sideB = parseInt(document.getElementById('side2'));
  var sideC = parseInt(document.getElementById('side3'));
  if(sideA ===sideB && sideB===sideC){
  alert("Equilateral");
}else if((sideA===sideB && sideB!==sideC ) || (sideA!==sideB && sideC===sideA) || (sideC===sideB && sideC!=sideA)){
  alert("isosceles");
}else if(sideA!==sideB && sideB!==sideC && sideC!==sideA){
  alert("scalene");
  }else if(sideA >= (sideB+sideC) || sideC >= (sideB+sideA) || sideB >= (sideA+sideC)){
  alert("No triangle");
  }
}
