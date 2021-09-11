// const btn = document.querySelector('#play')
// btn.addEventListener('click', start)

const btn = () =>{
    document.querySelector('#play')
    addEventListener('click', start)
}
btn();
    
let image = "./image/";
let imagesList = new Array();

for(let i=0 ; i <= 8; i++) {
    imagesList[i] = `${image}${i}${".png"}`;
    new Image().src = imagesList[i];
}
    
let counter = 0;

function start(){
    alerts.classList.contains('winner');
    alerts.classList.remove('winner');
    alerts.classList.contains('loser');
    alerts.classList.remove('loser');
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
    
    if (counter > 5){
        let resultOfFirst = imagesList[first]; 
        let resultOfSecond = imagesList[second]; 
        let resultOfThird = imagesList[third];

        let showResult = document.querySelector('#showResult')
        const winner = "Parabéns, voce ganhou!";
        const twoHits = "Quase.., não foi dessa vez!";
        const loser = "Você perdeu, Tente outra vez!";

        if((resultOfFirst == resultOfThird) && (resultOfFirst == resultOfSecond)){  
            showResult.innerHTML = `${winner}`;
            `${winnerAlert()}`

            }else if((resultOfFirst == resultOfSecond) || (resultOfFirst == resultOfThird) || (resultOfThird == resultOfSecond)){ 
                showResult.innerHTML = `${twoHits}`;
            }else{ 
                showResult.innerHTML = `${loser}`; 
                `${loserAlert()}`
            } 
            counter = 0; 
            clearInterval(Random); 

        }

    },120);
          
}

const alerts = document.querySelector('.wrapper');

function winnerAlert (){
    alerts.classList.add('winner');
}
function loserAlert (){
    alerts.classList.add('loser');
}



