// ->->-> CAMPO MINATO <-<-<-

// recupero gli elementi dal DOM
const fieldDOMElement = document.querySelector('.field');
const btnDOMElement = document.getElementById('btn');
const selectDOMElement = document.querySelector('#difficulty');

// ascolto l'evento click sul bottone per triggerare l'invocazione di una funzione
btnDOMElement.addEventListener('click', gameStart);

function gameStart () {
  fieldSetUp(fieldDOMElement, selectDOMElement);
}

function fieldSetUp (field, select) {
  // un reset precauzionale
  field.innerHTML = '';            
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

function cellGenerator (numcells) {
  // loop per generare gli elementi in pagina
    for (let i = 0; i < numcells; i++) {
    const n = i + 1;
    const cellDOMElement = document.createElement('div');
    cellDOMElement.classList.add('cell');
    cellDOMElement.innerHTML = n;
    fieldDOMElement.append(cellDOMElement);
  }
  // prendo tutti gli elementi ".cell"
  const cellsDOMElements = document.querySelectorAll('.cell')
      
  // applicare un eventlistener ad ognuna di esse
  for (let i = 0; i < numcells; i++) {
    let currentCell = cellsDOMElements[i];
    currentCell.addEventListener('click', function () {
      currentCell.classList.add('cell-selected');
      console.log(currentCell.innerHTML);
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