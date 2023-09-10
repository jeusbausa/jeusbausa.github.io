const toggle = document.querySelector('#toggle')
const navbar = document.querySelector('#navbar')
const link = document.querySelector('#links')
toggle.addEventListener('click', () => {
	navbar.classList.toggle('hidden')
	link.addEventListener('click', () => navbar.classList.add('hidden'))
})
