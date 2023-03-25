/* 
If the screen is larger than 720px, make it cool, if not, don't make it cool.
 
https://stackoverflow.com/questions/36523742/disable-javascript-based-on-screen-size
*/
// if(screen.width < 720) { 
    // Bye bye.
// } else {
    // do all your cool stuff here for larger screens
    const cards = document.querySelectorAll('.cards');
    const setClasses = () => {
        const classes = ['farLeft', 'left', 'active', 'right', 'farRight'];
        cards.forEach((card, index) => card.classList.add(classes[index]));
    }
    const changePositions = (e) => {
        const clickedCard = e.currentTarget;
        const activeCard = document.querySelector('.cards.active');
        if (clickedCard.classList.contains('active')) return;
        const classesFrom = e.currentTarget.className;
        const classesTo = activeCard.className;
        clickedCard.className = classesTo;
        activeCard.className = classesFrom;
    }
    cards.forEach((card) => {
        card.addEventListener('click', changePositions);
    });
    setClasses();
    // require("projectCards.js");
// }
