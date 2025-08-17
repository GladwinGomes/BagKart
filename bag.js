const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products[productId];

if (product) {
  document.getElementById("product-name").textContent = product.title;
  document.getElementById("product-price").textContent = product.price;
  const carouselContainer = document.getElementById("carousel-images");
  carouselContainer.innerHTML = "";

  product.imagePaths.forEach(path => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `<img src="${path}">`;
    carouselContainer.appendChild(slide);
  });

  // Initialize or update Swiper
  if (window.swiperInstance) {
    window.swiperInstance.update();
  } else {
    window.swiperInstance = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
} else {
  document.getElementById("product-container").innerHTML = "<p>Product not found.</p>";
}
