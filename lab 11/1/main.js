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
        } else 
            console.error('Failed to fetch dog image:', data.message);
    } catch (error) {
        console.error('Error fetching dog image:', error.message);
    }
}