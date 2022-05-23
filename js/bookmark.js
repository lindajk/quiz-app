export function bookmark() {
  const bookmarkIcon = document.querySelectorAll('[data-js="card__bookmark"]');

  bookmarkIcon.forEach(bookmarkItem => {
    bookmarkItem.addEventListener('click', () => {
      bookmarkItem.classList.toggle('card__bookmark-filled');
    });
  });
}
