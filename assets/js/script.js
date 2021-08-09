// Rules Modal
let modal = document.getElementById("rulesModal");

let rulesBtn = document.getElementById("rules-btn");

let close = document.getElementsByClassName("close")[0];

if (rulesBtn) {
  rulesBtn.addEventListener('click', function () {
    modal.style.display = "block";
  })
}

if (close) {
  close.onclick = function () {
    modal.style.display = "none";
  }
}      

//Waits for page content to load, then runs quiz game
document.addEventListener("DOMContentLoaded", function() {

  runQuiz();

  let answerBtn = document.getElementsByClassName('answer-btn');

  answerBtn.addEventListener('click', checkAnswer());

})

/**
 * Displays new question
 * up to a total of 10 questions
 */

function runQuiz() {

  let questionTally = 0;

  if (questionTally < 10) {
    displayQuestion();
  } 
  
  questionTally++;

}

/**
 * Takes a random question from the trivia questions array
 * and displays both the question and answer choices
 * in their respective containers
 */

function displayQuestion() {

  let questionBox = document.getElementById('question-container');
  let answerA = document.getElementById('a');
  let answerB = document.getElementById('b');
  let answerC = document.getElementById('c');
  let answerD = document.getElementById('d');
  let questionNum = Math.floor(Math.random() * questions.length);

  questionBox.innerHTML = questions[questionNum].question;
  answerA.innerHTML = questions[questionNum].answers['a'];
  answerB.innerHTML = questions[questionNum].answers['b'];
  answerC.innerHTML = questions[questionNum].answers['c'];
  answerD.innerHTML = questions[questionNum].answers['d'];
}

//Get id of answer button clicked by user and set it to variable userChoice
let answers = document.getElementsByClassName('answer-btn');

[...answers].forEach(answer => {
 answer.addEventListener('click', function(event){
 let userChoice = event.target.id;
 console.log(userChoice);
 })
})

function checkAnswer() {


}

//List of trivia questions
let questions = [{
    question: 'Which rock band was founded by Trent Reznor in 1988?',
    answers: {
      a: "Jane's Addiction",
      b: "Smashing Pumpkins",
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
  },
  {
    question: "Eminem's '8 Mile' is named after a road in which city?",
    answers: {
      a: "Chicago",
      b: "Seattle",
      c: "Michigan",
      d: "Detroit"
    },
    correctAnswer: "d"
  },
  {
    question: "Who was the first woman to be inducted into the Rock and Roll Hall of Fame?",
    answers: {
      a: "LaVern Baker",
      b: "Tina Turner",
      c: "Aretha Franklin",
      d: "Stevie Nicks"
    },
    correctAnswer: "c"
  },
  {
    question: "What was Jimi Hendrix's only Billboard Top 40 hit?",
    answers: {
      a: "Bold As Love",
      b: "All Along the Watchtower",
      c: "Purple Haze",
      d: "Voodoo Child"
    },
    correctAnswer: "b"
  },
  {
    question: "Van Halen famously banned which color M&M's from their rider?",
    answers: {
      a: "Brown",
      b: "Yellow",
      c: "Blue",
      d: "Red"
    },
    correctAnswer: "a"
  },
  {
    question: "Though made famous by Ike & Tina Turner, 'Proud Mary' was first recorded by whom?",
    answers: {
      a: "The Doors",
      b: "Lynyrd Synyrd",
      c: "Led Zeppelin",
      d: "Creedence Clearwater Revival"
    },
    correctAnswer: "d"
  },
  {
    question: "Actor Jared Leto is the frontman of which band?",
    answers: {
      a: "Linkin Park",
      b: "Green Day",
      c: "30 Seconds to Mars",
      d: "The Used"
    },
    correctAnswer: "c"
  },
  {
    question: "Which member of Kiss wears makeup to look like a cat?",
    answers: {
      a: "Vinnie Vincent",
      b: "Peter Criss",
      c: "Paul Stanley",
      d: "Gene Simmons"
    },
    correctAnswer: "b"
  },
  {
    question: "Which rockstar's memoir is titled 'The Heroin Diaries'?",
    answers: {
      a: "Nikki Sixx",
      b: "Ozzy Osbourne",
      c: "Anthony Keidis",
      d: "Neil Young"
    },
    correctAnswer: "a"
  },
  {
    question: "The 'J' in Mary J Blige stands for what?",
    answers: {
      a: "June",
      b: "Jane",
      c: "Joan",
      d: "Jean"
    },
    correctAnswer: "b"
  },
  {
    question: "Lizzo plays which instrument?",
    answers: {
      a: "Saxaphone",
      b: "Violin",
      c: "Flute",
      d: "Piana"
    },
    correctAnswer: "c"
  },
  {
    question: "Which group recorded the hit 'Karma Chameleon' in 1984?",
    answers: {
      a: "Culture Club",
      b: "Duran Duran",
      c: "Spandau Ballet",
      d: "The Pet Shop Boys"
    },
    correctAnswer: "a"
  },
  {
    question: "What was the name of the Spice Girls' 1996 debut album?",
    answers: {
      a: "Spiceworld",
      b: "Forever",
      c: "Wannabe",
      d: "Spice"
    },
    correctAnswer: "d"
  },
  {
    question: "Who is the lead singer of Smash Mouth?",
    answers: {
      a: "Sean Hurwitz",
      b: "Randy Cooke",
      c: "Steve Harwell",
      d: "Paul de Lisle"
    },
    correctAnswer: "c"
  },
  {
    question: "Which Pink Floyd album features a prism on the cover?",
    answers: {
      a: "Dark side of the moon",
      b: "Animals",
      c: "The Wall",
      d: "The Division Bell"
    },
    correctAnswer: "a"
  },
  {
    question: "What does the Italian musical term 'adagio' mean?",
    answers: {
      a: "Loud",
      b: "Quiet",
      c: "Fast",
      d: "Slow"
    },
    correctAnswer: "d"
  }
]
