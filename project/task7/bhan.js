
function grade() {
  let score = parseFloat(document.getElementById("field").value); 
  let grade = "";
  if (score >= 80) {
      grade = "A";
  } else if (score >= 60) {
      grade = "B";
  } else if (score >= 40) {
      grade = "C";
  } else {
      grade = "F";
  }
  
  document.getElementById("d").innerText = grade; 
}