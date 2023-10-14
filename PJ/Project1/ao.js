const images = document.querySelectorAll(".image-containerox img");
const slideshow = document.querySelector(".slideshow");
const slideshowImage = document.querySelector("#slideshow-image");

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    slideshow.style.display = "block";
    slideshowImage.src = image.src;
    slideshowImage.dataset.index = index;
  });
});

slideshow.addEventListener("click", () => {
  const currentIndex = parseInt(slideshowImage.dataset.index);
  const nextIndex = (currentIndex + 1) % images.length;
  slideshowImage.src = images[nextIndex].src;
  slideshowImage.dataset.index = nextIndex;
});
