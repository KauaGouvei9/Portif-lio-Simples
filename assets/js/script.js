//script criado para trocar o tema de claro para escuro

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');


// verifica se tem temas salvos no LcalStorage
const currentTheme = localStorage.getItem('theme');
if(currentTheme == 'light'){
    body.classList.add('Ligh-Theme');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}


// alternar o tema 
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  
  // Trocar ícone
  if (body.classList.contains('light-theme')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
  }
});