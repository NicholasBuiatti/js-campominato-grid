// MILESTONE #2
// Inserire la griglia attraverso js

const container = document.getElementById('container-game');

//quanti quadrati mi servono?? uso il ciclo for per avere un numero fisso di quadrati.
for (let i = 1; i <= 9; i++) {
    let square = document.createElement('div');
    square.classList.add('my-square');
    square.innerText = i;
    
    container.append(square)
    
}

