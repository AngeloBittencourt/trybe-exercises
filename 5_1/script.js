document.querySelector("body").style = "background-color: lightgray";
document.querySelector("#header-container").style = "background-color: ForestGreen"
document.querySelector("#footer-container").style = "background-color: DarkSlateGray"

let h3 = document.querySelectorAll("h3");
for (let index = 0; index < 2; index += 1) {
  h3[index].style = "background-color: purple";
  
}
for (let index = 2; index < 4; index += 1) {
  h3[index].style = "background-color: black";
  
}

document.querySelector(".emergency-tasks").style = "background-color: lightsalmon";

document.querySelector(".no-emergency-tasks").style = "background-color: #ffdb58";