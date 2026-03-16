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
// 3. Калькулятор
const billRange = document.getElementById('bill-range');
const areaRange = document.getElementById('area-range');
const billValue = document.getElementById('bill-value');
const areaValue = document.getElementById('area-value');
const resPower = document.getElementById('res-power');
const resPayback = document.getElementById('res-payback');
const resSavings = document.getElementById('res-savings');
function calculate() {
    const bill = parseInt(billRange.value);
    const area = parseInt(areaRange.value);
    billValue.innerText = bill.toLocaleString();
    areaValue.innerText = area;
    let power = (bill / 300).toFixed(1);
    const maxPower = (area / 6).toFixed(1);
    if (parseFloat(power) > parseFloat(maxPower)) power = maxPower;
    let payback = (7 - (bill / 2000)).toFixed(1);
    if (payback < 3.5) payback = 3.5;
    const savings = bill * 12 * 25 * 1.5;
    resPower.innerText = `${power} кВт`;
    resPayback.innerText = `${payback} роки`;
    resSavings.innerText = `${Math.floor(savings).toLocaleString()} грн`;
}
if(billRange) {
    billRange.addEventListener('input', calculate);
    areaRange.addEventListener('input', calculate);
    calculate();
}