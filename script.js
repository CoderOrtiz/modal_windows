'use strict';

// Variables that Select Classes
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const openModalBtn = document.querySelectorAll(".show-modal");

// Functions to Open and Close the Modal's
function openModal(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

function closeModal(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

function escape(event){
    if (event.key === "Escape"){
        if(!modal.classList.contains("hidden"))
        closeModal()
    }
}


// Select All For Loop for "the showModalBtn" Variable
for (let i = 0; i < openModalBtn.length; i++)
// When "Show Modal i" is clicked, removes the Hidden Classes
openModalBtn[i].addEventListener("click", openModal);

// When the X button is clicked, or User clicks outside Modal Window, adds the Hidden Class again
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Only when the Modal is Open, the Escape Key will Close the Modal Window
document.addEventListener("keydown", escape);