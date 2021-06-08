function toggleMenu() {
  var menu = document.getElementById('mainNav');
  if (menu.className === 'none') {
    menu.className = 'show';
  } else {
    menu.className = 'none';
  }
}
