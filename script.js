const cat1 = document.querySelector('.cat-1');
// const cat2 = document.querySelector('.cat-2');
const dog1 = document.querySelector('.dog-1');
// const dog2 = document.querySelector('.dog-2');
const rabbit1 = document.querySelector('.rabbit-1');
// const rabbit2 = document.querySelector('.rabbit-2');







function changeCard(){
    const card = document.querySelector(`.card-${randomNumber()}`);
    card.appendChild(cat1);
}

function randomNumber(){
    let randomArray = [];
    let randomNumber = 0;
    for(let i = 0; i < 6; i++) {
        randomNumber = Math.floor(Math.random() * 6) + 1;
        randomArray.forEach((randomNumber,randomArray) => {
            if(!randomArray.includes(randomNumber)){
                randomArray.push(randomNumber);
            };
        });
        // randomArray.push(randomNumber);
        console.log(randomArray);
    }

    // console.log(randomArray);

    // return 
}

randomNumber();
// changeCard();


