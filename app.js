let bx1 = document.querySelector('.bx1');
let bx2 = document.querySelector('.bx2');
let bx3 = document.querySelector('.bx3');
let bx4 = document.querySelector('.bx4');

let items = document.querySelectorAll('.items');


for(let i = 0; i < items.length; i++) {
    bx1.addEventListener('click', () => {
        items[i].style.background('red');
    })
    bx2.addEventListener('click', () => {
        items[i].style.background('yellow');
    })
    bx3.addEventListener('click', () => {
        items[i].style.background('green');
    })
    bx4.addEventListener('click', () => {
        items[i].style.background('none');
    })
}
