document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    const submitBtn = document.getElementById('submitBtn');

    const questions = [
        {
            question: "What AWS service is used for real-time processing of streaming data?",
            options: ["Amazon Kinesis", "Amazon SQS", "Amazon DynamoDB", "Amazon EMR"],
            correctAnswer: "Amazon Kinesis"
        },
        {
            question: "Which AWS service is used for managing containerized applications?",
            options: ["Amazon ECS", "AWS Lambda", "Amazon EKS", "AWS Batch"],
            correctAnswer: "Amazon ECS"
        },
        {
            question: "What AWS service is used for serverless orchestration of microservices?",
            options: ["AWS Step Functions", "Amazon SWF", "Amazon SNS", "AWS Glue"],
            correctAnswer: "AWS Step Functions"
        },
        {
            question: "Which AWS service is used for automated code deployment?",
            options: ["AWS CodeDeploy", "AWS CodeCommit", "AWS CodePipeline", "AWS OpsWorks"],
            correctAnswer: "AWS CodeDeploy"
        },
        {
            question: "What AWS service is used for managing secrets and encryption keys?",
            options: ["AWS Secrets Manager", "AWS KMS", "AWS IAM", "AWS CloudHSM"],
            correctAnswer: "AWS Secrets Manager"
        },
        {
            question: "Which AWS service is used for serverless data integration?",
            options: ["AWS Glue", "Amazon Redshift", "Amazon Athena", "AWS Data Pipeline"],
            correctAnswer: "AWS Glue"
        },
        {
            question: "What AWS service is used for scalable relational databases?",
            options: ["Amazon Aurora", "Amazon RDS", "Amazon DynamoDB", "Amazon Neptune"],
            correctAnswer: "Amazon Aurora"
        },
        {
            question: "Which AWS service is used for managing IoT devices?",
            options: ["AWS IoT Core", "AWS IoT Greengrass", "Amazon S3", "Amazon Kinesis"],
            correctAnswer: "AWS IoT Core"
        },
        {
            question: "What AWS service is used for serverless data lakes?",
            options: ["Amazon S3", "Amazon Redshift", "AWS Glue", "Amazon Athena"],
            correctAnswer: "Amazon S3"
        },
        {
            question: "Which AWS service is used for high-performance computing?",
            options: ["Amazon EC2", "Amazon S3", "Amazon RDS", "AWS Lambda"],
            correctAnswer: "Amazon EC2"
        }
    ];

    // Function to generate questions and options
    function renderQuiz() {
        questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');

            const questionP = document.createElement('p');
            questionP.textContent = `${index + 1}. ${q.question}`;
            questionDiv.appendChild(questionP);

            const optionsDiv = document.createElement('div');
            q.options.forEach(option => {
                const optionLabel = document.createElement('label');
                optionLabel.classList.add('option');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `q${index + 1}`;
                input.value = option;
                input.addEventListener('change', function() {
                    // Remove highlight from all options in the current question
                    const allOptions = questionDiv.querySelectorAll('.option');
                    allOptions.forEach(opt => opt.classList.remove('selected'));

                    // Highlight the selected option
                    optionLabel.classList.add('selected');
                });
                optionLabel.appendChild(input);
                optionLabel.appendChild(document.createTextNode(option));
                optionsDiv.appendChild(optionLabel);
            });
            questionDiv.appendChild(optionsDiv);

            quizForm.appendChild(questionDiv);
        });
    }

    // Function to handle form submission
    function handleSubmit() {
        let score = 0;

        questions.forEach((q, index) => {
            const selectedOption = quizForm.querySelector(`input[name="q${index + 1}"]:checked`);

            if (selectedOption) {
                const selectedAnswer = selectedOption.value;
                if (selectedAnswer === q.correctAnswer) {
                    score++;
                    selectedOption.parentElement.classList.add('correct');
                } else {
                    selectedOption.parentElement.classList.add('incorrect');
                    // Highlight correct answer
                    const correctOptionLabel = quizForm.querySelector(`input[value="${q.correctAnswer}"]`).parentElement;
                    correctOptionLabel.classList.add('correct');
                }
            }
        });

        // Display result
        resultDiv.textContent = `Your Score: ${score} out of ${questions.length}`;

        // Disable submit button after submission
        submitBtn.disabled = true;
    }

    // Event listener for form submission
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission
        handleSubmit();
    });

    // Initialize quiz
    renderQuiz();
});
