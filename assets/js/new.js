const question = document.getElementById('question-container');
const answerA = document.getElementById('a');
const answerB = document.getElementById('b');
const answerC = document.getElementById('c');
const answerD = document.getElementById('d');

const score = document.getElementById('score-area');

const result = document.getElementsByClassName('result-contrainer');

let questionNum

function playQuiz() {
    questionNum = 0;
    displayQuestion();
    score.innertext = 0;
}

function displayQuestion() {

    answerA.classList.remove('incorrect');
    answerA.classList.remove('correct');
    answerB.classList.remove('incorrect');
    answerB.classList.remove('correct');
    answerC.classList.remove('incorrect');
    answerC.classList.remove('correct');
    answerD.classList.remove('incorrect');
    answerD.classList.remove('correct');

    for (let i = 0; i < 10; i++) {
        questionBox.innerHTML = questions[i].question;
        answerA.innerHTML = questions[i].answers.a;
        answerB.innerHTML = questions[i].answers.b;
        answerC.innerHTML = questions[i].answers.c;
        answerD.innerHTML = questions[i].answers.d;
    }
}

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
        question: "Though made famous by Ike & Tina Turner, 'Proud Mary' was first recorded by whom?",
        answers: {
            a: "The Doors",
            b: "Lynyrd Synyrd",
            c: "Led Zeppelin",
            d: "Creedence Clearwater Revival"
        },
        correctAnswer: "d"
    },

]