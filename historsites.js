let spanTexts = document.getElementsByTagName("span");
    window.onload = function(){
        for (spanText of spanTexts){
            spanText.classList.add("active");
        }
    }

    const questions = [
        {
            question: "Which part of the eye regulates the amount of light that enters the eye?",
            answers: [
                { text: "Cornea", correct: false},
                { text: "Iris", correct: true},
                { text: "Retina", correct: false},
                { text: "Pupil", correct: false}
            ]
        },
        {
            question: "Which is largest animal in the world?",
            answers: [
                { text: "Shark", correct: false},
                { text: "Blue Whale", correct: true},
                { text: "Elephant", correct: false},
                { text: "Giraffe", correct: false}
            ]
        },
        {
            question: "Which is largest animal in the world?",
            answers: [
                { text: "Shark", correct: false},
                { text: "Blue Whale", correct: true},
                { text: "Elephant", correct: false},
                { text: "Giraffe", correct: false}
            ]
        },
        {
            question: "Which is largest animal in the world?",
            answers: [
                { text: "Shark", correct: false},
                { text: "Blue Whale", correct: true},
                { text: "Elephant", correct: false},
                { text: "Giraffe", correct: false}
            ]
        },
        {
            question: "Which is largest animal in the world?",
            answers: [
                { text: "Shark", correct: false},
                { text: "Blue Whale", correct: true},
                { text: "Elephant", correct: false},
                { text: "Giraffe", correct: false}
            ]
        },
        {
            question: "Which is largest animal in the world?",
            answers: [
                { text: "Shark", correct: false},
                { text: "Blue Whale", correct: true},
                { text: "Elephant", correct: false},
                { text: "Giraffe", correct: false}
            ]
        },
        {
            question: "Which is largest animal in the world?",
            answers: [
                { text: "Shark", correct: false},
                { text: "Blue Whale", correct: true},
                { text: "Elephant", correct: false},
                { text: "Giraffe", correct: false}
            ]
        },
        {
            question: "Which is largest animal in the world?",
            answers: [
                { text: "Shark", correct: false},
                { text: "Blue Whale", correct: true},
                { text: "Elephant", correct: false},
                { text: "Giraffe", correct: false}
            ]
        },
        {
            question: "Which is largest animal in the world?",
            answers: [
                { text: "Shark", correct: false},
                { text: "Blue Whale", correct: true},
                { text: "Elephant", correct: false},
                { text: "Giraffe", correct: false}
            ]
        },
        {
            question: "Which is largest animal in the world?",
            answers: [
                { text: "Shark", correct: false},
                { text: "Blue Whale", correct: true},
                { text: "Elephant", correct: false},
                { text: "Giraffe", correct: false}
            ]
        }
    ];
    
    const questionElement = document.getElementById("question");
    const multiChoiceButtons = document.getElementById("multiChoice-buttons");
    const nextButton = document.getElementById("next-btn");
    
    let currentQuestionIndex = 0;
    let score = 0;
    
    function startQuiz(){
        currentQuestionIndex=0;
        score=0;
        nextButton.innerHTML = "Next";
        showQuestion();
    }
    
    function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = "<strong>" + questionNo + ". </strong>" + currentQuestion.question;
    
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            multiChoiceButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        }
        );
    }
    
    function resetState(){
        nextButton.style.display = "none";
        while(multiChoiceButtons.firstChild){
            multiChoiceButtons.removeChild(multiChoiceButtons.firstChild)
        }
    }
    
    function selectAnswer(option){
        const selectedBtn = option.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score ++;
        } else {
            selectedBtn.classList.add("incorrect");
        }
        Array.from(multiChoiceButtons.children).forEach(button =>{
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }
    
    function showScore(){
        resetState();
        questionElement.innerHTML = "You scored " + score + " out of " + questions.length + "!";
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
    
    function NextQuestionButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        } else{
            showScore();
        }
    }
    
    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            NextQuestionButton();
        } else{
            startQuiz();
        }
    });
    
    startQuiz();