const btn = () =>{
    document.querySelector('#play')
    addEventListener('click', start)
}
btn();
 
const alerts = document.querySelector('#bg-body');

function TwoHitsAlert(){
    alerts.classList.add('twohits');
}

function winnerAlert(){
    alerts.classList.add('winner');
}

function loserAlert(){
    alerts.classList.add('loser');
}

const playSoundAlert = document.querySelector('#playSound');
const playSound = () =>{
    playSoundAlert.play();
}

const winnerSoundAlert = document.querySelector('#winnerSound');
const winnerSound = () =>{
    winnerSoundAlert.play();
}

const loserSoundAlert = document.querySelector('#loserSound');
const loserSound = () =>{
    loserSoundAlert.play();
}

let image = "./assets/image/";
let imagesList = new Array();

for(let i=0 ; i <= 8; i++) {
    imagesList[i] = `${image}${i}${".png"}`;
    new Image().src = imagesList[i];
}
    
let counter = 0;

function start(){

    `${playSound()}`;

    let Random = setInterval(function(){
    counter++; 
    const first = Math.floor(Math.random() * 8+1); 
    console.log(first)
    const second = Math.floor(Math.random() * 8+1); 
    console.log(second)
    const third = Math.floor(Math.random() * 8+1);
    console.log(third)

    document.first.src = imagesList[first]; 
    document.second.src = imagesList[second]; 
    document.third.src = imagesList[third];

    alerts.classList.contains('winner');
    alerts.classList.remove('winner');
    alerts.classList.contains('loser');
    alerts.classList.remove('loser');
    alerts.classList.contains('twohits');
    alerts.classList.remove('twohits');
    
    if (counter > 10){
        let resultOfFirst = imagesList[first]; 
        let resultOfSecond = imagesList[second]; 
        let resultOfThird = imagesList[third];

        let showResult = document.querySelector('#showResult')
        const winner = "Parabéns, voce ganhou!";
        const twoHits = "Quase.., não foi dessa vez!";
        const loser = "Você perdeu, Tente outra vez!";

        if((resultOfFirst == resultOfThird) && (resultOfFirst == resultOfSecond)){  
            showResult.innerHTML = `${winner}`;
            `${winnerSound()}`;
            `${winnerAlert()}`;

            }else if((resultOfFirst == resultOfSecond) || (resultOfFirst == resultOfThird) || (resultOfThird == resultOfSecond)){ 
                showResult.innerHTML = `${twoHits}`;
                `${TwoHitsAlert()}`;
            }else{ 
                showResult.innerHTML = `${loser}`; 
                `${loserSound()}`;
                `${loserAlert()}`;
            } 
            counter = 0; 
            clearInterval(Random); 

        }

    },250);
          
}

