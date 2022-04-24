//BUSINESS LOGIC

const beep = "Beep!"
const boop = "Boop!"
const neighbor = "Won't you be my neighbor?"

const mrRoboger = function() {

const firstArray = [];

for (var i = 0; i <= userInput; i++) {
  firstArray.push(i);
}
let inputString = firstArray.toString("");
let stringSplit = inputString.split(",");

stringSplit.forEach(element); {
  if (element.includes("1")) {
      return userInput(beep);
    } else if (element.includes("2")) {
      return userInput(boop);
    } else if (element.includes("3")) {
      return userInput(neighbor);
    } else {
      return userInput("");
    }
    
  });
});



//UI LOGIC

$(document).ready(function() {

  const userInput = parseInt($("input#yourinput").val());
  const result = mrRoboger(userInput);

  $("form#roboger").submit(function(event) {
    event.preventDefault();
    $("#beepBoopAnswer").show(); 
    $(".result").text(result);

  });
});


