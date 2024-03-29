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
  Charades: {
    modes: [
      { title: "All Categories", mode: "All" },
      { title: "Movies/TV", mode: "MoviesTV" },
      { title: "Animals", mode: "Animals" },
      { title: "Occupations", mode: "Occupations" },
      { title: "Characters", mode: "Characters" },
    ],
    navigationTarget: "Charades",
  },
};

export default ModeSelectorMetadata;
