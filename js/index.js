const menu = document.querySelector('.menu');
const menuItems = menu.querySelector('.items');
const cells = document.querySelectorAll('.square');

//checks all win conditions
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,4,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "x";
let running = fail;

//will load menu by removing & adding "hidden" to class section
menu.addEventListener('click', (e) => {
    menuItems.classList.toggle('hidden')
});