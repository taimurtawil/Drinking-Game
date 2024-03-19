/*
LTW 3/10/24
Contains the details of the game buttons that will
populate the GameEntryButtonList component, which
is used in the HomeScreen component.

onPress: The function to be called when the button is pressed. 
Eventually, this will be the function that will cause the user to switch screens and enter the game.

gameName: The text to be displayed on the button.

Note that it's configured in the GameEntryButton.js file that if onPress is null, then 
a default alert will be shown when the button is pressed.
*/
const gameButtonDetails = [
  {
    gameName: "21 Questions",
    navpath: null,
  },
  {
    gameName: "Truth or Dare",
    navpath: "TruthOrDare",
  },
  {
    gameName: "Cards (contains subcategories (ride the bus, kings))",
    navpath: null,
  },
  {
    gameName: "Silent Library",
    navpath: null,
  },
  { gameName: "Never Have I Ever", navpath: "NHIE" },
  {
    gameName: "Most Likely To",
    navpath: null,
  },
  { gameName: "Charades", navTarget: "ModeSelector", navpath: "Charades" },
  {
    gameName: "Would You Rather",
    navpath: null,
  },
];

export default gameButtonDetails;
