const images = [
  "uzum_frame1.png",
  "uzum_frame2.png",
  "uzum_frame3.png",
  "uzum_frame4.png",
  "uzum_frame5.png"
];

let current = 0;
const imageElement = document.getElementById("slider-image");

function showImage(index) {
  imageElement.src = images[index];
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}
