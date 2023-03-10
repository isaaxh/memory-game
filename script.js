const btnReset = document.querySelector('.btn-reset');
const cat1 = document.querySelector('.cat-1');
const cat2 = document.querySelector('.cat-2');
const dog1 = document.querySelector('.dog-1');
const dog2 = document.querySelector('.dog-2');
const rabbit1 = document.querySelector('.rabbit-1');
const rabbit2 = document.querySelector('.rabbit-2');

let clickCounter = 1;
let click1 = 0;
let click2 = 0;
let scoreCounter = 0;
let failCounter = 0;
let cardsUncovered = new Set();


function isNumAvailable(num, arr) {
    return arr.includes(num);
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function generateRandomArray() {
    let randomArray = [];
    let randomNumber = 0;

    let arrayComplete = false;

    while (arrayComplete === false) {
        randomNumber = generateRandomNumber();
        if (isNumAvailable(randomNumber, randomArray) === false) {
            randomArray.push(randomNumber);
            if (randomArray.length === 6) {
                arrayComplete = true;
            }
        };
    }
    return randomArray;
}

function changeCards() {
    const randomArray = generateRandomArray();
    const card1 = document.querySelector(`.card-${randomArray[0]}`);
    const card2 = document.querySelector(`.card-${randomArray[1]}`);
    const card3 = document.querySelector(`.card-${randomArray[2]}`);
    const card4 = document.querySelector(`.card-${randomArray[3]}`);
    const card5 = document.querySelector(`.card-${randomArray[4]}`);
    const card6 = document.querySelector(`.card-${randomArray[5]}`);

    card1.appendChild(cat1);
    card2.appendChild(dog1);
    card3.appendChild(rabbit1);
    card4.appendChild(cat2);
    card5.appendChild(dog2);
    card6.appendChild(rabbit2);
}

function uncoverCard(e) {
    const target_img = e.target.querySelector('img');
    if (target_img.style.display === 'block') {return};
    target_img.style.display = 'block';    
    cardsUncovered.add(target_img);
    trackClicks(target_img);

    if(cardsUncovered.size === 6){
        cardsUncovered.clear();
        window.setTimeout(function() {
            changeCards()}, 
            1000);
        window.setTimeout(function() {
            coverAllCards()}, 
            2000);
    }
}

function trackClicks(target_img) {
    if(clickCounter === 1) {
        clickCounter++;
        click1 = target_img.className.split(" ")[0];
    } else if (clickCounter === 2) {
        click2 = target_img.className.split(" ")[0];
        compareClicks(click1, click2);
        clickCounter = 1;
        click1 = 0;
        click2 = 0;
    }
}

function compareClicks(c1, c2) {
    const scores = document.querySelector('.score');
    const fails = document.querySelector('.fail');
    if(c1 === c2) {
        scoreCounter ++;
        scores.innerText = `Scores: ${scoreCounter}`;  
    } else {
        failCounter++;
        fails.innerText = `Failed-Attempts: ${failCounter}`;
    }
}

function coverAllCards(){
    const imgs = document.querySelectorAll('img');

    imgs.forEach((img) => {
        img.style.display = 'none';
    })
}

function uncoverAllCards (){
    const imgs = document.querySelectorAll('img');

    imgs.forEach((img) => {
        img.style.display = 'block';
    })
}

function resetScores() {
    scoreCounter = 0;
    document.querySelector('.score').innerText = 'Score: 0';
    failCounter = 0;
    document.querySelector('.fail').innerText = 'Failed-Attempts: 0';

}

btnReset.addEventListener('click', () => {
    uncoverAllCards();
    resetScores();
    changeCards();
    window.setTimeout(function() {
        coverAllCards()}, 
        2000);
})

changeCards();
window.setTimeout(function() {coverAllCards()}, 2000);