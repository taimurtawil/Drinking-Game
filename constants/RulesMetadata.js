TruthOrDareRules =
  "After selecting truth or dare, the user must answer the truth or dare, or face a punishment.";
TruthOrDareCaveat =
  "The punishment for failing to complete a truth or dare varies on the difficulty selected.";

NHIERules =
  "Start with any amount of fingers up, typically three or five. Then, take turns asking a question that starts with 'Never have I ever...', or face the questions presented on the screen If someone has done what the person says, they put a finger down. The first person to put all their fingers down loses.";
NHIECaveat =
  "The first to lose must face a punishment, which varies on the difficulty selected.";

CharadesRules =
  "Act out the word or phrase on the screen for your team to guess. The first team who reaches a predetermined number of correct guesses wins!";

RulesMetadata = {
  TruthOrDare: {
    rules: TruthOrDareRules,
    caveat: TruthOrDareCaveat,
  },
  NHIE: {
    rules: NHIERules,
    caveat: NHIECaveat,
  },
  Charades: {
    rules: CharadesRules,
    caveat: null,
  },
};

export default RulesMetadata;
