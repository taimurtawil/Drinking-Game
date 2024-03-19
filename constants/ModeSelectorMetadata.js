// ModeSelectorMetadata.js

const ModeSelectorMetadata = {
  NHIE: {
    modes: [
      { title: "Tame", mode: "Easy" },
      { title: "Regular", mode: "Medium" },
      { title: "Hardcore", mode: "Hard" },
    ],
    navigationTarget: "NHIEgame",
  },
  TruthOrDare: {
    modes: [
      { title: "Easy", mode: "Easy" },
      { title: "Medium", mode: "Medium" },
      { title: "Hard", mode: "Hard" },
      { title: "Sexy", mode: "Sexy" },
    ],
    navigationTarget: "TruthOrDareGame",
  },
  // Add other games here as needed
};

export default ModeSelectorMetadata;
