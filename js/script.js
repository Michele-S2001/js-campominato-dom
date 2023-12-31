// ->->-> CAMPO MINATO <-<-<-

// recupero gli elementi dal DOM
const fieldDOMElement = document.querySelector('.field');
const btnDOMElement = document.getElementById('btn');
const selectDOMElement = document.getElementById('difficulty');
const scoreDOMElement = document.getElementById('score');

// ascolto l'evento click sul bottone per triggerare l'invocazione di una funzione
btnDOMElement.addEventListener('click', gameStart);

function gameStart () {
  fieldSetUp(fieldDOMElement, selectDOMElement);
}

function fieldSetUp (field, select) {
  // un reset precauzionale
  field.innerHTML = '';    
  fieldDOMElement.style.pointerEvents = "auto";   
  //recupero la value dalla select
  const difSelected = select.value;

  if (difSelected === "1"){    
    field.style.gridTemplateColumns = "repeat(10, 1fr)";
    cellGenerator(100);
  } else if (difSelected === "2") {
    field.style.gridTemplateColumns = "repeat(9, 1fr)";
    cellGenerator(81);
  } else {
    field.style.gridTemplateColumns = "repeat(7, 1fr)";
    cellGenerator(49);
  }
}

function cellGenerator (numberOfCells) {
  // loop per generare gli elementi in pagina
  for (let i = 0; i < numberOfCells; i++) {
    const n = i + 1;
    const cellDOMElement = document.createElement('div');
    cellDOMElement.classList.add('cell');
    cellDOMElement.innerHTML = n;
    fieldDOMElement.append(cellDOMElement);
  }

  //indice per il punteggio
  let scoreIndex = 0;

  const bombsArray = getArrayOfRandomIntBetween(1, numberOfCells, 16);
  console.log(bombsArray)

  // prendo tutti gli elementi ".cell"
  const cellsDOMElements = document.querySelectorAll('.cell')
      
  // applicare un eventlistener ad ognuna di esse
  for (let i = 0; i < numberOfCells; i++) {
    let currentCell = cellsDOMElements[i];
    currentCell.addEventListener('click', function () {
      const cellNumber = parseInt(currentCell.innerHTML);
      //controllo che la cella cliccata non rintri in una dov'è contenuta la bomba
      if (bombsArray.includes(cellNumber)) {
        console.log('hai schiacciato una bombazza');
        currentCell.classList.add('bomb-cell');
        currentCell.innerHTML = "💣";
        fieldDOMElement.style.pointerEvents = "none";
        scoreDOMElement.innerHTML += " Game over";
      } else {
        currentCell.classList.add('free-cell');
        currentCell.innerHTML = "〰";
        scoreIndex++;
        scoreDOMElement.innerHTML = scoreIndex;
        if (scoreIndex === numberOfCells - 16) {
          scoreDOMElement.innerHTML = "Hai vinto !"
          fieldDOMElement.style.pointerEvents = "none";
        }
      }
      console.log(scoreIndex);
    });
  }
} 

function getArrayOfRandomIntBetween (min, max, arraylength) {
  // inizializzo un array vuoto
  const bombs = [];
  // FINCHE' non generi 16 numeri diversi non fermarti
  while(bombs.length < arraylength) {
    const n = getRandomIntInclusive(min, max);
    // se il numero generato è uguale a qualcuno dei precedenti non bisogna inserirlo nell'array
    if (bombs.includes(n) === false) {
      bombs.push(n);
    } 
  }
  return bombs;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// function cellSelected () {
//   this.classList.add('cell-selected');
//   console.log(this.innerHTML);
// }