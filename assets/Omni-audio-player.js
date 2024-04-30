document.addEventListener('DOMContentLoaded', function() {
  // Get the product play button and sticky audio player play button
  const productPlayBtn = document.getElementById('productPlayBtn');
  const stickyPlayBtn = document.getElementById('omniPlayBtn');
  const audio = document.getElementById('audioPlayer');

  if (productPlayBtn && stickyPlayBtn && audio) {
      // Function to handle play/pause toggle
      function togglePlay() {
          if (audio.paused) {
              audio.play();
              productPlayBtn.textContent = 'Pause'; // Change text to pause
              stickyPlayBtn.textContent = 'Pause'; // Change text to pause
          } else {
              audio.pause();
              productPlayBtn.textContent = 'Play'; // Change text to play
              stickyPlayBtn.textContent = 'Play'; // Change text to play
          }
      }

      // Add click event listeners to both buttons
      productPlayBtn.addEventListener('click', function() {
          // Set audio source for sticky audio player
          audio.src = "{{ product.metafields.custom.audio.value }}";
          togglePlay();
      });

      stickyPlayBtn.addEventListener('click', function() {
          togglePlay();
      });
  } else {
      console.error('One or more required elements not found.');
  }
});