// Zmienna do śledzenia bieżącej sekcji
let currentSection = 0;

// Wszystkie sekcje strony
const sections = document.querySelectorAll('.all-content > div');
const totalSections = sections.length;

// Funkcja do przewijania
function scrollToNextSection() {
  if (currentSection < totalSections - 1) {
    currentSection++;
    gsap.to('.all-content', {
      duration: 1, // Czas animacji
      y: -100 * currentSection + 'vh', // Przesunięcie do następnej sekcji
      ease: 'power2.inOut',
    });
  } else {
    // Reset do pierwszej sekcji
    currentSection = 0;
    gsap.to('.all-content', {
      duration: 1,
      y: 0,
      ease: 'power2.inOut',
    });
  }
}

// Event listener na przycisku
document
  .querySelector('.przycisk')
  .addEventListener('click', scrollToNextSection);
