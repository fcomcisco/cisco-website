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
    { company: "TBR", logo: "assets/logos/TBR.jpeg", badge: "TBR" },
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
    { name: "MWAA", categoryKey: "cloud", img: "assets/logos/aws/mwaa.svg", badge: "MW" },
    { name: "ECS", categoryKey: "cloud", img: "assets/logos/aws/ecs.svg", badge: "ECS" },
    { name: "ECR", categoryKey: "cloud", img: "assets/logos/aws/ecr.svg", badge: "ECR" },
    { name: "CloudWatch", categoryKey: "cloud", img: "assets/logos/aws/cloudwatch.svg", badge: "CW" },
    { name: "RDS", categoryKey: "cloud", img: "assets/logos/aws/rds.svg", badge: "RDS" },
    { name: "S3", categoryKey: "cloud", img: "assets/logos/aws/s3.svg", badge: "S3" },

    // CI/CD & DevOps
    { name: "Azure DevOps", categoryKey: "cicd", iconClass: "devicon-azuredevops-plain colored" },
    { name: "Docker", categoryKey: "cicd", iconClass: "devicon-docker-plain colored" },
    { name: "Git", categoryKey: "cicd", iconClass: "devicon-git-plain colored" },
    { name: "Bitbucket", categoryKey: "cicd", iconClass: "devicon-bitbucket-original colored" },
    { name: "GitLab", categoryKey: "cicd", iconClass: "devicon-gitlab-plain colored" },

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
      {
        role: "Claims Analyst — Process Automation",
        client: "Insurance (Claims Adjusting)",
        location: "Hybrid, Santiago, Chile",
        dateRange: "Aug 2024 – Jan 2025",
        description:
          "Claims Analyst responsible for adjusting and analyzing insurance claims, combining business-process expertise with the development of automation solutions. I identified repetitive tasks within the claims workflow and automated them using VBA, reducing manual effort and errors in case management.",
        highlights: [
          "Adjusted and analyzed insurance claims, assessing coverage and documentation against technical and contractual criteria.",
          "Developed VBA macros to automate repetitive tasks in the claims process (report generation, data consolidation, calculations, and document formatting).",
          "Reduced processing times and manual errors by automating Excel-based workflows.",
          "Standardized templates and documents to streamline case management and improve traceability.",
          "Collaborated with the team to translate operational needs into concrete automated solutions.",
        ],
      },
    ],
    educationHeading: "Education",
    educationEntries: [
      {
        degree: "Engineering Degree in Computer Science and Informatics",
        school: "Universidad Andrés Bello",
        location: "Viña del Mar, Chile",
        dateRange: "2019 – 2024",
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
      {
        role: "Analista de Siniestros — Automatización de Procesos",
        client: "Seguros (Liquidación de Siniestros)",
        location: "Híbrido, Santiago, Chile",
        dateRange: "Ago 2024 – Ene 2025",
        description:
          "Analista de Siniestros responsable de ajustar y analizar reclamos de seguros, combinando experiencia en procesos de negocio con el desarrollo de soluciones de automatización. Identifiqué tareas repetitivas dentro del flujo de trabajo de siniestros y las automaticé usando VBA, reduciendo el esfuerzo manual y los errores en la gestión de casos.",
        highlights: [
          "Ajusté y analicé reclamos de seguros, evaluando cobertura y documentación según criterios técnicos y contractuales.",
          "Desarrollé macros en VBA para automatizar tareas repetitivas en el proceso de siniestros (generación de reportes, consolidación de datos, cálculos y formato de documentos).",
          "Reduje los tiempos de procesamiento y errores manuales automatizando flujos de trabajo basados en Excel.",
          "Estandaricé plantillas y documentos para agilizar la gestión de casos y mejorar la trazabilidad.",
          "Colaboré con el equipo para traducir necesidades operativas en soluciones automatizadas concretas.",
        ],
      },
    ],
    educationHeading: "Educación",
    educationEntries: [
      {
        degree: "Ingeniería en Computación e Informática",
        school: "Universidad Andrés Bello",
        location: "Viña del Mar, Chile",
        dateRange: "2019 – 2024",
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
      {
        role: "Schadenanalyst — Prozessautomatisierung",
        client: "Versicherung (Schadenregulierung)",
        location: "Hybrid, Santiago, Chile",
        dateRange: "Aug. 2024 – Jan. 2025",
        description:
          "Schadenanalyst, verantwortlich für die Prüfung und Analyse von Versicherungsansprüchen, mit einer Kombination aus Geschäftsprozesswissen und der Entwicklung von Automatisierungslösungen. Ich identifizierte sich wiederholende Aufgaben im Schadenbearbeitungsprozess und automatisierte sie mit VBA, wodurch manueller Aufwand und Fehler in der Fallbearbeitung reduziert wurden.",
        highlights: [
          "Prüfung und Analyse von Versicherungsansprüchen, Bewertung von Deckung und Dokumentation anhand technischer und vertraglicher Kriterien.",
          "Entwicklung von VBA-Makros zur Automatisierung wiederkehrender Aufgaben im Schadenprozess (Berichtserstellung, Datenkonsolidierung, Berechnungen und Dokumentformatierung).",
          "Reduzierung von Bearbeitungszeiten und manuellen Fehlern durch Automatisierung Excel-basierter Arbeitsabläufe.",
          "Standardisierung von Vorlagen und Dokumenten zur Optimierung der Fallbearbeitung und Verbesserung der Nachverfolgbarkeit.",
          "Zusammenarbeit mit dem Team, um operative Anforderungen in konkrete automatisierte Lösungen zu übersetzen.",
        ],
      },
    ],
    educationHeading: "Ausbildung",
    educationEntries: [
      {
        degree: "Ingenieurwesen in Informatik",
        school: "Universidad Andrés Bello",
        location: "Viña del Mar, Chile",
        dateRange: "2019 – 2024",
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
   by Devicon. AWS service icons are the real official Architecture Icon
   files (see assets/logos/aws/), referenced directly via the `img` field
   on the relevant CONFIG.techStack entries instead of living here.
   ===================================================================== */
const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.4-5.29 5.69.42.36.78 1.08.78 2.18 0 1.57-.02 2.84-.02 3.23 0 .3.21.66.8.55A11.52 11.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 5h18v14H3z"/><path d="M3 6l9 7 9-7"/></svg>`,
  genericDb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>`,
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

// Small icons shown next to each tech-stack category label (inherit the
// label's own color via currentColor). AWS uses the real logo file instead.
const CATEGORY_ICONS = {
  languages: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 6 2 12 8 18"/><polyline points="16 6 22 12 16 18"/></svg>`,
  backend: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="6" rx="1.5"/><rect x="2" y="14" width="20" height="6" rx="1.5"/><circle cx="6" cy="7" r="0.6" fill="currentColor"/><circle cx="6" cy="17" r="0.6" fill="currentColor"/></svg>`,
  databases: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>`,
  // Amazon AWS wordmark (Simple Icons), recolored via currentColor to match
  // the category label instead of a fixed-color raster logo.
  cloud: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/></svg>`,
  cicd: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7"/><path d="M21 3v6h-6"/></svg>`,
  tools: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
};

// Returns the inline SVG markup for one category-label icon.
function categoryIconMarkup(key) {
  return CATEGORY_ICONS[key] || "";
}

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
          <div class="cat-label cat-label-${key}">${categoryIconMarkup(key)}<span>${t.categories[key]}</span></div>
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
        `${entry.school} · ${entry.location}`,
        entry.dateRange
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
