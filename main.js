let currentStep = 0; // Śledzi bieżący etap
const przycisk = document.querySelector('.przycisk'); // Przycisk nawigacyjny
const allContent = document.querySelector('.all-content'); // Główny kontener

// Funkcja do przewijania
function scrollToNextSection() {
    if (currentStep === 0) {
        // 1. Przejście do .pare-slow
        gsap.to(allContent, { duration: 1, y: '-100vh', ease: 'power2.inOut' });
        currentStep++;

    } else if (currentStep === 1) {
        // 2. Przejście do .glowne-zyczenia
        gsap.to(allContent, { duration: 1, y: '-200vh', ease: 'power2.inOut' });
        currentStep++;

        // Rotacja przycisku z powrotem do -90 stopni
        gsap.to(przycisk, { duration: 0.5, rotate: -90, ease: 'power2.inOut' });
    } else if (currentStep === 2) {
        // 3. Przejście w prawo do .dodatkowe-zyczenia
        gsap.to(allContent, { duration: 1, x: '-100vw', ease: 'power2.inOut' });
        currentStep++;

        // Rotacja przycisku do 0 stopni
        gsap.to(przycisk, { duration: 0.5, rotate: 0, ease: 'power2.inOut' });
    } else if (currentStep === 3) {
        // Rotacja przycisku do -90 stopni
        gsap.to(przycisk, { duration: 0.5, rotate: -90, ease: 'power2.inOut' });
        // 4. Przejście w dół do .wyjazdy-main
        gsap.to(allContent, { duration: 1, x: '0vw', y: '-300vh', ease: 'power2.inOut' });
        currentStep++;
    } else if (currentStep >= 4 && currentStep <= 8) {
        // 5-9. Przejścia w prawo przez kolejne sekcje
        const offsetX = -100 * (currentStep - 3); // Przesunięcie w prawo (od .wyjazdy-main)
        gsap.to(allContent, { duration: 1, x: `${offsetX}vw`, ease: 'power2.inOut' });
        currentStep++;

        // Rotacja przycisku do 0 stopni, gdy osiągniemy step 8
        if (currentStep === 9) {
            gsap.to(przycisk, { duration: 0.5, rotate: 0, ease: 'power2.inOut' });
        }
    } else if (currentStep === 9) {
        // 10. Przejście w dół do .drugie
        gsap.to(allContent, { duration: 1, y: '-400vh', x: '0vw', ease: 'power2.inOut' });
        currentStep++;
    } else {
        // Powrót do początku
        gsap.to(allContent, { duration: 1, x: '0vw', y: '0vh', ease: 'power2.inOut' });
        currentStep = 0;

        // Reset rotacji przycisku do 0 stopni
        gsap.to(przycisk, { duration: 0.5, rotate: 0, ease: 'power2.inOut' });
    }
}

// Nasłuchiwanie kliknięcia
przycisk.addEventListener('click', scrollToNextSection);
