document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const answers = {
        q1: 'A',
        q2: 'A',
        q3: 'A',
        q4: 'A',
        q5: 'A',
        q6: 'A',
        q7: 'A',
        q8: 'A',
        q9: 'A',
        q10: 'A',
        q11: 'A',
        q12: 'A',
        q13: 'A',
        q14: 'A',
        q15: 'A',
        q16: 'A',
        q17: 'A',
        q18: 'A',
        q19: 'A',
        q20: 'A'
    };

    let score = 0;
    let totalQuestions = Object.keys(answers).length;

    // Clear previous results
    document.querySelectorAll('.question label').forEach(label => {
        label.classList.remove('correct', 'incorrect');
    });

    // Iterate over each question and check the answer
    for (let question in answers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer) {
            if (selectedAnswer.value === answers[question]) {
                score++;
            } else {
                selectedAnswer.parentElement.classList.add('incorrect');
            }
        }
    }

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You scored ${score} out of ${totalQuestions}`;

    // Highlight correct answers
    for (let question in answers) {
        const correctAnswerLabel = document.querySelector(`input[name="${question}"][value="${answers[question]}"]`).parentElement;
        correctAnswerLabel.classList.add('correct');
    }
});
