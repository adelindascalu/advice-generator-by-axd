"use strict";

const adviceBtn = document.querySelector(".btn");
const adviceText = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-id");

const generateAdvice = function () {
  let adviceFetch = fetch("https://api.adviceslip.com/advice");
  adviceFetch
    .then((response) => response.json())
    .then((data) => {
      adviceId.innerHTML = ` #${data.slip.id}`;
      adviceText.innerHTML = `"${data.slip.advice}"`;
    })
    .catch((error) => alert("Hm, too many requests. Reload the page, please."));
};
