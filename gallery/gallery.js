// JavaScript for Image Lightbox in Gallery
document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery-container img");

    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            let modal = document.createElement("div");
            modal.classList.add("lightbox");
            modal.innerHTML = `<div class="lightbox-content">
                <span class="close">&times;</span>
                <img src="${img.src}" alt="Enlarged Image">
            </div>`;

            document.body.appendChild(modal);

            modal.querySelector(".close").addEventListener("click", function () {
                modal.remove();
            });
        });
    });
});
