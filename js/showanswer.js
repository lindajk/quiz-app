export function answer() {
  const showanswerButton = document.querySelectorAll(
    '[data-js="card__showanswer-button"]'
  );
  const answerText = document.querySelectorAll('[data-js="card__answer"]');

  showanswerButton.forEach((showanswerItem, index) => {
    showanswerItem.addEventListener('click', () => {
      answerText[index].classList.toggle('card__answer-active');
    });
  });
}
