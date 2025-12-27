document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("header_button")
    if (button) {
        button.addEventListener("click", () => {
            document.location.href = "html/loadingPage.html";
        });
    }
});