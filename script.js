document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const answers = {
        q1: 'B',
        q2: 'D',
        q3: 'D',
        q4: 'A',
        q5: 'C',
        q6: 'B',
        q7: 'C',
        q8: 'A',
        q9: 'C',
        q10: 'C',
        q11: 'C',
        q12: 'B',
        q13: 'C',
        q14: 'A',
        q15: 'C',
        q16: 'B',
        q17: 'A',
        q18: 'C',
        q19: 'C',
        q20: 'C'
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
