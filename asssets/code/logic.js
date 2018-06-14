var questions = [
    {
        'question': "How do we link a javascipt file in our HTML?",
        'answer': ['<js>', '<link>', "<javascript>"],
        'correct': "<script>"
    },
    {
        'question':"How do you start a for loop?",
        'answer': ["for(let i; i < 4; i++)", "for(let i = 0; i < 4; i++)", "for(let i = 0; i != 4; i++)"],
        'correct': "for(let i = 5; i < 4; i++)"
    },
    {
        'question': "How do you add a comment in Javascript?",
        'answer': ["#", "<!---->", "**"],
        'correct':"//"
    } 
]

var randomNum;
function displayQuestion() {
    document.getElementById('show-questions').style.display = 'block';
    var para = document.createElement('div');
    document.getElementById('div-stuff').appendChild(para).textContent = 'hello';
}

function beginTrivia() {
    document.getElementById('button-cont').style.display = "none";
    displayQuestion();
}

document.getElementById('start-button').addEventListener("click", beginTrivia);