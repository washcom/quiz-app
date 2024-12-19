const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Buffalo", correct: false },
        ],
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Kilimanjaro", correct: false },
            { text: "Everest", correct: true },
            { text: "Makalu", correct: false },
        ],
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ],
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "CO2", correct: false },
            { text: "HO2", correct: false },
        ],
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false },
        ],
    },
    {
        question: "Which gas do plants use for photosynthesis?",
        answers: [
            { text: "Carbon Dioxide", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false },
        ],
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Sahara", correct: true },
            { text: "Gobi", correct: false },
            { text: "Kalahari", correct: false },
            { text: "Atacama", correct: false },
        ],
    },
    {
        question: "How many continents are there on Earth?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false },
            { text: "5", correct: false },
        ],
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Yen", correct: true },
            { text: "Won", correct: false },
            { text: "Dollar", correct: false },
            { text: "Euro", correct: false },
        ],
    },
    {
        question: "Which organ pumps blood in the human body?",
        answers: [
            { text: "Heart", correct: true },
            { text: "Brain", correct: false },
            { text: "Lungs", correct: false },
            { text: "Liver", correct: false },
        ],
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "Japan", correct: true },
            { text: "China", correct: false },
            { text: "Thailand", correct: false },
            { text: "South Korea", correct: false },
        ],
    },
    {
        question: "What is the boiling point of water in Celsius?",
        answers: [
            { text: "100°C", correct: true },
            { text: "50°C", correct: false },
            { text: "75°C", correct: false },
            { text: "200°C", correct: false },
        ],
    },
    {
        question: "Which is the fastest land animal?",
        answers: [
            { text: "Cheetah", correct: true },
            { text: "Lion", correct: false },
            { text: "Leopard", correct: false },
            { text: "Tiger", correct: false },
        ],
    },
    {
        question: "Who is known as the Father of Computers?",
        answers: [
            { text: "Charles Babbage", correct: true },
            { text: "Alan Turing", correct: false },
            { text: "John von Neumann", correct: false },
            { text: "Steve Jobs", correct: false },
        ],
    },
    {
        question: "Which ocean is the largest?",
        answers: [
            { text: "Pacific Ocean", correct: true },
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
        ],
    },
    {
        question: "What is the primary language spoken in Brazil?",
        answers: [
            { text: "Portuguese", correct: true },
            { text: "Spanish", correct: false },
            { text: "English", correct: false },
            { text: "French", correct: false },
        ],
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Rome", correct: false },
            { text: "Berlin", correct: false },
        ],
    },
    {
        question: "What is the freezing point of water in Celsius?",
        answers: [
            { text: "0°C", correct: true },
            { text: "-10°C", correct: false },
            { text: "10°C", correct: false },
            { text: "5°C", correct: false },
        ],
    },
    {
        question: "Which is the largest continent by area?",
        answers: [
            { text: "Asia", correct: true },
            { text: "Africa", correct: false },
            { text: "Europe", correct: false },
            { text: "North America", correct: false },
        ],
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent van Gogh", correct: false },
            { text: "Michelangelo", correct: false },
        ],
    },
];

const questionelement = document.getElementById("question");
const answerelement   = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentquestionindex = 0;
let score = 0;
function startquiz(){
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML = "next";
    showquestion();
}
function showquestion(){
    resetstate();
    let currentquestion = questions[currentquestionindex];
    let question_no = currentquestionindex+1;
    questionelement.innerHTML = question_no + "." + currentquestion.question;
    currentquestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answerelement.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetstate(){
    nextbutton.style.display = "none";
    while(answerelement.firstChild){
        answerelement.removeChild(answerelement.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn =  e.target;
    const isCorrect =selectedBtn.dataset.correct ==="true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerelement.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.classList.add("disabled");
    });
    nextbutton.style.display ="block";
}
function showscore(){
    resetstate();
    questionelement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextbutton.innerHTML ="Re-attempt";
    nextbutton.style.display ="block";
}
function handlenextbutton(){
    currentquestionindex++;
    if(currentquestionindex<questions.length){
        showquestion();
    }
    else{
        showscore();
    }
}
nextbutton.addEventListener("click",()=>{
if(currentquestionindex<questions.length){
    handlenextbutton();
}else{
    startquiz();
}
});

startquiz();