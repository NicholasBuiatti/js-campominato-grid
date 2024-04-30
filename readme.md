CONSEGNA
L'utente clicca su un bottone che genererà una griglia di gioco quadrata 10x10 (con 100 celle).
Ogni cella ha un numero progressivo, da 1 a 100.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

MILESTONE #1

Create la vostra griglia in HTML e CSS, in maniera grossolana.


MILESTONE #2
Inserire la griglia attraverso js




MILESTONE #3
Aggiungete la gestione dell'evento di click, che stampi il numero e cambi il colore della cella.





MILESTONE #4
Spostate alcuni elementi in funzioni, ad esempio la creazione del quadrato e/o l'event listener.





BONUS #1: CAPIRE LO SCOPE
In milestone #3 stampate il numero, prendendolo dal contenuto della cella. Provate adesso a modificare il ciclo che crea le celle facendo in modo che le celle siano vuote. Come fate adesso a stampare qualcosa al click? Riesco a leggere qualcosa da scope superiori?


BONUS #2: CAPIRE EVENTI E FUNZIONI
Provate a eseguire quanto fatto fin qui NON al caricamento della pagina, ma al click su un pulsante "Avvia gioco".


BONUS #3: QUANDO IL GIOCO SI FA DURO
Aggiungere una select accanto al bottone di start. La select presenterà tre difficoltà di gioco tra cui scegliere (easy, medium, hard).
Quando generate la griglia userete un numero di celle che dipende dalla difficoltà.
Easy: 100 celle (10x10)
Medium: 81 celle (9x9)
Hard: 49 (7x7)
Ragionate bene su quando vi serve conoscere la selezione dell'utente: è in quel momento che dovrete recuperare il dato.
