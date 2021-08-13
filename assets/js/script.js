/*jshint esversion: 6 */

//Get all HTML elements for use in functions 
const quizBox = document.getElementById('quiz-area');

const question = document.getElementById('question-container');
const answerA = document.getElementById('a');
const answerB = document.getElementById('b');
const answerC = document.getElementById('c');
const answerD = document.getElementById('d');

const result = document.getElementById('result');

let questionNum;
let currentQuestion;

/**
 * Initialises the quiz game
 * Generates a random number to select a quiestion from the questions array
 * Calls displayQuestion function
 * Sets current question and current score to 0 at start of quiz
 */
function playQuiz() {
    currentQuestion = 0;
    displayQuestion();
    score.innertext = 0;
}

/**
 * Removes correct or incorrect class from answer buttons after previous question
 * Displays question and answer choices in their respective containers  
 */
function displayQuestion() {

    answerA.classList.remove('incorrect');
    answerA.classList.remove('correct');
    answerB.classList.remove('incorrect');
    answerB.classList.remove('correct');
    answerC.classList.remove('incorrect');
    answerC.classList.remove('correct');
    answerD.classList.remove('incorrect');
    answerD.classList.remove('correct');

    questionNum = Math.floor(Math.random() * questions.length);

    question.innerText = questions[questionNum].question;
    answerA.innerText = questions[questionNum].answers.a;
    answerB.innerText = questions[questionNum].answers.b;
    answerC.innerText = questions[questionNum].answers.c;
    answerD.innerText = questions[questionNum].answers.d;
}

/**
 * Checks user's chosen answer against the correct answer from question array
 * Executes when user clicks an answer button
 */
function checkAnswer(userChoice) {
    if (userChoice === questions[questionNum].correctAnswer) {
        console.log("Correct!");
        document.getElementById(userChoice).classList.add("correct");
        incrementScore();
    } else {
        console.log("Incorrect");
        document.getElementById(userChoice).classList.add("incorrect");
    }
    currentQuestion++;

    /**
     * Displays new question after a short delay, up to a max 10 questions
     * Ends quiz after 10 questions, takes user to results page
     **/
    if (currentQuestion < 10) {
        setTimeout(function () {
            displayQuestion();
        }, 800);
    } else if (currentQuestion => 10) {
        setTimeout(function () {
            location.href = 'result.html';
        }, 800);
        displayUserResult();
    }
}


const score = document.getElementById('score');

/**
 * Get current score and increments by 1 each time the function is called
 * Code adapted from CI love maths walktrhough project
 */
function incrementScore() {

    let currentScore = parseInt(document.getElementById("score").innerText);
    score.innerText = ++currentScore;
    localStorage.setItem('userResult', score.innerText);

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
];

playQuiz();