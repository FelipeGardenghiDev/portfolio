document.addEventListener('DOMContentLoaded', () => {
    const skillTags = document.querySelectorAll('.skill-tag');

    skillTags.forEach(tag => {
        const description = tag.dataset.description;
        if (description) {
            const tooltip = document.createElement('span');
            tooltip.classList.add('tooltip-text');
            tooltip.textContent = description;
            tag.appendChild(tooltip);

            // Acessibilidade: para focus de teclado
            tag.addEventListener('focusin', () => {
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
            });
            tag.addEventListener('focusout', () => {
                tooltip.style.visibility = 'hidden';
                tooltip.style.opacity = '0';
            });
        }
    });
});