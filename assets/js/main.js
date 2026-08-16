/**
 * Andreas Krieger — Personal Website Scripts
 * Features:
 * 1. Live Age Calculator from Birthday (2003-01-12)
 * 2. Dynamic Copyright Year
 * 3. Accordion / Expandable Cards Handler
 * 4. Legal Impressum & Privacy Modal Handler
 * 5. Mouse Spotlight Lighting
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Live Age Calculation (Birthday: January 12, 2003)
    const calculateAge = (birthDateString) => {
        const birthDate = new Date(birthDateString);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const ageElements = document.querySelectorAll('.live-age');
    const currentAge = calculateAge('2003-01-12');
    ageElements.forEach(el => {
        el.textContent = currentAge;
    });

    // 2. Dynamic Year in Footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 3. Accordion / Expandable Cards Handler
    const accordionCards = document.querySelectorAll('.expandable-card');
    accordionCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('a') || e.target.closest('button')) return;
            
            const wasOpen = card.classList.contains('is-open');
            if (wasOpen) {
                card.classList.remove('is-open');
            } else {
                card.classList.add('is-open');
            }
        });
    });

    // 4. Legal Modal Handler
    const legalModal = document.getElementById('legal-modal');
    const openLegalBtn = document.getElementById('open-legal-modal');
    const closeLegalBtn = document.getElementById('close-legal-modal');

    if (openLegalBtn && legalModal) {
        openLegalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            legalModal.classList.add('active');
        });
    }

    if (closeLegalBtn && legalModal) {
        closeLegalBtn.addEventListener('click', () => {
            legalModal.classList.remove('active');
        });
    }

    if (legalModal) {
        legalModal.addEventListener('click', (e) => {
            if (e.target === legalModal) {
                legalModal.classList.remove('active');
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && legalModal && legalModal.classList.contains('active')) {
            legalModal.classList.remove('active');
        }
    });

    // 5. Interactive Spotlight Lighting Engine
    const cards = document.querySelectorAll('.spotlight-card, .glass-panel');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
