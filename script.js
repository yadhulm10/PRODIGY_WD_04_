// Add hover effect for project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover-effect');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover-effect');
    });
});

// Add hover effect for buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('button-hover-effect');
    });

    button.addEventListener('mouseleave', () => {
        button.classList.remove('button-hover-effect');
    });
});