document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".upload_button");

    if (button) {
        button.addEventListener("click", () => {
            document.location.href = "../html/UploadPage.html"
        })
    }
})