const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultContainer = document.getElementById('result-container');
const scoreDisplay = document.getElementById('score-display');
const restartButton = document.getElementById('restart-button');
const progressBar = document.querySelector('.progress');

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

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
    
    // Store the user's answer
    userAnswers.push({
        question: quizQuestions[currentQuestionIndex].question,
        userAnswer: answer.text,
        correct: answer.correct,
        correctAnswer: quizQuestions[currentQuestionIndex].answers.find(a => a.correct).text,
        explanation: explanation
    });
    
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
    userAnswers = []; // Reset user answers array
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    showQuestion();
}

function showResults() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    const percentage = (score / quizQuestions.length) * 100;
    
    let resultsHTML = `
        <h2>Quiz Complete!</h2>
        <p id="score-display">You got ${score} out of ${quizQuestions.length} questions correct! (${percentage}%)</p>
        <div class="results-summary">
            ${userAnswers.map((answer, index) => `
                <div class="result-item ${answer.correct ? 'correct' : 'incorrect'}">
                    <div class="result-header" onclick="toggleAnswer(${index})">
                        <div class="header-content">
                            <h3>Question ${index + 1}</h3>
                            <p class="question-text">${answer.question}</p>
                        </div>
                        <div class="result-indicator">
                            <span class="status-text">${answer.correct ? 'Correct' : 'Incorrect'}</span>
                            <span class="toggle-icon">▼</span>
                        </div>
                    </div>
                    <div class="result-details" id="answer-${index}">
                        <p class="user-answer">Your answer: ${answer.userAnswer}</p>
                        ${!answer.correct ? `<p class="correct-answer">Correct answer: ${answer.correctAnswer}</p>` : ''}
                        <p class="explanation">${answer.explanation}</p>
                    </div>
                </div>
            `).join('')}
        </div>
        <button id="restart-button">Try Again</button>
    `;
    
    resultContainer.innerHTML = resultsHTML;
    
    // Reattach event listener to new restart button
    document.getElementById('restart-button').addEventListener('click', startQuiz);
    progressBar.style.width = '100%';
}

// Add this new function to handle the toggling
function toggleAnswer(index) {
    const details = document.getElementById(`answer-${index}`);
    const header = details.previousElementSibling;
    const icon = header.querySelector('.toggle-icon');
    
    if (details.style.maxHeight) {
        details.style.maxHeight = null;
        icon.style.transform = 'rotate(0deg)';
    } else {
        details.style.maxHeight = details.scrollHeight + "px";
        icon.style.transform = 'rotate(180deg)';
    }
}

restartButton.addEventListener('click', startQuiz);

startQuiz(); 