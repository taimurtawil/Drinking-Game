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
    hasModes: false,
  },
  {
    gameName: "Truth or Dare",
    navpath: "TruthOrDare",
    hasModes: true,
  },
  {
    gameName: "Cards (contains subcategories (ride the bus, kings))",
    navpath: null,
    hasModes: true,
  },
  {
    gameName: "Silent Library",
    navpath: null,
    hasModes: false,
  },
  {
    gameName: "Never Have I Ever",
    navpath: "NHIE",
    hasModes: true,
  },
  {
    gameName: "Most Likely To",
    navpath: null,
    hasModes: true,
  },
  {
    gameName: "Charades",
    navpath: "Charades",
    hasModes: true,
  },
  {
    gameName: "Would You Rather",
    navpath: null,
    hasModes: true,
  },
  {
    gameName: "Wheel of Misfortune",
    navpath: "WheelOfMisfortune",
    hasModes: false,
  },
];

export default gameButtonDetails;
