/*eslint-env es6*/
const bookmarkIcon = document.querySelector('[data-js="qc__bookmark"]');

bookmarkIcon.addEventListener('click', () => {
  bookmarkIcon.classList.toggle('qc__bookmark-filled');
});
console.log(bookmarkIcon);
