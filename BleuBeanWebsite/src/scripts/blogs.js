function fadeOutDivs1(divIds) {
    divIds.forEach(divId => {
        const divToFade1 = document.getElementById(divId);
        if (divToFade1) {
            divToFade1.classList.add('fade-out');
            divToFade1.addEventListener('transitionend', () => {
                divToFade1.style.display = 'none'; // Hide the div after the animation
            });
        }
        if (divToFade1.style.display == 'none') {
        divToFade1.classList.remove('fade-out');
        divToFade1.classList.add('fade-in');
        divToFade1.style.display = 'block'; // Show the div if it was hidden
}
    });
    
}

function fadeOutDivs2(divIds) {
    divIds.forEach(divId => {
        const divToFade2 = document.getElementById(divId);
        if (divToFade2) {
            divToFade2.classList.add('fade-out');
            divToFade2.addEventListener('transitionend', () => {
                divToFade2.style.display = 'none'; // Hide the div after the animation
            });
        }
    });
}