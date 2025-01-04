document.addEventListener("DOMContentLoaded", function () {
    const typingElements = document.querySelectorAll(".typing");

    typingElements.forEach((element) => {
        const fullText = element.textContent;
        element.textContent = ""; // Clear the text to simulate typing
        let index = 0;

        const type = () => {
            if (index < fullText.length) {
                element.textContent += fullText.charAt(index);
                index++;
                setTimeout(type, 75); // Typing speed
            } else {
                // Remove the cursor shortly after typing finishes
                setTimeout(() => {
                    element.classList.add("hide-cursor");
                }, 500); // Delay before hiding the cursor
            }
        };

        type();
    })
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}