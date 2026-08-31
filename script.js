/**
 * MECHFLOW SAUDI ARABIA — MASTER JAVASCRIPT ENGINE
 * Handles:
 * 1. Mobile Drawer & App Bottom Bar Active State Management
 * 2. Bilingual Interactive Smart Diagnostic Recommender Tool (EN & AR)
 * 3. MTBF & Plant Downtime Cost Savings Calculator (EN & AR)
 * 4. Multi-Step RFQ Solution Modal
 * 5. Animated Number Counter for Scaled Metrics
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileDrawer();
  initBottomBarActiveState();
  initDiagnosticTool();
  initMTBFCalculator();
  initMetricCounters();
});

/* --- 1. Header Scroll Effect --- */
function initHeaderScroll() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --- 2. Mobile App Drawer --- */
function initMobileDrawer() {
  const trigger = document.getElementById('mobileMenuTrigger');
  const drawerOverlay = document.getElementById('mobileDrawerOverlay');
  const closeBtn = document.getElementById('mobileDrawerClose');

  if (!trigger || !drawerOverlay) return;

  function openDrawer() {
    drawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  trigger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawerOverlay.addEventListener('click', (e) => {
    if (e.target === drawerOverlay) {
      closeDrawer();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawerOverlay.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* --- 3. Mobile Bottom Tab Bar Active State --- */
function initBottomBarActiveState() {
  const currentPath = window.location.pathname.toLowerCase();
  const bottomItems = document.querySelectorAll('.appbar-item');

  bottomItems.forEach((item) => {
    const href = item.getAttribute('href');
    if (!href) return;
    const cleanHref = href.toLowerCase();

    if (
      (currentPath.endsWith('/') || currentPath.includes('index.html')) &&
      (cleanHref === 'index.html' || cleanHref === './' || cleanHref === '/' || cleanHref === '../index.html')
    ) {
      item.classList.add('active');
    } else if (cleanHref !== 'index.html' && cleanHref !== './' && cleanHref !== '../index.html' && currentPath.includes(cleanHref.replace('../', ''))) {
      item.classList.add('active');
    }
  });
}

/* --- 4. Bilingual Interactive Smart Diagnostic Tool --- */
function initDiagnosticTool() {
  const equipSelect = document.getElementById('diagEquipment');
  const symptomSelect = document.getElementById('diagSymptom');
  const resultTitle = document.getElementById('diagResultTitle');
  const resultDesc = document.getElementById('diagResultDesc');
  const resultHub = document.getElementById('diagResultHub');
  const actionBtn = document.getElementById('diagActionBtn');

  if (!equipSelect || !symptomSelect || !resultTitle) return;

  const isArabic = document.documentElement.lang === 'ar' || document.documentElement.dir === 'rtl';

  const solutionsEN = {
    pump_vibration: {
      title: 'Laser Alignment & In-Situ Vibration Analysis',
      desc: 'High-frequency resonance or unbalance detected. Recommended protocol: Precision dual-laser shaft alignment + dynamic balancing to ISO G2.5 standard.',
      hub: 'Jeddah Overhaul Center & Dammam Mobile Van',
      link: 'emergency-dispatch.html'
    },
    pump_leakage: {
      title: 'API 682 Mechanical Seal Teardown & Face Lapping',
      desc: 'Seal face failure or barrier fluid loss. Recommended protocol: Optical flat helium lapping (2 light bands flatness) + Kalrez FFKM O-ring replacement.',
      hub: 'Jeddah Cleanroom Facility / Yanbu Hub',
      link: 'fluid-gas-sealing.html'
    },
    compressor_leak: {
      title: 'API 692 Dry Gas Seal Cleanroom Refurbishment',
      desc: 'Dynamic gas leakage detected across compressor cartridge. Recommended protocol: ISO Class 7 cleanroom strip-down + 150-bar dynamic Nitrogen test.',
      hub: 'Jeddah High-Tech DGS Test Facility',
      link: 'fluid-gas-sealing.html'
    },
    motor_burn: {
      title: 'Class H Motor Rewinding & VPI Impregnation',
      desc: 'Stator winding insulation breakdown. Recommended protocol: High-grade Class H rewinding, core loss test, and vacuum pressure impregnation.',
      hub: 'Jeddah Heavy Electrical Workshop',
      link: 'electrical-motors.html'
    },
    turbine_trip: {
      title: 'Turbine Rotor NDT & Diaphragm Geometric Inspection',
      desc: 'Bearing temperature surge or axial displacement. Recommended protocol: In-situ geometric laser survey and rotor overhaul per API 612.',
      hub: 'Dammam Eastern Hub & Yanbu Station',
      link: 'turbomachinery.html'
    },
    flange_leak: {
      title: 'Controlled Hydraulic Bolt Tensioning (ASME PCC-1)',
      desc: 'Joint relaxation under thermal cycling. Recommended protocol: In-situ flange facing cold machining and calibrated hydraulic multi-stud tensioning.',
      hub: 'Yanbu / Dammam / Jeddah Onsite Crews',
      link: 'plant-turnaround.html'
    }
  };

  const solutionsAR = {
    pump_vibration: {
      title: 'محاذاة ليزرية متقدمة وتحليل الاهتزازات الموقعي',
      desc: 'تم رصد رنين ترددي عالي أو عدم اتزان ديناميكي. البروتوكول الموصى به: محاذاة محاور ليزرية مزدوجة وموازنة ديناميكية بمعيار ISO G2.5.',
      hub: 'مركز توضيب جدة وسيارة الفحص المتنقلة بالدمام',
      link: 'emergency-dispatch.html'
    },
    pump_leakage: {
      title: 'فحص وتوضيب مانع التسرب الميكانيكي API 682 وتنعيم الأوجه',
      desc: 'تلف في أوجه مانع التسرب أو فقدان سائل الحاجز. البروتوكول الموصى به: تنعيم ليزري واختبار استواء ضوئي بالهيليوم مع استبدال حلقات FFKM.',
      hub: 'مرفق الغرفة النظيفة بجدة ومحور ينبع',
      link: 'fluid-gas-sealing.html'
    },
    compressor_leak: {
      title: 'إعادة تأهيل أختام الغاز الجاف (API 692 DGS) بالغرفة النظيفة',
      desc: 'تسريب غاز ديناميكي عبر خرطوشة الضاغط. البروتوكول الموصى به: تفكيك كامل في غرفة نظيفة ISO Class 7 وفحص ديناميكي بالنيتروجين حتى 150 بار.',
      hub: 'مرفق فحص أختام الغاز الجاف المتقدم بجدة',
      link: 'fluid-gas-sealing.html'
    },
    motor_burn: {
      title: 'إعادة لف المحرك الكهربائي بعزل فائق Class H ومعالجة VPI',
      desc: 'انهيار في عزل ملفات العضو الثابت. البروتوكول الموصى به: إعادة لف نحاسي فائق الفئة H، فحص الفقد الحراري وتغليف الراتنج بالتفريغ والضغط.',
      hub: 'ورشة المعدات الكهربائية الثقيلة بجدة',
      link: 'electrical-motors.html'
    },
    turbine_trip: {
      title: 'فحص لا إتلافي NDT ومسح هندسي لروتور التوربين',
      desc: 'ارتفاع حرارة كراسي التحميل أو إزاحة محورية. البروتوكول الموصى به: مسح ليزري موقعي وتوضيب كامل لروتور التوربين وفق معيار API 612.',
      hub: 'محور المنطقة الشرقية بالدمام ومحطة ينبع',
      link: 'turbomachinery.html'
    },
    flange_leak: {
      title: 'شد هيدروليكي محكوم للفلانجات وفق معيار ASME PCC-1',
      desc: 'ارتخاء في الوصلات مع الدورات الحرارية. البروتوكول الموصى به: تشغيل وتنعيم الفلانجات موقعياً مع شد متزامن بعزم هيدروليكي معاير.',
      hub: 'فرق التدخل الموقعي في ينبع والدمام وجدة',
      link: 'plant-turnaround.html'
    }
  };

  const solutions = isArabic ? solutionsAR : solutionsEN;

  function updateDiagnostic() {
    const equip = equipSelect.value;
    const symptom = symptomSelect.value;
    const key = `${equip}_${symptom}`;

    const fallback = isArabic ? {
      title: 'تشخيص هندسي متعدد التخصصات واستجابة سريعة',
      desc: 'البروتوكول الموصى به: فحص بصري لا إتلافي NDT موقعي فوري، تسجيل القياسات الاهتزازية عن بُعد وتقييم فوري للتفكيك.',
      hub: 'أقرب محور تشغيلي في المملكة (جدة، الدمام، أو ينبع)',
      link: 'diagnostic.html'
    } : {
      title: 'Comprehensive Multi-Discipline Engineering Diagnostic',
      desc: 'Recommended protocol: Immediate on-site visual NDT inspection, vibration telemetry logging, and rapid teardown evaluation.',
      hub: 'Nearest KSA Hub (Jeddah, Dammam, or Yanbu)',
      link: 'diagnostic.html'
    };

    const match = solutions[key] || fallback;

    resultTitle.textContent = match.title;
    resultDesc.textContent = match.desc;
    if (resultHub) resultHub.textContent = match.hub;
    if (actionBtn) {
      actionBtn.setAttribute('href', match.link);
    }
  }

  equipSelect.addEventListener('change', updateDiagnostic);
  symptomSelect.addEventListener('change', updateDiagnostic);
}

/* --- 5. MTBF & Plant Downtime Cost Calculator --- */
function initMTBFCalculator() {
  const downtimeSlider = document.getElementById('calcDowntimeHours');
  const downtimeValDisplay = document.getElementById('calcDowntimeDisplay');
  const costPerHourSlider = document.getElementById('calcHourlyCost');
  const costPerHourDisplay = document.getElementById('calcHourlyDisplay');
  const savingsDisplay = document.getElementById('calcAnnualSavings');

  if (!downtimeSlider || !savingsDisplay) return;

  const isArabic = document.documentElement.lang === 'ar' || document.documentElement.dir === 'rtl';

  function recalculate() {
    const hours = parseFloat(downtimeSlider.value) || 40;
    const rate = parseFloat(costPerHourSlider.value) || 25000;

    if (downtimeValDisplay) {
      downtimeValDisplay.textContent = isArabic ? `${hours} ساعة / سنوياً` : `${hours} Hours/Year`;
    }
    if (costPerHourDisplay) {
      costPerHourDisplay.textContent = isArabic ? `${rate.toLocaleString()} $ / ساعة` : `$${rate.toLocaleString()} /hr`;
    }

    // Precision engineering typically eliminates 65-80% of recurring unplanned downtime
    const totalDowntimeCost = hours * rate;
    const estimatedSavings = totalDowntimeCost * 0.75;

    savingsDisplay.textContent = isArabic 
      ? `${Math.round(estimatedSavings).toLocaleString()} $` 
      : `$${Math.round(estimatedSavings).toLocaleString()}`;
  }

  downtimeSlider.addEventListener('input', recalculate);
  if (costPerHourSlider) costPerHourSlider.addEventListener('input', recalculate);
  recalculate();
}

/* --- 6. Live Metric Counters --- */
function initMetricCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter'), 10);
          const duration = 1600;
          const step = Math.ceil(target / (duration / 25));
          let current = 0;

          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              el.textContent = target.toLocaleString();
              clearInterval(timer);
            } else {
              el.textContent = current.toLocaleString();
            }
          }, 25);

          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.2 }
  );

  counters.forEach((c) => observer.observe(c));
}
