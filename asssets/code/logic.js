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
var correct = 0;
var wrong = 0;
var countVar;
var questionAnswered = [];
var answerChosen = false; 
var finshedQuestions = 0;
var objState;

function remove(array, elem){
    var index = array.indexOf(elem);
    if(index !== -1){
      array.splice(index, 1);
      return array;
    }
    
  }

function restartGame(){
    if(objState.length === 0 || count === 0) {
        clearInterval(countVar);
        correct = 0;
        wrong = 0;
        objState = JSON.parse(JSON.stringify(questions));
        count = 30;
        answerChosen = false;

        document.querySelector('.question').textContent = '';
        document.querySelectorAll('.answer')[0].textContent = '';
        document.querySelectorAll('.answer')[1].textContent = '';
        document.querySelectorAll('.answer')[2].textContent = '';
        document.querySelectorAll('.answer')[3].textContent = '';
        document.getElementById('show-questions').style.display = 'none';
        document.getElementById('countdown').style.display = "none";
        document.getElementById('countdown').textContent = 0;
        document.getElementById('button-cont').style.display = "block";

    }
}

// function winOrLose(correct = '', chosen = null) {
//     console.log('chosen '+ chosen);
//     clearInterval(countVar);
//     if(correct === chosen){
//         console.log('correct!');

//         objState = remove(objState, objState[randNum]);
//         questionAndAnswer();
//     } else {
//         console.log('NO');
//         objState = remove(objState, objState[randNum]);
//         questionAndAnswer();
//     }
// }

function countdown() {
    document.getElementById('countdown').style.display = "block";
    document.getElementById('countdown').textContent = count;
    if(count < 1 ) {
        
        // alert('LOSE')
        clearInterval(countVar)
        wrong++;
        count = 5;
        objState = remove(objState, objState[randNum]);
        questionAndAnswer();
    }else {
        count--;
    }

}

function checkAnswer(e) {
    if(e.target && e.target.className === 'answer'){
        // winOrLose(objState[randNum].correct, e.target.textContent);
        clearInterval(countVar);
        if(objState[randNum].correct === e.target.textContent){
            correct++;
            e.target.classList.add('correct');
            objState = remove(objState, objState[randNum]);
            setTimeout(questionAndAnswer, 300);
        } else {
            console.log('NO');
            wrong++;
            e.target.classList.add('wrong');
            objState = remove(objState, objState[randNum]);
            setTimeout(questionAndAnswer, 300);
        }
    }  
} 
    



function questionAndAnswer(){
    randNum = Math.floor(Math.random() * objState.length);
    countVar = setInterval(countdown ,1000);
    document.getElementById('show-questions').style.display = 'block';
    if(objState.length === 0){
        restartGame();
    }
        
    console.log('obj: ' + objState);
    console.log('ques: ' + questions);
    document.querySelector('.right-count').innerHTML = `Correct: ${correct}`;
    document.querySelector('.wrong-count').innerHTML =  `Wrong: ${wrong}`;
    document.querySelector('.question').textContent = objState[randNum].question;
    document.querySelectorAll('.answer')[0].classList.remove('correct', 'wrong');
    document.querySelectorAll('.answer')[1].classList.remove('correct', 'wrong');
    document.querySelectorAll('.answer')[2].classList.remove('correct', 'wrong');
    document.querySelectorAll('.answer')[3].classList.remove('correct', 'wrong');
    document.querySelectorAll('.answer')[0].textContent = objState[randNum].answer[0];
    document.querySelectorAll('.answer')[1].textContent = objState[randNum].answer[1];
    document.querySelectorAll('.answer')[2].textContent = objState[randNum].answer[2];
    document.querySelectorAll('.answer')[3].textContent = objState[randNum].answer[3];
    finshedQuestions++;

}

// function displayQuestion() {
//     document.getElementById('show-questions').style.display = 'block';
//     var para = document.createElement('div');
//     for(let i = 0; i < 1; i++){
//         var ques = document.createElement('div');
//         ques.classList.add("question")
//         document.getElementById('div-stuff').appendChild(ques);
//     }

//     for(let i = 0; i < 4; i++){
//         var para = document.createElement('div');
//         para.classList.add("answer")
//         document.getElementById('div-stuff').appendChild(para);
//     }
    
//     questionAndAnswer();
// }

function beginTrivia() {
    document.getElementById('button-cont').style.display = "none";
    objState = JSON.parse(JSON.stringify(questions));
    questionAndAnswer();
}

document.getElementById('countdown').style.display = "none";
document.getElementById('start-button').addEventListener("click", beginTrivia);

document.addEventListener("click", checkAnswer)