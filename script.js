document.addEventListener('DOMContentLoaded', function() {
    // Tech Diwali jokes array
    const jokes = [
        "Why don't programmers light diyas anymore? They prefer to use Firebase!",
        "My neural network tried to make Indian sweets for Diwali. It created 'recursively deep' jalebi with infinite loops.",
        "What do you call an AI that celebrates Diwali? Artificial Illumination!",
        "I asked ChatGPT to design a rangoli. It made one that optimizes for both aesthetics and RAM usage.",
        "My smart home decorated for Diwali. Now my router has RGB lighting and my coffee maker is making cardamom chai.",
        "Why was the computer cold during Diwali? It left its Windows open!",
        "How many developers does it take to light a diya? None, it's a hardware problem.",
        "SELECT celebration FROM traditions WHERE festival = 'Diwali' AND bugs = 0;",
        "What's a programmer's favorite Diwali sweet? Binary ladoo!",
        "My code deployed perfectly on Diwali. That's the real miracle of lights."
    ];
    
    // Handle joke button click
    const jokeElement = document.getElementById('joke');
    const nextJokeButton = document.getElementById('next-joke');
    let currentJokeIndex = 0;
    
    nextJokeButton.addEventListener('click', function() {
        currentJokeIndex = (currentJokeIndex + 1) % jokes.length;
        jokeElement.textContent = jokes[currentJokeIndex];
        // Add a small animation
        jokeElement.style.opacity = 0;
        setTimeout(() => {
            jokeElement.textContent = jokes[currentJokeIndex];
            jokeElement.style.opacity = 1;
        }, 300);
    });
    
    // Create dynamic stars
    const stars = document.querySelector('.stars');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 5 + 's';
        stars.appendChild(star);
    }
    
    // Generate dynamic rangoli pattern
    const rangoli = document.querySelector('.rangoli');
    const colors = ['#ff9933', '#138808', '#ff5722', '#ffd700', '#4CAF50'];
    
    for (let i = 0; i < 8; i++) {
        const petal = document.createElement('div');
        petal.style.position = 'absolute';
        petal.style.width = '70%';
        petal.style.height = '70%';
        petal.style.top = '15%';
        petal.style.left = '15%';
        petal.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%';
        petal.style.border = `2px solid ${colors[i % colors.length]}`;
        petal.style.transform = `rotate(${i * 45}deg)`;
        rangoli.appendChild(petal);
    }
    
    // Add dynamic fireworks
    setInterval(createFirework, 1000);
    
    function createFirework() {
        const fireworks = document.querySelector('.fireworks');
        const firework = document.createElement('div');
        
        firework.classList.add('firework');
        firework.style.left = Math.random() * 100 + '%';
        firework.style.bottom = Math.random() * 50 + '%';
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        fireworks.appendChild(firework);
        
        // Remove firework after animation completes
        setTimeout(() => {
            firework.remove();
        }, 2000);
    }
});