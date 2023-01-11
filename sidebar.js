const sidebar = document.querySelector('.sidebar')
const navItems = document.querySelectorAll('nav .nav-item')
const toggle = document.querySelector('.sidebar .toggle')

const suporte = document.getElementById('suporte')
const painel = document.getElementById('painel')
const main = [
  document.getElementById('container1'),
  document.getElementById('container2'), 
  document.getElementById ('container3'), 
  document.getElementById('container4')
]

const formS = document.getElementById('formSuport')

function menu() {
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

suporte.addEventListener('click', () => {
  main.forEach(element => element.style.display = 'none')
  formS.style.display = 'block'
})

painel.addEventListener('click', () => {
  main.forEach(element => element.style.display = 'flex')
  formS.style.display = 'none'
})
 
}

export default menu