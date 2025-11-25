// Basic JS for menu toggle and small interactions
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if(toggle){
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if(nav) nav.style.display = expanded ? '' : 'block';
    });
  }
});

function openMail(){
  window.location.href = 'mailto:contato@exemplo.org?subject=Quero%20me%20envolver%20-%20Consci%C3%AAncia%20Negra';
}
