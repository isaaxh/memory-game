const cat1 = document.querySelector('.cat-1');
const cat2 = document.querySelector('.cat-2');
const dog1 = document.querySelector('.dog-1');
const dog2 = document.querySelector('.dog-2');
const rabbit1 = document.querySelector('.rabbit-1');
const rabbit2 = document.querySelector('.rabbit-2');



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
            }
        };
    }
    return randomArray;
}



changeCard();
// numIsPresent(,randomArray);
