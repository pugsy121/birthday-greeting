document.getElementById('revealMessage').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.classList.toggle('hidden');
    createConfetti();
});

function createConfetti() {
    const colors = ['#ff0', '#ff1493', '#00ff00', '#00bfff', '#ff4500'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 2 + 1 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}
