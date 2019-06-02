function tracker() {
  var sideA = parseInt(document.getElementById('side1').value);
  var sideB = parseInt(document.getElementById('side2').value);
  var sideC = parseInt(document.getElementById('side3').value);

  if(sideA===sideB && sideB===sideC){
  alert("equilateral");
  }else if(sideA===sideB || sideA===sideC || sideB===sideC){
  alert("isosceles");
  }else if(sideA!=sideB && sideB!=sideC && sideA!=sideC){
  alert("scalene");
  }else if(sideA + sideB >sideC &&sideA + sideC >sideB &&sideC + sideB >sideA){
  alert("Not a triangle");
  }
}
