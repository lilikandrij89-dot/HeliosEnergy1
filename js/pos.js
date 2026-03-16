// 1. Плавна навігація
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Перевіряємо, чи це внутрішнє посилання і чи воно не порожнє
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                // Рахуємо відступ (наприклад, висоту фіксованої шапки)
                const headerOffset = 70;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});
// 2. Модальне вікно
const modal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".close-button");
document.querySelectorAll('.roz, .open-modal').forEach(btn => {
    btn.onclick = (e) => {
        e.preventDefault();
        modal.style.display = "block";
    }
});
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }