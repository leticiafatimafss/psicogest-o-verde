// =======================================================
// SCROLL REVEAL
// =======================================================

const animatedElements = document.querySelectorAll(
    ".fade-up, .fade-left, .fade-right, .fade-in, .zoom-in"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px"
    }

);

animatedElements.forEach((element) => {

    observer.observe(element);

});


// =======================================================
// SCROLL SUAVE PARA LINKS INTERNOS
// =======================================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});


// =======================================================
// ANO AUTOMÁTICO NO FOOTER (OPCIONAL)
// =======================================================

const year = document.getElementById("current-year");

if (year) {

    year.textContent = new Date().getFullYear();

}


// =======================================================
// BOTÃO VOLTAR AO TOPO (SE EXISTIR)
// =======================================================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 600) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}
