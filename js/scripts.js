//BUSINESS LOGIC

const beep = "Beep!"
const boop = "Boop!"
const neighbor = "Won't you be my neighbor?"

const firstArray = [];
const secondArray = [];
const userInput=parseInt($("#input").val());

for (var i = 0; i <= userInput; i++) {
  firstArray.push(i);
}
const inputString = firstArray.join("");
const stringSplit = inputString.split("");

if (stringSplit.includes("1")) {
    secondArray.push(beep);
  } else if (stringSplit.includes("2")) {
    secondArray.push(boop);
  } else if (stringSplit.includes("3")) {
    secondArray.push(neighbor);
  } else {
    secondArray.push("");
  }

//UI LOGIC

$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    $("#beepBoopAnswer").show(); 
    $(".result").text(secondArray);
  });
});
