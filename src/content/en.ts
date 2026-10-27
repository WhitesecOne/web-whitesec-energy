import type { Content } from "./types.ts"

/**
 * Site copy, in English. Service content and the rules by country follow the site plan
 * (24 October 2026) as closely as possible.
 */
export const en: Content = {
  ogLocale: "en_AU",
  brandTitle: "Whitesec Energy",
  tagline: "From feasibility study to a secure, efficient operation.",
  description:
    "Energy consulting and implementation for oil and gas, renewables and green energy in Indonesia and Australia, by Whitesec ID and Whitesec AU.",
  nav: {
    services: "Services",
    indonesia: "Indonesia",
    australia: "Australia",
    how: "How We Work",
    experience: "Experience",
    about: "About",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    skip: "Skip to main content",
    primaryNav: "Main navigation",
    allServices: "All services",
  },
  common: {
    talk: "Talk to Us",
    seeServices: "See Our Services",
    readMore: "Read more",
    home: "Home",
    breadcrumb: "Breadcrumb",
    photoNote: "Illustrative photo, not a Whitesec project.",
    sendEnquiry: "Send Enquiry",
    contactDirect: "Direct contact",
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
    address: "Address",
    entity: "Contracting entity",
    country: { id: "Indonesia", au: "Australia" },
    pageUpdated: "Updated 27 October 2026",
  },
  footer: {
    statement:
      "whitesec.energy is the energy practice of PT Topi Putih Siberindo (Whitesec ID) and Whitesec AU. Installation work is carried out by licensed EPC partners.",
    links: "Pages",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    credits: "Photo Credits",
    cookieSettings: "Cookie settings",
    otherSites: "Other Whitesec sites",
    copyright: "All rights reserved.",
  },
  home: {
    metaTitle: "Energy Consulting and Implementation",
    heroTitle: "Energy consulting and implementation for Indonesia and Australia",
    heroLead:
      "Feasibility studies, energy efficiency, emissions reporting and OT security for oil and gas, renewables and green energy.",
    heroPhotoAlt: "Rows of solar panels in an open field with a low sun on the horizon",
    heroPhotoCaption: "A utility-scale solar array.",
    entityStrip: {
      id: "In Indonesia, clients contract with PT Topi Putih Siberindo (Whitesec ID).",
      au: "In Australia, clients contract with Whitesec AU.",
    },
    servicesTitle: "Seven services, one team",
    servicesLead:
      "Energy Project Studies and Records & Document Control lead because our team already delivers both to oil and gas clients. The other five run in both countries too.",
    countriesTitle: "Two countries, each with its own rules",
    countriesLead:
      "Every service runs in Indonesia and Australia. The local regulation decides who the buyer is, and the local entity signs the contract.",
    howTitle: "How we work",
    howLead:
      "Each study starts with scope and a baseline, compares options side by side, and stops at agreed decision gates so you sign off before the next stage.",
    howLink: "Read the full method",
    experienceTitle: "Experience",
    experienceLead: "Examples of completed Whitesec ID work. We name clients only with written consent.",
    experienceLink: "See all experience",
    backedTitle: "Backed by Whitesec",
    backedText:
      "whitesec.energy is the energy practice of Whitesec ID and Whitesec AU, two firms working in cybersecurity, governance and compliance. Their experience in audits, management systems and OT security is the base for this energy work. We prepare certification with certification and assurance partners.",
    partnersLabel: "Whitesec certification and assurance partners",
    contactTitle: "Tell us about the project or obligation in front of you",
    contactText: "Our team reads every enquiry and replies through the Whitesec entity in your country.",
  },
  services: [
    {
      key: "studies",
      slug: "energy-project-studies",
      name: "Energy Project Studies",
      card: "Feasibility, facility and grid studies that tell you whether and how to build.",
      metaDescription:
        "Feasibility and technical studies for oil and gas facilities, digital infrastructure, solar, BESS, hybrid and off-grid power in Indonesia and Australia.",
      intro:
        "Feasibility and technical studies that help an owner decide whether, where and how to build. Each study compares options with the cost and risk of each, so a budget decision starts from one shared basis.",
      included: [
        "Oil and gas facility feasibility studies for record centers, geological data centers, core sample storage, warehouses and field offices. Each study compares build, lease and outsource options with the cost and risk of each.",
        "Digital and data infrastructure studies for data centers, server rooms, OT networks and records systems.",
        "Renewable and power feasibility studies for solar, BESS, hybrid and captive power projects.",
        "Energy yield assessment and BESS sizing.",
        "Grid interconnection studies (available in Indonesia; not offered in Australia yet).",
        "Off-grid and hybrid power studies for remote and mine sites.",
      ],
      whoFor: "Oil and gas operators, IPPs and developers, industrial companies building captive power, and mine sites.",
      receives: [
        "A study report with the options compared, the assumptions and a recommendation.",
        "A financial model for renewable and power feasibility studies.",
        "Cost estimates, schedule and a risk matrix for each option.",
        "A handover pack with the data, assumptions and working files.",
      ],
      rules: {
        id: "All study types, including grid interconnection studies for generation licence (IUPTLU) applications.",
        au: "Facility, digital, feasibility, yield and off-grid studies. Grid connection studies are not offered yet.",
      },
      steps: [
        { title: "Scope and baseline", text: "Kickoff, the owner's needs and the data already held." },
        { title: "Options side by side", text: "Options set out with cost, schedule and risk." },
        { title: "Decision gate", text: "You choose the option that gets detailed analysis.", gate: true },
        { title: "Detailed analysis", text: "The chosen option is worked through, with a financial model where relevant." },
        { title: "Recommendation and handover", text: "The final report and data pack go to your team." },
      ],
      faq: [
        {
          q: "Does a facility study compare build, lease and outsource?",
          a: "Yes. Every oil and gas facility study compares the three options with the cost and risk of each, before the budget is locked.",
        },
        {
          q: "Can a study stop after one stage?",
          a: "Yes. Because a study stops at decision gates, you can end it or continue after you receive the result of each stage.",
        },
      ],
      photoAlt: "Aerial view of a refinery complex and storage tanks beside the sea",
    },
    {
      key: "records",
      slug: "records-and-document-control",
      name: "Records & Document Control",
      card: "Document control, records systems and ISO 30301 programs, with training for your team.",
      metaDescription:
        "Document Control Office setup, ISO 30301 records management systems, ISO 15489 records programs, EDMS and training for energy operators in Indonesia and Australia.",
      intro:
        "Records, document control and archive systems for energy operators, from staff training to a certified management system.",
      included: [
        "Document Control Office setup and training aligned with ISO 9001.",
        "ISO 30301 management system for records, from implementation to certification readiness.",
        "Records management programs based on ISO 15489, including classification schemes, retention schedules and disposal.",
        "Electronic document management system (EDMS) selection and rollout.",
        "Geological and technical data management, and record center planning.",
        "Certified training for document controllers and records staff.",
      ],
      whoFor: "Oil and gas operators, power producers, EPC contractors and state-owned energy companies.",
      receives: [
        "Document control procedures and forms.",
        "ISO 30301 management system documentation and a certification readiness report.",
        "A classification scheme and retention schedule.",
        "System requirements and an EDMS selection report.",
        "Training materials and attendance records.",
      ],
      rules: {
        id: "Archive obligations under UU 43/2009, and ISO 9001 or ISO 30301 certification.",
        au: "ISO 9001 or ISO 30301 certification, and document control for projects and regulator submissions.",
      },
      steps: [
        { title: "Inventory", text: "Types, volumes, locations and condition of records and project documents." },
        { title: "Design", text: "Classification scheme, retention schedule and document control procedures." },
        { title: "Design approval", text: "You approve the design before it is applied.", gate: true },
        { title: "Implementation", text: "Records are organised, the system is applied, with internal audit when certification is the aim." },
        { title: "Training and handover", text: "Operator training and procedures handed to your team." },
      ],
      faq: [
        {
          q: "Is Whitesec registered in CIVD?",
          a: "We carry out oil and gas work for KKKS through CIVD-registered partners Manpro and SCU (Elnusa). The contract route follows KKKS procurement rules.",
        },
        {
          q: "Do all physical records have to be digitised?",
          a: "No. We prioritise high-value, frequently used records; the rest only needs to be organised and given a retention schedule.",
        },
      ],
      photoAlt: "A data center aisle with perforated-door racks and a white floor",
    },
    {
      key: "ot",
      slug: "ot-and-cyber-security-for-energy",
      name: "OT & Cyber Security for Energy",
      card: "Assessments, testing and compliance for the systems that run your plant.",
      metaDescription:
        "OT security assessment against IEC 62443, OT network penetration testing, secure SCADA remote access and critical infrastructure compliance for the energy sector.",
      intro: "Security for the systems that run energy assets, from the control room to the inverter.",
      included: [
        "OT security assessment against IEC 62443.",
        "OT network penetration testing.",
        "Secure remote access design for SCADA, inverters and vendor support.",
        "Critical infrastructure compliance programs.",
        "OT incident response plans and exercises.",
      ],
      whoFor: "Oil and gas operators, power producers, fuel distributors, and solar and BESS operators.",
      receives: [
        "An assessment report with findings and a prioritised remediation order.",
        "An OT penetration test report with retest results.",
        "A remote access architecture design.",
        "Compliance program documents and a gap register.",
        "An OT incident response plan and exercise report.",
      ],
      rules: {
        id: "Vital information infrastructure (IIV) obligations under Perpres 82/2022 and the energy-sector rules the Ministry of Energy issues under it.",
        au: "A critical infrastructure risk management program (CIRMP) under the SOCI Act, and AESCSF.",
      },
      steps: [
        { title: "Asset and zone scope", text: "The OT assets, network boundaries and who operates them." },
        { title: "Rules of testing", text: "Scope, timing and limits of testing are agreed with your operations team.", gate: true },
        { title: "Assessment and testing", text: "Against IEC 62443, carried out under the agreed rules." },
        { title: "Reporting and priorities", text: "Findings ordered by their effect on operations." },
        { title: "Remediation and exercise", text: "Remediation design, response plan and an exercise with your team." },
      ],
      faq: [
        {
          q: "Can testing disrupt operations?",
          a: "We agree the rules of testing with your operations team first. Testing on live systems happens only after you approve the scope, timing and limits.",
        },
        {
          q: "Which standard does the assessment use?",
          a: "IEC 62443 for OT security assessment. The legal obligations that apply depend on your country and sector, as set out above.",
        },
      ],
      photoAlt: "An operator in a power plant control room with process screens on the wall",
    },
    {
      key: "efficiency",
      slug: "energy-efficiency-iso-50001",
      name: "Energy Efficiency & ISO 50001",
      card: "Energy audits and an ISO 50001 system that lower energy use and meet the rules.",
      metaDescription:
        "Energy audits, ISO 50001 energy management system implementation, certification readiness and energy manager support for industry, plants and buildings.",
      intro: "Energy audits and a management system that lower energy use and meet energy management obligations.",
      included: [
        "Energy audits with prioritised savings measures.",
        "ISO 50001 energy management system implementation.",
        "Certification readiness with certification partners.",
        "Energy manager support on retainer.",
        "Energy performance monitoring and reporting.",
      ],
      whoFor: "Factories, smelters, plants, large commercial buildings and energy providers.",
      receives: [
        "An energy audit report with prioritised savings measures.",
        "ISO 50001 documentation: energy policy, baseline and energy performance indicators.",
        "A certification readiness report.",
        "Regular energy performance reports.",
      ],
      rules: {
        id: "Mandatory energy management under PP 33/2023 and Permen ESDM 8/2025 for energy users above the annual consumption threshold set for each sector.",
        au: "Voluntary, driven by energy cost.",
      },
      steps: [
        { title: "Scope and baseline", text: "Consumption data, main equipment and the energy baseline." },
        { title: "Site audit", text: "Measurement and tracing of energy use on site." },
        { title: "Savings measures list", text: "You choose which measures go first.", gate: true },
        { title: "System in place", text: "ISO 50001 policy, indicators and procedures are put to work." },
        { title: "Monitoring and certification readiness", text: "Regular reporting and preparation for the certification audit." },
      ],
      faq: [
        {
          q: "Who issues the ISO 50001 certificate?",
          a: "An independent certification body. We prepare your organisation until it is ready to be audited, working with certification partners, and we confirm which body is used at the start of the project.",
        },
        {
          q: "Are we required to run energy management?",
          a: "In Indonesia, the duty applies to energy users above the annual consumption threshold set for each sector in Permen ESDM 8/2025. We help check whether your organisation is covered.",
        },
      ],
      photoAlt: "High-voltage transmission towers and lines at dusk",
    },
    {
      key: "decarbonisation",
      slug: "decarbonisation-and-emissions-reporting",
      name: "Decarbonisation & Emissions Reporting",
      card: "Emissions figures you can defend and a costed plan to bring them down.",
      metaDescription:
        "Scope 1, 2 and 3 greenhouse gas inventories, costed decarbonisation roadmaps and assurance readiness for climate and sustainability reporting.",
      intro: "Emissions figures that stand up to an auditor, and a costed plan to bring them down.",
      included: [
        "GHG inventory for Scope 1, 2 and 3 using the GHG Protocol and ISO 14064-1.",
        "Decarbonisation roadmaps with costed options.",
        "Data flows and controls behind climate and sustainability disclosures.",
        "Readiness for external assurance.",
      ],
      whoFor: "Listed companies, large emitters, and suppliers whose customers ask for emissions data.",
      receives: [
        "A greenhouse gas inventory report with the methodology and a data register.",
        "A decarbonisation roadmap with options and costs.",
        "Documentation of the data flows and reporting controls.",
        "An external assurance readiness pack.",
      ],
      rules: {
        id: "Sustainability reports under POJK 51/2017.",
        au: "Climate reporting under AASB S2 and NGER reporting.",
      },
      steps: [
        { title: "Boundary and method", text: "The entities, emission sources and standards used." },
        { title: "Data collection and controls", text: "Data sources, owners and checks at each step." },
        { title: "Assumptions approval", text: "You approve the emission factors and assumptions before they are calculated.", gate: true },
        { title: "Inventory and roadmap", text: "Emissions are calculated, then reduction options are costed." },
        { title: "Assurance readiness and handover", text: "An evidence pack is prepared for whoever will examine it." },
      ],
      faq: [
        {
          q: "Which standards do you use to calculate emissions?",
          a: "The GHG Protocol and ISO 14064-1 for Scope 1, 2 and 3 inventories.",
        },
        {
          q: "Does Whitesec give an assurance opinion?",
          a: "No. We prepare the data and controls so they are ready to be examined; assurance is given by an independent assurance provider.",
        },
      ],
      photoAlt: "Wind turbines on a coastal hill with the sea and a blue sky",
    },
    {
      key: "owner",
      slug: "owners-engineer-and-technical-due-diligence",
      name: "Owner's Engineer & Technical Due Diligence",
      card: "An independent technical team on the owner's or investor's side.",
      metaDescription:
        "Design review, EPC tender support, construction monitoring, commissioning witnessing and technical due diligence for project owners, investors and banks.",
      intro: "An independent technical team on the owner's or investor's side.",
      included: [
        "Design and specification review.",
        "EPC tender support and bid evaluation.",
        "Construction monitoring and progress reporting.",
        "Commissioning and acceptance witnessing.",
        "Technical due diligence for lenders and investors.",
      ],
      whoFor: "Project owners, investors and banks.",
      receives: [
        "Review memos and a design comment register.",
        "A bid evaluation report.",
        "Regular progress reports.",
        "Commissioning and acceptance witness records.",
        "A technical due diligence report.",
      ],
      rules: {
        id: "IPP, captive power and oil and gas facility projects.",
        au: "Commercial, BESS and mine site projects.",
      },
      steps: [
        { title: "Scope and roles", text: "The documents reviewed and the limits of our responsibility." },
        { title: "Design review", text: "Comments on design and specification, kept in a register." },
        { title: "Bid evaluation", text: "A comparison of EPC bids and a recommended winner.", gate: true },
        { title: "Construction monitoring", text: "Site visits and regular progress reports." },
        { title: "Commissioning and acceptance", text: "Witnessing of tests and acceptance records." },
      ],
      faq: [
        {
          q: "Who is the client in this service?",
          a: "The project owner, investor or bank. Our team works on their side.",
        },
        {
          q: "What kinds of project do you cover?",
          a: "In Indonesia, IPP, captive power and oil and gas facility projects. In Australia, commercial, BESS and mine site projects.",
        },
      ],
      photoAlt: "Aerial view of rows of battery containers beside a solar field in a desert",
    },
    {
      key: "renewable",
      slug: "renewable-and-hybrid-solutions",
      name: "Renewable & Hybrid Solutions",
      card: "Solar, storage and hybrid systems designed by us and built with licensed partners.",
      metaDescription:
        "Rooftop and ground-mount solar, battery storage, diesel-to-solar hybrids and biogas from palm oil mill effluent, built with licensed EPC partners.",
      intro:
        "Solar, storage and hybrid systems designed and managed by whitesec.energy and built with licensed EPC partners.",
      included: [
        "Commercial and industrial rooftop and ground-mount solar.",
        "Battery energy storage.",
        "Diesel-to-solar hybrids for remote and mine sites.",
        "Biogas from palm oil mill effluent (POME).",
        "Performance monitoring after handover.",
      ],
      whoFor: "Commercial and industrial companies, mine sites and palm oil mills.",
      receives: [
        "A design and specification package.",
        "Selection and management of licensed EPC partners.",
        "Commissioning and handover documentation.",
        "Performance reports from monitoring after handover.",
      ],
      rules: {
        id: "Built with EPC partners holding an IUJPTL.",
        au: "Built with licensed electrical contractors and accredited installers.",
      },
      steps: [
        { title: "Site and load review", text: "Your power use profile, roof or land conditions and goals." },
        { title: "Design and specification", text: "The system design and the specification for tenders." },
        { title: "EPC partner selection", text: "You approve the licensed partner that will build.", gate: true },
        { title: "Construction", text: "The licensed partner builds; we manage the project and oversee quality." },
        { title: "Commissioning and monitoring", text: "Handover, then regular performance monitoring." },
      ],
      faq: [
        {
          q: "Who installs the system?",
          a: "Licensed EPC partners in each country. We design, manage the project and oversee the quality of the result.",
        },
        {
          q: "Is biogas from palm oil mill effluent included?",
          a: "Yes. Biogas from palm oil mill effluent (POME) is part of this service.",
        },
      ],
      photoAlt: "Solar panels on a factory roof under a cloudy sky",
    },
  ],
  servicePage: {
    whatIncluded: "What is included",
    whoFor: "Who it is for",
    receives: "What you receive",
    rulesTitle: "The rules we cover in each country",
    rulesIndonesia: "Indonesia",
    rulesAustralia: "Australia",
    howRuns: "How the engagement runs",
    howRunsLead: "From kickoff to handover. A diamond marks a decision gate, where you sign off before the next stage.",
    gateLabel: "Decision gate",
    faq: "Frequently asked questions",
    formTitle: "Ask about this service",
    formLead: "The service is already selected in the form. Describe the project or obligation in front of you.",
    related: "Other services",
    indexTitle: "Services",
    indexLead: "Seven services for oil and gas, renewables and green energy. All of them run in Indonesia and Australia.",
    indexMeta:
      "Seven energy services: project studies, records and document control, OT security, energy efficiency, decarbonisation, owner's engineer and renewables.",
    indexMetaTitle: "Energy Services",
  },
  countries: {
    id: {
      metaTitle: "Energy Services in Indonesia",
      title: "Indonesia",
      lead: "Indonesian regulation decides who buys and what must be met. PT Topi Putih Siberindo (Whitesec ID) signs the contract and is your local contact.",
      entityLine: "Contracting entity: PT Topi Putih Siberindo (Whitesec ID)",
      highlights: ["UU 43/2009 on Archives", "Perpres 82/2022 on the Protection of Vital Information Infrastructure", "PP 33/2023 and Permen ESDM 8/2025 on energy management", "POJK 51/2017 on sustainable finance"],
      rulesTitle: "Rules and buyers by service",
      rules: [
        { service: "studies", text: "All study types, including grid interconnection studies for generation licence (IUPTLU) applications." },
        { service: "records", text: "Archive obligations under UU 43/2009, and ISO 9001 or ISO 30301 certification." },
        { service: "ot", text: "Vital information infrastructure (IIV) obligations under Perpres 82/2022 and the energy-sector rules the Ministry of Energy issues under it." },
        { service: "efficiency", text: "Mandatory energy management under PP 33/2023 and Permen ESDM 8/2025 for energy users above the annual consumption threshold set for each sector." },
        { service: "decarbonisation", text: "Sustainability reports under POJK 51/2017." },
        { service: "owner", text: "IPP, captive power and oil and gas facility projects." },
        { service: "renewable", text: "Built with EPC partners holding an IUJPTL." },
      ],
      officeTitle: "Offices and contacts in Indonesia",
      projectsTitle: "Projects in Indonesia",
      projectsText:
        "Completed Whitesec ID work is on the Experience page. Energy projects are added here once the client gives written consent.",
      photoAlt: "Tall buildings of Jakarta's business district at night",
      cta: "Talk to the Indonesia team",
    },
    au: {
      metaTitle: "Energy Services in Australia",
      title: "Australia",
      lead: "In Australia, local regulation and energy cost drive demand. Whitesec AU signs the contract and is your local contact in Perth.",
      entityLine: "Contracting entity: Whitesec AU",
      highlights: ["SOCI Act: critical infrastructure risk management program (CIRMP)", "AESCSF for the energy sector", "AASB S2 climate-related disclosures", "NGER reporting"],
      rulesTitle: "Rules and buyers by service",
      rules: [
        { service: "studies", text: "Facility, digital, feasibility, yield and off-grid studies. Grid connection studies are not offered yet." },
        { service: "records", text: "ISO 9001 or ISO 30301 certification, and document control for projects and regulator submissions." },
        { service: "ot", text: "A critical infrastructure risk management program (CIRMP) under the SOCI Act, and AESCSF." },
        { service: "efficiency", text: "Voluntary, driven by energy cost." },
        { service: "decarbonisation", text: "Climate reporting under AASB S2 and NGER reporting." },
        { service: "owner", text: "Commercial, BESS and mine site projects." },
        { service: "renewable", text: "Built with licensed electrical contractors and accredited installers." },
      ],
      officeTitle: "Offices and contacts in Australia",
      projectsTitle: "Projects in Australia",
      projectsText:
        "We have no Australian energy project listed yet. Projects are added here once the client gives written consent.",
      photoAlt: "The Matagarup Bridge crossing the Swan River in Perth under a blue sky",
      cta: "Talk to the Australia team",
    },
  },
  how: {
    metaTitle: "How We Work",
    metaDescription:
      "The whitesec.energy study method: scope and baseline, options side by side, decision gates, recommendation and handover pack. We lead implementation and licensed partners build.",
    title: "How we work",
    lead: "Two parts: the study method that keeps your decisions traceable, and how roles divide once a project moves to construction.",
    studyTitle: "The study method",
    studyLead:
      "Every study follows the same sequence. Work stops at agreed decision gates so you sign off before the next stage starts.",
    steps: [
      { title: "Scope and baseline", text: "We agree the question the study must answer, its limits and the baseline used for comparison." },
      { title: "Options side by side", text: "Options are set out in one table with the same assumptions: cost, schedule, risk and permitting needs." },
      { title: "Decision gates", text: "You choose the option that goes forward. The next stage starts only after your written approval.", gate: true },
      { title: "Recommendation and handover pack", text: "The study ends with a recommendation, then a handover pack with the data, assumptions and working files for your team." },
    ],
    gateExplain: "A diamond marks a decision gate.",
    buildTitle: "From study to construction",
    buildLead:
      "whitesec.energy leads implementation. Installation work is carried out by licensed EPC partners in each country.",
    buildPoints: [
      { title: "What we hold", text: "Design, specification, selection and management of partners, and quality oversight of the final result." },
      { title: "What licensed partners do", text: "Construction and installation by companies that hold the licence in the country where the project sits." },
      { title: "What you decide", text: "The option that goes forward, the partner appointed and acceptance of the result at each gate." },
    ],
    photoAlt: "An offshore platform standing in the sea under a blue sky streaked with cloud",
  },
  experience: {
    metaTitle: "Experience",
    metaDescription:
      "Examples of completed Whitesec ID work and the energy and infrastructure organisations it has supported. Clients are named only with written consent.",
    title: "Experience",
    lead: "This page holds only completed work and client names we are allowed to use.",
    noteTitle: "Energy project case studies",
    noteText:
      "We name clients only with written consent, so most cards describe the client by type. Case studies of whitesec.energy projects are added once clients agree; until then, the examples below come from Whitesec ID work.",
    casesTitle: "Completed Whitesec ID work",
    casesLead: "Client profiles are anonymised under confidentiality agreements.",
    challenge: "Problem",
    approach: "What was done",
    outcome: "Result",
    duration: "Duration",
    related: "Related energy service",
    clientsTitle: "Energy and infrastructure organisations Whitesec ID has supported",
    clientsLead:
      "This list comes from Whitesec ID's clients and does not state the scope of the work. Manpro and SCU (Elnusa) are the CIVD-registered partners through which oil and gas work for KKKS is carried out.",
    cases: [
      {
        sector: "Energy & Resources",
        title: "24/7 security monitoring for operational infrastructure",
        duration: "Ongoing service",
        related: "OT & Cyber Security for Energy",
        challenge:
          "Logs were available from many devices, but nobody watched them, so anomalies were noticed only after they affected operations.",
        approach: [
          "Integration of log sources into a SIEM and a baseline of the environment.",
          "Detection rules written and tuned to cut false alerts.",
          "An incident response playbook and an agreed escalation path.",
          "A tabletop exercise with the IT team and management.",
        ],
        outcome: [
          "Full security visibility in one dashboard.",
          "Detection and response times measured against an SLA.",
          "A monthly report that technical staff and management can both read.",
        ],
      },
      {
        sector: "Public Agency",
        title: "Records and retention schedule aligned with ANRI guidelines",
        duration: "5 months",
        related: "Records & Document Control",
        challenge:
          "Physical and digital records kept growing without classification, so document requests during audits were hard to meet on time.",
        approach: [
          "An inventory of record types, volumes and condition in every unit.",
          "A classification scheme and retention schedule.",
          "Digitisation of priority records with quality control of the conversion.",
          "Training for records staff and a lawful disposal procedure.",
        ],
        outcome: [
          "Records found again through classification and metadata.",
          "Orderly retention and disposal, with minutes of each disposal.",
          "Ready for document requests during audits.",
        ],
      },
      {
        sector: "Data Center & Infrastructure",
        title: "Recurring security testing for customer SLA commitments",
        duration: "6-month cycle",
        related: "OT & Cyber Security for Energy (penetration testing)",
        challenge:
          "An infrastructure provider had to hand independent security test results to enterprise customers in every contract period.",
        approach: [
          "Testing of web applications, APIs and network infrastructure to OWASP.",
          "Manual verification of each finding to remove false positives.",
          "CVSS v3.1 risk ratings and controlled proof of exploitation.",
          "Retesting after remediation as evidence that findings were closed.",
        ],
        outcome: [
          "A technical report and executive summary ready to share with customers.",
          "Clear remediation priorities for the engineering team.",
          "The recurring testing commitment in the contract was met.",
        ],
      },
    ],
  },
  about: {
    metaTitle: "About",
    metaDescription:
      "whitesec.energy is the energy practice of Whitesec ID and Whitesec AU. The team, credentials, certification and assurance partners and licensed EPC partners.",
    title: "About whitesec.energy",
    lead: "whitesec.energy is the energy practice of Whitesec ID and Whitesec AU.",
    practiceTitle: "One team from study to operation",
    practiceText: [
      "Energy asset owners usually use three different firms: one for the feasibility study, one for the management system, one to secure the operating asset. We put the three in one team.",
      "That combination comes from Whitesec's existing work in audits, management systems and OT security. Each client contracts with the local entity: PT Topi Putih Siberindo in Indonesia and Whitesec AU in Australia.",
    ],
    teamTitle: "The team by role",
    teamLead: "Whitesec's founders lead the practice. Certified energy engineers and energy auditors join as a project needs them.",
    team: [
      {
        name: "Galang Muthohhari",
        role: "Co-Founder, Practice Lead",
        bio: "Runs the technical practice: offensive security, VAPT, and the hands-on verification behind every readiness engagement.",
      },
      {
        name: "Zibusiso “Zi” Dewa",
        role: "Co-Founder, Strategy Lead",
        bio: "Runs strategy and delivery: turning regulatory obligations into scoped, audit-ready outcomes clients can act on.",
      },
    ],
    credentialsTitle: "Credentials held across the Whitesec team",
    credentials: ["CISSP", "CEH", "OSCP", "ISO 27001 Lead Auditor", "ISO 27701", "GRCP"],
    partnersTitle: "Certification and assurance partners",
    partnersText:
      "We prepare certification together with certification and assurance partners. We confirm which body issues the certificate for each standard at the start of the project.",
    epcTitle: "Licensed EPC partners",
    epcText:
      "Construction is carried out by licensed EPC partners in Indonesia and Australia. We name the partners here once the agreements are signed.",
    familyTitle: "The Whitesec family",
    familyText:
      "Whitesec ID serves clients in Indonesia, Whitesec AU serves clients in Australia, and Whitesec One is Whitesec's compliance platform.",
  },
  contact: {
    metaTitle: "Contact",
    metaDescription:
      "Contact whitesec.energy: a form with the service already selected, office addresses in Jakarta and Perth, and the email and phone of Whitesec ID and Whitesec AU.",
    title: "Contact us",
    lead: "Tell us about the project or obligation in front of you. The Whitesec entity in the country you choose answers your enquiry.",
    officesTitle: "Offices",
    directTitle: "Direct contact",
    routeNote: "Enquiries from Indonesia go to Whitesec ID, and enquiries from Australia go to Whitesec AU.",
    form: {
      intro: "All fields are required.",
      required: "required",
      labels: {
        name: "Name",
        organisation: "Company",
        email: "Work email",
        country: "Country",
        service: "Service of interest",
        message: "Message",
        consent: "Privacy policy consent",
      },
      placeholders: { country: "Choose a country", service: "Choose a service" },
      hints: { message: "For example the type of asset, the location, the obligation you face or a deadline. 10 to 2,000 characters." },
      consent: "I agree that the data in this form is processed to follow up my enquiry.",
      consentLink: "Read the privacy policy (new tab)",
      submit: "Send Enquiry",
      sending: "Sending…",
      summary: (n) => `Please check these ${n} fields:`,
      failedTitle: "Your enquiry was not sent because of a problem on our server.",
      failedText:
        "Your answers are still in this form. Try again in a few minutes, or contact us directly by email under Direct contact.",
      errors: {
        name: "Enter your name.",
        organisation: "Enter your company name.",
        email: "Enter your work email.",
        emailInvalid: "The email format is not valid. Example: name@company.com.au.",
        country: "Choose your country.",
        service: "Choose the service you are interested in.",
        messageMin: "Write your message, at least 10 characters.",
        messageMax: "The message can be 2,000 characters at most.",
        consent: "Tick the privacy policy consent to continue.",
      },
      limits: (name, max) => `${name} can be ${max} characters at most.`,
      countryOptions: { id: "Indonesia", au: "Australia" },
      serviceOther: "Not sure yet, please advise",
    },
    thanks: {
      metaTitle: "Thank You",
      metaDescription: "We have received your enquiry. See what happens next.",
      title: "Thank you, we have received your enquiry.",
      lead: "While you wait, you can read how we work or the service closest to what you need.",
      stepsTitle: "What happens next",
      steps: [
        { title: "We read your enquiry", text: "The team in the country you chose reads the project or obligation you described." },
        { title: "We reply", text: "We answer by email to agree a first conversation." },
        { title: "We start from scope", text: "The first conversation decides whether our service fits and what the first step is." },
      ],
      primary: "See How We Work",
      secondary: "Back to Home",
    },
  },
  legal: {
    effective: "27 October 2026",
    effectiveLabel: "Effective:",
    operatorLabel: "Operated by:",
    toc: "Contents",
    privacy: {
      metaTitle: "Privacy Policy",
      metaDescription: "What personal data whitesec.energy collects, why, who it is shared with, how long it is kept and your rights.",
      title: "Privacy Policy",
      lead: "This policy explains the personal data we process when you use the whitesec.energy website and send an enquiry through the contact form.",
      sections: [
        {
          id: "controller",
          title: "Who manages your data",
          paragraphs: [
            "Form data is managed by the Whitesec entity in the country you choose: PT Topi Putih Siberindo (Whitesec ID) in Indonesia, or Whitesec AU in Australia. That entity is the controller of the personal data in your enquiry.",
            "The address and contacts of both entities are on the Contact page.",
          ],
        },
        {
          id: "data",
          title: "The data we collect",
          paragraphs: ["We collect the data you give us and a small amount of technical data."],
          list: [
            "Form data: name, company, work email, country, service of interest and the text of your message.",
            "Technical data the site needs to run, such as IP address and server error logs.",
            "Analytics data (the pages opened and the source of the visit), only if you allow analytics cookies.",
          ],
        },
        {
          id: "purpose",
          title: "What the data is used for",
          paragraphs: [
            "We use form data to answer your enquiry and discuss possible work together. We use analytics data to understand which pages are read. We do not use your data for automated decisions and we do not sell it.",
          ],
        },
        {
          id: "basis",
          title: "Basis for processing",
          paragraphs: [
            "We process form data on the basis of your consent when you send the form and our legitimate interest in responding to your request. Analytics runs only after you consent, and you can withdraw that consent at any time through Cookie settings.",
          ],
        },
        {
          id: "sharing",
          title: "Who the data is shared with",
          paragraphs: [
            "Your enquiry is received by the Whitesec entity you choose. Whitesec ID and Whitesec AU may pass an enquiry to each other when the service you ask about is delivered in the other country.",
            "We use service providers to send the form email and, if you allow it, for analytics. They process data on our behalf and only for that purpose.",
          ],
        },
        {
          id: "transfers",
          title: "Transfers between countries",
          paragraphs: [
            "Because we operate in Indonesia and Australia, form data can move between the two countries and between our service providers' servers. We move it only for the purposes described here.",
          ],
        },
        {
          id: "retention",
          title: "How long data is kept",
          paragraphs: [
            "We keep form data for as long as needed to respond to your enquiry and to run any working relationship that follows. After that it is deleted or anonymised, unless the law requires us to keep it longer.",
          ],
        },
        {
          id: "rights",
          title: "Your rights",
          paragraphs: [
            "You may ask for access to your data, ask us to correct it or delete it, and withdraw consent you have given. For a controller in Indonesia these rights follow Law 27/2022 on Personal Data Protection. For a controller in Australia you may ask for access and correction under the Privacy Act 1988 (Cth).",
            "Send a request to the email of the relevant entity on the Contact page. We respond within a reasonable time.",
          ],
        },
        {
          id: "cookies",
          title: "Cookies and analytics",
          paragraphs: [
            "The site stores one choice in your browser: whether you allow or refuse analytics cookies. The analytics script is not loaded before you allow it. You can change the choice at any time from the Cookie settings link at the bottom of every page.",
          ],
        },
        {
          id: "security",
          title: "Security",
          paragraphs: [
            "The site is served over an encrypted connection and the form validates your input on the server. No system is free of risk; if an incident affects your data, we will handle it as the applicable rules require.",
          ],
        },
        {
          id: "changes",
          title: "Changes to this policy",
          paragraphs: ["If this policy changes, we publish the new version on this page with its effective date."],
        },
      ],
    },
    terms: {
      metaTitle: "Terms & Conditions",
      metaDescription: "Terms of use for whitesec.energy: the nature of the information, the contract with the local entity, intellectual property and governing law.",
      title: "Terms & Conditions",
      lead: "By using the whitesec.energy website you accept the terms below.",
      sections: [
        {
          id: "operator",
          title: "Who runs this site",
          paragraphs: [
            "This site is the energy practice of PT Topi Putih Siberindo (Whitesec ID) and Whitesec AU. In each country the service is provided by the local entity that signs the contract with the client.",
          ],
        },
        {
          id: "information",
          title: "The nature of the information",
          paragraphs: [
            "The content is general information about our services and the regulations they relate to. It is not legal, tax or technical advice for a particular case, and it does not promise that your organisation meets any obligation. The obligations that apply to you should be checked against the official text of the regulation.",
          ],
        },
        {
          id: "contract",
          title: "Services are governed by a separate contract",
          paragraphs: [
            "This site does not form a services contract. The scope, fees, schedule and responsibilities of each engagement are set in a written contract between you and the Whitesec entity in your country. Sending the form is only a request to be contacted.",
          ],
        },
        {
          id: "availability",
          title: "Services and partners",
          paragraphs: [
            "Installation work is carried out by licensed EPC partners. Oil and gas work for KKKS is carried out through CIVD-registered partners. A service not listed on this site is not one we offer.",
          ],
        },
        {
          id: "ip",
          title: "Intellectual property",
          paragraphs: [
            "The text, layout and Whitesec marks on this site are protected. You may read and quote reasonable extracts with the source named, but you may not copy the site as a whole or use Whitesec marks without written permission. Photographs carry their own licences, recorded on the Photo Credits page, and they are illustrations, not Whitesec projects.",
          ],
        },
        {
          id: "links",
          title: "Links to other sites",
          paragraphs: ["The site links to other Whitesec sites and sometimes to third parties. We do not control the content of third-party sites."],
        },
        {
          id: "liability",
          title: "Limit of liability",
          paragraphs: [
            "We try to keep the content accurate but do not guarantee that it is complete or always current. To the extent the law allows, we are not liable for loss arising from using the information on this site without a written services contract.",
          ],
        },
        {
          id: "law",
          title: "Governing law",
          paragraphs: [
            "These terms are governed by the law of the country where the Whitesec entity dealing with you is based: the law of the Republic of Indonesia for PT Topi Putih Siberindo, and the law of Western Australia for Whitesec AU.",
          ],
        },
        {
          id: "changes",
          title: "Changes to the terms",
          paragraphs: ["We may update these terms. The latest version and its effective date are always on this page."],
        },
      ],
    },
  },
  credits: {
    metaTitle: "Photo Credits",
    metaDescription: "The source, rights holder and licence of every photograph on whitesec.energy.",
    title: "Photo Credits",
    lead: "The photographs on this site are illustrations from openly licensed sources. They are not Whitesec projects. We cropped them and adjusted their colour so they sit together.",
    colPhoto: "Photo",
    colSource: "Source and rights holder",
    colLicence: "Licence",
    note: "CC BY-SA licences require attribution and sharing of adaptations under the same licence. The attribution is in this table.",
  },
  cookie: {
    label: "Cookie consent",
    title: "Cookie settings",
    text: "We would like to use analytics cookies to learn which pages are read. Without your consent, no analytics script is loaded.",
    link: "Read the privacy policy",
    reject: "Refuse",
    accept: "Allow",
  },
  notFound: {
    metaTitle: "Page Not Found",
    title: "Page not found",
    lead: "The address you opened does not exist or has moved. Check the spelling, or continue from one of these pages.",
    suggestions: [
      { label: "Home", desc: "A summary of whitesec.energy services." },
      { label: "Services", desc: "Seven services for oil and gas, renewables and green energy." },
      { label: "How We Work", desc: "The study method and how roles divide during construction." },
      { label: "Contact", desc: "Send an enquiry or contact us directly." },
    ],
  },
  error: {
    title: "This page failed to load",
    lead: "Something went wrong while preparing the page. Try reloading. If the problem continues, go back to the home page or contact us.",
    reference: "Reference code:",
    retry: "Try Again",
    home: "Back to Home",
  },
  sticky: { label: "Talk to Us" },
}
