const btn = () =>{
    document.querySelector('#play')
    addEventListener('click', start)
}
btn();
    
const alerts = document.querySelector('.wrapper');
const alertsH = document.querySelector('.header');

const playSoundAlert = document.querySelector('#playSound')
const winnerSoundAlert = document.querySelector('#winnerSound')
const loserSoundAlert = document.querySelector('#loserSound')

function winnerAlert (){
    alerts.classList.add('winner');
    alertsH.classList.add('winner');
}

function TwoHits (){
    alerts.classList.add('two-Hits');
    alertsH.classList.add('two-Hits');
}

function loserAlert (){
    alerts.classList.add('loser');
    alertsH.classList.add('loser');
}

function winnerSound (){
    winnerSoundAlert.play();
}

function playSound (){
    playSoundAlert.play();
}

function loserSound (){
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
    alerts.classList.contains('winner');
    alerts.classList.remove('winner');
    alerts.classList.contains('loser');
    alerts.classList.remove('loser');
    alertsH.classList.contains('winner');
    alertsH.classList.remove('winner');
    alertsH.classList.contains('loser');
    alertsH.classList.remove('loser');
    alerts.classList.contains('two-Hits');
    alerts.classList.remove('two-Hits');
    alertsH.classList.contains('two-Hits');
    alertsH.classList.remove('two-Hits');

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
            `${winnerAlert()}`;
            `${winnerSound()}`;

            }else if((resultOfFirst == resultOfSecond) || (resultOfFirst == resultOfThird) || (resultOfThird == resultOfSecond)){ 
                showResult.innerHTML = `${twoHits}`;
                `${TwoHits()}`;
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

