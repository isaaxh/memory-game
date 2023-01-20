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

function changeCard() {
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
    const img = e.target.querySelector('img');
    img.style.display = 'block';
    
    if(clickCounter === 1) {
        console.log(clickCounter);
        clickCounter++;
        click1 = img.className.split(" ")[0];
        
        console.log(click1);
    } else if (clickCounter === 2) {
        console.log(clickCounter);
        clickCounter = 1;
        click2 = img.className.split(" ")[0];
        console.log(click2);
        checkImg(click1, click2);
    }


}

function checkImg(c1, c2) {
    const scores = document.querySelector('.score');
    if(c1 === c2) {
        scoreCounter ++;
        scores.innerText = `Score: ${scoreCounter}`;  
    }
}

function coverCards(){
    const imgs = document.querySelectorAll('img');

    imgs.forEach((img) => {
        img.style.display = 'none';
    })
}


// changeCard();

btnReset.addEventListener('click', () => {
    coverCards();
    changeCard();
})