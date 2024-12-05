document.getElementById('catButton').addEventListener('click', function() {
  const catImage = document.getElementById('catImage');
  // List of brainrot cat images (you can replace these with any cat images you like)
  const catImages = [
    'https://placekitten.com/500/500', 
    'https://cataas.com/cat/cute',
    'https://placekitten.com/600/600'
  ];

  // Randomly pick an image
  const randomCat = catImages[Math.floor(Math.random() * catImages.length)];

  // Display the image
  catImage.src = randomCat;
  catImage.style.display = 'block';
});
