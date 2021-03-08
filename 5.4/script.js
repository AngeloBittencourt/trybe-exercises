window.onload = function() {
  var elementBody = document.querySelector('body');
  var elementMain = document.querySelector('main');
  var elementBtnIncreaseFont = document.getElementById('increase-font');
  var elementBtnDecreaseFont = document.getElementById('decrease-font');
  // Padrão de tamanho, equivale a 100% do valor definido no Body
  var fontSize = 16;
  // Valor de incremento ou decremento, equivale a 10% do valor do Body
  var increaseDecrease = 2;

  let btnReset = document.getElementById('reset-font');

  btnReset.addEventListener('click', function () {
    elementBody.style.fontSize = '16px';
    fontSize = 16;
    localStorage.setItem('fontsize', fontSize);
  });

  // Evento de click para aumentar a fonte
  elementBtnIncreaseFont.addEventListener('click', function(event) {
      fontSize = fontSize + increaseDecrease;
      elementBody.style.fontSize = fontSize + 'px';
      localStorage.setItem('fontsize', fontSize);
  });

  // Evento de click para diminuir a fonte
  elementBtnDecreaseFont.addEventListener('click', function(event) {
      fontSize = fontSize - increaseDecrease;
      elementBody.style.fontSize = fontSize + 'px';
      localStorage.setItem('fontsize', fontSize);
  });



  let backcolor = document.getElementById('dark-mode');

  backcolor.addEventListener('click', function(){
    if (elementBody.style.backgroundColor == "black") {
    elementBody.style.backgroundColor = "bisque";
    elementBody.style.color = "black";
    localStorage.setItem('darkmode', false);
    }
    else {
      elementBody.style.backgroundColor = "black";
    elementBody.style.color = "white";
    localStorage.setItem('darkmode', true);
    }
  })


  let fontBtn1 = document.getElementById('fonte-button1');
  let fontBtn2 = document.getElementById('fonte-button2');
  let fontBtn3 = document.getElementById('fonte-button3');

  fontBtn1.addEventListener('click', function(){
    elementMain.style.fontFamily ='arial'
    localStorage.setItem('fontfamily', 'arial');
  });
  fontBtn2.addEventListener('click', function(){
    elementMain.style.fontFamily ='Monospace'
    localStorage.setItem('fontfamily', 'monospace');
  });
  fontBtn3.addEventListener('click', function(){
    elementMain.style.fontFamily ='serif'
    localStorage.setItem('fontfamily', 'serif');
  });

  let spaceBtn = document.getElementById('font-space');

  spaceBtn.addEventListener('click', function(){
    if (elementMain.style.lineHeight == "1.5"){
      elementMain.style.lineHeight = "1.2";
      localStorage.setItem('line', false);
    }
    else {
      elementMain.style.lineHeight = "1.5";
      localStorage.setItem('line', true);
    }
    
  })

  function activeDarkMode(){
    elementBody.style.backgroundColor = "black";
  elementBody.style.color = "white";
  };
 

  if (localStorage.getItem('darkmode') == "true"){
  activeDarkMode();
  }
  
  if (localStorage.getItem('line') == "true"){
  elementMain.style.lineHeight = "1.5";}

  if (localStorage.getItem('fontfamily') == 'arial'){
    elementMain.style.fontFamily ='arial'
  }

  if (localStorage.getItem('fontfamily') == 'monospace'){
    elementMain.style.fontFamily ='Monospace'
  }

  if (localStorage.getItem('fontfamily') == 'serif'){
    elementMain.style.fontFamily ='serif'
  }

let getSize = localStorage.getItem('fontsize');

console.log(getSize);

  if (localStorage.getItem('fontsize') !== '0') {
    elementBody.style.fontSize = getSize + 'px';
  }

}

