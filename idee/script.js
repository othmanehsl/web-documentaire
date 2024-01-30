let currentQuestion = 1;

function showQuestion(questionNumber) {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.style.display = 'none';
    });

    const currentQuestionElement = document.getElementById(`question${questionNumber}`);
    currentQuestionElement.style.display = 'block';
}

function showContent(contentId) {
    const contents = document.querySelectorAll('.contenu');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
}

function nextQuestion() {
    // Traitez la réponse ici si nécessaire

    // Passer à la prochaine question
    currentQuestion++;

    // Afficher la question suivante
    showQuestion(currentQuestion);

    // Afficher le contenu spécifique associé à la réponse
    const contentId = `contenu${String.fromCharCode(64 + currentQuestion)}`;
    showContent(contentId);
}

// Charger la première question au chargement de la page
showQuestion(currentQuestion);
