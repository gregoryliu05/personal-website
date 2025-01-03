document.addEventListener("DOMContentLoaded", function () {
    const typingElements = document.querySelectorAll(".typing");

    typingElements.forEach((element) => {
        const text = element.getAttribute("data-text");
        let index = 0;

        const type = () => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 10000); // Adjust typing speed here (in milliseconds)
            }
        };

        type();
    });
});