'use strict';
const toggle = document.querySelector('#notes-toggle');
const notes = document.querySelector('#project-notes');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  notes.hidden = open;
  toggle.textContent = open ? 'Sobre esta demo +' : 'Cerrar notas −';
});
