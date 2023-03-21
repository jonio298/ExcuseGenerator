"use strict";

window.onload = function() {
    document.querySelector("#button").addEventListener("click", () => {
      document.querySelector("#excuse").innerHTML = generateExcuse();

    });
  };


let generateExcuse = () => {
    let posession = ["homework", "car", "xBox", "piano", "guitar", "laptop"];
    let pronoun = ["The", "A", "Horrifying", "Flying", "Ugly", "Monstrous"];
    let subject = ["Zebra", "bicycle", "martians", "Aliens", "Rhino", "Ostritch"];
    let action = ["destroyed my", "ate my", "threw my", "stole my", "bit my"];
    let where = ["in the park", "under the boardwalk", "on the beach", "in the street", "in a tree", "in the garage"];


    
    let posessionIndex = Math.floor(Math.random() * posession.length);
    let pronounIndex = Math.floor(Math.random() * where.length);
    let subjectIndex = Math.floor(Math.random() * pronoun.length);
    let actionIndex = Math.floor(Math.random() * subject.length);
    let whereIndex = Math.floor(Math.random() * action.length);
    return `${pronoun[pronounIndex]} ${subject[subjectIndex]} ${action[actionIndex]} ${posession[posessionIndex]}   ${where[whereIndex]}`;

};



