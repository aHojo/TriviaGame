var questions = [
    {
        'question': "How do we link a javascipt file in our HTML?",
        'answer': ['<js>', '<link>', "<script>", "<javascript>"],
        'correct': "<script>"
    },
    {
        'question':"How do you start a for loop?",
        'answer': ["for(let i; i < 4; i++)", "for(let i = 5; i < 4; i++)",  "for(let i = 0; i < 4; i++)", "for(let i = 0; i != 4; i++)"],
        'correct': "for(let i; i < 4; i++)"
    },
    {
        'question': "How do you add a comment in Javascript?",
        'answer': ["#", "//", "<!---->", "**"],
        'correct':"//"
    } 
]
var randNum;
var count = 5;
var countVar;


function countdown() {
    document.getElementById('countdown').style.display = "block";
    document.getElementById('countdown').textContent = count;
    if(count === 0 ) {
        clearInterval(countVar);
        alert('lose!');
    }else {
    count--;
    }

}

function checkAnswer(e) {
    console.log(questions[randNum].correct);
    console.log(questions[randNum].question);
    
    
    if(e.target && e.target.className === 'answer'){
        if(questions[randNum].correct === e.target.textContent){
            console.log('correct!');
        } else {
            console.log('NO');
        }
    }
} 
    



function questionAndAnswer(){
    randNum = Math.floor(Math.random() * questions.length);
    
    document.querySelector('.question').textContent = questions[randNum].question;
    document.querySelectorAll('.answer')[0].textContent = questions[randNum].answer[0];
    document.querySelectorAll('.answer')[1].textContent = questions[randNum].answer[1];
    document.querySelectorAll('.answer')[2].textContent = questions[randNum].answer[2];
    document.querySelectorAll('.answer')[3].textContent = questions[randNum].answer[3];

    
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
    

    countVar = setInterval(countdown ,1000);
    displayQuestion();
}

document.getElementById('countdown').style.display = "none";
document.getElementById('start-button').addEventListener("click", beginTrivia);

document.addEventListener("click", checkAnswer)