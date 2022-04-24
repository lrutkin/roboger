# _Mr Roboger's Neighborhood_

#### By _Leslie Rutkin_

#### _Input one number, get an array of "boops", "beeps", and "Won't you be my neighbors" in return._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_This form will take input from a user, then show them an output where all numbers containing 1 display "beep", all numbers containing 2 display "boop" and all numbers contaning 3 display "Won't you be my neighbor"._

_To accomplish this, user input is first turned into an array, displaying 0-the number they input. Then, this array is turned into a string, split into individual strings within an array, and run through a forEach loop to test for numbers 1, 2, and 3._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Open the HTML, CSS, and JavaScript files in your preferred editor._

## Known Bugs

* _Does not currently function with HTML when previewed._

## License 

_If you use this as a template to make your own version of Mr Roboger's Neighborhood, please link back to my GitHub._

Copyright (c) _2022_ _Leslie Rutkin_

## Tests

_Describe: mrRoboger()_

* _Test: When 1 is entered, an alert appears with "Beep"._
* _Code: input(1)_
* _Expected Output: "Beep"_

* _Test: When 2 is entered, an alert appears with "Boop"._
* _Code: input(2)_
* _Expected Output: "Boop"_

* _Test: When 3 is entered, an alert appears with "Won't you be my neighbor"._
* _Code: input(3)_
* _Expected Output: "Won't you be my neighbor"_

* _Test: When a number is input, an array with 0-number will appear as an alert._
* _Code: for (var i = 0; i <= 3; i++)_
* _Expected Output: 0,1,2,3_