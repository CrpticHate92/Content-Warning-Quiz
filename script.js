// Content Warning Quiz

// Event Listener
document.getElementById("finish-btn").addEventListener("click", finish);

// Function
function finish() {
  // Variables
  var score = 0;
  let Ans1 = document.getElementById("Q1").value.toLowerCase();
  let Ans2 = document.getElementById("Q2").value.toLowerCase();
  let Ans3 = document.getElementById("Q3").value.toLowerCase();
  let Ans4 = document.getElementById("Q4").value.toLowerCase();
  let Ans5 = document.getElementById("Q5").value.toLowerCase();

  // If Statements
  if (Ans1 == "ghost child") {
    score++;
  }
  if (Ans2 == "starfish") {
    score++;
  }
  if (Ans3 == "little guy") {
    score++;
  } else if (Ans3 == "mason") {
    score++;
  }
  if (Ans4 == "the titan") {
    score++;
  }
  if (Ans5 == "snail zombie") {
    score++;
  } else if (Ans5 == "gary") {
    score++;
  }

  let score1 = (score / 5) * 100;
  console.log(score1);

  if (score > 4) {
    document.getElementById("output3").innerHTML = "Amazing Work!";
  } else if (score > 3) {
    document.getElementById("output3").innerHTML = "Awesomesauce.";
  } else if (score > 2) {
    document.getElementById("output3").innerHTML = "Could be better.";
  } else if (score > 1) {
    document.getElementById("output3").innerHTML = "You Need to Research More.";
  } else if (score > 0) {
    document.getElementById("output3").innerHTML =
      "Use the link below to study.";
  } else {
    document.getElementById("output3").innerHTML = "Uh Oh Spaghettio!";
  }

  // Output
  document.getElementById("output").innerHTML = `${score}/5`;
  document.getElementById("output2").innerHTML = `(${score1}%)`;
}
