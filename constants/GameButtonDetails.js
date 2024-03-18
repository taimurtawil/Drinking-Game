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
  { onPress: null, gameName: "21 Questions" },
  { onPress: null, gameName: "Truth or Dare" },
  {
    onPress: null,
    gameName: "Cards (contains subcategories (ride the bus, kings))",
  },
  { onPress: null, gameName: "Silent Library" },
  { onPress: null, gameName: "Never Have I Ever" },
  { onPress: null, gameName: "Most Likely To" },
  { onPress: null, gameName: "Charades" },
  { onPress: null, gameName: "Would You Rather" },
];

export default gameButtonDetails;
