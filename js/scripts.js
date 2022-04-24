const beep = "Beep!"
const boop = "Boop!"
const neighbor = "Won't you be my neighbor?"

const firstArray = [];
const input =  3
const inputString = input.toString()

if (inputString.includes("1")) {
    alert(beep);
  } else if (inputString.includes("2")) {
    alert(boop);
  } else if (inputString.includes("3")) {
    alert(neighbor);
  } else {
    alert("Nothing happened.");
  }


for (var i = 0; i <= input; i++) {
  firstArray.push(i);
}

alert(firstArray);