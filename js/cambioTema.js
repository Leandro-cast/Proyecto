const body = document.body;
const modeToggle = document.getElementById('modeToggle');

// Cargar el tema guardado en localStorage
if (localStorage.getItem('mode') === 'dark') {
  body.classList.add('dark-mode');
}

// Evento para cambiar tema
modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Guardar en localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }
});