document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;

            // Close all other answers
            document.querySelectorAll(".faq-answer").forEach((p) => {
                if (p !== answer) {
                    p.style.maxHeight = null;
                }
            });

            // Toggle the clicked answer
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});
