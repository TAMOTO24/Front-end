function getGalleryState() {
    const galleryState = localStorage.getItem('galleryState');
    return galleryState ? JSON.parse(galleryState) : [];
}

function saveGalleryState(images) {
    localStorage.setItem('galleryState', JSON.stringify(images));
}

function displayGalleryState() {
    const gallery = document.getElementById('gallery');
    const galleryState = getGalleryState();

    galleryState.forEach(imageUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        gallery.appendChild(imgElement);
    });
}

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

            // Додаємо нове зображення до стану галереї та зберігаємо в LocalStorage
            const galleryState = getGalleryState();
            galleryState.push(data.message);
            saveGalleryState(galleryState);
        } else {
            console.error('Failed to fetch dog image:', data.message);
        }
    } catch (error) {
        console.error('Error fetching dog image:', error.message);
    }
}

displayGalleryState();