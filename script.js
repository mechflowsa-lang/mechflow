document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Translations Dictionary (English & Arabic)
    // -------------------------------------------------------------
    const translations = {
        en: {
            langButtonLabel: "العربية",
            statusText: "System Status: Building Next-Gen Platform",
            heroBadge: "LAUNCHING SOON IN KSA & GULF",
            heroTitlePrefix: "The Future of",
            heroTitleHighlight: "Smart Enterprise Operations",
            heroSubtitle: "We are building an advanced, scalable platform tailored for modern businesses in Saudi Arabia and the region. Experience unmatched performance, security, and seamless efficiency.",
            labelDays: "Days",
            labelHours: "Hours",
            labelMinutes: "Minutes",
            labelSeconds: "Seconds",
            formTitle: "Be the first to get exclusive early access",
            emailPlaceholder: "Enter your business email",
            btnSubmit: "Join Waitlist",
            submittingText: "Registering...",
            privacyNote: "🔒 Your data is fully protected. No spam guaranteed.",
            feature1Title: "Localized & High Performance",
            feature1Desc: "Built specifically with regional compliance, high availability, and ultra-fast cloud performance.",
            feature2Title: "Bank-Grade Security",
            feature2Desc: "Strict data encryption, privacy protection, and enterprise standards compliant with local regulations.",
            feature3Title: "Vision 2030 Ready",
            feature3Desc: "Empowering digital transformation across industrial, operational, and commercial sectors.",
            allRights: "All rights reserved.",
            linkTwitter: "Twitter / X",
            linkLinkedIn: "LinkedIn",
            linkSupport: "Support & Sales",
            msgSuccess: "🎉 Thank you! You've been added to our VIP early access list.",
            msgError: "Please enter a valid business email address."
        },
        ar: {
            langButtonLabel: "English",
            statusText: "حالة النظام: جاري بناء الجيل القادم من المنصة",
            heroBadge: "قريباً في المملكة العربية السعودية والخليج",
            heroTitlePrefix: "مستقبل",
            heroTitleHighlight: "العمليات الذكية للمؤسسات",
            heroSubtitle: "نبني منصة متقدمة وقابلة للتوسع مصممة خصيصاً للأعمال الحديثة في المملكة العربية السعودية والمنطقة. اختبر أداءً استثنائياً وأماناً موثوقاً بكفاءة عالية.",
            labelDays: "أيام",
            labelHours: "ساعات",
            labelMinutes: "دقائق",
            labelSeconds: "ثواني",
            formTitle: "كن أول من يحصل على الوصول المبكر الحصري",
            emailPlaceholder: "أدخل بريدك الإلكتروني المخصص للعمل",
            btnSubmit: "الانضمام لقائمة الانتظار",
            submittingText: "جاري التسجيل...",
            privacyNote: "🔒 بياناتك محمية بالكامل. نضمن عدم إرسال بريد عشوائي.",
            feature1Title: "أداء عالي ومتوافق محلياً",
            feature1Desc: "مصممة خصيصاً مع الالتزام بالمعايير التنظيمية الإقليمية وجاهزية سحابية فائقة السرعة.",
            feature2Title: "أمان بمستوى مصرفي",
            feature2Desc: "تشفير صارم للبيانات وحماية الخصوصية بالتوافق مع التشريعات والمعايير المحلية.",
            feature3Title: "جاهز لرؤية 2030",
            feature3Desc: "تمكين التحول الرقمي عبر القطاعات الصناعية والتشغيلية والتجارية.",
            allRights: "جميع الحقوق محفوظة.",
            linkTwitter: "تويتر / X",
            linkLinkedIn: "لينكد إن",
            linkSupport: "الدعم والمبيعات",
            msgSuccess: "🎉 شكراً لك! تم إضافتك بنجاح إلى قائمة الوصول المبكر.",
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
