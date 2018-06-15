var questions = [
    {
        'question': "How do we link a javascipt file in our HTML?",
        'answer': ['<js>', '<link>', "<script>", "<javascript>"],
        'correct': "<script>",
        'seen': false
    },
    {
        'question':"How do you start a for loop?",
        'answer': ["for(let i; i < 4; i++)", "for(let i = 5; i < 4; i++)",  "for(let i = 0; i < 4; i++)", "for(let i = 0; i != 4; i++)"],
        'correct': "for(let i; i < 4; i++)",
        'seen': false
    },
    {
        'question': "How do you add a comment in Javascript?",
        'answer': ["#", "//", "<!---->", "**"],
        'correct':"//",
        'seen': false
    } 
]
var randNum;
var count = 5;
var countVar;
var questionSeen;
var questionAnswered = [];
var answerChosen = false; 
var finshedQuestions = 0;

function restartGame(){
    if(finshedQuestions === questions.length || count === 0) {
        clearInterval(countVar);
        count = 30;
        answerChosen = false;
        questionSeen = '';
        document.getElementById('show-questions').style.display = 'none';
        document.getElementById('countdown').style.display = "none";
        document.getElementById('countdown').textContent = 0;
        document.getElementById('button-cont').style.display = "block";
        // questions.forEach(x => questions[i].seen = false);

    }
}

function winOrLose(correct = '', chosen = null) {
    console.log(correct + chosen)
    clearInterval(countVar);
    answerChosen = false;
    if(correct === chosen){
        console.log('correct!');
        questionAndAnswer();
    } else {
        console.log('NO');
        
        questionAndAnswer();
    }
}

function countdown() {
    document.getElementById('countdown').style.display = "block";
    document.getElementById('countdown').textContent = count;
    if(count === 0 ) {
        
        // alert('LOSE')
        clearInterval(countVar)
        count = 5;
        questionAndAnswer();
    }else {
        count--;
    }

}

function checkAnswer(e) {
    if(e.target && e.target.className === 'answer'){
        if(!answerChosen) {
            answerChosen = true; 
            winOrLose(questions[randNum].correct, e.target.textContent);
        }
    }
} 
    



function questionAndAnswer(){
    randNum = Math.floor(Math.random() * questions.length);
    countVar = setInterval(countdown ,1000);
    if(parseInt(finshedQuestions) === parseInt(questions.lengh)){
        restartGame();
    }

    if(!questions[randNum].seen){
        document.querySelector('.question').textContent = questions[randNum].question;
        document.querySelectorAll('.answer')[0].textContent = questions[randNum].answer[0];
        document.querySelectorAll('.answer')[1].textContent = questions[randNum].answer[1];
        document.querySelectorAll('.answer')[2].textContent = questions[randNum].answer[2];
        document.querySelectorAll('.answer')[3].textContent = questions[randNum].answer[3];
        questions[randNum].seen = true;
        finshedQuestions++;
    }
    

    
}

function displayQuestion() {
    document.getElementById('show-questions').style.display = 'block';
    var para = document.createElement('div');
    console.log(questions[0].question);
    for(let i = 0; i < 1; i++){
        var ques = document.createElement('div');
        ques.classList.add("question")
        document.getElementById('div-stuff').appendChild(ques);
    }

    for(let i = 0; i < 4; i++){
        var para = document.createElement('div');
        para.classList.add("answer")
        document.getElementById('div-stuff').appendChild(para);
    }
    
    questionAndAnswer();
}

function beginTrivia() {
    document.getElementById('button-cont').style.display = "none";
    

    
    displayQuestion();
}

document.getElementById('countdown').style.display = "none";
document.getElementById('start-button').addEventListener("click", beginTrivia);

document.addEventListener("click", checkAnswer)