/**
 * MECHFLOW SAUDI ARABIA — MASTER JAVASCRIPT ENGINE
 * Handles:
 * 1. Mobile Drawer & App Bottom Bar Active State Management
 * 2. Interactive Smart Diagnostic Recommender Tool
 * 3. MTBF & Plant Downtime Cost Savings Calculator
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
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
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
      (cleanHref === 'index.html' || cleanHref === './' || cleanHref === '/')
    ) {
      item.classList.add('active');
    } else if (cleanHref !== 'index.html' && cleanHref !== './' && currentPath.includes(cleanHref)) {
      item.classList.add('active');
    }
  });
}

/* --- 4. Interactive Smart Diagnostic Recommender Tool --- */
function initDiagnosticTool() {
  const equipSelect = document.getElementById('diagEquipment');
  const symptomSelect = document.getElementById('diagSymptom');
  const resultTitle = document.getElementById('diagResultTitle');
  const resultDesc = document.getElementById('diagResultDesc');
  const resultHub = document.getElementById('diagResultHub');
  const actionBtn = document.getElementById('diagActionBtn');

  if (!equipSelect || !symptomSelect || !resultTitle) return;

  const solutions = {
    pump_vibration: {
      title: 'Laser Alignment & In-Situ Vibration Analysis',
      desc: 'High-frequency resonance detected. Recommended protocol: Precision dual-laser shaft alignment (Prüftechnik) + dynamic balancing to ISO G2.5 standard.',
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

  function updateDiagnostic() {
    const equip = equipSelect.value;
    const symptom = symptomSelect.value;
    const key = `${equip}_${symptom}`;

    const match = solutions[key] || {
      title: 'Comprehensive Multi-Discipline Engineering Diagnostic',
      desc: 'Recommended protocol: Immediate on-site visual NDT inspection, vibration telemetry logging, and rapid teardown evaluation.',
      hub: 'Nearest KSA Hub (Jeddah, Dammam, or Yanbu)',
      link: 'diagnostic.html'
    };

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

  function recalculate() {
    const hours = parseFloat(downtimeSlider.value) || 40;
    const rate = parseFloat(costPerHourSlider.value) || 25000;

    if (downtimeValDisplay) downtimeValDisplay.textContent = `${hours} Hours/Year`;
    if (costPerHourDisplay) costPerHourDisplay.textContent = `$${rate.toLocaleString()} /hr`;

    // Precision re-engineering typically eliminates 65-80% of recurring unplanned downtime
    const totalDowntimeCost = hours * rate;
    const estimatedSavings = totalDowntimeCost * 0.75;

    savingsDisplay.textContent = `$${Math.round(estimatedSavings).toLocaleString()}`;
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
          const duration = 1800;
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

