let publications = [
  {
    year: "2026",
    category: "photonics",
    title: "Numerical Analysis of Balanced Geometry Selection in Circular PCF-SPR Biosensors for Cancer and Bacterial Detection",
    venue: "Optics Continuum, Optica Publishing Group Â· 5(4), 1115â€“1141",
    role: "First Author",
    type: "Journal Article",
    stage: "masters",
    stageLabel: "Masters - AIUB",
    doi: "https://doi.org/10.1364/OPTCON.592405"
  },
  {
    year: "2026",
    category: "photonics",
    title: "Unlocking Early Detection: A Highly Sensitive Circular Shaped PCF-Based SPR Biosensor for Breast Cancer",
    venue: "Lecture Notes in Networks and Systems, Springer Â· pp. 512â€“521",
    role: "Fourth Author",
    type: "Book Chapter",
    stage: "masters",
    stageLabel: "Masters - AIUB",
    doi: "https://doi.org/10.1007/978-3-032-15346-3_36"
  },
  {
    year: "2025",
    category: "photonics",
    title: "Highly Sensitive Dual-Mode PCF-SPR Biosensor for Rapid Detection of PC-12 Adrenal Cancer Cells",
    venue: "ICTP25 IEEE Conference",
    role: "First Author",
    type: "Conference Presentation",
    stage: "masters",
    stageLabel: "Masters - AIUB"
  },
  {
    year: "2025",
    category: "photonics",
    title: "Highly Sensitive Circular PCF-Based SPR Biosensor for Early Blood Cancer Detection",
    venue: "COMPASConf25 IEEE Conference",
    role: "Corresponding Author",
    type: "Conference Presentation",
    stage: "masters",
    stageLabel: "Masters - AIUB"
  },
  {
    year: "2025",
    category: "photonics",
    title: "Long Haul Optical Transmission Using Multi-Channel OAM-PDM Multiplexing over HMMF-FSO Communication System",
    venue: "Accepted Springer Conference",
    role: "Corresponding Author",
    type: "Accepted Conference Paper",
    stage: "masters",
    stageLabel: "Masters - AIUB"
  },
  {
    year: "2025",
    category: "robotics",
    title: "Design and Optimization of an IR-Based Automation System with Telegram Bot Integration for Remote Device Control",
    venue: "4th International Conference on Robotics, Electrical and Signal Processing Techniques (ICREST)",
    role: "Corresponding Author",
    type: "IEEE Conference",
    stage: "d2a2i",
    stageLabel: "Research Assistant - D2A2I",
    doi: "https://doi.org/10.1109/ICREST63960.2025.10914456"
  },
  {
    year: "2024",
    category: "robotics",
    title: "Smart Parking System with Optical Character Reading Technology",
    venue: "27th International Conference on Computer and Information Technology (ICCIT)",
    role: "Corresponding Author",
    type: "IEEE Conference",
    stage: "d2a2i",
    stageLabel: "Research Assistant - D2A2I",
    doi: "https://doi.org/10.1109/ICCIT64611.2024.11022496"
  },
  {
    year: "2024",
    category: "robotics",
    title: "An IoT-Based Autonomous System for Oil Spill Detection",
    venue: "Emerging Science Innovation Â· Vol. 4, pp. 41â€“55",
    role: "Corresponding Author",
    type: "Journal Article",
    stage: "d2a2i",
    stageLabel: "Research Assistant - D2A2I",
    doi: "https://doi.org/10.46604/emsi.2024.13760"
  },
  {
    year: "2024",
    category: "energy",
    title: "Design and Performance Analysis of Hydrogen Fuel Cell Vehicles in Bangladesh",
    venue: "IEEE PEEIACON",
    role: "First Author",
    type: "IEEE Conference",
    stage: "undergrad",
    stageLabel: "Bachelor - AIUB",
    doi: "https://doi.org/10.1109/PEEIACON63629.2024.10800351"
  },
  {
    year: "2024",
    category: "robotics",
    title: "Cloud-Based Ceiling Robot Assisted Intelligent Warehouse Management System",
    venue: "IEEE PEEIACON",
    role: "First Author",
    type: "IEEE Conference",
    stage: "undergrad",
    stageLabel: "Bachelor - AIUB",
    doi: "https://doi.org/10.1109/PEEIACON63629.2024.10800124"
  },
  {
    year: "2024",
    category: "energy",
    title: "Modeling and Analysis of Small-Scale Solar PV and Li-ion Battery-Based Smartgrid System",
    venue: "3rd International Conference on Advancement in Electrical and Electronic Engineering (ICAEEE)",
    role: "Corresponding Author",
    type: "IEEE Conference",
    stage: "undergrad",
    stageLabel: "Bachelor - AIUB",
    doi: "https://doi.org/10.1109/ICAEEE62219.2024.10561824"
  },
  {
    year: "2023",
    category: "energy",
    title: "Integrating AE-CNN with Smart Relaying and SSCB for Enhanced Three-Phase Fault Detection and Mitigation",
    venue: "10th IEEE International Conference on Power Systems (ICPS)",
    role: "Corresponding Author",
    type: "IEEE Conference",
    stage: "undergrad",
    stageLabel: "Bachelor - AIUB",
    doi: "https://doi.org/10.1109/ICPS60393.2023.10428989"
  },
  {
    year: "2023",
    category: "energy",
    title: "Three Phase Fault Analysis Using Thermal-Magnetic Circuit Breaker and Overcurrent Relay",
    venue: "International Conference on ICT for Sustainable Development (ICICT4SD)",
    role: "First Author",
    type: "IEEE Conference",
    stage: "undergrad",
    stageLabel: "Bachelor - AIUB",
    doi: "https://doi.org/10.1109/ICICT4SD59951.2023.10303432"
  },
  {
    year: "2022",
    category: "energy",
    title: "Designing and Manufacturing a Single-Phase Transformer and Analyzing Its Performance",
    venue: "Journal of Energy Research and Reviews Â· 12(4), 30â€“39",
    role: "Corresponding Author",
    type: "Journal Article",
    stage: "undergrad",
    stageLabel: "Bachelor - AIUB",
    doi: "https://doi.org/10.9734/JENRR/2022/v12i4246"
  }
];

const state = { categoryFilter: "all", stageFilter: "all", searchQuery: "", expanded: false, initialCount: 6 };
const publicationList = document.querySelector("#publication-list");
const showAllButton = document.querySelector("#show-all-publications");
const publicationSearch = document.querySelector("#publication-search");

function getDoiLabel(url) {
  return url.replace("https://doi.org/", "");
}

function renderDoiMeta(item) {
  if (!item.doi) return "";
  return `<a href="${item.doi}" target="_blank" rel="noopener noreferrer" aria-label="Open DOI for ${item.title}">DOI: ${getDoiLabel(item.doi)}</a>`;
}

function renderDoiButton(item) {
  if (!item.doi) return "";
  return `
      <div class="pub-links">
        <a href="${item.doi}" target="_blank" rel="noopener noreferrer" aria-label="Open DOI for ${item.title}" title="Open DOI">DOI</a>
      </div>
  `;
}

function renderStageMeta(item) {
  if (item.stage !== "d2a2i") return `<span>${item.stageLabel}</span>`;
  return `<a href="https://d2a2i.aiub.edu/project-bscl.html" target="_blank" rel="noopener noreferrer" aria-label="Open D2A2I project page">${item.stageLabel}</a>`;
}

function getPublisher(item) {
  if (item.publisher) return item.publisher;
  if (item.venue.includes("Optics Continuum")) return "Optica Publishing Group";
  if (item.venue.includes("Springer")) return "Springer";
  if (item.venue.includes("Emerging Science")) return "Emerging Science Innovation";
  if (item.venue.includes("Journal of Energy")) return "Journal of Energy Research and Reviews";
  if (item.venue.includes("IEEE") || item.venue.includes("ICREST") || item.venue.includes("ICCIT") || item.venue.includes("PEEIACON") || item.venue.includes("ICAEEE") || item.venue.includes("ICPS") || item.venue.includes("ICICT4SD")) return "IEEE";
  return item.venue;
}

function getKeywords(item) {
  if (item.keywords) return item.keywords;
  if (item.title.includes("PCF") || item.title.includes("SPR")) return ["PCF", "SPR", "Biosensor", "Photonics", "Refractive Index"];
  if (item.title.includes("OAM") || item.title.includes("FSO")) return ["Optical Communication", "OAM-PDM", "HMMF-FSO", "Multiplexing"];
  if (item.title.includes("Parking")) return ["Smart Parking", "OCR", "Computer Vision", "IoT"];
  if (item.title.includes("Oil Spill")) return ["IoT", "Autonomous System", "Detection", "Environmental Monitoring"];
  if (item.title.includes("Robot") || item.title.includes("Warehouse")) return ["Robotics", "Warehouse Automation", "Cloud", "Navigation"];
  if (item.title.includes("Telegram")) return ["IR Automation", "Telegram Bot", "Remote Control", "Embedded Systems"];
  if (item.title.includes("Hydrogen")) return ["Hydrogen Fuel Cell", "Vehicle", "Performance Analysis"];
  if (item.title.includes("Solar") || item.title.includes("Smartgrid")) return ["Solar PV", "Battery", "Smart Grid", "Simulation"];
  if (item.title.includes("Fault") || item.title.includes("Relaying")) return ["Fault Detection", "AE-CNN", "Smart Relaying", "SSCB"];
  if (item.title.includes("Transformer")) return ["Transformer", "Design", "Manufacturing", "Performance Analysis"];
  return [item.category, item.type, item.stageLabel];
}

function getAbstract(item) {
  if (item.abstract) return item.abstract;
  if (item.title.includes("Balanced Geometry")) return "This paper numerically analyzes circular PCF-SPR biosensor geometry selection for cancer and bacterial detection, focusing on sensitivity, modal behavior, and design trade-offs for reliable refractive-index sensing.";
  if (item.title.includes("Breast Cancer")) return "This work presents a circular PCF-based SPR biosensor concept for early breast cancer detection, emphasizing high sensitivity, compact optical geometry, and biomedical sensing potential.";
  if (item.title.includes("Adrenal")) return "This presented work explores a dual-mode PCF-SPR biosensor for rapid PC-12 adrenal cancer cell detection using optical sensing principles and sensitivity-focused design.";
  if (item.title.includes("Blood Cancer")) return "This presented work investigates a circular PCF-based SPR biosensor for early blood cancer detection, with attention to refractive-index response and practical biosensing performance.";
  if (item.title.includes("OAM")) return "This accepted conference paper studies long-haul optical transmission using multi-channel OAM-PDM multiplexing over HMMF-FSO communication links to improve channel capacity and transmission performance.";
  if (item.title.includes("Telegram")) return "This paper designs and optimizes an IR-based automation system integrated with a Telegram bot, enabling remote device control and practical embedded automation workflows.";
  if (item.title.includes("Parking")) return "This paper presents a smart parking system using optical character recognition to support automated vehicle identification and more efficient parking management.";
  if (item.title.includes("Oil Spill")) return "This article proposes an IoT-based autonomous system for oil spill detection, combining connected sensing and automated monitoring for environmental response applications.";
  if (item.title.includes("Hydrogen")) return "This paper evaluates the design and performance of hydrogen fuel cell vehicles in Bangladesh, considering system behavior and feasibility within a local engineering context.";
  if (item.title.includes("Ceiling Robot")) return "This paper introduces a cloud-based ceiling robot for intelligent warehouse management, focusing on robotic movement, task support, and automation for logistics environments.";
  if (item.title.includes("Solar")) return "This paper models and analyzes a small-scale solar PV and Li-ion battery smartgrid system, studying system behavior, storage integration, and renewable energy performance.";
  if (item.title.includes("AE-CNN")) return "This paper integrates AE-CNN methods with smart relaying and solid-state circuit breaker concepts to improve three-phase fault detection and mitigation performance.";
  if (item.title.includes("Thermal-Magnetic")) return "This paper analyzes three-phase faults using thermal-magnetic circuit breaker and overcurrent relay protection, comparing response characteristics for fault handling.";
  if (item.title.includes("Transformer")) return "This article covers the design, manufacturing, and performance analysis of a single-phase transformer, connecting electrical design decisions with experimental evaluation.";
  return "This publication contributes to the author's broader research portfolio through modeling, implementation, and validation of engineering systems.";
}

function getSearchText(item) {
  return [item.year, item.category, item.title, item.venue, item.role, item.type, item.stageLabel, item.doi, getPublisher(item), ...getKeywords(item)]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function renderPublications() {
  const matching = publications.map((item, index) => ({ item, index })).filter(({ item }) => {
    const categoryMatches = state.categoryFilter === "all" || item.category === state.categoryFilter;
    const stageMatches = state.stageFilter === "all" || item.stage === state.stageFilter;
    const searchMatches = !state.searchQuery || getSearchText(item).includes(state.searchQuery);
    return categoryMatches && stageMatches && searchMatches;
  });
  const visible = state.expanded ? matching : matching.slice(0, state.initialCount);

  publicationList.innerHTML = visible.length ? visible.map(({ item, index }) => `
    <article class="publication-item" data-category="${item.category}" data-pub-index="${index}" tabindex="0" role="button" aria-label="Open details for ${item.title}">
      <div class="pub-year">${item.year}</div>
      <div class="pub-content">
        <h3>${item.title}</h3>
        <p>${item.venue}</p>
        <div class="pub-meta">
          <span>${item.role}</span>
          <span>${item.type}</span>
          ${renderStageMeta(item)}
          ${renderDoiMeta(item)}
        </div>
      </div>
      ${renderDoiButton(item)}
    </article>
  `).join("") : `
    <article class="publication-empty">
      <strong>No publications match this filter combination.</strong>
      <span>Try changing either the research area or CV segment.</span>
    </article>
  `;

  const hasMore = matching.length > state.initialCount;
  showAllButton.hidden = !hasMore;
  showAllButton.textContent = state.expanded ? "Show fewer publications" : `Show all ${matching.length} publications`;
}

renderPublications();

const paperModal = document.querySelector("#paper-modal");
const paperDialog = paperModal.querySelector(".paper-dialog");
const paperVisual = document.querySelector("#paper-modal-visual");
const paperCategory = document.querySelector("#paper-modal-category");
const paperMeta = document.querySelector("#paper-modal-meta");
const paperTitle = document.querySelector("#paper-modal-title");
const paperPublisher = document.querySelector("#paper-modal-publisher");
const paperYear = document.querySelector("#paper-modal-year");
const paperKeywords = document.querySelector("#paper-modal-keywords");
const paperAbstract = document.querySelector("#paper-modal-abstract");
const paperActions = document.querySelector("#paper-modal-actions");
let lastFocusedElement = null;

function getCategoryLabel(category) {
  if (category === "photonics") return "Photonics";
  if (category === "robotics") return "Robotics & IoT";
  return "Energy & Systems";
}

function openPaperModal(item) {
  lastFocusedElement = document.activeElement;
  paperVisual.className = `paper-visual ${item.category}`;
  paperCategory.textContent = getCategoryLabel(item.category);
  paperMeta.textContent = `${item.type} Â· ${item.role} Â· ${item.stageLabel}`;
  paperTitle.textContent = item.title;
  paperPublisher.textContent = getPublisher(item);
  paperYear.textContent = item.year;
  paperKeywords.innerHTML = getKeywords(item).map((keyword) => `<span>${keyword}</span>`).join("");
  paperAbstract.textContent = getAbstract(item);
  paperActions.innerHTML = item.doi
    ? `<a class="button button-primary" href="${item.doi}" target="_blank" rel="noopener noreferrer">Open DOI</a>`
    : `<span class="doi-unavailable">DOI not available yet</span>`;
  paperModal.classList.add("open");
  paperModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  paperDialog.focus();
}

function closePaperModal() {
  paperModal.classList.remove("open");
  paperModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

const detailModal = document.querySelector("#detail-modal");
const detailDialog = detailModal.querySelector(".detail-dialog");
const detailVisual = document.querySelector("#detail-modal-visual");
const detailCategory = document.querySelector("#detail-modal-category");
const detailMeta = document.querySelector("#detail-modal-meta");
const detailTitle = document.querySelector("#detail-modal-title");
const detailFacts = document.querySelector("#detail-modal-facts");
const detailTags = document.querySelector("#detail-modal-tags");
const detailOverview = document.querySelector("#detail-modal-overview");
const detailList = document.querySelector("#detail-modal-list");
const detailCertificate = document.querySelector("#detail-modal-certificate");
const detailCertificateImage = document.querySelector("#detail-modal-certificate-img");
const detailCertificateCaption = document.querySelector("#detail-modal-certificate-caption");
const galleryTrack = document.querySelector("#gallery-track");
const galleryModal = document.querySelector("#gallery-modal");
const galleryDialog = galleryModal?.querySelector(".gallery-dialog");
const galleryModalImage = document.querySelector("#gallery-modal-img");
const galleryModalTitle = document.querySelector("#gallery-modal-title");
const galleryModalDescription = document.querySelector("#gallery-modal-description");
const certificateShowcase = document.querySelector("#certificate-showcase");

let projectDetails = [
  {
    category: "Current R&D",
    visual: "project-wheelchair",
    title: "Navigotech - AI-Driven Assistive Wheelchair",
    meta: "2025 - Present Â· Assistive robotics",
    facts: [["Role", "Research & Development"], ["Focus", "AI navigation"], ["Tools", "Roboflow, Fusion 360"], ["Platform", "Embedded robotics"]],
    tags: ["Computer Vision", "Dataset Annotation", "Mechanical Design", "Embedded Systems"],
    overview: "An assistive mobility platform focused on safer intelligent navigation, practical hardware integration, and field-ready system design.",
    points: ["Prepared and annotated datasets for object detection workflows.", "Supported 3D mechanical design, assembly planning, and hardware compatibility checks.", "Coordinated testing tasks and mentored interns during prototype development."]
  },
  {
    category: "Operational AI",
    visual: "project-trp",
    title: "Television Rating Point Platform",
    meta: "2024 - Present Â· D2A2I applied research",
    facts: [["Role", "Research Assistant Intern"], ["Focus", "YOLO-based monitoring"], ["Environment", "Linux, IoT devices"], ["Institution", "D2A2I, AIUB"]],
    tags: ["YOLO", "Linux", "IoT Reliability", "Data Monitoring"],
    overview: "A large-scale applied AI and IoT workflow supporting television-rating device monitoring, model improvement, and operational issue analysis.",
    points: ["Refined YOLO model behavior through dataset preparation and threshold tuning.", "Used Linux-based monitoring workflows for Raspberry Pi-based devices.", "Analyzed project data to identify recurring technical problems and improvement opportunities."]
  },
  {
    category: "Research Prototype",
    visual: "project-warehouse",
    title: "Cloud-Based Ceiling Robot for Warehousing",
    meta: "2023 - 2024 Â· Robotics research",
    facts: [["Role", "First Author"], ["Output", "IEEE publication"], ["Focus", "Warehouse automation"], ["Stack", "Robotics, Cloud"]],
    tags: ["Robotics", "Cloud Control", "Warehouse Automation", "Prototype Design"],
    overview: "A ceiling-mounted robotic concept for intelligent warehouse support, combining automation, movement planning, and cloud-assisted management.",
    points: ["Developed the prototype concept and system workflow.", "Connected the work to a peer-reviewed IEEE conference output.", "Extended the research direction toward intelligent warehouse management."]
  },
  {
    category: "Photonics Research",
    visual: "project-photonics",
    title: "PCF-SPR Biosensor Optimization",
    meta: "2024 - Present Â· Optical biosensing",
    facts: [["Role", "Researcher"], ["Focus", "PCF-SPR sensors"], ["Tool", "COMSOL"], ["Application", "Biomedical detection"]],
    tags: ["COMSOL", "SPR", "PCF", "Cancer Detection"],
    overview: "A photonics research stream focused on circular PCF-SPR biosensor geometry, refractive-index response, and high-sensitivity biomedical detection.",
    points: ["Modeled sensor geometries and compared performance trade-offs.", "Built simulation workflows for sensitivity and modal behavior analysis.", "Contributed to journal, conference, and book-chapter research outputs."]
  }
];

let educationDetails = [
  {
    category: "Masters",
    visual: "education-masters",
    title: "Master of Science in Electrical & Electronic Engineering",
    meta: "2024 - 2026 Â· American International University-Bangladesh",
    facts: [["Institution", "AIUB"], ["CGPA", "3.55"], ["Status", "Defense Pending"], ["Research", "Photonics & biosensing"]],
    tags: ["PCF-SPR", "Optical Sensors", "COMSOL", "Research Writing"],
    overview: "Graduate study centered on advanced electrical and electronic engineering research with a strong emphasis on photonics, optical biosensors, and simulation-led publication work.",
    points: ["Produced multiple masters-stage photonics publications and conference papers.", "Focused on circular PCF-SPR biosensor design for biomedical detection.", "Built technical depth in simulation, manuscript preparation, and research communication."]
  },
  {
    category: "Bachelor",
    visual: "education-bachelor",
    title: "Bachelor of Science in Electrical & Electronic Engineering",
    meta: "Completed 2024 Â· American International University-Bangladesh",
    facts: [["Institution", "AIUB"], ["CGPA", "3.77"], ["Discipline", "EEE"], ["Research", "Robotics, energy, AI"]],
    tags: ["EEE", "Robotics", "Power Systems", "Embedded Design"],
    overview: "Undergraduate engineering foundation spanning electrical machines, power systems, robotics, embedded systems, and early research publication experience.",
    points: ["Completed research in robotics, smart grid, fault detection, fuel cells, and transformer design.", "Built hands-on engineering experience through design, manufacturing, and system analysis.", "Developed a publication record across IEEE conferences and journal work."]
  },
  {
    category: "Recognition",
    visual: "education-honors",
    title: "Dean's List Honors",
    meta: "Undergraduate recognition Â· Four semesters",
    facts: [["Count", "4 semesters"], ["Type", "Academic honor"], ["Basis", "High achievement"], ["Level", "Undergraduate"]],
    tags: ["Academic Excellence", "Consistency", "Recognition"],
    overview: "Recognition for sustained high academic performance during undergraduate study.",
    points: ["Earned Dean's List recognition across four undergraduate semesters.", "Reflects consistent coursework performance alongside project and research activities.", "Supports the academic foundation behind later research momentum."]
  },
  {
    category: "Certification",
    visual: "education-oci",
    title: "Oracle Cloud Infrastructure AI Certified Foundations Associate",
    meta: "2023 Â· Cloud and AI foundations",
    facts: [["Provider", "Oracle"], ["Credential", "OCI AI Foundations"], ["Year", "2023"], ["Area", "Cloud AI"]],
    tags: ["Oracle Cloud", "AI Foundations", "Cloud Concepts"],
    overview: "A cloud and AI foundations credential supporting broader knowledge of cloud-based intelligent systems and modern computing infrastructure.",
    points: ["Covers introductory cloud AI concepts and Oracle Cloud Infrastructure fundamentals.", "Complements practical work involving cloud-connected robotics and IoT systems.", "Adds formal certification evidence for interdisciplinary engineering capability."]
  }
];

let galleryDetails = [
  {
    title: "Photonics Simulation Workflow",
    description: "A research visual from PCF-SPR biosensor modeling and analysis work.",
    image: "assets/uploads/1784285718945-whatsapp-image-2026-07-17-at-16-53-30.jpeg"
  },
  {
    title: "TRP Platform Field Work",
    description: "Applied AI and IoT monitoring work connected to the Television Rating Point platform.",
    image: "assets/uploads/1784285703091-whatsapp-image-2026-07-17-at-16-54-22.jpeg"
  },
  {
    title: "Assistive Robotics Prototype",
    description: "Project image from the Navigotech AI-driven assistive wheelchair workflow.",
    image: "assets/uploads/1784286051143-indoor-optimized.jpg"
  },
  {
    title: "Warehouse Robotics Research",
    description: "Visual documentation from the cloud-based ceiling robot project.",
    image: "assets/uploads/1784286561894-whatsapp-image-2026-07-17-at-17-08-43.jpeg"
  }
];

let certificateDetails = [
  {
    title: "Dean's List Honors",
    type: "Academic Certificate",
    description: "Recognition across four undergraduate semesters for sustained academic achievement.",
    image: "assets/uploads/1783778256208-deans-award-pic-optimized.jpg"
  },
  {
    title: "Oracle Cloud Infrastructure",
    type: "Professional Certificate",
    description: "Oracle Cloud Infrastructure AI Certified Foundations Associate credential.",
    image: "assets/uploads/1783778053942-jpg-certificate-optimized.jpg"
  },
  {
    title: "OBE Grade Report",
    type: "Academic Record",
    description: "Outcome-Based Education grade report for Bachelor of Science in Electrical and Electronic Engineering.",
    image: "assets/uploads/1783778513372-obe.png"
  }
];

function renderFacts(facts) {
  return facts.map(([label, value]) => `<span><strong>${label}</strong><b>${value}</b></span>`).join("");
}

function openDetailModal(item, kind = "project") {
  lastFocusedElement = document.activeElement;
  const isEducation = kind === "education";
  const hasPreviewImage = Boolean(item.image);
  detailDialog.classList.toggle("certificate-dialog", isEducation);
  detailDialog.classList.toggle("image-dialog", hasPreviewImage);
  detailVisual.className = `paper-visual detail-visual ${item.visual}`;
  detailCategory.textContent = item.category;
  detailMeta.textContent = item.meta;
  detailTitle.textContent = item.title;
  if (hasPreviewImage) {
    detailCertificate.hidden = false;
    detailCertificateImage.src = item.image;
    detailCertificateImage.alt = `${item.title} image`;
    detailCertificateCaption.textContent = isEducation
      ? item.institution || item.category || "Certificate image"
      : item.category || "Project image";
  } else {
    detailCertificate.hidden = true;
    detailCertificateImage.removeAttribute("src");
    detailCertificateImage.alt = "";
    detailCertificateCaption.textContent = "Image";
  }
  detailFacts.innerHTML = renderFacts(item.facts);
  detailTags.innerHTML = item.tags.map((tag) => `<span>${tag}</span>`).join("");
  detailOverview.textContent = item.overview;
  detailList.innerHTML = `<h3>Highlights</h3><ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>`;
  detailModal.classList.add("open");
  detailModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  detailDialog.focus();
}

function closeDetailModal() {
  detailModal.classList.remove("open");
  detailModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

function bindDetailCards() {
  document.querySelectorAll(".project-card").forEach((card, index) => {
    if (!projectDetails[index]) return;
    card.dataset.detailKind = "project";
    card.dataset.detailIndex = String(index);
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open details for ${projectDetails[index].title}`);
  });

  document.querySelectorAll(".certificate-grid > .certificate-card").forEach((card, index) => {
    if (!educationDetails[index]) return;
    card.dataset.detailKind = "education";
    card.dataset.detailIndex = String(index);
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open details for ${educationDetails[index].title}`);
  });
}

bindDetailCards();

function tagMarkup(tags = []) {
  return tags.map((tag) => `<span>${tag}</span>`).join("");
}

function normalizeFacts(item) {
  if (Array.isArray(item.facts) && item.facts.length) return item.facts;
  return [["Category", item.category || "Portfolio"], ["Period", item.period || item.year || "Current"]];
}

function normalizeDetailItem(item) {
  return {
    ...item,
    meta: item.meta || [item.period, item.institution].filter(Boolean).join(" Â· "),
    facts: normalizeFacts(item),
    tags: item.tags || item.keywords || [],
    overview: item.overview || item.summary || "More information will be added soon.",
    points: item.points || []
  };
}

function renderProjects(projects = projectDetails) {
  const grid = document.querySelector(".project-grid");
  if (!grid || !Array.isArray(projects)) return;
  projectDetails = projects.map(normalizeDetailItem);
  grid.innerHTML = projectDetails.map((item, index) => `
    <article class="project-card ${item.featured ? "featured" : ""} reveal is-visible" data-detail-kind="project" data-detail-index="${index}" tabindex="0" role="button" aria-label="Open details for ${item.title}">
      ${item.image ? lazyImageMarkup(item.image, item.title, "project-image") : ""}
      <div class="project-top"><span>${item.category || "Project"}</span><small>${item.period || ""}</small></div>
      <h3>${item.title}</h3>
      <p>${item.summary || item.overview || ""}</p>
      <div class="project-tech">${tagMarkup(item.tags)}</div>
    </article>
  `).join("");
  bindDetailCards();
  observeLazyImages(grid);
}

function renderEducation(items = educationDetails) {
  const grid = document.querySelector(".certificate-grid");
  if (!grid || !Array.isArray(items)) return;
  educationDetails = items.map(normalizeDetailItem);
  grid.classList.remove("is-marquee");
  grid.innerHTML = educationDetails.map((item, index) => {
    const isHonor = Boolean(item.badge);
    return `
      <article class="${isHonor ? "honor-card" : "education-card"} certificate-card reveal is-visible" data-detail-kind="education" data-detail-index="${index}" tabindex="0" role="button" aria-label="Open details for ${item.title}">
        <figure class="certificate-media">
          ${item.image ? lazyImageMarkup(item.image, item.title) : ""}
          <figcaption>${item.image ? "Certificate image" : "Certificate image pending"}</figcaption>
        </figure>
        <div class="certificate-copy">
          ${isHonor ? `<div class="honor-number">${item.badge}</div><div>` : ""}
          <span>${item.period || item.category || ""}</span>
          <h3>${item.title}</h3>
          <p>${item.institution || item.summary || ""}</p>
          ${item.summary && item.institution ? `<strong>${item.summary}</strong>` : ""}
          ${isHonor ? "</div>" : ""}
        </div>
      </article>
    `;
  }).join("");
  prepareCertificateGrid();
  bindDetailCards();
  watchCertificateImages();
  observeLazyImages(grid);
}

function renderSkills(skills = []) {
  const grid = document.querySelector(".skills-grid");
  if (!grid || !Array.isArray(skills)) return;
  grid.innerHTML = skills.map((item) => `<div class="skill-group"><h3>${item.title}</h3><p>${item.items}</p></div>`).join("");
}

function renderExperience(experience = []) {
  const timeline = document.querySelector(".timeline");
  if (!timeline || !Array.isArray(experience)) return;
  timeline.innerHTML = experience.map((item) => `
    <article class="timeline-item reveal is-visible">
      <div class="timeline-date">${item.period || ""}</div>
      <div class="timeline-body">
        <div class="role-header">
          <div>
            <h3>${item.title}</h3>
            <p class="institution">${item.link ? `<a class="inline-link" href="${item.link}" target="_blank" rel="noopener noreferrer">${item.institution}</a>` : item.institution || ""}</p>
          </div>
          ${item.status ? `<span>${item.status}</span>` : ""}
        </div>
        ${item.summary ? `<p>${item.summary}</p>` : ""}
        ${item.points?.length ? `<ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>` : ""}
      </div>
    </article>
  `).join("");
}

function escapeAttribute(value = "") {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

const lazyPlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E";
let lazyImageObserver = null;

function lazyImageMarkup(src, alt, className = "") {
  return `<img class="${className ? `${className} ` : ""}lazy-image" src="${lazyPlaceholder}" data-src="${escapeAttribute(src)}" alt="${escapeAttribute(alt)}" loading="lazy" decoding="async" fetchpriority="low" />`;
}

function loadLazyImage(image) {
  const source = image.dataset.src;
  if (!source) return;
  image.addEventListener("load", () => image.classList.add("is-loaded"), { once: true });
  image.src = source;
  image.dataset.loaded = "true";
  image.removeAttribute("data-src");
}

function observeLazyImages(root = document) {
  const images = [...root.querySelectorAll("img[data-src]")].filter((image) => image.dataset.loaded !== "true");
  if (!images.length) return;
  if (!("IntersectionObserver" in window)) {
    images.forEach(loadLazyImage);
    return;
  }
  if (!lazyImageObserver) {
    lazyImageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        lazyImageObserver.unobserve(entry.target);
        loadLazyImage(entry.target);
      });
    }, { rootMargin: "700px 0px", threshold: 0.01 });
  }
  images.forEach((image) => lazyImageObserver.observe(image));
}

function normalizeGalleryItem(item) {
  return {
    title: item.title || "Gallery image",
    description: item.description || item.summary || "",
    type: item.type || item.category || "Gallery",
    image: item.image || ""
  };
}

function normalizeCertificateItem(item) {
  return {
    title: item.title || "Certificate or crest",
    type: item.type || item.category || "Certificate",
    description: item.description || item.summary || item.overview || "",
    image: item.image || ""
  };
}

function renderGallery(items = galleryDetails) {
  if (!galleryTrack || !Array.isArray(items)) return;
  galleryDetails = items.map(normalizeGalleryItem).filter((item) => item.image);
  if (!galleryDetails.length) {
    galleryTrack.innerHTML = "";
    return;
  }
  galleryTrack.innerHTML = galleryDetails.map((item, index) => {
    return `
      <button class="gallery-card" type="button" data-gallery-index="${index}" aria-label="Open gallery image: ${escapeAttribute(item.title)}">
        ${lazyImageMarkup(item.image, item.title)}
        <span>${item.title}</span>
      </button>
    `;
  }).join("");
  observeLazyImages(galleryTrack);
}

function renderCertificateShowcase(items = certificateDetails) {
  if (!certificateShowcase || !Array.isArray(items)) return;
  certificateDetails = items.map(normalizeCertificateItem).filter((item) => item.image);
  certificateShowcase.innerHTML = certificateDetails.map((item, index) => `
    <button class="gallery-card" type="button" data-certificate-index="${index}" aria-label="Open certificate or crest: ${escapeAttribute(item.title)}">
      ${lazyImageMarkup(item.image, item.title)}
      <span>${item.title}</span>
    </button>
  `).join("");
  observeLazyImages(certificateShowcase);
}

function openGalleryModal(item, label = "Gallery") {
  if (!galleryModal || !galleryDialog) return;
  lastFocusedElement = document.activeElement;
  galleryModalImage.src = item.image;
  galleryModalImage.alt = item.title;
  galleryModalTitle.textContent = item.title;
  galleryModalDescription.textContent = item.description;
  galleryModal.querySelector(".eyebrow").textContent = label;
  galleryModal.classList.add("open");
  galleryModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  galleryDialog.focus();
}

function closeGalleryModal() {
  if (!galleryModal) return;
  galleryModal.classList.remove("open");
  galleryModal.setAttribute("aria-hidden", "true");
  galleryModalImage.removeAttribute("src");
  galleryModalImage.alt = "";
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

renderGallery();
renderCertificateShowcase();

document.addEventListener("click", (event) => {
  const card = event.target.closest("[data-detail-kind]");
  if (!card) return;
  const collection = card.dataset.detailKind === "project" ? projectDetails : educationDetails;
  openDetailModal(collection[Number(card.dataset.detailIndex)], card.dataset.detailKind);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-detail-kind]");
  if (!card) return;
  event.preventDefault();
  const collection = card.dataset.detailKind === "project" ? projectDetails : educationDetails;
  openDetailModal(collection[Number(card.dataset.detailIndex)], card.dataset.detailKind);
});

galleryTrack?.addEventListener("click", (event) => {
  const card = event.target.closest(".gallery-card");
  if (!card || card.getAttribute("aria-hidden") === "true") return;
  openGalleryModal(galleryDetails[Number(card.dataset.galleryIndex)]);
});

certificateShowcase?.addEventListener("click", (event) => {
  const card = event.target.closest(".gallery-card");
  if (!card) return;
  openGalleryModal(certificateDetails[Number(card.dataset.certificateIndex)], "Certificates & crest");
});

publicationList.addEventListener("click", (event) => {
  if (event.target.closest("a")) return;
  const itemNode = event.target.closest(".publication-item");
  if (!itemNode) return;
  openPaperModal(publications[Number(itemNode.dataset.pubIndex)]);
});

publicationList.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const itemNode = event.target.closest(".publication-item");
  if (!itemNode) return;
  event.preventDefault();
  openPaperModal(publications[Number(itemNode.dataset.pubIndex)]);
});

document.querySelectorAll("[data-modal-close]").forEach((node) => {
  node.addEventListener("click", closePaperModal);
});

document.querySelectorAll("[data-detail-close]").forEach((node) => {
  node.addEventListener("click", closeDetailModal);
});

document.querySelectorAll("[data-gallery-close]").forEach((node) => {
  node.addEventListener("click", closeGalleryModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (paperModal.classList.contains("open")) closePaperModal();
  if (detailModal.classList.contains("open")) closeDetailModal();
  if (galleryModal?.classList.contains("open")) closeGalleryModal();
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.dataset.filterGroup;
    document.querySelectorAll(`.filter-btn[data-filter-group="${group}"]`).forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll(`.filter-btn[data-filter-group="${group}"]`).forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn === button));
    });
    if (group === "stage") {
      state.stageFilter = button.dataset.filter;
    } else {
      state.categoryFilter = button.dataset.filter;
    }
    state.expanded = false;
    renderPublications();
  });
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.setAttribute("aria-pressed", String(button.classList.contains("active")));
});

publicationSearch.addEventListener("input", () => {
  state.searchQuery = publicationSearch.value.trim().toLowerCase();
  state.expanded = false;
  renderPublications();
});

showAllButton.addEventListener("click", () => {
  state.expanded = !state.expanded;
  renderPublications();
});

function setPublicationFilter(group, value) {
  document.querySelectorAll(`.filter-btn[data-filter-group="${group}"]`).forEach((button) => {
    const isActive = button.dataset.filter === value;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  if (group === "stage") {
    state.stageFilter = value;
  } else {
    state.categoryFilter = value;
  }
}

function scrollToElement(element) {
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
  if (!element.hasAttribute("tabindex")) element.setAttribute("tabindex", "-1");
  element.focus({ preventScroll: true });
}

function showAllPublications() {
  setPublicationFilter("category", "all");
  setPublicationFilter("stage", "all");
  publicationSearch.value = "";
  state.searchQuery = "";
  state.expanded = true;
  renderPublications();
  scrollToElement(document.querySelector("#publications"));
}

function focusDeanListCard() {
  const deanIndex = educationDetails.findIndex((item) => /dean/i.test(item.title));
  const deanCard = deanIndex >= 0
    ? document.querySelector(`.certificate-card[data-detail-kind="education"][data-detail-index="${deanIndex}"]`)
    : document.querySelector("#education");
  scrollToElement(deanCard || document.querySelector("#education"));
}

document.querySelectorAll(".stat-card").forEach((card) => {
  card.addEventListener("click", () => {
    const target = card.dataset.statTarget;
    if (target === "publications") {
      showAllPublications();
      return;
    }
    if (target === "under-review") {
      scrollToElement(document.querySelector("#manuscripts-under-review"));
      return;
    }
    if (target === "deans-list") {
      focusDeanListCard();
      return;
    }
    if (target === "experience") {
      scrollToElement(document.querySelector("#experience"));
    }
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => {
  if (element.dataset.delay) element.style.setProperty("--delay", `${element.dataset.delay}ms`);
  revealObserver.observe(element);
});

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const node = entry.target;
    const target = Number(node.dataset.count);
    const suffix = node.dataset.suffix || "";
    const duration = target > 100 ? 900 : 1250;
    const start = performance.now();
    const from = target > 100 ? target - 6 : 0;

    function animate(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = `${Math.round(from + (target - from) * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
    countObserver.unobserve(node);
  });
}, { threshold: 0.7 });

document.querySelectorAll("[data-count]").forEach((counter) => countObserver.observe(counter));

function prepareCertificateGrid() {
  document.querySelectorAll(".certificate-grid").forEach((grid) => {
    const existingTrack = grid.querySelector(".certificate-track");
    if (existingTrack) {
      grid.innerHTML = [...existingTrack.children].filter((child) => !child.hasAttribute("aria-hidden")).map((child) => child.outerHTML).join("");
    }
    grid.classList.remove("is-marquee");
  });
}

function watchCertificateImages() {
  document.querySelectorAll(".certificate-media img").forEach((image) => {
    if (image.complete && image.naturalWidth) image.closest(".certificate-media").classList.add("has-image");
    image.addEventListener("load", () => {
      image.closest(".certificate-media").classList.add("has-image");
    });
    image.addEventListener("error", () => {
      image.removeAttribute("src");
    });
  });
}

prepareCertificateGrid();
watchCertificateImages();

const header = document.querySelector(".site-header");
const progressBar = document.querySelector(".scroll-progress");
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-links a")];

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${maxScroll ? (scrollTop / maxScroll) * 100 : 0}%`;
  header.classList.toggle("scrolled", scrollTop > 20);

  let current = "home";
  sections.forEach((section) => {
    if (scrollTop >= section.offsetTop - 150) current = section.id;
  });
  navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
}

window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.forEach((link) => link.addEventListener("click", () => {
  navMenu.classList.remove("open");
  navToggle.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}));

const themeChoices = [...document.querySelectorAll(".theme-choice")];
let savedTheme = null;
try {
  savedTheme = localStorage.getItem("portfolio-theme");
} catch {
  // Storage may be unavailable in restricted previews; the theme still works.
}
if (savedTheme !== "dark" && savedTheme !== "anime") savedTheme = "dark";
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeChoices.forEach((button) => {
    const isActive = button.dataset.themeChoice === theme;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch {
    // Ignore storage restrictions while preserving the current theme change.
  }
}

setTheme(savedTheme || document.documentElement.dataset.theme || "dark");
themeChoices.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.themeChoice));
});

const roleNode = document.querySelector(".rotating-role");
const roles = JSON.parse(roleNode.dataset.roles);
let roleIndex = 0;
setInterval(() => {
  roleNode.classList.add("swapping");
  setTimeout(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleNode.textContent = roles[roleIndex];
    roleNode.classList.remove("swapping");
  }, 210);
}, 3200);

document.querySelector(".copy-email").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(button.dataset.email);
    const original = button.textContent;
    button.textContent = "Email copied âœ“";
    setTimeout(() => { button.textContent = original; }, 1800);
  } catch {
    window.location.href = `mailto:${button.dataset.email}`;
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector(".back-to-top")?.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.replaceState(null, "", `${location.pathname}${location.search}`);
});

let citationBars = [...document.querySelectorAll(".bar-item")];
const citationYear = document.querySelector("#citation-year");
const citationCount = document.querySelector("#citation-count");
const citationNote = document.querySelector("#citation-note");

function getCitationNote(button) {
  const citations = Number(button.dataset.citations);
  const maxCitations = Math.max(...citationBars.map((bar) => Number(bar.dataset.citations)));
  if (citations === maxCitations) return "strongest recorded year";
  if (button.dataset.year === "2026") return "current-year citation count";
  return "annual citation count";
}

function setActiveCitation(button) {
  citationBars.forEach((bar) => {
    const isActive = bar === button;
    bar.classList.toggle("active", isActive);
    bar.setAttribute("aria-pressed", String(isActive));
  });
  citationYear.textContent = button.dataset.year;
  citationCount.textContent = button.dataset.citations;
  citationNote.textContent = getCitationNote(button);
}

function bindCitationBars() {
  citationBars = [...document.querySelectorAll(".bar-item")];
  citationBars.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.classList.contains("active")));
    button.addEventListener("click", () => setActiveCitation(button));
    button.addEventListener("mouseenter", () => setActiveCitation(button));
    button.addEventListener("focus", () => setActiveCitation(button));
  });
}

function renderCitations(citations) {
  if (!citations) return;
  const summary = document.querySelector(".citation-summary");
  const chart = document.querySelector(".bar-chart");
  const yearly = citations.yearly || [];
  if (summary) {
    summary.innerHTML = `
      <article><span>Citations</span><strong data-count="${citations.total || 0}" data-suffix="">${citations.total || 0}</strong></article>
      <article><span>h-index</span><strong data-count="${citations.hIndex || 0}" data-suffix="">${citations.hIndex || 0}</strong></article>
      <article><span>i10-index</span><strong data-count="${citations.i10Index || 0}" data-suffix="">${citations.i10Index || 0}</strong></article>
    `;
  }
  if (chart && yearly.length) {
    const max = Math.max(...yearly.map((item) => Number(item.citations || 0)), 1);
    chart.innerHTML = yearly.map((item) => {
      const value = Number(item.citations || 0);
      return `
        <button class="bar-item ${value === max ? "active" : ""}" type="button" style="--value: ${(value / max) * 100}%;" data-year="${item.year}" data-citations="${value}" aria-label="${item.year} citations: ${value}">
          <span class="bar-value">${value}</span>
          <div class="bar-track"><div class="bar-fill"></div></div>
          <span class="bar-year">${item.year}</span>
        </button>
      `;
    }).join("");
    bindCitationBars();
    const active = document.querySelector(".bar-item.active") || document.querySelector(".bar-item");
    if (active) setActiveCitation(active);
  }
}

bindCitationBars();

async function hydratePortfolioFromStaticData() {
  try {
    const response = await fetch("data/portfolio.json", { cache: "no-store" });
    if (!response.ok) return;
    const data = await response.json();
    if (Array.isArray(data.publications)) {
      publications = data.publications;
      renderPublications();
    }
    renderCitations(data.citations);
    renderProjects(data.projects);
    renderEducation(data.education);
    renderSkills(data.skills);
    renderExperience(data.experience);
    renderGallery(data.gallery);
    renderCertificateShowcase(data.certificates);
    updateScrollUI();
  } catch {
    // The static portfolio still works with the embedded fallback content.
  }
}

hydratePortfolioFromStaticData();

const cursorBeam = document.querySelector(".cursor-beam");
if (cursorBeam && window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let beamFrame = 0;
  let idleTimer = 0;
  const beam = { x: window.innerWidth / 2, y: window.innerHeight * 0.42, angle: -18 };

  function renderBeam() {
    cursorBeam.style.setProperty("--beam-x", `${beam.x}px`);
    cursorBeam.style.setProperty("--beam-y", `${beam.y}px`);
    cursorBeam.style.setProperty("--beam-angle", `${beam.angle}deg`);
    beamFrame = 0;
  }

  window.addEventListener("pointermove", (event) => {
    const dx = event.clientX - beam.x;
    const dy = event.clientY - beam.y;
    beam.x = event.clientX;
    beam.y = event.clientY;
    if (Math.abs(dx) + Math.abs(dy) > 2) {
      beam.angle = Math.max(-42, Math.min(42, Math.atan2(dy, dx) * 180 / Math.PI));
    }

    document.body.classList.add("beam-active");
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => document.body.classList.remove("beam-active"), 520);
    if (!beamFrame) beamFrame = requestAnimationFrame(renderBeam);
  }, { passive: true });
}

const animeRunner = document.querySelector(".anime-rope-runner");
if (animeRunner && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let lastRunnerScroll = window.scrollY;
  let runnerFrame = 0;

  function updateAnimeRunner() {
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const scrollTop = window.scrollY;
    const progress = Math.min(scrollTop / maxScroll, 1);
    const isAnimeTheme = document.documentElement.dataset.theme === "anime";
    const isVisible = isAnimeTheme && scrollTop > 2;
    const runnerHeight = animeRunner.offsetHeight || window.innerHeight;
    const characterHeight = animeRunner.querySelector(".anime-character")?.offsetHeight || 126;
    const startY = 14;
    const endY = runnerHeight - characterHeight - 8;
    const y = startY + (endY - startY) * progress;
    const direction = scrollTop >= lastRunnerScroll ? 1 : -1;

    animeRunner.style.setProperty("--runner-y", `${y}px`);
    animeRunner.style.setProperty("--runner-tilt", `${direction * 5}deg`);
    animeRunner.classList.toggle("visible", isVisible);
    animeRunner.classList.toggle("at-end", isVisible && maxScroll - scrollTop <= 3);
    lastRunnerScroll = scrollTop;
    runnerFrame = 0;
  }

  function requestAnimeRunnerUpdate() {
    if (!runnerFrame) runnerFrame = requestAnimationFrame(updateAnimeRunner);
  }

  window.addEventListener("scroll", requestAnimeRunnerUpdate, { passive: true });
  window.addEventListener("resize", requestAnimeRunnerUpdate);
  themeChoices.forEach((button) => button.addEventListener("click", requestAnimeRunnerUpdate));
  updateAnimeRunner();
}

function hidePageLoader() {
  const loader = document.querySelector(".page-loader");
  if (loader) setTimeout(() => loader.classList.add("hidden"), 250);
}

if (document.readyState === "complete") {
  hidePageLoader();
} else {
  window.addEventListener("load", hidePageLoader, { once: true });
  // Failsafe for slow or blocked third-party font requests.
  setTimeout(hidePageLoader, 1800);
}
