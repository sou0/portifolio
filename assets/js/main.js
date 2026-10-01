/**
 * Rodrigo Rego de Lima - Portfolio Main Script
 * Ultra-fast Vanilla JS with interactive terminal, project filtering, and smooth UX
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Switcher (Dark / Light)
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'dark');

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    if (sunIcon && moonIcon) {
      if (theme === 'light') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      }
    }
  }

  // 2. Mobile Menu Navigation
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close when clicking link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 3. Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });

    // Back to top button visibility
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  });

  // 4. Project Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 5. Interactive Terminal Emulation
  const termInput = document.getElementById('term-input');
  const termBody = document.getElementById('term-body');

  const commands = {
    help: () => `
<div class="term-output">
  Comandos disponíveis:<br>
  - <span class="term-cmd">skills</span>: Lista as principais tecnologias e competências<br>
  - <span class="term-cmd">projects</span>: Exibe os principais repositórios e ferramentas autorais<br>
  - <span class="term-cmd">contact</span>: Informações diretas de contato<br>
  - <span class="term-cmd">whoami</span>: Breve biografia sobre Rodrigo<br>
  - <span class="term-cmd">clear</span>: Limpa o terminal
</div>`,
    whoami: () => `
<div class="term-output">
  <span class="term-highlight">Rodrigo Rego de Lima</span><br>
  Desenvolvedor Web & Engenheiro de Software focado em soluções robustas,<br>
  desenvolvimento de plugins WordPress desacoplados, Next.js, SEO Técnico e Core Web Vitals.
</div>`,
    skills: () => `
<div class="term-output">
  <span class="term-key">Linguagens:</span> PHP, JavaScript (ES6+), Python, SQL<br>
  <span class="term-key">Frontend:</span> Next.js, React.js, HTML5/CSS3 moderno, Elementor Pro<br>
  <span class="term-key">WordPress:</span> Plugins Customizados, Hooks/Filters, ACF, Cache Bypass<br>
  <span class="term-key">SEO & Perf:</span> Core Web Vitals (LCP, FID/INP, CLS), Dynamic NoIndex, Schema<br>
  <span class="term-key">Data & Backend:</span> PostgreSQL, MySQL, MongoDB, Firebase Serverless, n8n
</div>`,
    projects: () => `
<div class="term-output">
  1. <span class="term-highlight">Junior's SEO Plugin</span> (Next.js / React) - Manipulação de SEO e noindex dinâmico.<br>
  2. <span class="term-highlight">Junior's SEO & Meta CSV Updater</span> (WordPress) - Atualizações em lote com rollback.<br>
  3. <span class="term-highlight">Junior's Banner Manager</span> (WordPress) - Injeção dinâmica por funil com bypass de cache.<br>
  4. <span class="term-highlight">Odonto Vieira WebApp</span> (Next.js & Firebase) - Alta performance e SEO avançado.
</div>`,
    contact: () => `
<div class="term-output">
  <span class="term-key">WhatsApp:</span> (81) 98165-6577<br>
  <span class="term-key">Email:</span> rodrigoregodelima01@gmail.com<br>
  <span class="term-key">GitHub:</span> github.com/sou0<br>
  <span class="term-key">Localização:</span> Paulista, PE
</div>`,
    clear: () => {
      termBody.innerHTML = `
        <div class="term-line">
          <span class="term-prompt">rodrigo@portfolio:~$</span>
          <span class="term-cmd">cat resumo.json</span>
        </div>
        <div class="term-output">
          {<br>
          &nbsp;&nbsp;<span class="term-key">"nome"</span>: <span class="term-val">"Rodrigo Rego de Lima"</span>,<br>
          &nbsp;&nbsp;<span class="term-key">"funcao"</span>: <span class="term-val">"Desenvolvedor Web & Engenheiro WordPress / Next.js"</span>,<br>
          &nbsp;&nbsp;<span class="term-key">"core_skills"</span>: [<span class="term-val">"PHP"</span>, <span class="term-val">"WordPress Plugins"</span>, <span class="term-val">"Next.js"</span>, <span class="term-val">"JavaScript"</span>, <span class="term-val">"SEO Técnico"</span>],<br>
          &nbsp;&nbsp;<span class="term-key">"status"</span>: <span class="term-val">"Disponível para novos projetos e desafios"</span><br>
          }
        </div>
      `;
      return '';
    }
  };

  if (termInput && termBody) {
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const rawCmd = termInput.value.trim().toLowerCase();
        if (!rawCmd) return;

        // Create line representing user input
        const userLine = document.createElement('div');
        userLine.className = 'term-line';
        userLine.innerHTML = `<span class="term-prompt">rodrigo@portfolio:~$</span> <span class="term-cmd">${escapeHtml(termInput.value)}</span>`;
        termBody.appendChild(userLine);

        if (commands[rawCmd]) {
          const res = commands[rawCmd]();
          if (res) {
            const outDiv = document.createElement('div');
            outDiv.innerHTML = res;
            termBody.appendChild(outDiv);
          }
        } else {
          const errDiv = document.createElement('div');
          errDiv.className = 'term-output';
          errDiv.innerHTML = `<span style="color: #ef4444;">Comando não reconhecido: "${escapeHtml(rawCmd)}". Digite <span class="term-cmd">help</span> para comandos disponíveis.</span>`;
          termBody.appendChild(errDiv);
        }

        termInput.value = '';
        termBody.scrollTop = termBody.scrollHeight;
      }
    });
  }

  function escapeHtml(text) {
    return text.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m]));
  }

  // 6. Copy to Clipboard Utility with Toast Notification
  window.copyToClipboard = function(text, label) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copiado com sucesso!`);
    }).catch(() => {
      showToast(`Erro ao copiar. Texto: ${text}`);
    });
  };

  function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // 7. Contact Form Handling (Direct WhatsApp Dispatch)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      const fullMessage = `Olá Rodrigo! Meu nome é ${name} (${email}).%0A*Assunto:* ${subject}%0A*Mensagem:* ${message}`;
      const whatsappUrl = `https://wa.me/5581981656577?text=${encodeURIComponent(fullMessage)}`;

      // Notify and open WhatsApp
      showToast('Redirecionando para o WhatsApp...');
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 700);
    });
  }

  // 8. Back to Top Smooth Scroll
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
