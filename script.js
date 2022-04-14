'use strict';

// Variables that Select Classes
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const showModalBtn = document.querySelectorAll(".show-modal");


// Select All For Loop for "the showModalBtn" Variable
for (let i = 0; i < showModalBtn.length; i++)
console.log(showModalBtn[i].textContent);