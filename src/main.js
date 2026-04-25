const REASONS = [
  "The way your voice makes my mornings feel closer, even through calls.",
  "How you somehow comfort me from miles away when I need you most.",
  "Your patience during days when distance feels harder than usual.",
  "The sound of your laugh that reaches me even across the distance.",
  "How you make me feel loved and safe, no matter how far you are.",
  "Your kindness that I feel even through simple messages.",
  "The way you look at me during video calls like distance doesn't exist.",
  "How you remember small details I share, even from miles away.",
  "Your constant belief in me, even when we can't stand side by side.",
  "The way you say my name that makes my heart feel closer to you.",
  "How one text from you can turn my whole day around.",
  "Your humor that makes distance feel lighter and easier.",
  "The way you help me grow while loving me just as I am.",
  "Your strength that keeps us going despite the distance.",
  "How you've become my comfort, even without physical hugs.",
  "The happiness I feel knowing we share the same sky and sun.",
  "Your passion for life that inspires me every single day.",
  "How you've become a part of my everyday life, even from afar.",
  "The hope I feel when I imagine the day we finally meet.",
  "Simply because you are you, and distance could never change my love for you."
];

const LOVELY_NOTES = [
  { icon: 'coffee', text: "Every morning feels warmer knowing you exist somewhere thinking of me too." },
  { icon: 'moon', text: "No matter how far we are, we still share the same moon and the same dreams." },
  { icon: 'send', text: "Every message from you feels like a hug traveling across the distance." },
  { icon: 'sun', text: "Even from miles away, your love reaches me and brightens my darkest days." }
];

const ICONS = {
  heart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  coffee: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Z"/><path d="M6 2v2"/><path d="M17 12h1a3 3 0 0 1 0 6h-1"/></svg>',
  moon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
  send: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  sun: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  stars: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.91 5.89L20 10.8l-4.59 4.46L16.5 21 12 18.25 7.5 21l1.09-5.74L4 10.8l6.09-1.91L12 3Z"/></svg>',
  sparkles: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.91 5.89L20 10.8l-4.59 4.46L16.5 21 12 18.25 7.5 21l1.09-5.74L4 10.8l6.09-1.91L12 3Z"/><path d="m5 3 1.05 3.25L9 7.3 5.95 8.35 5 11.6l-.95-3.25L1 7.3l3.05-1.05L5 3Z"/><path d="m19 16 1.05 3.25L23 20.3l-3.05 1.05L19 24.6l-.95-3.25L15 20.3l3.05-1.05L19 16Z"/></svg>',
  book: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
  inf: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"/></svg>',
  cloud: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.2-4-4.5A7 7 0 1 0 5 13.5h0a5 5 0 1 0 4.8 6.2h7.7Z"/></svg>'
};

const SECTIONS = {
  welcome: {
    label: 'Home',
    icon: 'heart',
    render: () => `
      <div class="space-y-6">
        <p>Welcome home to this little corner of my heart, my dearest Niyaz.</p>
        <p>This space is something I created with so much love, just for you. A place where the miles between us slowly fade away, and where every thought I have of you is carefully written and saved.</p>
        <p>Every word here carries a piece of my love for you. Sometimes I wish I could hold your hand and tell you all of this while looking into your eyes. But until that day comes, this little world is my way of keeping you close to me.</p>
        <p>So take your time here, read every word slowly, and feel how deeply you are loved. Because no matter how far you are, you will always have a home in my heart — today, tomorrow, and always. 💜</p>
      </div>
    `
  },
  notes: {
    label: 'Notes',
    icon: 'book',
    render: () => `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${LOVELY_NOTES.map(note => `
          <div class="p-4 rounded-xl border border-rose-300/5 bg-white/5 flex items-start gap-4 text-left">
            <div class="text-rose-400 mt-1">${ICONS[note.icon]}</div>
            <p class="text-xs text-rose-100/80 italic">${note.text}</p>
          </div>
        `).join('')}
      </div>
    `
  },
  reasons: {
    label: 'Reasons',
    icon: 'stars',
    render: () => `
      <div class="h-[350px] overflow-y-auto pr-4 custom-scrollbar space-y-4 text-left">
        ${REASONS.map((reason, i) => `
          <div class="flex gap-4 items-start">
            <span class="text-rose-400 font-serif italic text-base shrink-0">${i + 1}.</span>
            <p class="text-rose-100/90 text-[13px] leading-relaxed">${reason}</p>
          </div>
        `).join('')}
      </div>
    `
  },
  letter: {
    label: 'Letter',
    icon: 'send',
    render: () => `
      <div class="text-left font-serif space-y-6 text-rose-100/95 leading-relaxed text-sm">
        <p class="italic text-purple-300">My dearest Niyaz,</p>
        <p class="text-purple-100">They say distance makes the heart grow fonder, but for me, distance has only made my love for you stronger and more certain with each passing day. Every mile between us reminds me how meaningful our connection truly is.</p>
        <p class="text-purple-100">You are not just someone I talk to—you are the first person I think of when something happens. When I feel tired or overwhelmed, your words become my comfort. Even a simple message from you has the power to change my entire mood.</p>
        <p class="text-purple-100">One day, distance will no longer stand between us. Until that day comes, I will keep holding onto you with love, patience, and hope, believing in our future together.</p>
        <p class="text-purple-100">I love you more than words can express. You are not just someone special to me—you are my safe place, my heart, and my forever.</p>
        <p class="italic text-right text-xs text-purple-300 opacity-80">— Forever yours 💜</p>
      </div>
    `
  },
  future: {
    label: 'Future',
    icon: 'cloud',
    render: () => `
      <div class="space-y-6 text-center italic">
        <div class="text-rose-400 opacity-60">${ICONS.inf}</div>
        <p class="text-lg text-rose-100/90 font-serif leading-relaxed px-4">
          "I dream of the day when 'goodnight' isn't said through a phone screen, but whispered against your skin."
        </p>
        <p class="text-xs text-rose-100/60 leading-relaxed max-w-sm mx-auto font-sans uppercase tracking-widest">
          A quiet kitchen, a shared morning, no more airports. Just us.
        </p>
        <p class="text-center text-purple-300 text-xl font-serif mt-8 italic">
          At the end of every page, every thought, and every dream… there is only one truth — I love you, mama. 💜
        </p>
      </div>
    `
  }
};

// --- App State ---
let isOpen = false;
let activeSection = 'welcome';
let isSurpriseVisible = false;

// --- Elements ---
const contentAnchor = document.getElementById('content-anchor');
const heartIconPlaceholder = document.getElementById('heart-icon-svg');
const btnOpenHeart = document.getElementById('btn-open-heart');
const interactionZone = document.getElementById('interaction-zone');
const mainCardWrapper = document.getElementById('main-card-wrapper');
const activeContentArea = document.getElementById('active-content');
const sectionLabel = document.getElementById('current-section-label');
const navButtonsContainer = document.getElementById('nav-buttons');
const surpriseArea = document.getElementById('surprise-area');
const cardContentArea = document.getElementById('card-content-area');
const btnSurpriseToggle = document.getElementById('btn-surprise-toggle');
const btnCloseSurprise = document.getElementById('btn-close-surprise');
const sparklesIcon = document.getElementById('sparkles-icon');
const heartsContainer = document.getElementById('hearts-container');

// --- Functions ---
function init() {
  contentAnchor.style.opacity = '1';
  heartIconPlaceholder.innerHTML = ICONS.heart;
  sparklesIcon.innerHTML = ICONS.sparkles;
  createFloatingHearts();
  renderNavButtons();
  updateContent();

  btnOpenHeart.addEventListener('click', openHeart);
  btnSurpriseToggle.addEventListener('click', toggleSurprise);
  btnCloseSurprise.addEventListener('click', () => toggleSurprise(false));
}

function createFloatingHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = ICONS.heart;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 10}s`;
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heart.style.bottom = '-50px';
    heartsContainer.appendChild(heart);
  }
}

function openHeart() {
  isOpen = true;
  interactionZone.classList.add('hidden');
  mainCardWrapper.classList.remove('hidden');
  setTimeout(() => {
    mainCardWrapper.style.opacity = '1';
    mainCardWrapper.style.transform = 'translateY(0)';
  }, 10);
}

function toggleSurprise(force = null) {
  isSurpriseVisible = force !== null ? force : !isSurpriseVisible;
  
  if (isSurpriseVisible) {
    cardContentArea.classList.add('opacity-0');
    setTimeout(() => {
      cardContentArea.classList.add('hidden');
      surpriseArea.classList.remove('hidden');
      setTimeout(() => surpriseArea.classList.add('opacity-100'), 10);
    }, 500);
    btnSurpriseToggle.querySelector('svg').style.fill = '#e11d48';
  } else {
    surpriseArea.classList.remove('opacity-100');
    setTimeout(() => {
      surpriseArea.classList.add('hidden');
      cardContentArea.classList.remove('hidden');
      setTimeout(() => cardContentArea.classList.remove('opacity-0'), 10);
    }, 500);
    btnSurpriseToggle.querySelector('svg').style.fill = 'transparent';
  }
}

function changeSection(id) {
  activeSection = id;
  activeContentArea.style.opacity = '0';
  setTimeout(() => {
    updateContent();
    activeContentArea.style.opacity = '1';
  }, 300);
}

function updateContent() {
  const section = SECTIONS[activeSection];
  activeContentArea.innerHTML = section.render();
  sectionLabel.textContent = activeSection === 'welcome' ? 'Your space. Your thoughts.' : section.label.toUpperCase();
  
  renderNavButtons();
}

function renderNavButtons() {
  navButtonsContainer.innerHTML = '';
  Object.keys(SECTIONS).forEach(id => {
    const section = SECTIONS[id];
    const btn = document.createElement('button');
    btn.className = `p-3 rounded-full border transition-all cursor-pointer ${
      activeSection === id 
        ? 'bg-rose-500/20 border-rose-400/40 text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.2)]' 
        : 'bg-transparent border-rose-300/5 text-rose-100/20 hover:text-rose-100/50 hover:border-rose-300/10'
    }`;
    btn.innerHTML = ICONS[section.icon];
    btn.title = section.label;
    btn.onclick = () => changeSection(id);
    navButtonsContainer.appendChild(btn);
  });
}

// Start
document.addEventListener('DOMContentLoaded', init);
