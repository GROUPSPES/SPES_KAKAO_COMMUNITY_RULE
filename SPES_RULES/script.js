// Back to Top 버튼 표시 및 스크롤 이벤트
const backToTopButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// 스크롤을 맨 위로 이동
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
