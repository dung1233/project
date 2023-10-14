const imageLinks = [
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-083.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-082.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-086.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-085.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-081.jpg",

  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-080.jpg",

  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-077.jpg",

  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-001.jpg",
];

let currentIndex = 0;

function openImage(imageUrl) {
  const enlargedImage = document.getElementById("enlarged-image");
  currentIndex = imageLinks.indexOf(imageUrl);
  enlargedImage.src = imageUrl;
  document.getElementById("overlay").style.display = "block";
}

function closeImage() {
  document.getElementById("overlay").style.display = "none";
}

function changeImage(offset) {
  currentIndex += offset;

  if (currentIndex < 0) {
    currentIndex = imageLinks.length - 1;
  } else if (currentIndex >= imageLinks.length) {
    currentIndex = 0;
  }

  const enlargedImage = document.getElementById("enlarged-image");
  enlargedImage.src = imageLinks[currentIndex];
}
