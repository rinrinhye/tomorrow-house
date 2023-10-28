const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu-button')

function toggleMyMenu() {
  if (!myMenu.contains(e.target)) {
    window.addEventListener('click', closeMyMenuOnClickOutside)
  }
  myMenu.classList.toggle('is-active')
}

function closeMyMenuOnClickOutside(e) {
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickOutside)
  }
}

myMenuButton.addEventListener('click', toggleMyMenu)
