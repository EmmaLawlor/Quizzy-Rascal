// Rules Modal
let modal = document.getElementById("rulesModal");

let rulesBtn = document.getElementById("rules-btn");

let close = document.getElementsByClassName("close")[0];
rulesBtn.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

let questionBox = document.getElementById('question-container');
let answerBtnA = document.getElementById('answer-btn-A');
let answerBtnB = document.getElementById('answer-btn-B');
let answerBtnC = document.getElementById('answer-btn-C');
let answerBtnD = document.getElementById('answer-btn-D');
let score = document.getElementById('score-area');

let questions = [
  {
    question: 'Which rock band was founded by Trent Reznor in 1988?',
    answers: {
      a: "Jane's Addiction",
      b: "Smashing Pumpkins"
      c: "Nine Inch Nails",
      d: "Depeche Mode"
    },
    correctAnswer: "c"
  },
  {
    question: "In which year did Elvis Presley die?",
    answers: {
      a: "1976",
      b: "1977",
      c: "1978",
      d: "1979"
    },
    correctAnswer: "b"
  },
  {
    question: "Jimmy, Robert, John and John: can you identify this rock band from the first names of the oridinal line-up?",
    answers: {
      a: "Led Zeppelin",
      b: "AC/DC",
      c: "The Who",
      d: "Pink Floyd"
    },
    correctAnswer: "a"
  },
  {
    question: "Reginald Kenneth Dwight is better known by what name?",
    answers: {
      a: "Prince",
      b: "Elton John",
      c: "Meatloaf",
      d: "Sting"
    },
    correctAnswer: "b"
  }, 
  {
    question: "'Ten' was the 1991 debut album of which band?",
    answers: {
      a: "Nirvana",
      b: "Soundgarden",
      c: "Alice in Chains",
      d: "Pearl Jam"
    },
    correctAnswer: "d"
  },
  {
    question: "Which Bob Dylan song did Adele cover on her first album?",
    answers: {
      a: "Blowin' in the Wind",
      b: "Like a Rolling Stone",
      c: "To Make You Feel My Love",
      d: "Masters of War"
    },
    correctAnswer: "c"
  },
  {
    question: "Roger Taylor is the drummer in which band?",
    answers: {
      a: "Queen",
      b: "Kiss",
      c: "Aerosmith",
      d: "The Rolling Stones"
    },
    correctAnswer: "a"
  }
  {
    question: "Eminem's '8 Mile' is named after a road in which city?",
    answers: {
      a: "Chicago",
      b: "Seattle",
      c: "Michigan",
      d: "Detroit"
    },
    correctAnswer: "d"
  }
]
