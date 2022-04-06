/**
 * Funkce přidá nebo odebere na prvku třídu, která se stará o červenou barvu písma
 */
let odstavec = document.getElementById('js-paragraph');
document.getElementById('prepniZcervenani').addEventListener('click', () => {
  odstavec.classList.toggle('cerveny-text');
});

/**
 * Funkce zvětší/změnší písmo v elementu o definovanou velikost
*/
document.getElementById('zvetsitPismo').addEventListener('click', () => {
  let currentFontSize = parseInt(odstavec.style.fontSize);
  let fontSizeChange = document.getElementById('zvetsitPismo').dataset.fontSizeChange;
  odstavec.style.fontSize = (currentFontSize + parseInt(fontSizeChange)) + 'px';
});

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