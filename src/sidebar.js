const sidebar = document.querySelector('.sidebar')
const navItems = document.querySelectorAll('nav .nav-item')
const toggle = document.querySelector('.sidebar .toggle')

//abrir e fechar menu.
toggle.addEventListener('click', () => {

  if (sidebar.className === 'sidebar')
    sidebar.classList.add('open')
  else
  sidebar.classList.remove('open')
})

//selecionar background ativo no elementos do menu.
navItems.forEach(navItem => {
 
  navItem.addEventListener('click', () => {
    navItems.forEach(navItem => {
      navItem.classList.remove('active')
    })
    navItem.classList.add('active')
  })
})


export default toggle