/* =====================================================================
   CONFIG — edit everything here. This is the only section you need
   to touch to update content (name, links, tech stack). Translated
   text (titles, headings, work areas) lives in TRANSLATIONS below.
   ===================================================================== */
const CONFIG = {
  name: "Francisco Montecinos",
  avatar: "assets/profile.png",

  links: {
    linkedin: "https://www.linkedin.com/in/francisco-montecinos-6bab74246/",
    email: "mailto:francisco.montecinos1999@gmail.com",
  },

  // Work history. Role/client/date text lives in TRANSLATIONS.<lang>.experienceEntries
  // (same order as this array). logo -> image file; falls back to `badge` text
  // if the file is missing.
  experience: [
    { company: "Infosys", logo: "assets/logos/infosys.png", badge: "IN" },
  ],

  // Education. Degree/school/location text lives in TRANSLATIONS.<lang>.educationEntries
  // (same order as this array).
  education: [
    { logo: "assets/logos/unab.png", badge: "UNAB" },
  ],

  // Tech stack, grouped by categoryKey (see TRANSLATIONS.<lang>.categories
  // for the display label of each key). Order below = display order.
  // iconClass -> devicon class (see https://devicon.dev)
  // svg       -> inline SVG string, used when no devicon icon exists
  // badge     -> short text fallback, used when neither icon nor svg is set
  techStack: [
    // Languages
    { name: "Python", categoryKey: "languages", iconClass: "devicon-python-plain colored" },
    { name: "SQL", categoryKey: "languages", img: "assets/logos/SQL.png", badge: "SQL" },
    { name: "JavaScript", categoryKey: "languages", iconClass: "devicon-javascript-plain colored" },
    { name: "Java", categoryKey: "languages", iconClass: "devicon-java-plain colored" },

    // Backend / Frameworks
    { name: "Flask", categoryKey: "backend", iconClass: "devicon-flask-original" },
    { name: "FastAPI", categoryKey: "backend", iconClass: "devicon-fastapi-plain colored" },
    { name: "Airflow", categoryKey: "backend", iconClass: "devicon-apacheairflow-plain colored" },
    { name: "React", categoryKey: "backend", iconClass: "devicon-react-original colored" },

    // Databases
    { name: "Snowflake", categoryKey: "databases", svg: "snowflake" },
    { name: "SQL Server", categoryKey: "databases", iconClass: "devicon-microsoftsqlserver-plain colored" },
    { name: "MySQL", categoryKey: "databases", iconClass: "devicon-mysql-plain colored" },
    { name: "Firebase", categoryKey: "databases", img: "assets/logos/Firebase.png", badge: "FB" },

    // AWS
    { name: "MWAA", categoryKey: "cloud", svg: "mwaa" },
    { name: "ECS", categoryKey: "cloud", svg: "ecs" },
    { name: "ECR", categoryKey: "cloud", svg: "ecr" },
    { name: "CloudWatch", categoryKey: "cloud", svg: "cloudwatch" },
    { name: "RDS", categoryKey: "cloud", svg: "rds" },
    { name: "S3", categoryKey: "cloud", svg: "s3" },

    // CI/CD & DevOps
    { name: "Azure DevOps", categoryKey: "cicd", iconClass: "devicon-azuredevops-plain colored" },
    { name: "Docker", categoryKey: "cicd", iconClass: "devicon-docker-plain colored" },
    { name: "Git", categoryKey: "cicd", iconClass: "devicon-git-plain colored" },
    { name: "Bitbucket", categoryKey: "cicd", iconClass: "devicon-bitbucket-original colored" },

    // Tools
    { name: "Linux", categoryKey: "tools", iconClass: "devicon-linux-plain" },
    { name: "DBeaver", categoryKey: "tools", img: "assets/logos/DBeaver.png", badge: "DB" },
  ],

  // Display order of tech-stack categories.
  categoryOrder: ["languages", "backend", "databases", "cloud", "cicd", "tools"],

  // Architecture flow, left to right. Keys map to TRANSLATIONS.<lang>.archLabels
  // and to ARCH_ICON_MAP below.
  architecture: ["source", "airflow", "service", "db", "frontend"],
};

/* =====================================================================
   TRANSLATIONS — all user-facing text, per language. Add a language by
   adding a new key here (en/es/de supported out of the box) plus a
   button in the #langToggle markup.
   ===================================================================== */
const TRANSLATIONS = {
  en: {
    eyebrow: "Portfolio",
    title: "Software Engineer",
    linkedinLabel: "LinkedIn",
    emailLabel: "Email",
    stackHeading: "Tech Stack",
    stackSub: "Tools I use to build and run data platforms",
    experienceHeading: "Experience",
    experienceEntries: [
      {
        role: "System Engineer — Data & Platform Engineering",
        client: "Mining Sector Client (confidential)",
        location: "Remote",
        dateRange: "Aug 2025 – Present",
        description:
          "Data and Platform Engineer responsible for the maintenance, monitoring, and reliability of production applications for a global mining sector client. My work involves supporting and debugging data pipelines, resolving production incidents, deploying CI/CD solutions, and integrating systems, all within a corporate environment with strict security policies and approved tools.",
        highlights: [
          "Maintenance, debugging, and monitoring of production applications, ensuring their availability and reliability.",
          "Support and orchestration of data pipelines with Airflow (development and maintenance of DAGs).",
          "Resolving production incidents and troubleshooting in cloud environments (AWS).",
          "CI/CD deployments using Azure Pipelines and Docker containers.",
          "System integrations with Python (Flask / FastAPI).",
          "Remediation of security vulnerabilities in repositories and services.",
          "Work with SQL databases (Snowflake, SQL Server, MySQL) for support and analysis queries.",
        ],
      },
    ],
    educationHeading: "Education",
    educationEntries: [
      {
        degree: "Engineering Degree in Computer Science and Informatics",
        school: "Universidad Andrés Bello",
        location: "Viña del Mar, Chile",
      },
    ],
    archHeading: "Architecture",
    archCaption: "Deployed on AWS · CI/CD via Docker + Azure Pipelines",
    archLabels: {
      source: "Data sources",
      airflow: "Airflow",
      service: "Python services",
      db: "Snowflake / RDS",
      frontend: "React frontend",
    },
    categories: {
      languages: "Languages",
      backend: "Backend / Frameworks",
      databases: "Databases",
      cloud: "AWS",
      cicd: "CI/CD & DevOps",
      tools: "Tools",
    },
  },
  es: {
    eyebrow: "Portafolio",
    title: "Ingeniero de Software",
    linkedinLabel: "LinkedIn",
    emailLabel: "Correo",
    stackHeading: "Tecnologías",
    stackSub: "Herramientas que uso para construir y operar plataformas de datos",
    experienceHeading: "Experiencia",
    experienceEntries: [
      {
        role: "Ingeniero de Sistemas — Ingeniería de Datos y Plataformas",
        client: "Cliente del Sector Minero (confidencial)",
        location: "Remoto",
        dateRange: "Ago 2025 – Presente",
        description:
          "Ingeniero de Datos y Plataformas responsable del mantenimiento, monitoreo y confiabilidad de aplicaciones en producción para un cliente global del sector minero. Mi trabajo incluye el soporte y depuración de pipelines de datos, la resolución de incidentes en producción, el despliegue de soluciones CI/CD y la integración de sistemas, todo dentro de un entorno corporativo con políticas de seguridad estrictas y herramientas aprobadas.",
        highlights: [
          "Mantenimiento, depuración y monitoreo de aplicaciones en producción, asegurando su disponibilidad y confiabilidad.",
          "Soporte y orquestación de pipelines de datos con Airflow (desarrollo y mantenimiento de DAGs).",
          "Resolución de incidentes en producción y troubleshooting en entornos cloud (AWS).",
          "Despliegues CI/CD utilizando Azure Pipelines y contenedores Docker.",
          "Integraciones de sistemas con Python (Flask / FastAPI).",
          "Remediación de vulnerabilidades de seguridad en repositorios y servicios.",
          "Trabajo con bases de datos SQL (Snowflake, SQL Server, MySQL) para consultas de soporte y análisis.",
        ],
      },
    ],
    educationHeading: "Educación",
    educationEntries: [
      {
        degree: "Ingeniería en Computación e Informática",
        school: "Universidad Andrés Bello",
        location: "Viña del Mar, Chile",
      },
    ],
    archHeading: "Arquitectura",
    archCaption: "Desplegado en AWS · CI/CD con Docker + Azure Pipelines",
    archLabels: {
      source: "Fuentes de datos",
      airflow: "Airflow",
      service: "Servicios Python",
      db: "Snowflake / RDS",
      frontend: "Frontend React",
    },
    categories: {
      languages: "Lenguajes",
      backend: "Backend / Frameworks",
      databases: "Bases de datos",
      cloud: "AWS",
      cicd: "CI/CD y DevOps",
      tools: "Herramientas",
    },
  },
  de: {
    eyebrow: "Portfolio",
    title: "Softwareingenieur",
    linkedinLabel: "LinkedIn",
    emailLabel: "E-Mail",
    stackHeading: "Tech-Stack",
    stackSub: "Werkzeuge, mit denen ich Datenplattformen baue und betreibe",
    experienceHeading: "Berufserfahrung",
    experienceEntries: [
      {
        role: "Systemingenieur — Daten- und Plattformtechnik",
        client: "Kunde aus dem Bergbausektor (vertraulich)",
        location: "Remote",
        dateRange: "Aug. 2025 – Heute",
        description:
          "Data- und Platform Engineer, verantwortlich für Wartung, Monitoring und Zuverlässigkeit von Produktionsanwendungen für einen globalen Kunden aus dem Bergbausektor. Meine Arbeit umfasst die Unterstützung und Fehlerbehebung von Datenpipelines, die Lösung von Produktionsvorfällen, die Bereitstellung von CI/CD-Lösungen und die Systemintegration, alles innerhalb einer Unternehmensumgebung mit strengen Sicherheitsrichtlinien und freigegebenen Tools.",
        highlights: [
          "Wartung, Fehlerbehebung und Monitoring von Produktionsanwendungen zur Sicherstellung von Verfügbarkeit und Zuverlässigkeit.",
          "Unterstützung und Orchestrierung von Datenpipelines mit Airflow (Entwicklung und Wartung von DAGs).",
          "Behebung von Produktionsvorfällen und Fehlersuche in Cloud-Umgebungen (AWS).",
          "CI/CD-Deployments mit Azure Pipelines und Docker-Containern.",
          "Systemintegrationen mit Python (Flask / FastAPI).",
          "Behebung von Sicherheitslücken in Repositories und Diensten.",
          "Arbeit mit SQL-Datenbanken (Snowflake, SQL Server, MySQL) für Support- und Analyseabfragen.",
        ],
      },
    ],
    educationHeading: "Ausbildung",
    educationEntries: [
      {
        degree: "Ingenieurwesen in Informatik",
        school: "Universidad Andrés Bello",
        location: "Viña del Mar, Chile",
      },
    ],
    archHeading: "Architektur",
    archCaption: "Bereitgestellt auf AWS · CI/CD mit Docker + Azure Pipelines",
    archLabels: {
      source: "Datenquellen",
      airflow: "Airflow",
      service: "Python-Dienste",
      db: "Snowflake / RDS",
      frontend: "React-Frontend",
    },
    categories: {
      languages: "Sprachen",
      backend: "Backend / Frameworks",
      databases: "Datenbanken",
      cloud: "AWS",
      cicd: "CI/CD & DevOps",
      tools: "Werkzeuge",
    },
  },
};

let currentLang = localStorage.getItem("lang") || "en";
if (!TRANSLATIONS[currentLang]) currentLang = "en";

/* =====================================================================
   ICONS — small inline SVG set used for links, footer, diagram nodes,
   AWS service badges, and a generic fallback for tech logos not covered
   by Devicon. AWS badges use AWS's own real category colors so they stay
   familiar to anyone who knows the AWS console/icon set.
   ===================================================================== */
const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.4-5.29 5.69.42.36.78 1.08.78 2.18 0 1.57-.02 2.84-.02 3.23 0 .3.21.66.8.55A11.52 11.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 5h18v14H3z"/><path d="M3 6l9 7 9-7"/></svg>`,
  genericDb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>`,

  mwaa: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#8C4FFF"/><circle cx="9" cy="10" r="2" fill="#fff"/><circle cx="23" cy="10" r="2" fill="#fff"/><circle cx="16" cy="17" r="2" fill="#fff"/><circle cx="9" cy="24" r="2" fill="#fff"/><circle cx="23" cy="24" r="2" fill="#fff"/><g stroke="#fff" stroke-width="1.4"><path d="M9 10L16 17M23 10L16 17M16 17L9 24M16 17L23 24"/></g></svg>`,
  ecs: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#ED7100"/><g fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="8" width="14" height="5"/><rect x="9" y="14.5" width="14" height="5"/><rect x="9" y="21" width="14" height="3.5"/></g></svg>`,
  ecr: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#C2570A"/><g fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7v12"/><path d="M11 15l5 5 5-5"/><rect x="8" y="23" width="16" height="3"/></g></svg>`,
  cloudwatch: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#E7157B"/><path fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M7 17c3-6 6-9 9-9s6 3 9 9c-3 6-6 9-9 9s-6-3-9-9z"/><circle cx="16" cy="17" r="2.6" fill="#fff"/></svg>`,
  rds: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#2E5FE8"/><g fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"><ellipse cx="16" cy="10" rx="8" ry="3"/><path d="M8 10v12c0 1.7 3.6 3 8 3s8-1.3 8-3V10"/><path d="M8 16c0 1.7 3.6 3 8 3s8-1.3 8-3"/></g></svg>`,
  s3: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#7AA116"/><g fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 8c0-1 2.7-2 6-2s6 1 6 2-2.7 2-6 2-6-1-6-2z"/><path d="M10 8v16c0 1 2.7 2 6 2s6-1 6-2V8"/><path d="M10 16c0 1 2.7 2 6 2s6-1 6-2"/></g></svg>`,
  snowflake: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 2v20M4.2 6.5l15.6 11M4.2 17.5l15.6-11"/><path d="M12 5.5L9.8 3.8M12 5.5l2.2-1.7M12 18.5l-2.2 1.7M12 18.5l2.2 1.7M6.7 8.7L4.3 8.2M6.7 8.7l-1 2.3M17.3 8.7l2.4-.5M17.3 8.7l1 2.3M6.7 15.3l-1 2.3M6.7 15.3l-2.4-.5M17.3 15.3l1 2.3M17.3 15.3l2.4-.5"/></svg>`,
  source: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="4" rx="1"/><rect x="3" y="10" width="18" height="4" rx="1"/><rect x="3" y="16" width="18" height="4" rx="1"/></svg>`,
  airflow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>`,
  service: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>`,
  frontend: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M8 21h8M12 17v4"/></svg>`,
  arrow: `<svg viewBox="0 0 24 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M0 6h20M15 1l5 5-5 5"/></svg>`,
};

// Maps architecture node keys (CONFIG.architecture) to an icon key in ICONS.
const ARCH_ICON_MAP = {
  source: "source",
  airflow: "airflow",
  service: "service",
  db: "genericDb",
  frontend: "frontend",
};

/* =====================================================================
   RENDER
   ===================================================================== */
function renderHero() {
  const t = TRANSLATIONS[currentLang];
  document.getElementById("heroEyebrow").textContent = t.eyebrow;
  document.getElementById("heroName").textContent = CONFIG.name;
  document.getElementById("heroTitle").textContent = t.title;
  document.getElementById("avatarImg").src = CONFIG.avatar;

  const linksHtml = `
    <a href="${CONFIG.links.linkedin}" target="_blank" rel="noopener">${ICONS.linkedin} ${t.linkedinLabel}</a>
    <a href="${CONFIG.links.email}">${ICONS.email} ${t.emailLabel}</a>
  `;
  document.getElementById("heroLinks").innerHTML = linksHtml;
  document.getElementById("footerLinks").innerHTML = linksHtml;
  document.getElementById("footerCopy").textContent =
    `© ${new Date().getFullYear()} ${CONFIG.name}`;
}

// Builds the icon markup for one tech item, in priority order:
// devicon class -> inline svg key -> text badge -> initials fallback.
function techIconMarkup(tech) {
  if (tech.iconClass) {
    return `<i class="${tech.iconClass}"></i>`;
  }
  if (tech.svg && ICONS[tech.svg]) {
    return ICONS[tech.svg];
  }
  const label = tech.badge || tech.name.slice(0, 2).toUpperCase();
  if (tech.img) {
    return `<img src="${tech.img}" alt="${tech.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" /><div class="badge" style="display:none;">${label}</div>`;
  }
  return `<div class="badge">${label}</div>`;
}

function renderStack() {
  const t = TRANSLATIONS[currentLang];
  document.getElementById("stackHeading").textContent = t.stackHeading;
  document.getElementById("stackSub").textContent = t.stackSub;

  const container = document.getElementById("stackContainer");
  container.innerHTML = CONFIG.categoryOrder
    .map((key) => {
      const items = CONFIG.techStack.filter((i) => i.categoryKey === key);
      if (!items.length) return "";
      const itemsHtml = items
        .map(
          (i) => `
          <div class="tech-item">
            <div class="icon-wrap">${techIconMarkup(i)}</div>
            <div class="name">${i.name}</div>
          </div>`
        )
        .join("");
      return `
        <div class="stack-category fade-in">
          <div class="cat-label cat-label-${key}">${t.categories[key]}</div>
          <div class="stack-grid">${itemsHtml}</div>
        </div>`;
    })
    .join("");
}

// Shared markup for one experience/education row: a logo (with a text
// badge fallback if the image file is missing) plus title/sub/date lines,
// and optional extra HTML (description paragraph, highlight bullets).
function timelineItemMarkup(logo, badge, title, sub, date, extraHtml = "") {
  return `
    <div class="timeline-item fade-in">
      <div class="timeline-logo">
        <img src="${logo}" alt="${title} logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
        <div class="logo-fallback">${badge}</div>
      </div>
      <div class="timeline-info">
        <div class="timeline-title">${title}</div>
        <div class="timeline-sub">${sub}</div>
        ${date ? `<div class="timeline-date">${date}</div>` : ""}
        ${extraHtml}
      </div>
    </div>`;
}

function renderExperience() {
  const t = TRANSLATIONS[currentLang];
  document.getElementById("experienceHeading").textContent = t.experienceHeading;
  document.getElementById("experienceList").innerHTML = CONFIG.experience
    .map((exp, i) => {
      const entry = t.experienceEntries[i];
      const highlightsHtml = entry.highlights
        .map((h) => `<li><span class="dot"></span>${h}</li>`)
        .join("");
      const extra = `
        <p class="timeline-desc">${entry.description}</p>
        <ul class="timeline-highlights">${highlightsHtml}</ul>
      `;
      return timelineItemMarkup(
        exp.logo,
        exp.badge,
        entry.role,
        `${exp.company} · ${entry.client} · ${entry.location}`,
        entry.dateRange,
        extra
      );
    })
    .join("");
}

function renderEducation() {
  const t = TRANSLATIONS[currentLang];
  document.getElementById("educationHeading").textContent = t.educationHeading;
  document.getElementById("educationList").innerHTML = CONFIG.education
    .map((edu, i) => {
      const entry = t.educationEntries[i];
      return timelineItemMarkup(
        edu.logo,
        edu.badge,
        entry.degree,
        `${entry.school} · ${entry.location}`
      );
    })
    .join("");
}

function renderArchitecture() {
  const t = TRANSLATIONS[currentLang];
  document.getElementById("archHeading").textContent = t.archHeading;
  document.getElementById("archCaption").textContent = t.archCaption;

  const nodes = CONFIG.architecture
    .map((key, i) => {
      const node = `
        <div class="diagram-node">
          <div class="node-icon">${ICONS[ARCH_ICON_MAP[key]]}</div>
          <span>${t.archLabels[key]}</span>
        </div>`;
      const arrow =
        i < CONFIG.architecture.length - 1
          ? `<div class="diagram-arrow">${ICONS.arrow}</div>`
          : "";
      return node + arrow;
    })
    .join("");
  document.getElementById("diagram").innerHTML = nodes;
}

// Re-renders all translatable sections for the current language.
function renderAll() {
  renderHero();
  renderStack();
  renderExperience();
  renderEducation();
  renderArchitecture();
}

/* =====================================================================
   THEME TOGGLE (persisted via localStorage)
   ===================================================================== */
function initTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  updateToggleIcon(saved);
  initVanta(saved);

  document.getElementById("themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateToggleIcon(next);
    initVanta(next);
  });
}

function updateToggleIcon(theme) {
  document.getElementById("themeToggle").textContent = theme === "dark" ? "🌙" : "☀️";
}

/* =====================================================================
   VANTA FOG BACKGROUND (fixed, full-page; recolored per theme)
   ===================================================================== */
const VANTA_PALETTES = {
  dark: {
    highlightColor: 0x4f7fe0,
    midtoneColor: 0x1c2b4a,
    lowlightColor: 0x0b0e14,
    baseColor: 0x0b0e14,
  },
  light: {
    highlightColor: 0x2f6fed,
    midtoneColor: 0x8fb8ff,
    lowlightColor: 0xd8e6ff,
    baseColor: 0xf7f8fa,
  },
};

let vantaEffect = null;

function initVanta(theme) {
  if (!window.VANTA || !window.VANTA.FOG) return;
  if (vantaEffect) vantaEffect.destroy();
  vantaEffect = window.VANTA.FOG({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    blurFactor: 0.6,
    speed: 1.4,
    zoom: 1.2,
    ...VANTA_PALETTES[theme],
  });
}

/* =====================================================================
   LANGUAGE TOGGLE (persisted via localStorage)
   ===================================================================== */
function initLang() {
  document.documentElement.setAttribute("lang", currentLang);
  updateLangButtons();

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem("lang", currentLang);
      document.documentElement.setAttribute("lang", currentLang);
      updateLangButtons();
      renderAll();
      // Re-rendered sections lose their scroll-triggered "visible" class;
      // since this is a language switch (not a first paint), reveal them
      // immediately instead of waiting for another scroll.
      document.querySelectorAll(".fade-in").forEach((el) => el.classList.add("visible"));
    });
  });
}

function updateLangButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

/* =====================================================================
   FADE-IN ON SCROLL
   ===================================================================== */
function initScrollFade() {
  const targets = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((el) => observer.observe(el));
}

/* =====================================================================
   INIT
   ===================================================================== */
renderAll();
initTheme();
initLang();
initScrollFade();
