import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const GRID_DATA = [
  //   Row A
  {
    id: "A1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "A2",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "A3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "A4",
    letter: "P",
    clues: ["Dn1"],
    label: "1",
  },
  {
    id: "A5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "A6",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "A7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "A8",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "A9",
    letter: null,
    clues: null,
    label: null,
  },

  //   Row B
  {
    id: "B1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "B2",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "B3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "B4",
    letter: "R",
    clues: ["Dn1"],
    label: null,
  },
  {
    id: "B5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "B6",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "B7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "B8",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "B9",
    letter: null,
    clues: null,
    label: null,
  },

  //   Row C
  {
    id: "C1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "C2",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "C3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "C4",
    letter: "O",
    clues: ["Dn1"],
    label: null,
  },
  {
    id: "C5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "C6",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "C7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "C8",
    letter: "I",
    clues: ["Dn2"],
    label: "2",
  },
  {
    id: "C9",
    letter: null,
    clues: null,
    label: null,
  },

  // Row D
  {
    id: "D1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "D2",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "D3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "D4",
    letter: "G",
    clues: ["Dn1"],
    label: null,
  },
  {
    id: "D5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "D6",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "D7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "D8",
    letter: "N",
    clues: ["Dn2"],
    label: null,
  },
  {
    id: "D9",
    letter: null,
    clues: null,
    label: null,
  },

  //   Row E
  {
    id: "E1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "E2",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "E3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "E4",
    letter: "R",
    clues: ["Dn1"],
    label: null,
  },
  {
    id: "E5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "E6",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "E7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "E8",
    letter: "T",
    clues: ["Dn2"],
    label: null,
  },
  {
    id: "E9",
    letter: null,
    clues: null,
    label: null,
  },

  //   Row F
  {
    id: "F1",
    letter: "D",
    clues: ["Ac3"],
    label: "3",
  },
  {
    id: "F2",
    letter: "A",
    clues: ["Ac3", "Dn4"],
    label: "4",
  },
  {
    id: "F3",
    letter: "T",
    clues: ["Ac3"],
    label: null,
  },
  {
    id: "F4",
    letter: "A",
    clues: ["Dn1"],
    label: null,
  },
  {
    id: "F5",
    letter: "B",
    clues: ["Ac3"],
    label: null,
  },
  {
    id: "F6",
    letter: "A",
    clues: ["Ac3"],
    label: null,
  },
  {
    id: "F7",
    letter: "S",
    clues: ["Ac3"],
    label: null,
  },
  {
    id: "F8",
    letter: "E",
    clues: ["Ac3"],
    label: null,
  },
  {
    id: "F9",
    letter: null,
    clues: null,
    label: null,
  },

  //   Row G
  {
    id: "G1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "G2",
    letter: "L",
    clues: ["Dn4"],
    label: null,
  },
  {
    id: "G3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "G4",
    letter: "M",
    clues: ["Dn1"],
    label: null,
  },
  {
    id: "G5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "G6",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "G7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "G8",
    letter: "R",
    clues: ["Dn2"],
    label: null,
  },
  {
    id: "G9",
    letter: null,
    clues: null,
    label: null,
  },
  //   Row H
  {
    id: "H1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "H2",
    letter: "G",
    clues: ["Dn4"],
    label: null,
  },
  {
    id: "H3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "H4",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "H5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "H6",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "H7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "H8",
    letter: "N",
    clues: ["Dn2"],
    label: null,
  },
  {
    id: "H9",
    letter: null,
    clues: null,
    label: null,
  },
  //   Row I
  {
    id: "I1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "I2",
    letter: "O",
    clues: ["Dn4"],
    label: null,
  },
  {
    id: "I3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "I4",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "I5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "I6",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "I7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "I8",
    letter: "E",
    clues: ["Dn2"],
    label: null,
  },
  {
    id: "I9",
    letter: null,
    clues: null,
    label: null,
  },
  //   Row J
  {
    id: "J1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "J2",
    letter: "R",
    clues: ["Dn4"],
    label: null,
  },
  {
    id: "J3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "J4",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "J5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "J6",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "J7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "J8",
    letter: "T",
    clues: ["Dn2"],
    label: null,
  },
  {
    id: "J9",
    letter: null,
    clues: null,
    label: null,
  },
  //   Row K
  {
    id: "K1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "K2",
    letter: "I",
    clues: ["Dn4"],
    label: null,
  },
  {
    id: "K3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "K4",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "K5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "K6",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "K7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "K8",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "K9",
    letter: null,
    clues: null,
    label: null,
  },
  //   Row L
  {
    id: "L1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "L2",
    letter: "T",
    clues: ["Dn4"],
    label: null,
  },
  {
    id: "L3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "L4",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "L5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "L6",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "L7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "L8",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "L9",
    letter: null,
    clues: null,
    label: null,
  },
  //   Row M
  {
    id: "M1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "M2",
    letter: "M",
    clues: ["Dn4"],
    label: null,
  },
  {
    id: "M3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "M4",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "M5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "M6",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "M7",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "M8",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "M9",
    letter: null,
    clues: null,
    label: null,
  },
  //   Row N
  {
    id: "N1",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "N2",
    letter: "A",
    clues: ["Dn4"],
    label: null,
  },
  {
    id: "N3",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "N4",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "N5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "N5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "N5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "N5",
    letter: null,
    clues: null,
    label: null,
  },
  {
    id: "N5",
    letter: null,
    clues: null,
    label: null,
  },
];

const CLUE_DATA = {
  Dn1: {
    clue: "Serangkaian Instruksi yang di eksekusi oleh komputer untuk melakukan tugas tertentu",
    answer: "PROGRAM",
    direction: "down",
    number: 1,
    boxes: ["A4", "B4", "C4", "D4", "E4", "F4", "G4"],
  },
  Dn2: {
    clue: "Jaringan global yang menghubungkan jutaan perangkat komputer di seluruh dunia",
    answer: "INTERNET",
    direction: "down",
    number: 2,
    boxes: ["C8", "D8", "E8", "F8", "G8", "H8", "I8", "J8"],
  },
  Ac3: {
    clue: "Tempat penyimpanan struktur data yang terorganisir",
    answer: "DATABASE",
    direction: "across",
    number: 3,
    boxes: ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8"],
  },
  Dn4: {
    clue: "Langkah-langkah untuk menyelesaikan masalah atau melakukan tugas tertentu.",
    answer: "ALGORITMA",
    direction: "down",
    number: 4,
    boxes: ["F2", "G2", "H2", "I2", "J2", "K2", "L2", "M2", "N2"],
  },
};

class Crossword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: GRID_DATA,
      clues: CLUE_DATA,
      activeClueBoxes: CLUE_DATA["Dn1"].boxes,
      activeClue: ["Dn1"],
      boxInFocus: CLUE_DATA["Dn1"].boxes[0],
      showAnswerStatus: false, // Menambah state untuk menampilkan status jawaban
      answerStatus: {}, // Menambah state untuk menyimpan status jawaban
    };

    // Bind function
    this.setActiveClueBoxes = this.setActiveClueBoxes.bind(this);
    this.setActiveClue = this.setActiveClue.bind(this);
    this.setBoxInFocus = this.setBoxInFocus.bind(this);
    this.checkAnswers = this.checkAnswers.bind(this);
    this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this);
    this.handleIncorrectAnswer = this.handleIncorrectAnswer.bind(this);
  }

  setActiveClueBoxes(boxes) {
    this.setState({
      activeClueBoxes: boxes,
    });
  }

  setActiveClue(clue) {
    this.setState({
      activeClue: clue,
    });
  }

  setBoxInFocus(box) {
    this.setState({
      boxInFocus: box,
    });
  }

  checkAnswers() {
    const answerStatus = {};

    this.state.grid.forEach((box) => {
      const boxElement = document.getElementById(box.id);
      if (boxElement) {
        const inputElement = boxElement.getElementsByTagName("input")[0];
        if (inputElement) {
          const userAnswer = inputElement.value;
          const correctAnswer = this.state.clues[box.clues[0]].answer;
          if (
            userAnswer &&
            userAnswer.toUpperCase() === correctAnswer.toUpperCase()
          ) {
            answerStatus[box.id] = true;
            this.handleCorrectAnswer(boxElement);
          } else {
            answerStatus[box.id] = false;
            this.handleIncorrectAnswer(boxElement);
          }
        }
      }
    });

    // Set state to show answer status and store the answer status
    this.setState({
      showAnswerStatus: true,
      answerStatus: answerStatus,
    });
  }

  handleCorrectAnswer = (boxElement) => {
    // Change styles or apply other actions for correct answers
    boxElement.classList.add("correct-answer");
  };

  handleIncorrectAnswer = (boxElement) => {
    // Change styles or apply other actions for incorrect answers
    boxElement.classList.add("incorrect-answer");
  };

  render() {
    return (
      <div className="crossword">
        <Clues
          clues={this.state.clues}
          setActiveClueBoxes={this.setActiveClueBoxes}
          activeClue={this.state.activeClue}
          setActiveClue={this.setActiveClue}
          setBoxInFocus={this.setBoxInFocus}
        />
        <Board
          grid={this.state.grid}
          allClues={this.state.clues}
          clues={this.state.clues}
          setActiveClueBoxes={this.setActiveClueBoxes}
          highlightedBoxes={this.state.activeClueBoxes}
          setActiveClue={this.setActiveClue}
          setBoxInFocus={this.setBoxInFocus}
          boxInFocus={this.state.boxInFocus}
        />
        <button onClick={this.checkAnswers}>Check Answers</button>{" "}
        {/* Tombol Check Answers */}
        {this.state.showAnswerStatus && (
          <div className="answer-status">
            {Object.keys(this.state.answerStatus).map((boxId) => (
              <div key={boxId}>
                Box {boxId} is{" "}
                {this.state.answerStatus[boxId] ? "Correct" : "Incorrect"}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

class Clues extends React.Component {
  constructor(props) {
    super(props);
    const cluesAcross = [];
    const cluesDown = [];

    for (const key in this.props.clues) {
      const clue = this.props.clues[key];
      clue.id = key;
      if (clue.direction === "across") {
        cluesAcross.push(clue);
      } else {
        cluesDown.push(clue);
      }
    }

    this.state = {
      across: cluesAcross,
      down: cluesDown,
    };
  }

  render() {
    return (
      <div className="clue-lists">
        <div className="clue-list-wrapper">
          <h2>Across</h2>
          <ol className="clue-list">
            {this.state.across.map((clueData) => (
              <Clue
                key={clueData.id}
                clueID={clueData.id}
                clueText={clueData.clue}
                clueNumber={clueData.number}
                clueBoxes={clueData.boxes}
                setActiveClueBoxes={this.props.setActiveClueBoxes}
                setActiveClue={this.props.setActiveClue}
                isActive={this.props.activeClue.indexOf(clueData.id) > -1}
                setBoxInFocus={this.props.setBoxInFocus}
              />
            ))}
          </ol>
        </div>
        <div className="clue-list-wrapper">
          <h2>Down</h2>
          <ol className="clue-list">
            {this.state.down.map((clueData) => (
              <Clue
                key={clueData.id}
                clueID={clueData.id}
                clueText={clueData.clue}
                clueNumber={clueData.number}
                clueBoxes={clueData.boxes}
                setActiveClueBoxes={this.props.setActiveClueBoxes}
                setActiveClue={this.props.setActiveClue}
                isActive={this.props.activeClue.indexOf(clueData.id) > -1}
                setBoxInFocus={this.props.setBoxInFocus}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

class Clue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.isActive,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      active: newProps.isActive,
    });
  }

  handleClick() {
    const activeClue = [];
    activeClue.push(this.props.clueID);
    this.props.setActiveClueBoxes(this.props.clueBoxes);
    this.props.setActiveClue(activeClue);
    this.props.setBoxInFocus(this.props.clueBoxes[0]);
  }

  render() {
    return (
      <li className={`clue ${this.state.active ? "active" : ""}`}>
        <button className="clue-button" onClick={this.handleClick}>
          <span className="clue-number">{this.props.clueNumber}.</span>
          <span className="clue-text">{this.props.clueText}</span>
        </button>
      </li>
    );
  }
}

class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="crossword-board">
        {this.props.grid.map((box) => {
          const { id, letter, clues, label } = box;
          return (
            <Box
              key={id}
              id={id}
              letter={letter}
              boxClues={clues}
              label={label}
              allClues={this.props.allClues}
              isHighlighted={this.props.highlightedBoxes.indexOf(id) > -1}
              setActiveClueBoxes={this.props.setActiveClueBoxes}
              setActiveClue={this.props.setActiveClue}
              setBoxInFocus={this.props.setBoxInFocus}
              isInFocus={this.props.boxInFocus === id}
            />
          );
        })}
      </div>
    );
  }
}

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: props.isHighlighted,
      isInFocus: props.isInFocus,
    };

    this.handleFocus = this.handleFocus.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      highlight: newProps.isHighlighted,
      isInFocus: newProps.isInFocus,
    });
  }

  componentDidUpdate() {
    if (this.state.isInFocus) {
      this.textInput.focus();
    }
  }

  handleFocus(event) {
    this.props.setActiveClue(this.props.boxClues);
    this.props.setBoxInFocus(event.target.id);

    this.textInput.addEventListener("input", () => {
      if (
        this.textInput.value.toUpperCase() === this.props.letter.toUpperCase()
      ) {
        this.textInput.classList.remove("incorrect-answer");
        this.textInput.classList.add("correct-answer");
      } else {
        this.textInput.classList.remove("correct-answer");
        this.textInput.classList.add("incorrect-answer");
      }
    });
  }

  render() {
    let visibleLabel;
    let input;

    if (this.props.label) {
      visibleLabel = <span className="box-label">{this.props.label}</span>;
    }

    if (this.props.letter) {
      input = (
        <input
          type="text"
          maxLength="1"
          className={`box-input ${this.state.highlight ? "highlight" : ""}`}
          onFocus={this.handleFocus}
          ref={(input) => {
            this.textInput = input;
          }}
        />
      );
    }

    return (
      <div className={`box ${!this.props.letter ? " blank" : ""}`}>
        {visibleLabel}
        {input}
      </div>
    );
  }
}

ReactDOM.render(<Crossword />, document.querySelector("#CrosswordApp"));
