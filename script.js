function randomNumber(){
    return Math.floor(Math.random() * 6) + 1;
}

console.log(`card-${randomNumber()}`);

function colorCard(){
    const card = document.querySelector(`.card-${randomNumber()}`);
    card.style.backgroundColor = 'chocolate';   
}

colorCard();