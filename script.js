function projectSelected() {
    const projectsSelect = document.getElementById('projects');

    if (projectsSelect.value === 'bouncables') {
        setupScript = setupBouncables;
        drawScript = drawBouncables;
    } else if (projectsSelect.value === 'flags') {
        setupScript = function() {};
        drawScript = drawFlags;
    } else if (projectsSelect.value === 'Snake') {
        setupScript = setupSnake;
        drawScript = drawSnake;
    }

    setupScript();
}