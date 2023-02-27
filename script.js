"use strict";

let advice = [];

const adviceBtn = document.querySelector(".btn");
const adviceText = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-id");

const generateAdvice = function () {
  let adviceFetch = fetch("https://api.adviceslip.com/advice");
  adviceFetch
    .then((response) => response.json())
    .then((data) => {
      advice = data;
      adviceId.innerHTML = ` #${advice.slip.id}`;
      adviceText.innerHTML = `"${advice.slip.advice}"`;
    })
    .catch((error) => alert("Hm, too many requests. Reload the page, please."));
};
