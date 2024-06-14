

const title = document.getElementById('title');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // adjust the value to your liking
    title.classList.add('show');
  } else {
    title.classList.remove('show');
  }
});