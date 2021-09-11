let image = "./image/";
let imagesList = new Array();

for(let i=0 ; i <= 8; i++) {
    imagesList[i] = image + i + ".png";
    new Image().src = imagesList[i];
}
    
let counter = 0;

function slot(){
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


        if((resultOfFirst == resultOfThird) && (resultOfFirst == resultOfSecond)){  
            showResult.innerHTML = "Você ganhou!"; 

            }else if((resultOfFirst == resultOfSecond) || (resultOfFirst == resultOfThird) || (resultOfThird == resultOfSecond)){ 
                showResult.innerHTML = "Quase conseguiu, não foi dessa vez!"; 

            }else{ 
                showResult.innerHTML = "Você perdeu. Tente outra vez!"; 
            } 
            counter = 0; 
            clearInterval(Random); 

        }

    },120);
          
}
