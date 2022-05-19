/*eslint-env es6*/
const showAnswer = document.querySelector('[data-js="showanswer"]');
const rightAnswer = document.querySelector('[data-js="answeroption"]');

showAnswer.addEventListener('click', () => {
  rightAnswer.style.backgroundColor = 'green';
  rightAnswer.style.Color = 'white';
});
