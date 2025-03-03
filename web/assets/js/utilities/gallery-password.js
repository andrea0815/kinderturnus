document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("password-form");
    const galleryContainer = document.getElementById("gallery-container");
    const errorMessage = document.getElementById("error-message");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = new FormData(form);
            fetch("/actions/gallery/submit-password", {
                method: "POST",
                body: formData,
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    galleryContainer.innerHTML = data.html; // Replace login form with gallery
                } else {
                    errorMessage.textContent = "Incorrect password. Try again.";
                }
            });
        });
    }

    // Logout handler
    document.addEventListener("click", function (e) {
        if (e.target.id === "logout-btn") {
            fetch("/actions/gallery/logout", {
                method: "POST",
                headers: { "X-Requested-With": "XMLHttpRequest" }
            })
            .then(() => location.reload()); // Reload page to show login form again
        }
    });
});
