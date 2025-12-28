document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".images_button");

    if (button) {
        button.addEventListener("click", () => {
            document.location.href = "../html/PicturePage.html"
        })
    }
})