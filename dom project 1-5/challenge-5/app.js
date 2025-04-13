/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];


const carousel = document.getElementById("carousel")
const cTrack = document.getElementById("carouselTrack")
const caption = document.getElementById("caption")
const prevB = document.getElementById("prevButton")
const nextB = document.getElementById("nextButton")
const cNav = document.getElementById("carouselNar")
const autoB = document.getElementById("autoPlayButton")
const timerD = document.getElementById("timerDisplay")

let n = 1;

cTrack.innerHTML = `
  <img class="carousel-slide" src="https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
  
`;

caption.innerHTML = "Beautiful Mountain Landscape"

// const indicator = document.createElement("div")
// indicator.className = "carousel-indicator"
// const button = document.createElement("div")
// button.className = "carousel-button"

// // div.classList.toggle("active")

// indicator.appendChild(button)
// cNav.appendChild(indicator)

// const span = document.createElement("span")
// // span.classList.add("carousel-indicator")
// span.className = "carousel-indicator"
// cNav.appendChild(span)


nextB.addEventListener("click", () => {
  n = n + 1;
  if (n === 2) {
    cTrack.innerHTML = `
  <img class="carousel-slide" src="https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
  `;

    caption.innerHTML = images[1].caption
    // caption.innerHTML = "Ocean Sunset View"
  }

  if (n === 3) {
    cTrack.innerHTML = `
  <img class="carousel-slide" src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
`;

    caption.innerHTML = "Autumn Forest Path"
  }

  if (n === 4) {
    cTrack.innerHTML = `
  <img class="carousel-slide" src="https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
`;
    caption.innerHTML = "Urban City Skyline"
  }

  if (n >= 5) {
    n = 4;
  }

})


prevB.addEventListener("click", () => {
  n = n - 1;
  if (n <= 0) {
    n = 1;
  }

  if (n === 1) {
    cTrack.innerHTML = `
  <img class="carousel-slide" src="https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
`;
caption.innerHTML = images[0].caption
  }
  if (n === 2) {
    cTrack.innerHTML = `
  <img class="carousel-slide" src="https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
`;
caption.innerHTML = images[1].caption
  }

  if (n === 3) {
    cTrack.innerHTML = `
  <img class="carousel-slide" src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
`;
caption.innerHTML = images[2].caption
  }

})













