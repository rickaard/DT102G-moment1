"use strict";

const openBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.closeBtn');

openBtn.addEventListener('click', () => {
    document.querySelector('.side-nav ul').style.width = '250px';
    document.querySelector('body').style.overflow = 'hidden';
})

closeBtn.addEventListener('click', () => {
    document.querySelector('.side-nav ul').style.width = '0px';
    document.querySelector('body').style.overflow = 'auto';
})