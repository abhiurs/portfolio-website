//IMAGE MODAL

const modal = document.getElementById("imageModal");

const modalImg = document.getElementById("modalImg");

const images = document.querySelectorAll(".screenshots img");

const closeBtn = document.querySelector(".close");


// CHECK IF MODAL EXISTS
if(modal && modalImg && closeBtn){

    // OPEN IMAGE
    images.forEach((img) => {

        img.addEventListener("click", () => {

            modal.style.display = "block";

            modalImg.src = img.src;

        });

    });


    // CLOSE BUTTON
    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

    });


    // CLOSE WHEN CLICK OUTSIDE IMAGE
    modal.addEventListener("click", (e) => {

        if(e.target === modal){

            modal.style.display = "none";

        }

    });

}


// SCROLL ANIMATION

const hiddenElements = document.querySelectorAll(".hidden");


const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        // WHEN SECTION ENTERS SCREEN
        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

        // WHEN SECTION LEAVES SCREEN
        else{

            entry.target.classList.remove("show");

        }

    });

},
{
    threshold:0.1
});


hiddenElements.forEach((el) => observer.observe(el));
