let page = 1;

async function loadDogImages() {
    const gallery = document.getElementById('gallery');

    try {
        // Виконуємо запит до API для отримання зображень собаки
        const response = await fetch(`https://dog.ceo/api/breeds/image/random/9?page=${page}`);
        const data = await response.json();

        console.log('API Response:', data);

        if (response.ok && data.status === 'success' && data.message && data.message.length > 0) {
            // Додаємо нові зображення собак до галереї
            data.message.forEach((imageUrl) => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                gallery.appendChild(imgElement);

                // Додаємо обробник кліка для зображень для входу у повноекранний режим
                imgElement.addEventListener('click', () => enterFullscreen(imgElement));
            });
        } else {
            console.error('Failed to fetch dog images:', data.message);
        }
    } catch (error) {
        console.error('Error fetching dog images:', error.message);
    }
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function toggleFullscreen() {
    const body = document.body;
    const galleryContainer = document.getElementById('galleryContainer');
    const fullscreenButton = document.getElementById('fullscreenButton');
    if (!document.fullscreenElement) {
        // Увійти у повноекранний режим
        galleryContainer.requestFullscreen();
        body.style.backgroundColor = '#222'; // Зміна фонового кольору
        fullscreenButton.classList.add('exit');
        fullscreenButton.innerText = 'Exit Fullscreen';
    } else {
        // Вийти з повноекранного режиму
        exitFullscreen();
        body.style.backgroundColor = '#f4f4f4'; // Відновлення фонового кольору
        fullscreenButton.classList.remove('exit');
        fullscreenButton.innerText = 'Fullscreen View';
    }
}

document.addEventListener('fullscreenchange', () => {
    const body = document.body;
    const fullscreenButton = document.getElementById('fullscreenButton');
    if (!document.fullscreenElement) {
        body.style.backgroundColor = '#f4f4f4'; // Відновлення фонового кольору
        fullscreenButton.classList.remove('exit');
        fullscreenButton.innerText = 'Fullscreen View';
    }
});

function loadMoreImages() {
    page++;
    loadDogImages();
}

// Завантажити фотографії при завантаженні сторінки
loadDogImages();