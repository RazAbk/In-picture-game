var gQuests;

var gCurrQuestIdx = 0;


function init() {
  gQuests = createQuests();
  renderQuest();
}

function renderQuest() {
    var strHTML =
        `<div class="picture"><img src="pictures/${gCurrQuestIdx + 1}.jpg"></div>

        <div onclick="checkAnswer(this)" data-opt="1" class="answer">${gQuests[gCurrQuestIdx].opts[0]}</div>
        <br>
        <div onclick="checkAnswer(this)" data-opt="2" class="answer">${gQuests[gCurrQuestIdx].opts[1]}</div>`

    var elGame = document.querySelector('.the-game');

    elGame.innerHTML = strHTML;

}

function checkAnswer(elOpt) {
    var answer = parseInt(elOpt.getAttribute('data-opt'));

    if(answer === gQuests[gCurrQuestIdx].correctOptIndex){
        correctAnswer(elOpt);
    } else{
        wrongAnswer(elOpt);
    }
}

function correctAnswer(elOpt){
    elOpt.classList.add('correct');

    if(gCurrQuestIdx + 1 > gQuests.length - 1){
        setTimeout(victory,1000);
    } else{
        setTimeout(function(){
            gCurrQuestIdx++;
            renderQuest();
        },1000);
    }
}

function wrongAnswer(elOpt){
    elOpt.classList.add('wrong');

    setTimeout(function(){
        elOpt.classList.remove('wrong');
    },1000);
}

function victory(){
    gCurrQuestIdx = 0;
    var strHTML =
        `<div class="picture"><img src="pictures/${gCurrQuestIdx + 1}.jpg"></div>

        <div onclick="checkAnswer(this)" data-opt="1" class="answer">${gQuests[gCurrQuestIdx].opts[0]}</div>
        <br>
        <div onclick="checkAnswer(this)" data-opt="2" class="answer">${gQuests[gCurrQuestIdx].opts[1]}</div>
        <h2>You Won!</h2>
        <button class="play-again" onclick="init()">Play Again</button>`

    var elGame = document.querySelector('.the-game');

    elGame.innerHTML = strHTML;
}

function createQuests() {
  var newQuests = [
    { id: 1, opts: ['Dog', 'Gorilla'], correctOptIndex: 1 },
    { id: 2, opts: ['Fish', 'Cat'], correctOptIndex: 2 },
    { id: 3, opts: ['Flower', 'Laptop'], correctOptIndex: 1 },
  ];

  return newQuests;
}
