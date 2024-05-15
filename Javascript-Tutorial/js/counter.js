
let btnIncremaent = document.getElementById('increase');

let btnDecrement = document.getElementById('decrease');

let counter = document.getElementById('counter');
let reset = document.getElementById('reset');

let count = 0;

function updateCounter() {
    counter.innerHTML = count;

}

btnIncremaent.addEventListener('click', () => {
    count++;
    updateCounter();
}
);

btnDecrement.addEventListener('click', () => {
    count--;
    if(count < 0) {
        count = 0;
    }
    updateCounter();
}
);

reset.addEventListener('click', () => {
    count = 0;
    updateCounter();
}
    
);


// is not working
// Path: Javascript-Tutorial/js/counter.

