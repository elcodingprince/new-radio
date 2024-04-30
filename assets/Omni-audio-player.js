// Get the product play button and sticky audio player play button
const productPlayBtn = document.getElementById('productPlayBtn');
const stickyPlayBtn = document.getElementById('omniPlayBtn');

// Get the audio element
const audio = new Audio();

// Function to handle play/pause toggle
function togglePlay() {
    if (audio.paused) {
        audio.play();
        productPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'; // Change icon to pause
        stickyPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'; // Change icon to pause
    } else {
        audio.pause();
        productPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>'; // Change icon to play
        stickyPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>'; // Change icon to play
    }
}

// Add click event listeners to both buttons
productPlayBtn.addEventListener('click', function() {
    // Set audio source for sticky audio player
    audio.src = productAudioUrl;
    togglePlay();
});

stickyPlayBtn.addEventListener('click', function() {
    togglePlay();
});
});