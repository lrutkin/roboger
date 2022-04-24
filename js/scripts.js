//BUSINESS LOGIC

const beep = "Beep!"
const boop = "Boop!"
const neighbor = "Won't you be my neighbor?"

const firstArray = [];
const userInput=parseInt($("#numberInput").val());

for (var i = 0; i <= userInput; i++) {
  firstArray.push(i);
}

alert(firstArray);

let inputString = firstArray.join("");
let stringSplit = inputString.split("")

if (stringSplit.includes("1")) {
    alert(beep);
  } else if (stringSplit.includes("2")) {
    alert(boop);
  } else if (stringSplit.includes("3")) {
    alert(neighbor);
  } else {
    alert("Nothing happened.");
  }

//UI LOGIC

$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    $("#beepBoopAnswer").show(); 

  });
});