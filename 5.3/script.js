function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDaysofMonth() {
  const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dezDaysList = document.querySelector('#days');

for (let index = 0; index < dezDays.length; index += 1) {
  const days = dezDays[index];
  const daysListItem = document.createElement('li');
  daysListItem.innerHTML = days;

  daysListItem.className += 'day';

if (days === 24 | days === 31) {
  daysListItem.className = 'day holyday';
}
if (days === 4 | days === 11 | days === 18) {
  daysListItem.className = 'day friday';
} 

if (days === 25) {
  daysListItem.className = 'day holyday friday';
}

  dezDaysList.appendChild(daysListItem);
};

};

createDaysofMonth();

const btnHoly = document.createElement('button');

function CreateFeriados() {
   
  btnHoly.innerHTML = "Feriados";

  btnHoly.id = 'btn-holiday'

  document.querySelector('.buttons-container').appendChild(btnHoly);
}

CreateFeriados();

function feriadosClick() {

  let feriadoButton = document.querySelectorAll('.holyday');
  for (let index = 0; index < feriadoButton.length; index += 1) {
    if (feriadoButton[index].style.backgroundColor === 'white') {
      feriadoButton[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      feriadoButton[index].style.backgroundColor = 'white';
    }
    
  }
    
  }

btnHoly.addEventListener('click', feriadosClick);

