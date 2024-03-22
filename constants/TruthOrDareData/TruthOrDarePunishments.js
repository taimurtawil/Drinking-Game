const Punishments = {
  Easy: [
    { text: "Do 10 push-ups.", probability: 30 }, // Example: 30% chance
    { text: "Sing the chorus of your favorite song.", probability: 70 }, // 70% chance
  ],
  Medium: [
    { text: "Hold a plank for 30 seconds.", probability: 25 },
    {
      text: "Imitate a celebrity until someone guesses who it is.",
      probability: 75,
    },
  ],
  Hard: [
    { text: "Do 20 squats.", probability: 50 },
    { text: "Speak in an accent for the next 10 minutes.", probability: 50 },
  ],
  Sexy: [
    {
      text: "Send a flirty text to someone in your contacts.",
      probability: 10,
    },
    { text: "Share a secret fantasy.", probability: 90 },
  ],
};

function selectPunishment(mode) {
  const modePunishments = Punishments[mode];
  let cumulativeProbability = 0;
  const cumulativePunishments = modePunishments.map((punishment) => {
    cumulativeProbability += punishment.probability;
    return { ...punishment, cumulativeProbability };
  });

  const randomNumber = Math.random() * cumulativeProbability;
  const selectedPunishment = cumulativePunishments.find(
    (punishment) => randomNumber <= punishment.cumulativeProbability
  );

  return selectedPunishment ? selectedPunishment.text : "No punishment found.";
}

export { Punishments, selectPunishment };
