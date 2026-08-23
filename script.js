document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Translations Dictionary (English & Arabic)
    // -------------------------------------------------------------
    const translations = {
        en: {
            langButtonLabel: "العربية",
            statusText: "System Status: Website Under Construction",
            heroBadge: "WEBSITE UNDER DEVELOPMENT",
            heroTitlePrefix: "Something Great is",
            heroTitleHighlight: "Under Construction",
            heroSubtitle: "Our website is currently undergoing development. We are working hard to bring you a brand new digital experience. Stay tuned!",
            labelDays: "Days",
            labelHours: "Hours",
            labelMinutes: "Minutes",
            labelSeconds: "Seconds",
            formTitle: "Be notified when we officially launch",
            emailPlaceholder: "Enter your email address",
            btnSubmit: "Notify Me",
            submittingText: "Registering...",
            privacyNote: "🔒 We respect your privacy. No spam ever.",
            feature1Title: "New Experience",
            feature1Desc: "We are crafting a modern and intuitive platform built to serve you better.",
            feature2Title: "High Reliability",
            feature2Desc: "Ensuring top-level performance, security, and seamless navigation.",
            feature3Title: "Launching Soon",
            feature3Desc: "Our team is finalizing the last details before the official launch.",
            allRights: "All rights reserved.",
            linkTwitter: "Twitter / X",
            linkLinkedIn: "LinkedIn",
            linkSupport: "Support",
            msgSuccess: "🎉 Thank you! We will notify you as soon as we launch.",
            msgError: "Please enter a valid email address."
        },
        ar: {
            langButtonLabel: "English",
            statusText: "حالة النظام: الموقع قيد الإنشاء",
            heroBadge: "الموقع قيد التطوير حالياً",
            heroTitlePrefix: "شيء رائع",
            heroTitleHighlight: "قيد الإنشاء والتحضير",
            heroSubtitle: "موقعنا حالياً قيد التطوير والإنشاء. نعمل بجد لنقدم لكم تجربة رقمية جديدة ومميزة. انتظرونا قريباً!",
            labelDays: "أيام",
            labelHours: "ساعات",
            labelMinutes: "دقائق",
            labelSeconds: "ثواني",
            formTitle: "احصل على إشعار فور الإطلاق الرسمي",
            emailPlaceholder: "أدخل بريدك الإلكتروني",
            btnSubmit: "إشعاري عند الإطلاق",
            submittingText: "جاري التسجيل...",
            privacyNote: "🔒 نحن نحترم خصوصيتك. نضمن عدم إرسال بريد عشوائي.",
            feature1Title: "تجربة جديدة",
            feature1Desc: "نعمل على بناء منصة حديثة وسلسة لتقديم أفضل خدمة لكم.",
            feature2Title: "اعتمادية وأمان عالی",
            feature2Desc: "ضمان أقصى درجات الأداء والأمان وسهولة التصفح.",
            feature3Title: "الانطلاق قريباً",
            feature3Desc: "يقوم فريقنا بوضع اللمسات الأخيرة قبل الإطلاق الرسمي.",
            allRights: "جميع الحقوق محفوظة.",
            linkTwitter: "تويتر / X",
            linkLinkedIn: "لينكد إن",
            linkSupport: "الدعم",
            msgSuccess: "🎉 شكراً لك! سنقوم بإشعاراتك فور الإطلاق الرسمي.",
            msgError: "يرجى إدخال عنوان بريد إلكتروني صحيح."
        }
    };

    // Current active language (Default: English)
    let currentLang = localStorage.getItem('mechflow_lang') || 'en';

    const langToggleBtn = document.getElementById('langToggle');
    const langLabel = document.getElementById('langLabel');

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('mechflow_lang', lang);

        const html = document.documentElement;
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Update button text
        if (langLabel) {
            langLabel.innerText = translations[lang].langButtonLabel;
        }

        // Translate text elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });

        // Translate input placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });
    }

    // Toggle language event
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'en' ? 'ar' : 'en';
            applyLanguage(nextLang);
        });
    }

    // Apply initial language
    applyLanguage(currentLang);

    // -------------------------------------------------------------
    // 2. Countdown Timer Logic (30 days target)
    // -------------------------------------------------------------
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate.getTime() - now;

        if (distance < 0) {
            document.getElementById('days').innerText = "00";
            document.getElementById('hours').innerText = "00";
            document.getElementById('minutes').innerText = "00";
            document.getElementById('seconds').innerText = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // -------------------------------------------------------------
    // 3. Form Submission Handling
    // -------------------------------------------------------------
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
            }, 700);
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

    // -------------------------------------------------------------
    // 4. Dynamic Footer Year
    // -------------------------------------------------------------
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
});
