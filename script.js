document.addEventListener('DOMContentLoaded', () => {
    // ===== DARK MODE TOGGLE =====
    const toggle = document.getElementById('darkToggle');
    const body = document.body;

    // Khôi phục trạng thái đã lưu
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if (toggle) toggle.textContent = '☀️';
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            toggle.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
        });
    }

    // ===== SCROLL REVEAL (Intersection Observer) =====
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // chỉ chạy 1 lần
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        // Fallback: hiện tất cả nếu trình duyệt cũ
        revealElements.forEach(el => el.classList.add('visible'));
    }

    console.log('Portfolio loaded — Dark mode + Reveal ready.');
});