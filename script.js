/**
 * DR. WILSON - CIRURGIA BARIÁTRICA E METABÓLICA
 * Interactive Logic & Experience Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initFAQAccordion();
  initScrollReveal();
  initCounters();
  initProcedureModals();
});

/* --- Header Scroll State --- */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --- Mobile Menu Toggle --- */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggleBtn.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      toggleBtn.classList.remove('active');
    });
  });
}

/* --- FAQ Accordion --- */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other active items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Toggle clicked item
      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/* --- Scroll Reveal Animations --- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* --- Animated Numerical Counters --- */
function initCounters() {
  const counterElements = document.querySelectorAll('.metric-number[data-count]');
  if (!counterElements.length) return;

  let animated = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counterElements.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-count'), 10);
          const suffix = counter.getAttribute('data-suffix') || '';
          const prefix = counter.getAttribute('data-prefix') || '';
          let count = 0;
          const duration = 2000;
          const stepTime = 30;
          const increment = Math.ceil(target / (duration / stepTime));

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              count = target;
              clearInterval(timer);
            }
            counter.innerText = `${prefix}${count.toLocaleString('pt-BR')}${suffix}`;
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.5 });

  const metricsSection = document.querySelector('.metrics-section');
  if (metricsSection) counterObserver.observe(metricsSection);
}

/* --- Procedure Details Modal System --- */

const procedureData = {
  bariatrica: {
    title: "Cirurgia Bariátrica & Metabólica",
    subtitle: "Bypass Gástrico em Y de Roux e Sleeve Gástrico Videolaparoscópico",
    tag: "Técnica Minimamente Invasiva • Videolaparoscopia",
    text: "A Cirurgia Bariátrica é o tratamento de maior eficácia comprovada cientificamente para a obesidade grave e doenças metabólicas associadas. Realizada por videolaparoscopia (com pequenos furos de 5mm a 10mm), proporciona remissão expressiva do Diabetes Tipo 2, controle da pressão arterial e melhora substancial na qualidade de vida.",
    bullets: [
      "Perda média de 30% a 40% do peso corporal total",
      "Remissão imediata ou controle rigoroso do Diabetes Tipo 2",
      "Alta hospitalar precoce (geralmente entre 24h e 48h)",
      "Recuperação estética com cicatrizes imperceptíveis",
      "Acompanhamento continuado por equipe multidisciplinar"
    ]
  },
  hernia: {
    title: "Cirurgia de Hérnia Abdominal & Inguinal",
    subtitle: "Correção por Videolaparoscopia com Telas de Alta Tecnologia",
    tag: "Recuperação Acelerada • Menos Dor Pós-Operatória",
    text: "A correção laparoscópica de hérnias inguinais, umbilicais e incisionais utiliza pequenas incisões para posicionar uma tela de reforço sintética de alta biocompatibilidade por trás da parede muscular, eliminando o abaulamento com retorno rápido às atividades normais.",
    bullets: [
      "Incisões milimétricas com preservação estética",
      "Taxa de recidiva (retorno da hérnia) inferior a 1%",
      "Menor necessidade de analgésicos no pós-operatório",
      "Retorno ao trabalho e rotina em poucos dias"
    ]
  },
  vesicula: {
    title: "Colecistectomia (Cirurgia da Vesícula Biliar)",
    subtitle: "Remoção Segura de Cálculos Biliares por Videolaparoscopia",
    tag: "Procedimento de Rotina • Internação de 24h",
    text: "A presença de pedras na vesícula biliar pode causar cólicas intensas, inflamação (colecistite) e complicações como pancreatite. A cirurgia por videolaparoscopia remove a vesícula doente com máxima segurança anatômica.",
    bullets: [
      "Procedimento rápido e amplamente consolidado",
      "Prevenção definitiva de crises de cólica biliar",
      "Internação de apenas 1 dia na maioria dos casos",
      "Retorno gradual à alimentação normal sem desconforto"
    ]
  },
  diastase: {
    title: "Correção de Diástase Abdominal",
    subtitle: "Reaproximação Muscular e Restauração Funcional Pós-Gestação",
    tag: "Estética & Funcionalidade Abdominal",
    text: "A diástase dos músculos retos abdominais (comum após a gestação ou grandes oscilações de peso) causa fraqueza no core, dores lombares e projeção abdominal persistente. A cirurgia restaura a anatomia muscular original.",
    bullets: [
      "Recuperação do tônus e estabilidade da parede abdominal",
      "Alívio efetivo de dores lombares crônicas associadas",
      "Associação possível com abdominoplastia quando indicada",
      "Cicatriz oculta e resultado harmonioso"
    ]
  },
  reganho: {
    title: "Tratamento para Reganho de Peso (Revisão Bariátrica)",
    subtitle: "Protocolo Multidisciplinar Avançado para Readequação Metabólica",
    tag: "Investigação Cautelosa • Suporte 360°",
    text: "O reganho de peso pós-bariátrica exige uma abordagem sem julgamentos. Investigamos aspectos anatômicos (dilatação da sutura ou pouch) e metabólicos/comportamentais, oferecendo procedimentos revisionais cirúrgicos ou endoscópicos acompanhados por nutrição e psicologia.",
    bullets: [
      "Avaliação anatômica e metabólica minuciosa",
      "Opções revisionais por videolaparoscopia ou plasma de argônio",
      "Reeducação nutricional e acompanhamento comportamental",
      "Retomada segura da trajetória de perda de peso"
    ]
  }
};

function initProcedureModals() {
  const modalOverlay = document.getElementById('procedureModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalTag = document.getElementById('modalTag');
  const modalText = document.getElementById('modalText');
  const modalBullets = document.getElementById('modalBullets');
  const modalWspBtn = document.getElementById('modalWspBtn');

  if (!modalOverlay) return;

  document.querySelectorAll('[data-procedure]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-procedure');
      const data = procedureData[key];

      if (!data) return;

      modalTitle.innerText = data.title;
      modalSubtitle.innerText = data.subtitle;
      modalTag.innerText = data.tag;
      modalText.innerText = data.text;
      
      modalBullets.innerHTML = data.bullets
        .map(b => `<li style="display:flex; align-items:center; gap:10px; margin-bottom:8px; font-size:0.925rem; font-weight:600; color:var(--color-navy-dark);"><svg style="width:18px; height:18px; color:var(--color-emerald-primary); flex-shrink:0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> ${b}</li>`)
        .join('');

      modalWspBtn.href = `https://wa.me/5511999999999?text=${encodeURIComponent('Olá, gostaria de saber mais informações sobre a ' + data.title + ' com o Dr. Wilson.')}`;

      modalOverlay.classList.add('active');
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });
}
