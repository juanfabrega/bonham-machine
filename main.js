"use strict";

//Run entire script after DOM content is finished loading.
document.addEventListener('DOMContentLoaded', function(){

  //listen for key presses
  window.addEventListener('keydown', function(e) {

    //select audio file according to key code
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if (!audio) {return;} //exit function if no relevant audio tag found

    audio.currentTime = 0; //restart sound from 0 with every key press.
    audio.play();

    //animate button when key pressed.
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');

    //remove 'playing' class
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', function(e) {
      if (e.propertyName !== 'transform') {
        return;
      }
      key.classList.remove('playing');
    }));

  });

  window.addEventListener('click', function(e) {
    console.log(e.srcElement);
  })
});
