function checkAnswer() {
    const correctAnswer = "4";
    const selected = document.querySelector('input[name="quiz"]:checked');
    if (!selected) return;

    const userAnswer = selected.value;
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the Submit Answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
