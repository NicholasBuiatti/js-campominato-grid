const container = document.getElementById('container-game');
const btnStart = document.querySelector('#startGame');
const widthContainer = document.querySelector('#container-game').classList;


//creo il bottone per iniziare il gioco
btnStart.addEventListener('click', function (prevenzione) {
    prevenzione.preventDefault()

    let modeEasy = document.querySelector('#easy').checked;
    let modeMedium = document.querySelector('#medium').checked;
    let modeHard = document.querySelector('#hard').checked;
    console.log(modeEasy, modeMedium, modeHard);

    if (modeEasy == true) {
        widthContainer.add('my-width-easy');
        //quanti quadrati mi servono?? uso il ciclo for per avere un numero fisso di quadrati.
        for (let i = 1; i <= 49; i++) {
            let square = createSquare('div', 'my-square');

            //creo l'evento per cui se clicco su una casella mi si colora e mi compare il testo
            square.addEventListener('click', function () {
                clickSquare(square, 'bg-primary', i);
            })

            //'appendo' i div uno dietro l'altro.Essendo NODI html posso farlo con append e non con innerHTML(che io sappia) così da gestirci un evento
            container.append(square)
        }

    } else if (modeMedium == true) {
        widthContainer.add('my-width-medium');

        for (let i = 1; i <= 81; i++) {
            let square = createSquare('div', 'my-square');
            square.addEventListener('click', function () {
                clickSquare(square, 'bg-primary', i);
            })

            container.append(square)
        }
    } else if (modeHard == true) {
        widthContainer.add('my-width-hard');

        for (let i = 1; i <= 100; i++) {
            let square = createSquare('div', 'my-square');
            square.addEventListener('click', function () {
                clickSquare(square, 'bg-primary', i);
            })

            container.append(square)
        }

    } else {
        alert('seleziona una difficoltà!');
    }
}, { once: true })









/****************************************************************
                    FUNZIONI
****************************************************************/

//funzione creazione quadrato
function createSquare(tag, classCss) {
    let quadrato = document.createElement(tag);
    quadrato.classList.add(classCss);
    // quadrato.innerText = text;
    // console.log('questa è la funzione', quadrato);
    return quadrato
}

//funzione per l'interazione con il click su un ogg per cambiare la classe e la comparsa del textSquare
function clickSquare(ogg, classe, textSquare) {
    if (ogg.classList.contains(classe) == false) {
        ogg.classList.add(classe);
        return ogg.innerHTML = textSquare;
    } else {
        ogg.classList.remove(classe);
        return ogg.innerHTML = '';
    }
}

//seleziono la lista classi del quadratino e vedo se contine la classe bg-color
// if (square.classList.contains('bg-primary') == false) {  //con .toggle al posto di contains funziona uguale
//     square.classList.add('bg-primary');
//     //evidenzio anche il testo al click sul quadratino
//     square.innerHTML = i;
//  } else {
//     square.classList.remove('bg-primary');
//     square.innerHTML = '';
//  }


//DOMANDA? DEVO METTERE TUTTE LE VARIABILI NEGLI ARGOMENTI? TEORICAMENTE SI
function creazioneGriglia(nSquare) {
    for (let i = 1; i <= nSquare; i++) {
        let square = createSquare('div', 'my-square');

        //creo l'evento per cui se clicco su una casella mi si colora e mi compare il testo
        square.addEventListener('click', function () {
            clickSquare(square, 'bg-primary', i);
        })

        //'appendo' i div uno dietro l'altro.Essendo NODI html posso farlo con append e non con innerHTML(che io sappia) così da gestirci un evento
        container.append(square)
    }
}





