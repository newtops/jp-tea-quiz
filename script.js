const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultContainer = document.getElementById('result-container');
const scoreDisplay = document.getElementById('score-display');
const restartButton = document.getElementById('restart-button');
const progressBar = document.querySelector('.progress');

function showExplanation(answer, explanation) {
    const buttons = answersElement.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.innerText === answer.text) {
            button.style.backgroundColor = answer.correct ? '#90EE90' : '#FFB6C1';
        }
    });

    const explanationDiv = document.createElement('div');
    explanationDiv.classList.add('explanation');
    explanationDiv.innerHTML = `
        <p>${explanation}</p>
        <button class="next-button">Next Question</button>
    `;
    questionContainer.appendChild(explanationDiv);

    const nextButton = explanationDiv.querySelector('.next-button');
    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    });
}

function selectAnswer(answer, explanation) {
    if (answer.correct) score++;
    currentQuestionIndex++;
    showExplanation(answer, explanation);
    updateProgressBar();
}

function showQuestion() {
    resetState();
    const question = quizQuestions[currentQuestionIndex];
    questionElement.innerText = question.question;
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.addEventListener('click', () => selectAnswer(answer, question.explanation));
        answersElement.appendChild(button);
    });
    
    updateProgressBar();
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progress + '%';
}

function resetState() {
    while (answersElement.firstChild) {
        answersElement.firstChild.remove();
    }
    const explanation = questionContainer.querySelector('.explanation');
    if (explanation) explanation.remove();
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    showQuestion();
}

function showResults() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    const percentage = (score / quizQuestions.length) * 100;
    scoreDisplay.innerText = `You got ${score} out of ${quizQuestions.length} questions correct! (${percentage}%)`;
    progressBar.style.width = '100%';
}

restartButton.addEventListener('click', startQuiz);

startQuiz(); 