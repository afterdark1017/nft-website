let currentImageIndex = 1; // Start with the first image
const totalImages = 18; // Total number of images (updated to match available images)

function changeImage() {
    currentImageIndex++; // Increment the index to show the next image
    if (currentImageIndex > totalImages) {
        currentImageIndex = 1; // Loop back to the first image
    }
    const imgElement = document.getElementById('slideshow');
    imgElement.src = `images/${currentImageIndex}.png`; // Update the image source
}

// Change image every 3 seconds
setInterval(changeImage, 850);

window.onload = function() {
    document.getElementById('slideshow').src = "images/1.png"; // Set initial image source
}
