const facts = [
    "Crocodiles are reptiles that belong to the family Crocodylidae.",
    "They are found in tropical regions of Africa, Asia, the Americas, and Australia.",
    "Crocodiles can live for over 70 years in the wild.",
    "They are carnivorous and primarily feed on fish, birds, and mammals.",
    "Crocodiles have powerful jaws that can exert tremendous pressure.",
    "They are excellent swimmers and can hold their breath underwater for up to an hour.",
    "Crocodiles are ectothermic, meaning their body temperature is regulated by their environment.",
    "They communicate through a variety of vocalizations, including hissing and growling.",
    "Crocodiles have a unique ability to see in the dark due to a reflective layer behind their retinas.",
    "Some species of crocodiles can reach lengths of over 20 feet (6 meters)."
];

let attempts = 0;
const factButton = document.getElementById('factButton');
const factDisplay = document.getElementById('factDisplay');

factButton.addEventListener('mouseenter', () => {
    if (attempts < 3) {
        const randomX = Math.random() * (window.innerWidth - factButton.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - factButton.offsetHeight);
        factButton.style.position = 'absolute';
        factButton.style.left = ${randomX}px;
        factButton.style.top = ${randomY}px;
    }
});

factButton.addEventListener('click', () => {
    if (attempts < 3) {
        attempts++;
        factDisplay.textContent = "You need to try harder to catch me!";
    } else {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.textContent = facts[randomIndex];
    }
});
