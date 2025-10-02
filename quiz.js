function checkAnswer() {
    const correctAnswer = "4";
    const selected = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback"); // get feedback element
    if(!selected) return; // do nothing if no option is selected

    const userAnswer = selected.value;

    if(userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// attach function to the button
document.getElementById("submit-answer")
        .addEventListener("click", checkAnswer);
