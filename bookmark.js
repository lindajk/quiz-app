/*eslint-env es6*/
const bookmarkIcon = document.querySelector('[data-js="qc__bookmark"]');

bookmarkIcon.addEventListener('click', () => {
  bookmarkIcon.classList.toggle('qc__bookmark-filled');
});

const showanswerButton = document.querySelector(
  '[data-js="qc__showanswer-button"]'
);
const answerText = document.querySelector('[data-js="qc__answer"]');

showanswerButton.addEventListener('click', () => {
  answerText.classList.toggle('qc__answer-active');
});
console.log();
