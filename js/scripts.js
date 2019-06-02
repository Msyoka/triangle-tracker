function tracker() {
  var sideA = parseInt(document.getElementById('side1'));
  var sideB = parseInt(document.getElementById('side2'));
  var sideC = parseInt(document.getElementById('side3'));
  if(sideA + sideB >sideC &&sideA + sideC >sideB &&sideC + sideB >sideA){
  if(sideA===sideB && sideB===sideC){
  alert("equilateral");
  }else if(sideA===sideB || sideA===sideC || sideB===sideC){
  alert("isosceles");
  }else if(sideA!=sideB && sideB!=sideC && sideA!=sideC){
  alert("scalene");
  }else{
  alert("Not a triangle")
 }
}
