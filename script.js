"use strict";

const adviceBtn = document.querySelector(".btn");
const adviceText = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-id");

const generateAdvice = function () {
  let adviceFetch = fetch("https://api.adviceslip.com/advice");
  adviceFetch
    .then((response) => response.json())
    .then((data) => {
      adviceId.textContent = ` #${data.slip.id}`;
      adviceText.textContent = `"${data.slip.advice}"`;
      console.log(data);
    })
    .catch((error) => alert("Hm, too many requests. Reload the page, please."));
};

adviceBtn.addEventListener("click", () => generateAdvice());
