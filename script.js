const questions = [
    {
        question: "What type of tea is considered the most prestigious in Japan?",
        answers: [
            { text: "Matcha", correct: true },
            { text: "Hojicha", correct: false },
            { text: "Bancha", correct: false },
            { text: "Genmaicha", correct: false }
        ]
    },
    {
        question: "Which Japanese tea is roasted over high heat?",
        answers: [
            { text: "Sencha", correct: false },
            { text: "Hojicha", correct: true },
            { text: "Gyokuro", correct: false },
            { text: "Kabusecha", correct: false }
        ]
    },
    // Add 8 more questions here
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultContainer = document.getElementById('result-container');
const scoreDisplay = document.getElementById('score-display');
const restartButton = document.getElementById('restart-button');
const progressBar = document.querySelector('.progress');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.addEventListener('click', () => selectAnswer(answer));
        answersElement.appendChild(button);
    });
    
    updateProgressBar();
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = progress + '%';
}

function resetState() {
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

function selectAnswer(answer) {
    if (answer.correct) score++;
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    const percentage = (score / questions.length) * 100;
    scoreDisplay.innerText = `You got ${score} out of ${questions.length} questions correct! (${percentage}%)`;
    progressBar.style.width = '100%';
}

restartButton.addEventListener('click', startQuiz);

startQuiz(); 