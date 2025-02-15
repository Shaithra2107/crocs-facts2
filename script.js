const factsContainer = document.getElementById('factsContainer');
const factElement = document.getElementById('fact');
const generateButton = document.getElementById('generateButton');

let attempts = 0;
let buttonMoved = false;

function displayFact() {
    // Logic to display a random fact
    const facts = ["Fact 1", "Fact 2", "Fact 3"]; // Replace with your facts array
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factElement.textContent = randomFact;
}

generateButton.addEventListener('click', () => {
    if (attempts < 3) {
        attempts++;
        alert(`Attempt ${attempts}: Move closer to the button!`);
        moveButton();
    } else {
        displayFact();
        attempts = 0; // Reset attempts after displaying a fact
    }
});

function moveButton() {
    if (!buttonMoved) {
        const randomX = Math.random() * (window.innerWidth - generateButton.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - generateButton.offsetHeight);
        generateButton.style.position = 'absolute';
        generateButton.style.left = `${randomX}px`;
        generateButton.style.top = `${randomY}px`;
        buttonMoved = true;
    }
}

// Reset button position when the user moves away
document.addEventListener('mousemove', () => {
    buttonMoved = false;
});
