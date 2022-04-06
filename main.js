// tady je místo pro náš program

/**
 * Funkce přidá nebo odebere na prvku třídu, která se stará o červenou barvu písma
 * 
 * @param {string} elementId 
 */
function prepniZcervenani(elementId) {
    document.getElementById(elementId).classList.toggle('cerveny-text');
}

/**
 * Funkce zvětší/změnší písmo v elementu o definovanou velikost
 * 
 * @param {string} elementSelector 
 * @param {int} fontSizeChange 
 */
function zvetsitPismo(elementSelector, fontSizeChange) {
    let element = document.querySelector(elementSelector);
    let currentFontSize = parseInt(element.style.fontSize);
    element.style.fontSize = (currentFontSize + fontSizeChange) + 'px';
}

/*--------------*/
/* AUDIO FUNKCE */
/*--------------*/
let hudba = document.getElementById('js-audio');
//tlačítko play
document.getElementById('prehraj').addEventListener('click', () => {
  hudba.play();
});
//tlačítko pause
document.getElementById('pauzni').addEventListener('click', () => {
  hudba.pause();
});
//3 tlačítka hlasitosti
const hlasitost = document.querySelectorAll('.upravHlasitost');
hlasitost.forEach((tlacitko) =>{
  tlacitko.addEventListener('click', () => {
  let volumeValue = tlacitko.dataset.hlasitost;
  hudba.volume = volumeValue;
  })
});
//tlačítko reset
document.getElementById('resetuj').addEventListener('click', () => {
  hudba.currentTime = 0;
});