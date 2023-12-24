let timerInterval;
let elapsedTime = 0;

function startTimer() {
    timerInterval = setInterval(function () {
        elapsedTime++;
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.getElementById('timer').textContent = formattedTime;
}

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
        // Сторінка стала видимою
        startTimer();
    } else {
        // Сторінка стала невидимою (перехід на іншу вкладку або згортання вікна)
        clearInterval(timerInterval);
    }
});

async function loadDogImages() {
    const gallery = document.getElementById('gallery');

    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        console.log('API Response:', data);

        if (response.ok && data.status === 'success' && data.message && data.message.trim() !== '') {
            const imgElement = document.createElement('img');
            imgElement.src = data.message;
            gallery.appendChild(imgElement);
        } else {
            console.error('Failed to fetch dog image:', data.message);
        }
    } catch (error) {
        console.error('Error fetching dog image:', error.message);
    }
}

// Початковий запуск таймера
startTimer();