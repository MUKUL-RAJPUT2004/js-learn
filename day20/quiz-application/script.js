document.addEventListener('DOMContentLoaded', ()=>{

    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const quizContainer = document.getElementById('quiz-container');
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const choicesList = document.getElementById('choices-list');
    const resultContainer = document.getElementById('result-container');
    const scoreDisplay = document.getElementById('score');




    const questions = [
        {
            question: "What is the capital of France",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
            marks: "2",
        },

        {
            question: "Kis color ki chaddi pahane ho",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
            marks: "5",
        },

        {
            question: "What is the capital of India",
            choices: ["Paris", "London", "Delhi", "Madrid"],
            answer: "Paris",
            marks: "10",
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
   let total = questions.reduce((sum, question) => sum + parseInt(question.marks), 0);


    startBtn.addEventListener('click', startQuiz);

    function next(){
   
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }
        else{
            showResult();
        }
    
}

    restartBtn.addEventListener('click', ()=>{
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add('hidden');
        startQuiz();
    })

    function startQuiz(){
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        showQuestion();
    }

    function showQuestion(){
        nextBtn.classList.add("hidden");
        // console.log(questions[currentQuestionIndex].question);
        
        questionText.textContent = questions[currentQuestionIndex].question;
        console.log(questionText);
        
        choicesList.innerHTML = ""   //clear previous choices
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice
            li.addEventListener('click', () => selectAnswer(choice))        //important
            choicesList.appendChild(li)
        });
    }

    function selectAnswer(choice){
        const correctAnswer = questions[currentQuestionIndex].answer;
        if(choice === correctAnswer){
            score= score + parseInt(questions[currentQuestionIndex].marks);
        }
        next();
    }

    function showResult(){
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent = `${score} out of ${total}`;
    }


});