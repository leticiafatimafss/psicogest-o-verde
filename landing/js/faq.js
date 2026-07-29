// =======================================================
// FAQ ACCORDION
// =======================================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        // Fecha todos
        faqItems.forEach(faq => {

            faq.classList.remove("active");

            const content = faq.querySelector(".faq-answer");

            content.style.maxHeight = null;

        });

        // Se não estava aberto, abre
        if (!isActive) {

            item.classList.add("active");

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});
