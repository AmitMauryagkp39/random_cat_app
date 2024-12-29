const API_KEY = "https://api.thecatapi.com/v1/images/search?limit=10https://api.thecatapi.com/v1/images/0XYvRd7oD";  //// Replace with your actual API key

const url = 'https://api.thecatapi.com/v1/images/search?limit=10';

        // Fetch data from the API
        fetch(url, {
            headers: {
                'x-api-key': API_KEY  // Add the API key in the header
            }
        })
        .then(response => response.json())  // Convert the response to JSON
        .then(data => {
            // Get the container where we want to display the images
            const container = document.getElementById('cat-images-container');
            
            // Loop through the data and create an image element for each
            data.forEach(cat => {
                const img = document.createElement('img');
                img.src = cat.url;  // Set the image source to the URL from the API
                img.alt = 'Random Cat';  // Alt text for accessibility
                container.appendChild(img);  // Add the image to the container
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });



