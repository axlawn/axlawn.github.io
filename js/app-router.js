document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('nav button');
    const sections = document.querySelectorAll('.view-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetView = button.getAttribute('data-view');

            // Toggle active states on navigation buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Switch layout visibility for SPA execution
            sections.forEach(section => {
                if (section.id === `${targetView}-view`) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});
