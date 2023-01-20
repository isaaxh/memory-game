const cat1 = document.querySelector('.cat-1');
// const cat2 = document.querySelector('.cat-2');
const dog1 = document.querySelector('.dog-1');
// const dog2 = document.querySelector('.dog-2');
const rabbit1 = document.querySelector('.rabbit-1');
// const rabbit2 = document.querySelector('.rabbit-2');







function changeCard() {
    const card = document.querySelector(`.card-${generateRandomNumber()}`);
    card.appendChild(cat1);
}


function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function isNumAvailable(num, arr) {
    return arr.includes(num);
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
                console.log(randomArray);
            }
        };
    }
    return randomArray;
}



changeCard();
// numIsPresent(,randomArray);
