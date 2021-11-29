//тоглоом дууссан эсэхийн хадгалах төлөвийн хувьсагч
var isNewGame;
// тоглогч ээлж
var activePlayer,scores=[0,0] ,roundScore;

var coreone = document.getElementById('score-0');
var coretwo = document.getElementById('score-1');

var currentone = document.getElementById('current-0');
var currenttwo = document.getElementById('current-1');
var diceDom = document.querySelector('.dice');
diceone(1);


document.querySelector('.btn-roll').addEventListener('click', function (){
    if(isNewGame){
        var diceNumber = Math.floor(Math.random()*6)+1;
        if(diceNumber !== 1){
            diceDom.style.display = 'block';
            diceDom.src = 'dice-'+diceNumber+'.png';
            roundScore = roundScore + diceNumber;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
            
        }else{
            diceone(0);
        }
    }else{alert("Тоглоом дууссан байна. дахин эхлүүлэх бол New Game товчийг дарна уу.");}
});
document.querySelector('.btn-hold').addEventListener('click', function (){
    if(isNewGame){
        scores[activePlayer] = scores[activePlayer] + roundScore;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >=100){
            document.getElementById('name-'+activePlayer).textContent = 'Winner!!!';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add("winner");
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove("active");
            isNewGame = false;
        }else{diceone(0);}
    }else{alert("Тоглоом дууссан байна. дахин эхлүүлэх бол New Game товчийг дарна уу.");}
});
document.querySelector('.btn-new').addEventListener('click', function (){
    diceone(1);
});
function diceone(refref){
    var playpanelone = document.querySelector('.player-0-panel');
    var playpaneltwo = document.querySelector('.player-1-panel');
    if(refref===1){
        isNewGame = true;
        coreone.textContent = 0;
        coretwo.textContent = 0;
        scores[0] = 0; scores[1] = 0;
        playpanelone.classList.add("active");
        playpaneltwo.classList.remove("active");
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        playpanelone.classList.remove("winner");
        playpaneltwo.classList.remove("winner");
        activePlayer=0
    }else{
        playpanelone.classList.toggle("active");
        playpaneltwo.classList.toggle("active");
        activePlayer === 0 ? (activePlayer=1) : (activePlayer=0);
    }
    currentone.textContent = 0;
    currenttwo.textContent = 0;
    roundScore = 0;
    
    diceDom.style.display = 'none';
    
}


