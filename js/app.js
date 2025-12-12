document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
    document.body.classList.add('loaded');
});

function renderPortfolio() {
    renderMeta();
    renderHero();
    renderDistinctions();
    renderProjects();
    renderMedia();
    renderAbout();
    renderContact();
    renderFooter();
}

// Helper to safely set text content
function setText(id, text, isHTML = false) {
    const el = document.getElementById(id);
    if (el) {
        if (isHTML) el.innerHTML = text;
        else el.textContent = text;
    }
}

// Helper to set attribute
function setAttr(id, attr, value) {
    const el = document.getElementById(id);
    if (el) el.setAttribute(attr, value);
}

function renderMeta() {
    document.title = portfolioData.meta.title;
    document.documentElement.lang = portfolioData.meta.lang;
}

function renderHero() {
    setText('hero-subtitle-prefix', portfolioData.hero.subtitle_prefix);
    setText('hero-title-first', portfolioData.hero.title_first);
    setText('hero-title-last', portfolioData.hero.title_last); // If we separate this
    // In our simplified HTML, we might just put them together or expect spans. 
    // Let's assume the HTML structure will have specific spans or IDs.

    setText('hero-role', portfolioData.hero.role);
    setText('hero-description', portfolioData.hero.description, true); // true for HTML rendering

    setText('hero-cta-primary', portfolioData.hero.cta_primary.text);
    setAttr('hero-cta-primary-link', 'href', portfolioData.hero.cta_primary.link);

    setText('hero-cta-secondary', portfolioData.hero.cta_secondary.text);
    setAttr('hero-cta-secondary-link', 'href', portfolioData.hero.cta_secondary.link);

    // Stats
    const statsContainer = document.getElementById('hero-stats');
    if (statsContainer && portfolioData.hero.stats.length) {
        // Clear existing static content if any, or just strictly use the template logic below
        // For simplicity, we assume the container exists and we replace its content or it's empty
        statsContainer.innerHTML = portfolioData.hero.stats.map((stat, index) => `
            <div class="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity cursor-default group">
                <div class="p-2 border border-berkeley-blue/10 rounded-full group-hover:border-berkeley-blue/30 transition-colors">
                    <span class="material-symbols-outlined text-3xl text-berkeley-blue font-light">${stat.icon}</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">${stat.label}</span>
                    <span class="font-serif text-lg text-berkeley-blue leading-none">${stat.value}</span>
                </div>
            </div>
            ${index < portfolioData.hero.stats.length - 1 ? '<div class="w-[1px] h-10 bg-berkeley-blue/10 hidden sm:block"></div>' : ''}
        `).join('');
    }

    // Hero Image
    const heroImg = document.getElementById('hero-image');
    if (heroImg) {
        heroImg.style.backgroundImage = `url("${portfolioData.hero.image}")`;
    }

    // Badge
    setText('hero-badge-icon', portfolioData.hero.badge.icon);
    setText('hero-badge-text', portfolioData.hero.badge.text);
}

function renderDistinctions() {
    setText('distinctions-title', portfolioData.distinctions.title);
    const container = document.getElementById('distinctions-list');
    if (container) {
        container.innerHTML = `
            <div class="hidden md:block absolute left-[39px] top-4 bottom-4 w-[1px] bg-berkeley-blue/20"></div>
            ${portfolioData.distinctions.list.map(dist => `
                <div class="flex flex-col items-center relative z-10">
                    <div class="flex items-center justify-center w-20 h-20 rounded-full bg-cream border border-berkeley-blue/10 text-antique-gold shadow-sm">
                        <span class="material-symbols-outlined text-[32px]">${dist.icon}</span>
                    </div>
                </div>
                <div class="flex flex-col p-8 bg-cream hover:bg-white rounded-sm border border-transparent hover:border-antique-gold/30 hover:shadow-lg transition-all duration-300">
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-3">
                        <h3 class="text-2xl font-serif font-bold text-berkeley-blue">${dist.title}</h3>
                        ${dist.tag ? `<span class="text-xs font-bold tracking-widest uppercase text-antique-gold border border-antique-gold px-2 py-1">${dist.tag}</span>` : ''}
                    </div>
                    <p class="text-berkeley-blue font-medium mb-3 border-b border-berkeley-blue/10 pb-3 inline-block">${dist.subtitle}</p>
                    <p class="text-slate-600 leading-relaxed font-light">${dist.description}</p>
                </div>
            `).join('')}
        `;
    }
}

function renderProjects() {
    setText('projects-subtitle', portfolioData.projects.section_subtitle);
    setText('projects-title', portfolioData.projects.section_title);

    // View all links
    document.querySelectorAll('.view-all-projects').forEach(el => {
        el.innerHTML = `${portfolioData.projects.view_all_text} <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>`;
    });

    const container = document.getElementById('projects-grid');
    if (container) {
        container.innerHTML = portfolioData.projects.list.map(project => `
            <article class="group bg-white rounded-sm overflow-hidden border border-berkeley-blue/5 shadow-sm hover:shadow-xl transition-all duration-500">
                <div class="h-72 w-full overflow-hidden relative">
                    <div class="absolute inset-0 bg-berkeley-blue/20 group-hover:bg-berkeley-blue/0 transition-colors z-10"></div>
                    <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style='background-image: url("${project.image}");'></div>
                    <div class="absolute top-6 left-6 z-20">
                        <span class="inline-block px-3 py-1 bg-white text-berkeley-blue text-[10px] font-bold uppercase tracking-widest border border-berkeley-blue/10">${project.category}</span>
                    </div>
                </div>
                <div class="p-8 border-t border-berkeley-blue/5">
                    <h3 class="text-3xl font-serif text-berkeley-blue mb-4 group-hover:text-antique-gold transition-colors">${project.title}</h3>
                    <p class="text-slate-600 mb-6 leading-relaxed font-light">${project.description}</p>
                    <div class="flex items-center justify-between pt-6 border-t border-slate-100">
                        <div class="flex gap-4 text-slate-400">
                            ${project.icons.map(icon => `<span class="material-symbols-outlined text-[20px]" title="${icon.title}">${icon.icon}</span>`).join('')}
                        </div>
                        <button class="text-xs font-bold uppercase tracking-widest text-berkeley-blue hover:text-antique-gold transition-colors flex items-center gap-2">
                            Détails <span class="material-symbols-outlined text-sm">arrow_outward</span>
                        </button>
                    </div>
                </div>
            </article>
        `).join('');
    }
}

function renderMedia() {
    setText('media-subtitle', portfolioData.media.subtitle);
    setText('media-title', portfolioData.media.title);
    setText('media-quote', portfolioData.media.quote);

    const container = document.getElementById('media-list');
    if (container) {
        container.innerHTML = portfolioData.media.list.map(item => `
            <div class="group flex flex-col items-center gap-6 cursor-pointer opacity-40 hover:opacity-100 transition-all duration-500">
                <div class="h-10 flex items-center justify-center grayscale group-hover:grayscale-0">
                    ${item.type === 'complex' ? `
                        <div class="flex items-center gap-1">
                            <span class="font-bold text-3xl tracking-tighter text-berkeley-blue">${item.main}</span>
                            <div class="bg-berkeley-blue text-white text-[10px] font-bold px-1 py-0.5 rounded-sm">${item.sub}</div>
                        </div>
                    ` : `
                        <div class="text-3xl font-black italic font-serif text-berkeley-blue">${item.name || item.main}</div>
                    `}
                </div>
                <span class="text-[10px] font-bold uppercase tracking-widest text-antique-gold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">${item.label}</span>
            </div>
        `).join('');
    }
}

function renderAbout() {
    setText('about-subtitle', portfolioData.about.subtitle);
    setText('about-title', portfolioData.about.title, true);

    const textContainer = document.getElementById('about-text');
    if (textContainer) {
        textContainer.innerHTML = portfolioData.about.paragraphs.map((p, i) =>
            i === 0
                ? `<p class="first-letter:text-5xl first-letter:font-serif first-letter:text-berkeley-blue first-letter:mr-2 first-letter:float-left">${p}</p>`
                : `<p>${p}</p>`
        ).join('');
    }

    // Signature
    const sigImg = document.getElementById('about-signature-img');
    if (sigImg) sigImg.src = portfolioData.about.signature_image;

    setText('about-name', portfolioData.about.name);
    setText('about-role', portfolioData.about.role);

    // Quote Image
    const quoteBg = document.getElementById('about-quote-bg');
    if (quoteBg) quoteBg.style.backgroundImage = `url("${portfolioData.about.quote_image}")`;

    setText('about-quote-text', portfolioData.about.quote_text);
}

function renderContact() {
    setText('contact-title', portfolioData.contact.title);
    setText('contact-subtitle', portfolioData.contact.subtitle);
    setText('contact-intro-message', portfolioData.contact.intro_message);

    const suggestionsContainer = document.getElementById('contact-suggestions');
    if (suggestionsContainer) {
        suggestionsContainer.innerHTML = portfolioData.contact.suggestions.map(s => `
            <button class="px-4 py-2 bg-white border border-berkeley-blue/20 text-berkeley-blue text-xs font-bold uppercase tracking-wider hover:bg-berkeley-blue hover:text-white transition-all shadow-sm">
                ${s}
            </button>
        `).join('');
    }

    const socialsContainer = document.getElementById('contact-socials');
    if (socialsContainer) {
        socialsContainer.innerHTML = portfolioData.contact.socials.map(social => `
            <a class="flex flex-col items-center gap-2 text-slate-400 hover:text-berkeley-blue transition-colors group" href="${social.link}">
                <span class="material-symbols-outlined text-[32px] group-hover:scale-110 transition-transform">${social.icon}</span>
                <span class="text-xs font-bold uppercase tracking-widest">${social.label}</span>
            </a>
        `).join('');
    }
}

function renderFooter() {
    setText('footer-initials', portfolioData.footer.initials);
    setText('footer-copyright', portfolioData.footer.copyright);
    setText('footer-tagline', portfolioData.footer.tagline);
}
