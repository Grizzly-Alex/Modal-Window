'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const btnShowModalWindow = document.querySelectorAll('.show-modal-window');

const addHiddenClass = function (){
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
};

const rmvHiddenClass = function (){
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
};


btnCloseModalWindow.addEventListener('click', addHiddenClass);

overlay.addEventListener('click', addHiddenClass);

for (let i=0; i < btnShowModalWindow.length; i++){
    btnShowModalWindow[i].addEventListener('click', rmvHiddenClass);
};