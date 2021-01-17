const toggleBtn = document.querySelector('.nav_toggleBtn');
const menu = document.querySelector('.nav_div_menu');
const icons = document.querySelector('.nav_div_icons');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});