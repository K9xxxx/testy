let currentStep = 0; // Śledzi bieżący etap
const przycisk = document.querySelector('.przycisk'); // Przycisk nawigacyjny
const allContent = document.querySelector('.all-content'); // Główny kontener
const zdjeciePoziomeX3Left = document.querySelectorAll('.zdjecie-poziomex3left'); // zdjecia
const zdjeciePoziomeX3Right = document.querySelectorAll('.zdjecie-poziomex3right'); // zdjecia
const zdjeciePoziomeX2 = document.querySelectorAll('.zdjecie-poziomex2'); // zdjecia
const zdjeciePionowe = document.querySelectorAll('.zdjecie-pionowe'); // zdjecia
const zdjeciePoziome = document.querySelectorAll('.zdjecie-poziome'); // zdjecia
const audioElement = document.getElementById('background-music'); // Element audio



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
        gsap.to(przycisk, { duration: 0.5, rotate: -90, ease: 'power2.inOut' }); // Rotacja przycisku
    } else if (currentStep === 2) {
        // 3. Przejście w prawo do .dodatkowe-zyczenia
        gsap.to(allContent, { duration: 1, x: '-100vw', ease: 'power2.inOut' });
        currentStep++;
        gsap.to(przycisk, { duration: 0.5, rotate: 0, ease: 'power2.inOut' }); // Rotacja przycisku
    } else if (currentStep === 3) {
        gsap.to(przycisk, { duration: 0.5, rotate: -90, ease: 'power2.inOut' });
        gsap.to(allContent, { duration: 1, x: '0vw', y: '-300vh', ease: 'power2.inOut' });
        currentStep++;
    } else if (currentStep >= 4 && currentStep <= 8) {
        const offsetX = -100 * (currentStep - 3);
        gsap.to(allContent, { duration: 1, x: `${offsetX}vw`, ease: 'power2.inOut' });
        currentStep++;
        if (currentStep === 9) {
            gsap.to(przycisk, { duration: 0.5, rotate: 0, ease: 'power2.inOut' });
        }
    } else if (currentStep >= 9 && currentStep <= 12) {
        const offsetY = -400 - (currentStep - 9) * 100; // Dynamically calculate Y offset
        gsap.to(allContent, { duration: 1, y: `${offsetY}vh`, x: '0vw', ease: 'power2.inOut' });
        currentStep++;
    } else if (currentStep === 13) {
        // Odtwarzanie muzyki
        if (audioElement) {
            audioElement.play();
        }
        gsap.to(allContent, { duration: 1, y: '-800vh', x: '0vw', ease: 'power2.inOut' });
        gsap.to('.nawigacja', { duration: 1, display: 'none' }, "-=1");
        gsap.to(zdjeciePoziomeX3Left[0], { delay: 1, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX3Left[1], { delay: 4, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX3Left[2], { delay: 7, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX3Left[0], { delay: 10, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX3Left[1], { delay: 10, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX3Left[2], { delay: 10, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[0], { delay: 13, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[0], { delay: 17, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[0], { delay: 20, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[1], { delay: 23, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[0], { delay: 26, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[1], { delay: 29, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[2], { delay: 28, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[3], { delay: 32, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[2], { delay: 37, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[3], { delay: 37, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX3Right[0], { delay: 43, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX3Right[1], { delay: 40, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX3Right[2], { delay: 43, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX3Right[1], { delay: 48, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX3Right[0], { delay: 48, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX3Right[2], { delay: 48, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[4], { delay: 51, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[5], { delay: 54, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[4], { delay: 58, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[5], { delay: 58, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[1], { delay: 61, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[1], { delay: 64, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[2], { delay: 66, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[2], { delay: 69, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[6], { delay: 72, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[7], { delay: 75, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[6], { delay: 79, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[7], { delay: 79, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziome[0], { delay: 82, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziome[0], { delay: 86, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[8], { delay: 89, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[9], { delay: 89, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[8], { delay: 93, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[9], { delay: 93, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziome[1], { delay: 96, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziome[1], { delay: 101, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziome[2], { delay: 105, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziome[2], { delay: 110, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[10], { delay: 114, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[11], { delay: 116, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[10], { delay: 120, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[11], { delay: 120, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziome[3], { delay: 123, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziome[3], { delay: 127, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[12], { delay: 130, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[13], { delay: 135, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[12], { delay: 139, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[13], { delay: 139, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[3], { delay: 142, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[3], { delay: 148, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[4], { delay: 151, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[4], { delay: 155, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziome[4], { delay: 158, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziome[4], { delay: 161, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[14], { delay: 164, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[15], { delay: 167, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[14], { delay: 171, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[15], { delay: 171, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX3Left[4], { delay: 174, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX3Left[3], { delay: 178, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX3Left[5], { delay: 178, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX3Left[3], { delay: 184, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX3Left[4], { delay: 184, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX3Left[5], { delay: 184, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[16], { delay: 187, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[17], { delay: 187, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[16], { delay: 191, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[17], { delay: 191, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[18], { delay: 194, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[19], { delay: 197, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[18], { delay: 202, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[19], { delay: 202, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[5], { delay: 205, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[5], { delay: 210, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX3Right[3], { delay: 213, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX3Right[4], { delay: 217, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX3Right[5], { delay: 221, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX3Right[3], { delay: 225, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX3Right[4], { delay: 225, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX3Right[5], { delay: 225, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[6], { delay: 228, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[6], { delay: 231, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[7], { delay: 231, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[7], { delay: 234, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[8], { delay: 234, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[8], { delay: 239, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX3Left[7], { delay: 242, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX3Left[6], { delay: 244, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX3Left[8], { delay: 244, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX3Left[7], { delay: 248, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX3Left[6], { delay: 248, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX3Left[8], { delay: 248, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[9], { delay: 251, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[9], { delay: 257, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[20], { delay: 262, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[21], { delay: 262, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[20], { delay: 266, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[21], { delay: 266, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[10], { delay: 269, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[10], { delay: 274, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[22], { delay: 277, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[23], { delay: 280, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[22], { delay: 284, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[23], { delay: 284, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[11], { delay: 287, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[11], { delay: 292, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[24], { delay: 295, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[25], { delay: 298, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[24], { delay: 302, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[25], { delay: 302, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziome[5], { delay: 305, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziome[5], { delay: 309, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[26], { delay: 312, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[27], { delay: 315, duration: 2, opacity: '1' });
        gsap.to(zdjeciePoziomeX2[26], { delay: 319, duration: 2, opacity: '0' });
        gsap.to(zdjeciePoziomeX2[27], { delay: 319, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[12], { delay: 322, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[12], { delay: 325, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[13], { delay: 325, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[13], { delay: 328, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[14], { delay: 328, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[14], { delay: 331, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[15], { delay: 331, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[15], { delay: 337, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[16], { delay: 337, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[16], { delay: 343, duration: 2, opacity: '0' });
        gsap.to(zdjeciePionowe[17], { delay: 343, duration: 2, opacity: '1' });
        gsap.to(zdjeciePionowe[17], { delay: 352, duration: 2, opacity: '0' });
        currentStep++;
    } else {
        // Powrót do początku
        gsap.to(allContent, { duration: 1, x: '0vw', y: '0vh', ease: 'power2.inOut' });
        currentStep = 0;
        gsap.to(przycisk, { duration: 0.5, rotate: 0, ease: 'power2.inOut' });

        // Zatrzymanie i resetowanie muzyki
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
        }
    }
}

// Nasłuchiwanie kliknięcia
przycisk.addEventListener('click', scrollToNextSection);
