// Zmienna do śledzenia bieżącej sekcji 
let currentSection = 0;

// Zmienna do śledzenia stanu w ramach "reszta-zyczen"
let inResztaZyczen = false;
let resztaZyczenStep = 0;

// Wszystkie sekcje strony
const sections = document.querySelectorAll('.all-content > div');
const totalSections = sections.length;

// Element przycisku
const przycisk = document.querySelector('.przycisk');

// Funkcja do przewijania
function scrollToNextSection() {
    // Sprawdzamy, czy jesteśmy w "glowne-zyczenia"
    if (sections[currentSection].querySelector('.glowne-zyczenia')) {
        inResztaZyczen = true;

        if (resztaZyczenStep === 0) {
            // Pierwsza animacja: obrót przycisku o -90deg
            gsap.to(przycisk, {
                duration: 0.5,
                rotate: -90,
                ease: 'power2.inOut',
            });
            resztaZyczenStep++;
        } else if (resztaZyczenStep === 1) {
            // Druga animacja: przesunięcie w prawo do "dodatkowe-zyczenia"
            gsap.to('.reszta-zyczen', {
                duration: 1,
                x: '-100vw',
                ease: 'power2.inOut',
                onComplete: () => {
                    // Reset obrotu przycisku
                    gsap.to(przycisk, {
                        duration: 0.5,
                        rotate: 0,
                        ease: 'power2.inOut',
                    });
                },
            });
            resztaZyczenStep++;
        } else {
            // Powrót do normalnego przewijania
            resztaZyczenStep = 0;
            inResztaZyczen = false;
            currentSection++;
            gsap.to('.all-content', {
                duration: 1,
                y: -100 * currentSection + 'vh',
                ease: 'power2.inOut',
            });
        }
    } else {
        // Jeśli nie jesteśmy w "glowne-zyczenia", normalne przewijanie
        if (currentSection < totalSections - 1) {
            currentSection++;
            gsap.to('.all-content', {
                duration: 1,
                y: -100 * currentSection + 'vh',
                ease: 'power2.inOut',
            });
        } else {
            // Powrót do pierwszej sekcji
            currentSection = 0;
            gsap.to('.all-content', {
                duration: 1,
                y: 0,
                ease: 'power2.inOut',
            });
        }
    }
}

// Event listener na przycisku
przycisk.addEventListener('click', scrollToNextSection);

// Animacja rotacji przycisku już po przejściu na "glowne-zyczenia"
if (sections[currentSection].querySelector('.glowne-zyczenia')) {
    gsap.to(przycisk, {
        duration: 0.5,
        rotate: -90,
        ease: 'power2.inOut',
    });
}
