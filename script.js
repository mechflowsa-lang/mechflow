document.addEventListener('DOMContentLoaded', () => {
    // =============================================================
    // 1. Interactive Ambient Particle Canvas Animation
    // =============================================================
    const canvas = document.getElementById('ambientCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = [];
        const particleCount = Math.min(Math.floor(window.innerWidth / 18), 65);

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 1.5 + 0.5,
                alpha: Math.random() * 0.5 + 0.2
            });
        }

        function drawParticles() {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(52, 211, 153, ${p.alpha})`;
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                    if (dist < 110) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - dist / 110)})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(drawParticles);
        }
        drawParticles();
    }

    // =============================================================
    // 2. Mouse Spotlight Tracker
    // =============================================================
    const spotlight = document.getElementById('cursorSpotlight');
    if (spotlight) {
        window.addEventListener('mousemove', (e) => {
            spotlight.style.left = `${e.clientX}px`;
            spotlight.style.top = `${e.clientY}px`;
        });
    }

    // =============================================================
    // 3. Translations Dictionary (English & Arabic)
    // =============================================================
    const translations = {
        en: {
            langButtonLabel: "العربية",
            statusText: "SYSTEM UPGRADE IN PROGRESS",
            heroBadge: "UNDER ACTIVE DEVELOPMENT",
            heroTitlePrefix: "Something Exceptional",
            heroTitleHighlight: "Is Taking Shape",
            heroSubtitle: "We are engineering a next-level digital platform with uncompromising speed, intelligence, and modern aesthetics. Prepare for an elevated experience.",
            timerBadge: "TARGET LAUNCH WINDOW",
            labelDays: "DAYS",
            labelHours: "HOURS",
            labelMinutes: "MINUTES",
            labelSeconds: "SECONDS",
            formTitle: "Reserve Early Access & Launch Updates",
            formSubtitle: "Get an exclusive invitation when the platform goes live.",
            emailPlaceholder: "Enter your business email",
            btnSubmit: "Notify Me",
            submittingText: "Securing Access...",
            privacyNote: "Zero spam policy. Unsubscribe anytime with 1-click.",
            feature1Title: "High-Velocity Core",
            feature1Desc: "Engineered with ultra-low latency architecture and real-time processing capabilities.",
            feature2Title: "Military-Grade Resilience",
            feature2Desc: "Built from the ground up with end-to-end encryption and ironclad reliability.",
            feature3Title: "Refined User Experience",
            feature3Desc: "A frictionless, intuitive user interface designed for maximum productivity.",
            allRights: "All rights reserved.",
            linkTwitter: "Twitter / X",
            linkLinkedIn: "LinkedIn",
            linkSupport: "Support",
            msgSuccess: "✨ Access reserved! You will receive priority invitation upon launch.",
            msgError: "Please enter a valid email address."
        },
        ar: {
            langButtonLabel: "English",
            statusText: "ترقية النظام جارية حالياً",
            heroBadge: "قيد التطوير النشط",
            heroTitlePrefix: "شيء استثنائي",
            heroTitleHighlight: "يتشكل الآن",
            heroSubtitle: "نقوم بهندسة منصة رقمية متقدمة بأعلى معايير السرعة والذكاء والتصميم العصري. استعد لتجربة رقمية فريدة.",
            timerBadge: "النافذة الزمنية للإطلاق",
            labelDays: "أيام",
            labelHours: "ساعات",
            labelMinutes: "دقائق",
            labelSeconds: "ثواني",
            formTitle: "احجز وصولك المبكر وآخر التحديثات",
            formSubtitle: "احصل على دعوة حصرية فور انطلاق المنصة رسمياً.",
            emailPlaceholder: "أدخل بريدك الإلكتروني المخصص",
            btnSubmit: "إشعاري فور الإطلاق",
            submittingText: "جاري تأكيد التسجيل...",
            privacyNote: "سياسة خالية تماماً من الرسائل المزعجة. يمكنك الإلغاء في أي وقت.",
            feature1Title: "أداء فائق السرعة",
            feature1Desc: "مصممة بهندسة برمجية منخفضة الاستجابة وقدرات معالجة فورية فائقة.",
            feature2Title: "أمان واعتمادية صارمة",
            feature2Desc: "مبنية بتشفير شامل من البداية لضمان أقصى درجات الحماية والاستقرار.",
            feature3Title: "تجربة مستخدم راقية",
            feature3Desc: "واجهة سلسة وبديهية مصممة لتحقيق أقصى درجات الكفاءة والإنتاجية.",
            allRights: "جميع الحقوق محفوظة.",
            linkTwitter: "تويتر / X",
            linkLinkedIn: "لينكد إن",
            linkSupport: "الدعم",
            msgSuccess: "✨ تم تسجيل وصولك بنجاح! ستصلك دعوة حصرية فور الإطلاق.",
            msgError: "يرجى إدخال عنوان بريد إلكتروني صحيح."
        }
    };

    let currentLang = localStorage.getItem('mechflow_lang') || 'en';

    const langToggleBtn = document.getElementById('langToggle');
    const langLabel = document.getElementById('langLabel');

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('mechflow_lang', lang);

        const html = document.documentElement;
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        if (langLabel) {
            langLabel.innerText = translations[lang].langButtonLabel;
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'en' ? 'ar' : 'en';
            applyLanguage(nextLang);
        });
    }

    applyLanguage(currentLang);

    // =============================================================
    // 4. 4-Monolith Luxury Countdown HUD Logic
    // =============================================================
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    let prevSeconds = -1;

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate.getTime() - now;

        if (distance < 0) {
            daysEl.innerText = "00";
            hoursEl.innerText = "00";
            minutesEl.innerText = "00";
            secondsEl.innerText = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.innerText = String(days).padStart(2, '0');
        hoursEl.innerText = String(hours).padStart(2, '0');
        minutesEl.innerText = String(minutes).padStart(2, '0');

        const formattedSeconds = String(seconds).padStart(2, '0');

        if (prevSeconds !== seconds) {
            secondsEl.classList.remove('vanish-tick');
            void secondsEl.offsetWidth;
            secondsEl.innerText = formattedSeconds;
            secondsEl.classList.add('vanish-tick');
            prevSeconds = seconds;
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // =============================================================
    // 5. Interactive Form Submission
    // =============================================================
    const notifyForm = document.getElementById('notifyForm');
    const userEmail = document.getElementById('userEmail');
    const formFeedback = document.getElementById('formFeedback');

    if (notifyForm) {
        notifyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailValue = userEmail.value.trim();
            const t = translations[currentLang];

            if (!emailValue) {
                showFeedback(t.msgError, "error");
                return;
            }

            const submitBtn = notifyForm.querySelector('button[type="submit"]');
            const submitBtnSpan = submitBtn.querySelector('span');
            const originalBtnText = submitBtnSpan.innerText;

            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.75';
            submitBtnSpan.innerText = t.submittingText;

            setTimeout(() => {
                showFeedback(t.msgSuccess, "success");
                userEmail.value = '';
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                submitBtnSpan.innerText = originalBtnText;

                try {
                    const subscribers = JSON.parse(localStorage.getItem('mechflow_subscribers') || '[]');
                    subscribers.push({ email: emailValue, lang: currentLang, date: new Date().toISOString() });
                    localStorage.setItem('mechflow_subscribers', JSON.stringify(subscribers));
                } catch (err) {
                    console.log('LocalStorage disabled:', err);
                }
            }, 600);
        });
    }

    function showFeedback(message, type) {
        formFeedback.innerText = message;
        formFeedback.className = `form-feedback ${type}`;
        
        setTimeout(() => {
            if (type === 'error') {
                formFeedback.innerText = '';
                formFeedback.className = 'form-feedback';
            }
        }, 5000);
    }

    // =============================================================
    // 6. Dynamic Footer Year
    // =============================================================
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
});
