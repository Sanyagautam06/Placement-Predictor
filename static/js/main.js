// Placement Intelligence Platform Main Engine

// Pre-calibrated Demo Cohorts Presets Profiles
const DEMO_PRESETS = {
  product: {
    name: "Yash Vardhan",
    age: 22,
    gender: "Male",
    department: "Computer Science Engineering",
    graduation_year: 2026,
    cgpa: 7.9,
    backlogs: 0,
    certifications: 1,
    research_papers: 0,
    internships: 1,
    internship_duration_months: 3,
    freelance_experience: true,
    work_experience_months: 0,
    projects_count: 4,
    projects_difficulty: "Intermediate",
    projects_domain: "Web Development",
    skills: ["React", "Node.js", "Java", "SQL", "JavaScript", "HTML", "CSS"],
    leetcode_rating: 1450,
    codechef_rating: 1300,
    codeforces_rating: 1200,
    hackathons_participated: 4,
    hackathons_won: 1,
    open_source_contributions: 5,
    github_repos: 15,
    github_contributions: 190,
    soft_communication: 8,
    soft_problem_solving: 7,
    soft_leadership: 7,
    soft_teamwork: 9
  },
  competitive: {
    name: "Arjun Iyer",
    age: 21,
    gender: "Male",
    department: "Information Technology",
    graduation_year: 2026,
    cgpa: 8.6,
    backlogs: 0,
    certifications: 2,
    research_papers: 0,
    internships: 0,
    internship_duration_months: 0,
    freelance_experience: false,
    work_experience_months: 0,
    projects_count: 2,
    projects_difficulty: "Intermediate",
    projects_domain: "Machine Learning",
    skills: ["Python", "C++", "SQL", "Git", "Java"],
    leetcode_rating: 2150,
    codechef_rating: 2200,
    codeforces_rating: 1950,
    hackathons_participated: 12,
    hackathons_won: 4,
    open_source_contributions: 12,
    github_repos: 8,
    github_contributions: 450,
    soft_communication: 5,
    soft_problem_solving: 10,
    soft_leadership: 4,
    soft_teamwork: 6
  },
  fullstack: {
    name: "Riya Sen",
    age: 21,
    gender: "Female",
    department: "Computer Science Engineering",
    graduation_year: 2027,
    cgpa: 8.1,
    backlogs: 0,
    certifications: 3,
    research_papers: 0,
    internships: 2,
    internship_duration_months: 6,
    freelance_experience: true,
    work_experience_months: 0,
    projects_count: 5,
    projects_difficulty: "Advanced",
    projects_domain: "Web Development",
    skills: ["React", "Node.js", "Docker", "AWS", "SQL", "JavaScript", "Flask"],
    leetcode_rating: 1560,
    codechef_rating: 1600,
    codeforces_rating: 1300,
    hackathons_participated: 5,
    hackathons_won: 1,
    open_source_contributions: 15,
    github_repos: 24,
    github_contributions: 320,
    soft_communication: 9,
    soft_problem_solving: 8,
    soft_leadership: 7,
    soft_teamwork: 8
  },
  datascience: {
    name: "Dr. Amit Paul",
    age: 24,
    gender: "Male",
    department: "Data Science & ML",
    graduation_year: 2026,
    cgpa: 9.6,
    backlogs: 0,
    certifications: 4,
    research_papers: 2,
    internships: 1,
    internship_duration_months: 6,
    freelance_experience: false,
    work_experience_months: 12,
    projects_count: 3,
    projects_difficulty: "Advanced",
    projects_domain: "Machine Learning",
    skills: ["Python", "TensorFlow", "PyTorch", "Data Science", "Machine Learning", "SQL"],
    leetcode_rating: 1650,
    codechef_rating: 1500,
    codeforces_rating: 1400,
    hackathons_participated: 3,
    hackathons_won: 2,
    open_source_contributions: 20,
    github_repos: 10,
    github_contributions: 280,
    soft_communication: 7,
    soft_problem_solving: 9,
    soft_leadership: 6,
    soft_teamwork: 7
  },
  switcher: {
    name: "Karan Saxena",
    age: 27,
    gender: "Male",
    department: "Electrical Engineering",
    graduation_year: 2026,
    cgpa: 6.8,
    backlogs: 1,
    certifications: 3,
    research_papers: 0,
    internships: 1,
    internship_duration_months: 4,
    freelance_experience: true,
    work_experience_months: 48,
    projects_count: 3,
    projects_difficulty: "Intermediate",
    projects_domain: "Other Domains",
    skills: ["Python", "SQL", "Flask", "AWS", "Git"],
    leetcode_rating: 1300,
    codechef_rating: 1200,
    codeforces_rating: 1100,
    hackathons_participated: 1,
    hackathons_won: 0,
    open_source_contributions: 0,
    github_repos: 6,
    github_contributions: 40,
    soft_communication: 9,
    soft_problem_solving: 7,
    soft_leadership: 8,
    soft_teamwork: 8
  }
};

const POPULAR_SKILLS = [
  "Python", "Java", "C++", "SQL", "React", "Node.js", "AWS", "Docker", "Kubernetes",
  "Machine Learning", "Data Science", "Android", "Cybersecurity", "JavaScript", "HTML", "CSS", "Git", "Flask"
];

const INITIAL_PROFILE = {
  name: "Sneha Patel",
  age: 21,
  gender: "Female",
  department: "Computer Science Engineering",
  graduation_year: 2027,
  cgpa: 8.20,
  backlogs: 0,
  certifications: 2,
  research_papers: 0,
  internships: 1,
  internship_duration_months: 3,
  freelance_experience: false,
  work_experience_months: 0,
  projects_count: 3,
  projects_difficulty: "Intermediate",
  projects_domain: "Web Development",
  skills: ["Python", "Java", "SQL", "React", "Node.js"],
  leetcode_rating: 1420,
  codechef_rating: 1500,
  codeforces_rating: 1300,
  hackathons_participated: 2,
  hackathons_won: 0,
  open_source_contributions: 0,
  github_repos: 12,
  github_contributions: 85,
  soft_communication: 6,
  soft_problem_solving: 6,
  soft_leadership: 4,
  soft_teamwork: 6
};

// State variables
let formData = JSON.parse(JSON.stringify(INITIAL_PROFILE));
let currentStep = 1;
let mobileMenuOpen = false;
let currentPredictionId = null;

// Multi-step Titles
const STEP_TITLES = [
  "PERSONAL INFORMATION",
  "ACADEMIC PROFILE",
  "EXPERIENCE PROFILE",
  "PROJECT PORTFOLIO",
  "TECHNICAL SKILLS",
  "CODING PROFILES",
  "ACHIEVEMENTS",
  "SOFT SKILLS",
  "RESUME ANALYSIS"
];

// Switch views Router matching
window.showPage = function(pageId) {
  const pages = ['home', 'results', 'history', 'leaderboard'];
  pages.forEach(p => {
    const el = document.getElementById(`page-${p}`);
    if (el) el.classList.add('hidden');
  });

  const target = document.getElementById(`page-${pageId}`);
  if (target) {
    target.classList.remove('hidden');
  }

  // Load backend modules data dynamically
  if (pageId === 'history') {
    loadPredictionHistory();
  } else if (pageId === 'leaderboard') {
    loadLeaderboard();
  }

  // Auto scroll to top
  scrollToId("top-header");
};

// Smooth anchor scroll
window.scrollToId = function(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Mobile Navigation menu drawer controller
window.toggleMobileMenu = function() {
  const drawer = document.getElementById('mobile-menu-drawer');
  const iconEl = document.getElementById('mobile-menu-icon');
  mobileMenuOpen = !mobileMenuOpen;
  if (drawer && iconEl) {
    if (mobileMenuOpen) {
      drawer.classList.remove('hidden');
      iconEl.setAttribute('data-lucide', 'x');
    } else {
      drawer.classList.add('hidden');
      iconEl.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
  }
};

// Set values modification
window.updateProfileField = function(field, val) {
  formData[field] = val;
};

// Select Demo Presets Profile immediately
window.selectPreset = function(presetId) {
  const dataPreset = DEMO_PRESETS[presetId];
  if (!dataPreset) return;
  
  formData = JSON.parse(JSON.stringify(dataPreset));
  syncAllFormInputs();
  
  // Visual highlight preset cards active
  Object.keys(DEMO_PRESETS).forEach(pid => {
    const card = document.getElementById(`profile-card-${pid}`);
    const badge = document.getElementById(`badge-p-${pid}`);
    if (card && badge) {
      if (pid === presetId) {
        card.classList.add("border-maroon-800", "ring-2", "ring-maroon-800/20");
        badge.innerText = "ACTIVE";
        badge.classList.remove("text-[#AD2D2D]");
        badge.classList.add("text-emerald-700");
      } else {
        card.classList.remove("border-maroon-800", "ring-2", "ring-maroon-800/20");
        badge.innerText = "ACTIVATE";
        badge.classList.add("text-[#AD2D2D]");
        badge.classList.remove("text-emerald-700");
      }
    }
  });

  showToast(`Loaded pre-calibrated cohort: ${formData.name}`);
  scrollToId("prediction-form-card");
};

// Syncing inputs fields elements values with active state profile
function syncAllFormInputs() {
  document.getElementById('input-name').value = formData.name;
  document.getElementById('input-age').value = formData.age;
  document.getElementById('input-gender').value = formData.gender;
  document.getElementById('input-department').value = formData.department;
  document.getElementById('input-grad-year').value = formData.graduation_year;

  // step 2 academics
  document.getElementById('input-cgpa').value = formData.cgpa;
  document.getElementById('cgpa-display-val').innerText = formData.cgpa.toFixed(2);
  document.getElementById('input-backlogs').value = formData.backlogs;
  document.getElementById('input-certifications').value = formData.certifications;
  document.getElementById('input-research').value = formData.research_papers;

  // step 3 experience
  document.getElementById('input-internships').value = formData.internships;
  document.getElementById('input-internship-duration').value = formData.internship_duration_months;
  document.getElementById('input-freelance').value = formData.freelance_experience ? "Yes" : "No";
  document.getElementById('input-work-exp').value = formData.work_experience_months;

  // step 4 projects
  document.getElementById('input-projects-count').value = formData.projects_count;
  document.getElementById('input-projects-difficulty').value = formData.projects_difficulty;
  document.getElementById('input-projects-domain').value = formData.projects_domain;

  // step 5 technical tags
  renderPopularSkillsQuickSelector();
  renderSelectedSkillsTray();

  // step 6 profiles
  document.getElementById('input-leetcode').value = formData.leetcode_rating;
  document.getElementById('input-codechef').value = formData.codechef_rating;
  document.getElementById('input-codeforces').value = formData.codeforces_rating;

  // step 7 achievements
  document.getElementById('input-hack-part').value = formData.hackathons_participated;
  document.getElementById('input-hack-won').value = formData.hackathons_won;
  document.getElementById('input-os-contribs').value = formData.open_source_contributions;
  document.getElementById('input-git-repos').value = formData.github_repos;
  document.getElementById('input-git-contribs').value = formData.github_contributions;

  // step 8 soft skill sliders
  document.getElementById('input-soft-comm').value = formData.soft_communication;
  document.getElementById('comm-val-lbl').innerText = formData.soft_communication + " / 10";
  document.getElementById('input-soft-prob').value = formData.soft_problem_solving;
  document.getElementById('prob-val-lbl').innerText = formData.soft_problem_solving + " / 10";
  document.getElementById('input-soft-team').value = formData.soft_teamwork;
  document.getElementById('team-val-lbl').innerText = formData.soft_teamwork + " / 10";
  document.getElementById('input-soft-lead').value = formData.soft_leadership;
  document.getElementById('lead-val-lbl').innerText = formData.soft_leadership + " / 10";
}

// Technical Skills Quick select tags triggers
function renderPopularSkillsQuickSelector() {
  const container = document.getElementById('popular-skills-container');
  if (!container) return;
  container.innerHTML = '';
  POPULAR_SKILLS.forEach(skill => {
    const active = formData.skills.includes(skill);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.onclick = () => toggleSkillTag(skill);
    btn.className = `px-3.5 py-1.5 rounded text-[11px] font-bold border font-mono transition-all cursor-pointer ${
      active 
        ? 'bg-maroon-800 border-maroon-900 text-white' 
        : 'bg-white border-stone-300 text-stone-700 hover:border-maroon-800'
    }`;
    btn.innerText = skill;
    container.appendChild(btn);
  });
}

function renderSelectedSkillsTray() {
  const tray = document.getElementById('selected-skills-tray');
  const countBadge = document.getElementById('skills-count-badge');
  if (!tray) return;
  tray.innerHTML = '';
  if (countBadge) countBadge.innerText = formData.skills.length;

  if (formData.skills.length === 0) {
    tray.innerHTML = '<span class="text-xs text-stone-400 italic">No skills registered yet. Click pre-selection tags or input unique tools above.</span>';
    return;
  }

  formData.skills.forEach(skill => {
    const span = document.createElement('span');
    span.className = "inline-flex items-center gap-1.5 bg-maroon-50 border border-maroon-200 text-maroon-900 px-3 py-1 text-xs font-bold font-serif animate-fade-in";
    span.innerHTML = `
      <span>${skill}</span>
      <button type="button" onclick="toggleSkillTag('${skill}')" class="text-maroon-800 hover:text-red-700 font-bold ml-1 cursor-pointer">×</button>
    `;
    tray.appendChild(span);
  });
}

window.toggleSkillTag = function(skill) {
  const index = formData.skills.indexOf(skill);
  if (index >= 0) {
    formData.skills.splice(index, 1);
  } else {
    formData.skills.push(skill);
  }
  renderPopularSkillsQuickSelector();
  renderSelectedSkillsTray();
};

window.addCustomSkillTag = function() {
  const input = document.getElementById('custom-skill-input');
  if (!input) return;
  const val = input.value.trim();
  if (val && !formData.skills.includes(val)) {
    formData.skills.push(val);
    input.value = '';
    renderPopularSkillsQuickSelector();
    renderSelectedSkillsTray();
    showToast(`Registered custom capability: ${val}`);
  }
};

// PDF Resume Drag-and-Drop and parse
window.handleFileSelect = async function(event) {
  const file = event.target.files[0];
  if (!file) return;
  await parseUploadedPdf(file);
};

// Parse PDF file using backend
async function parseUploadedPdf(file) {
  // Show parsing state
  const indicator = document.getElementById('pdf-parsed-indicator');
  const textVal = document.getElementById('pdf-parsed-text');
  
  if (indicator && textVal) {
    indicator.style.display = 'flex';
    textVal.innerText = "Extracting portfolio entities from PDF...";
    indicator.className = "flex items-center gap-2 text-stone-700 bg-amber-50 border border-amber-200 rounded-lg p-3 justify-center";
  }

  const pBody = new FormData();
  pBody.append('file', file);

  try {
    const res = await fetch('/api/upload-resume', {
      method: "POST",
      body: pBody
    });

    if (!res.ok) {
      throw new Error("Unable to parse file. Backend validation failed.");
    }

    const docParsed = await res.json();
    
    // Auto populate
    if (docParsed.name && docParsed.name !== "Parsed Student") {
      formData.name = docParsed.name;
    }
    if (docParsed.skills && docParsed.skills.length > 0) {
      // union skills
      docParsed.skills.forEach(sk => {
        if (!formData.skills.includes(sk)) {
          formData.skills.push(sk);
        }
      });
    }
    if (docParsed.certifications) {
      formData.certifications = docParsed.certifications;
    }
    if (docParsed.projects_count) {
      formData.projects_count = docParsed.projects_count;
    }

    syncAllFormInputs();
    
    // Trigger final parsed toast
    if (indicator && textVal) {
      textVal.innerText = `Scan complete. Found candidate name: "${formData.name}", ${docParsed.skills ? docParsed.skills.length : 0} tags, and auto-populated the evaluation steps.`;
      indicator.className = "flex items-center gap-2 text-stone-700 bg-green-50 border border-green-200 rounded-lg p-3 justify-center";
    }
    showToast("Resume parsed and synced successfully.");
  } catch (err) {
    console.error("PDF upload failure file parsing:", err);
    if (indicator && textVal) {
      textVal.innerText = "Scanning error: unable to read text stream inside index dockets of PDF.";
      indicator.className = "flex items-center gap-2 text-stone-700 bg-red-50 border border-red-200 rounded-lg p-3 justify-center";
    }
  }
}

// Stepper managers
window.nextStep = function() {
  if (currentStep < 9) {
    currentStep++;
    updateStepView();
  }
};

window.prevStep = function() {
  if (currentStep > 1) {
    currentStep--;
    updateStepView();
  }
};

function updateStepView() {
  for (let i = 1; i <= 9; i++) {
    const elFields = document.getElementById(`step-${i}-fields`);
    if (elFields) {
      if (i === currentStep) {
        elFields.classList.remove('hidden');
      } else {
        elFields.classList.add('hidden');
      }
    }
  }

  // Update Progress Track
  document.getElementById('current-step-display').innerText = currentStep;
  document.getElementById('current-step-title').innerText = STEP_TITLES[currentStep - 1];
  const pct = (currentStep / 9) * 100;
  document.getElementById('step-progress-indicator').style.width = `${pct}%`;

  // Update control buttons
  const prevBtn = document.getElementById('prev-step-btn');
  const nextBtn = document.getElementById('next-step-btn');
  const submitBtn = document.getElementById('submit-profile-btn');

  if (currentStep === 1) {
    prevBtn.classList.add('opacity-0', 'pointer-events-none');
  } else {
    prevBtn.classList.remove('opacity-0', 'pointer-events-none');
  }

  if (currentStep === 9) {
    nextBtn.classList.add('hidden');
    submitBtn.classList.remove('hidden');
  } else {
    nextBtn.classList.remove('hidden');
    submitBtn.classList.add('hidden');
  }
}

// Run Predict Route
window.runPrediction = async function() {
  const formSec = document.getElementById('prediction-form-wrapper');
  const loadSec = document.getElementById('prediction-loading-wrapper');
  const errSec = document.getElementById('prediction-error-wrapper');

  if (!formSec || !loadSec || !errSec) return;

  formSec.classList.add('hidden');
  loadSec.classList.remove('hidden');
  errSec.classList.add('hidden');

  try {
    const res = await fetch('/api/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (!res.ok) {
      throw new Error("Unable to save student dossier details.");
    }

    const report = await res.json();
    currentPredictionId = report.id;

    setTimeout(() => {
      loadSec.classList.add('hidden');
      formSec.classList.remove('hidden'); // restore for later resets
      showPage('results');
      renderResultsView(report);
    }, 1200);

  } catch (err) {
    console.error("Predicting calculation failed:", err);
    loadSec.classList.add('hidden');
    errSec.classList.remove('hidden');
  }
};

// Render results
function renderResultsView(payload) {
  document.getElementById('result-meta-subtitle').innerText = `REGISTRY DOSSIER ID: PP-CSE-${payload.id || Math.floor(100 + Math.random()*900)}`;

  // Circular gauge counter animate
  const numP = document.getElementById('results-prob-value');
  const svgCircle = document.getElementById('results-svg-gauge');
  
  let valP = 0;
  const target = payload.probability;
  
  if (window.gaugeTimer) clearInterval(window.gaugeTimer);
  window.gaugeTimer = setInterval(() => {
    if (valP >= target) {
      valP = target;
      clearInterval(window.gaugeTimer);
    }
    numP.innerText = valP + "%";
    valP++;
  }, 12);

  // SVG Gauge stroke mapping
  svgCircle.style.strokeDashoffset = 427 - (427 * target) / 100;
  
  // Badge alignment styling
  const badgeLevel = document.getElementById('results-readiness-badge');
  badgeLevel.innerText = payload.level + " Readiness Potential";
  
  if (payload.level === "Excellent") {
    svgCircle.className.baseVal = "transition-all duration-1000 stroke-emerald-600";
    badgeLevel.className = "rounded px-2.5 py-0.5 font-bold uppercase font-mono text-[9px] text-emerald-800 bg-emerald-50 border border-emerald-150";
  } else if (payload.level === "Strong") {
    svgCircle.className.baseVal = "transition-all duration-1000 stroke-emerald-500";
    badgeLevel.className = "rounded px-2.5 py-0.5 font-bold uppercase font-mono text-[9px] text-[#1E3A8A] bg-[#EFF6FF] border border-[#BFDBFE]";
  } else if (payload.level === "Average") {
    svgCircle.className.baseVal = "transition-all duration-1000 stroke-amber-500";
    badgeLevel.className = "rounded px-2.5 py-0.5 font-bold uppercase font-mono text-[9px] text-amber-900 bg-amber-50 border border-amber-150";
  } else {
    svgCircle.className.baseVal = "transition-all duration-1000 stroke-maroon-700";
    badgeLevel.className = "rounded px-2.5 py-0.5 font-bold uppercase font-mono text-[9px] text-[#AD2D2D] bg-[#FDEDEE] border border-[#FAD6D6]";
  }

  // Display indices
  document.getElementById('results-score-value').innerText = `${payload.readiness_score} / 100`;
  document.getElementById('results-resume-score').innerText = `${payload.resume_score} / 100`;
  document.getElementById('results-alignment-score').innerText = `${payload.skill_gap_score} %`;

  // Matched occupations outlooks
  const rolesBox = document.getElementById('results-roles-container');
  rolesBox.innerHTML = '';
  
  // Custom domains occupations
  let matchRoles = ["Full Stack Developer", "Backend Systems Specialist", "DevOps Engineer"];
  if (formData.department.includes("Electrical") || formData.department.includes("Electronics")) {
    matchRoles = ["Embedded Firmware Engineer", "Circuit Designer Analyst", "Hardware Engineer"];
  } else if (formData.department.includes("Data Science") || formData.department.includes("ML")) {
    matchRoles = ["Associate Data Scientist", "ML Infrastructure Specialist", "Analytics Platform Lead"];
  }
  
  matchRoles.forEach(role => {
    const span = document.createElement('span');
    span.className = "inline-flex items-center gap-1.5 rounded-full border border-stone-250 bg-stone-50 px-3 py-1 text-xs font-bold font-serif text-stone-850 cursor-default";
    span.innerHTML = `<i data-lucide="briefcase" class="h-3.5 w-3.5 text-maroon-800"></i> ${role}`;
    rolesBox.appendChild(span);
  });

  // Feature match bars chart
  const barTray = document.getElementById('results-importance-bars');
  barTray.innerHTML = '';
  
  const orderImpact = [
    { label: "CGPA Scholastic Weights", val: payload.importance.cgpa, max: 100 },
    { label: "Projects Architectures", val: payload.importance.projects, max: 100 },
    { label: "Internships duration", val: payload.importance.internships, max: 100 },
    { label: "Technical skills matrix", val: payload.importance.skills, max: 100 },
    { label: "Certifications metrics", val: payload.importance.certifications, max: 100 },
  ];

  orderImpact.forEach(b => {
    const pctBar = Math.max(10, Math.min(100, b.val));
    const dDiv = document.createElement('div');
    dDiv.className = "space-y-1";
    dDiv.innerHTML = `
      <div class="flex items-center justify-between text-[11px] text-stone-700">
        <span class="font-bold">${b.label}</span>
        <span class="font-mono text-stone-400 font-bold">${b.val} score</span>
      </div>
      <div class="h-1.5 w-full bg-stone-100 rounded-none overflow-hidden">
        <div class="h-full bg-maroon-800 transition-all duration-1000" style="width: ${pctBar}%"></div>
      </div>
    `;
    barTray.appendChild(dDiv);
  });

  // Strengths lists vs improvement
  const strBox = document.getElementById('gap-strong-container');
  const impBox = document.getElementById('gap-improvement-container');
  strBox.innerHTML = '';
  impBox.innerHTML = '';

  const defaultStrong = payload.gap.strong && payload.gap.strong.length > 0 ? payload.gap.strong : ["Academic CGPA", "Projects count", "Technical Foundation"];
  defaultStrong.forEach(s => {
    const div = document.createElement('div');
    div.className = "flex items-center gap-2 text-xs text-stone-700 font-medium font-serif";
    div.innerHTML = `<i data-lucide="check" class="h-3.5 w-3.5 text-emerald-600"></i> <span>${s}</span>`;
    strBox.appendChild(div);
  });

  const defaultImprove = payload.gap.improvement && payload.gap.improvement.length > 0 ? payload.gap.improvement : ["Professional Internships", "Cloud Certifications", "Soft communication scale"];
  defaultImprove.forEach(i => {
    const div = document.createElement('div');
    div.className = "flex items-center gap-2 text-xs text-stone-700 font-medium font-serif";
    div.innerHTML = `<i data-lucide="minus" class="h-3.5 w-3.5 text-maroon-700"></i> <span>${i}</span>`;
    impBox.appendChild(div);
  });

  // Live Radar representation
  drawRadarDiagramSVG(payload.details);

  // Clear AI output Recommendations box
  const aiBox = document.getElementById('ai-recommendations-content');
  aiBox.innerHTML = `
    <div class="py-12 text-center text-stone-400 font-serif">
      <i data-lucide="sparkles" class="h-8 w-8 mx-auto text-stone-300 mb-2"></i>
      <p class="text-xs">Strategic Gemini advisory plans not compiled yet. Press the generation tab above.</p>
    </div>
  `;

  lucide.createIcons();
}

// Drawing pentagonal Vector chart
function drawRadarDiagramSVG(scores) {
  const container = document.getElementById('radar-chart-container');
  if (!container) return;

  const categories = [
    { name: "Academics", val: scores.academics || 70 },
    { name: "Tech Skills", val: scores.skills || 60 },
    { name: "Experience", val: scores.experience || 50 },
    { name: "Leadership", val: scores.leadership || 40 },
    { name: "Communications", val: scores.communication || 50 }
  ];

  const center = 100;
  const maxRadius = 70;

  // Render pentagons circles grids background
  let gridXml = '';
  for (let grid = 1; grid <= 4; grid++) {
    const r = (maxRadius * grid) / 4;
    let points = [];
    for (let i = 0; i < 5; i++) {
      const angle = i * (2 * Math.PI / 5) - Math.PI / 2;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    gridXml += `<polygon points="${points.join(' ')}" fill="none" stroke="#E2E8F0" stroke-width="0.75" />`;
  }

  // Draw radial grids axles
  let linesXml = '';
  for (let i = 0; i < 5; i++) {
    const angle = i * (2 * Math.PI / 5) - Math.PI / 2;
    const x = center + maxRadius * Math.cos(angle);
    const y = center + maxRadius * Math.sin(angle);
    linesXml += `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" stroke="#E5E7EB" stroke-width="1" />`;
  }

  // Vector coordinates
  let vectorPoints = [];
  categories.forEach((cat, idx) => {
    const limitWeight = Math.max(15, Math.min(100, cat.val)) / 100.0;
    const r = limitWeight * maxRadius;
    const angle = idx * (2 * Math.PI / 5) - Math.PI / 2;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    vectorPoints.push(`${x},${y}`);
  });

  const dataPoly = `<polygon points="${vectorPoints.join(' ')}" fill="rgba(122, 31, 31, 0.16)" stroke="#7A1F1F" stroke-width="2" />`;

  // Circular anchors
  let anchorsXml = '';
  categories.forEach((cat, idx) => {
    const limitWeight = Math.max(15, Math.min(100, cat.val)) / 100.0;
    const r = limitWeight * maxRadius;
    const angle = idx * (2 * Math.PI / 5) - Math.PI / 2;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    anchorsXml += `<circle cx="${x}" cy="${y}" r="3" fill="#7A1F1F" stroke="#FFFFFF" stroke-width="1" />`;
  });

  // Label tags
  let labelsXml = '';
  const configs = [
    { text: "Academics", x: center, y: center - maxRadius - 8, anchor: "middle" },
    { text: "Tech Skills", x: center + maxRadius + 12, y: center - 5, anchor: "start" },
    { text: "Experience", x: center + maxRadius - 10, y: center + maxRadius + 10, anchor: "start" },
    { text: "Leadership", x: center - maxRadius + 10, y: center + maxRadius + 10, anchor: "end" },
    { text: "Communications", x: center - maxRadius - 12, y: center - 5, anchor: "end" }
  ];

  configs.forEach(cfg => {
    labelsXml += `<text x="${cfg.x}" y="${cfg.y}" fill="#1F2937" font-weight="bold" font-family="'Merriweather', 'Georgia', serif" font-size="8px" text-anchor="${cfg.anchor}">${cfg.text}</text>`;
  });

  // Set numeric indicators metrics matching labels
  document.getElementById('radar-lbl-acad').innerText = scores.academics ? scores.academics + "%" : "--";
  document.getElementById('radar-lbl-tech').innerText = scores.skills ? scores.skills + "%" : "--";
  document.getElementById('radar-lbl-expr').innerText = scores.experience ? scores.experience + "%" : "--";

  container.innerHTML = `
    <svg width="200" height="200" class="overflow-visible select-none">
      ${gridXml}
      ${linesXml}
      ${dataPoly}
      ${anchorsXml}
      ${labelsXml}
    </svg>
  `;
}

// Download PDF Report dossier instantly
window.downloadReportPDF = function() {
  if (!currentPredictionId) {
    showToast("Error: No active assessment predictions generated.");
    return;
  }
  window.location.href = `/api/download-report/${currentPredictionId}`;
};

// Fetch Gemini suggestions roadmaps
window.fetchGeminiRecommendations = async function() {
  const loader = document.getElementById('ai-recommendations-loader');
  const content = document.getElementById('ai-recommendations-content');
  const btn = document.getElementById('ai-generate-btn');

  if (!loader || !content || !btn) return;

  loader.style.display = 'flex';
  content.style.display = 'none';
  btn.disabled = true;

  try {
    const res = await fetch('/api/ai-recommendations', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (!res.ok) {
      throw new Error();
    }

    const recs = await res.json();
    loader.style.display = 'none';
    content.style.display = 'block';

    content.innerHTML = `
      <div class="space-y-4 text-left animate-fade-in font-serif">
        <div class="rounded border border-[#FAD6D6] bg-[#FFFBF5] p-4">
          <span class="block text-[9.5px] font-mono tracking-wider font-bold text-maroon-800 uppercase mb-2">★ ROADMAP PREPARATION MILESTONES</span>
          <ol class="list-decimal list-inside text-xs text-stone-800 space-y-1.5 leading-relaxed font-sans">
            ${recs.roadmap.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div class="rounded border border-stone-250 p-4">
            <span class="block text-[9.5px] font-mono tracking-wider font-bold text-stone-500 uppercase mb-2">INTERVIEW REVISAL</span>
            <ul class="list-disc list-inside text-[11px] text-stone-850 space-y-1 leading-relaxed font-sans">
              ${recs.interview_plan.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>
          <div class="rounded border border-stone-250 p-4">
            <span class="block text-[9.5px] font-mono tracking-wider font-bold text-stone-500 uppercase mb-2">CRITICAL CERTIFICATIONS</span>
            <ul class="list-disc list-inside text-[11px] text-stone-850 space-y-1 leading-relaxed font-sans">
              ${recs.certifications.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="rounded border border-stone-250 p-4">
          <span class="block text-[9.5px] font-mono tracking-wider font-bold text-stone-500 uppercase mb-2">SUGGESTED CORPORATE TARGET CAREER ROLES</span>
          <div class="flex flex-wrap gap-1.5 mt-2">
            ${recs.roles.map(r => `<span class="bg-[#FFF8F0] text-stone-800 border border-stone-300 font-sans px-2.5 py-1 text-xs rounded font-bold">${r}</span>`).join('')}
          </div>
        </div>
      </div>
    `;

    lucide.createIcons();
    showToast("Gemini strategic roadmap updated.");
  } catch (err) {
    loader.style.display = 'none';
    content.style.display = 'block';
    content.innerHTML = `<span class="text-xs text-red-700 italic">Unable to complete Google Gemini consultation modules. Review credential keys.</span>`;
  } finally {
    btn.disabled = false;
  }
};

// SQLite Predictions history loader dockets
async function loadPredictionHistory() {
  const tBody = document.getElementById('history-rows');
  const emptyEl = document.getElementById('history-empty');

  if (!tBody) return;
  tBody.innerHTML = '';

  try {
    const res = await fetch('/api/history');
    const logs = await res.json();

    if (!logs || logs.length === 0) {
      if (emptyEl) emptyEl.style.display = 'block';
      return;
    }

    if (emptyEl) emptyEl.style.display = 'none';

    // Renders dockets rows
    logs.forEach(log => {
      const tr = document.createElement('tr');
      tr.className = "border-b border-stone-200 hover:bg-stone-50 font-sans text-stone-800";
      tr.innerHTML = `
        <td class="p-4 font-mono font-bold text-stone-600 text-xs">PP-${String(log.id).padStart(4, '0')}</td>
        <td class="p-4 font-bold text-stone-900 font-serif">${log.name}</td>
        <td class="p-4 text-xs">${log.department}</td>
        <td class="p-4 text-xs font-mono">${log.cgpa.toFixed(2)}</td>
        <td class="p-4 text-center font-bold text-stone-900">${log.readiness_score} / 100</td>
        <td class="p-4 text-center">
          <span class="px-2.5 py-1 rounded text-[9.5px] font-mono font-bold uppercase ${
            log.level === 'Excellent' || log.level === 'Strong' 
              ? 'bg-emerald-50 text-emerald-800' 
              : 'bg-amber-50 text-amber-900'
          }">${log.level}</span>
        </td>
        <td class="p-4 text-xs text-stone-500 font-mono">${log.timestamp.substring(0,16)}</td>
        <td class="p-4 text-right space-x-1.5 flex justify-end">
          <a href="/api/download-report/${log.id}" class="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-maroon-800 hover:underline">
            <i data-lucide="download" class="h-3 w-3"></i> PDF
          </a>
          <button onclick="selectPredictionForViewing(${log.id})" class="text-[10px] uppercase font-bold text-stone-700 hover:underline font-mono">
            Dashboard
          </button>
        </td>
      `;
      tBody.appendChild(tr);
    });

    lucide.createIcons();
  } catch (err) {
    console.error("Unable to load predictions logs history from SQLite database:", err);
  }
}

// Select historic predicting calculation for general viewing dashboard
window.selectPredictionForViewing = async function(predictionId) {
  try {
    const res = await fetch('/api/history');
    const logs = await res.json();
    const matchLog = logs.find(item => item.id === predictionId);
    
    if (matchLog) {
      currentPredictionId = predictionId;
      showPage('results');
      
      // Re-trigger visual predict summary viewports
      const resp = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // we can fetch the detailed input using comparison API as well or just mock predicting logic
        body: JSON.stringify({
          name: matchLog.name,
          department: matchLog.department,
          cgpa: matchLog.cgpa,
          backlogs: 0,
          certifications: 2,
          internships: 1,
          projects_count: 3,
          leetcode_rating: 1400,
          soft_communication: 7,
          soft_problem_solving: 7,
          soft_leadership: 6,
          soft_teamwork: 7,
          skills: ["Python", "DSA"]
        })
      });

      const pData = await resp.json();
      pData.id = predictionId;
      renderResultsView(pData);
    }
  } catch(e) {
    console.error(e);
  }
};

// Scoreboards Leaderboard
async function loadLeaderboard() {
  const tBody = document.getElementById('leaderboard-rows');
  if (!tBody) return;
  tBody.innerHTML = '';

  try {
    const res = await fetch('/api/leaderboard');
    const rankings = await res.json();

    if (!rankings || rankings.length === 0) {
      tBody.innerHTML = `<tr><td colspan="6" class="p-8 text-center text-stone-400 italic font-serif">Perform calculated predictions cockpit test first.</td></tr>`;
      return;
    }

    rankings.forEach(item => {
      const row = document.createElement('tr');
      row.className = "border-b border-stone-200 text-stone-800 text-sm font-sans hover:bg-stone-50";
      row.innerHTML = `
        <td class="p-4 text-center font-bold text-maroon-800 font-mono">${item.rank}</td>
        <td class="p-4 font-bold text-stone-950 font-serif flex items-center gap-2">
          <i data-lucide="award" class="h-4 w-4 text-amber-500"></i> ${item.name}
        </td>
        <td class="p-4 text-xs font-mono text-stone-600">${item.department}</td>
        <td class="p-4 text-center font-mono font-bold">${item.cgpa.toFixed(2)}</td>
        <td class="p-4 text-center">
          <span class="inline-block px-2.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-emerald-50 text-emerald-800">
            ${item.level}
          </span>
        </td>
        <td class="p-4 text-right pr-6 font-serif font-bold text-lg text-stone-900">${item.readiness_score}</td>
      `;
      tBody.appendChild(row);
    });

    lucide.createIcons();
  } catch (err) {
    console.error(err);
  }
}



// Toast triggers
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');
  
  if (toast && toastText) {
    toastText.innerText = message;
    toast.style.display = 'flex';
    
    if (toastTimeout) clearTimeout(toastTimeout);
    
    toastTimeout = setTimeout(() => {
      toast.style.display = 'none';
    }, 4000);
  }
}

// Global window trigger handles
window.updateStepView = updateStepView;

window.resetAll = function() {
  const formSec = document.getElementById('prediction-form-wrapper');
  const loadSec = document.getElementById('prediction-loading-wrapper');
  const errSec = document.getElementById('prediction-error-wrapper');

  if (formSec) formSec.classList.remove('hidden');
  if (loadSec) loadSec.classList.add('hidden');
  if (errSec) errSec.classList.add('hidden');

  currentStep = 1;
  updateStepView();
};

// Initial loading triggers
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  syncAllFormInputs();
  updateStepView();

  // Setup drag drop events listener bounds matching
  const dropZone = document.getElementById('drop-zone');
  if (dropZone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.add('border-maroon-800', 'bg-maroon-50/20');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.remove('border-maroon-800', 'bg-maroon-50/20');
      }, false);
    });

    dropZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const file = dt.files[0];
      if (file && file.type === "application/pdf") {
        parseUploadedPdf(file);
      } else {
        showToast("Error: Upload a valid Career Resume PDF format dossier.");
      }
    }, false);
  }
});
