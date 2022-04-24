
const beep = "Beep"
const boop = "Boop"
const input =  2
const inputString = input.toString()

if (inputString.includes("1")) {
    alert(beep);
  } else if (inputString.includes("2")) {
    alert(boop);
  } else {
    alert("Nothing happened.");
  }