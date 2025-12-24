export const roleDetails = {
    // LIFE SCIENCE ROLES
    "research-assistant": {
        title: "Research Assistant",
        category: "Life Science",
        summary: "A Research Assistant supports scientific studies by collecting data, conducting experiments, analyzing results, maintaining lab equipment, and documenting findings. They work under senior scientists or principal investigators (PIs) in universities, hospitals, biotech labs, and research institutes.",
        eligibility: {
            degree: "BSc in Life Science / Biotechnology / Biochemistry / Microbiology / Zoology / Botany (Minimum). MSc preferred.",
            skills: ["Basic lab skills (pipetting, PCR, microscopy)", "Data entry & analysis", "Literature review", "Documentation", "Safety & SOPs"]
        },
        salary: {
            fresher: "₹15,000 – ₹25,000 per month",
            experienced: "₹25,000 – ₹40,000 per month",
            top: "₹30,000 – ₹45,000 per month (IIT/IISc/CSIR)"
        },
        flow: [
            { step: "Education", details: "Complete BSc, optional MSc in Life Sciences" },
            { step: "Learn Basic Lab Skills", details: "Pipetting, PCR, microscopy, safety" },
            { step: "Develop Core Analytical Skills", details: "Excel, basic stats, scientific writing" },
            { step: "Mini Research Projects", details: "Conduct experiments, reports, SOP adherence" },
            { step: "Internship / Lab Training", details: "2-6 months in university/hospital/biotech labs" },
            { step: "Certifications", details: "Research Methodology, Lab Safety, Data Analysis" },
            { step: "Networking", details: "Lab notebook, resume, LinkedIn/ResearchGate" },
            { step: "Job Applications", details: "Apply to labs, universities, biotech firms" },
            { step: "Interview Prep", details: "Explain projects, techniques, problem-solving" },
            { step: "Land The Job", details: "Start as Research Assistant" }
        ]
    },
    "clinical-research-coordinator": {
        title: "Clinical Research Coordinator (CRC) 🧑‍⚕️📋",
        category: "Life Science",
        summary: "Coordinates clinical trials, manages patient records, ensures compliance with GCP, and communicates between investigators, sponsors, and participants.",
        eligibility: {
            degree: "BSc/MSc in Life Sciences, Nursing, Pharmacy, or MBBS",
            skills: ["GCP knowledge", "documentation", "communication", "ethics", "basic stats"]
        },
        salary: {
            fresher: "₹18,000 – ₹25,000/month",
            experienced: "₹25,000 – ₹40,000/month"
        },
        flow: [
            { step: "Education", details: "BSc/MSc Life Sciences / Nursing / Pharmacy / MBBS" },
            { step: "Learn Clinical Basics", details: "Trial phases, protocols, consent, ethics" },
            { step: "Develop Core Skills", details: "Data entry, communication, monitoring, EDC systems" },
            { step: "Mini Projects", details: "Observational studies, audits, reports" },
            { step: "Internship", details: "Hospital research unit or CRO (2-6 months)" },
            { step: "Certifications", details: "GCP Certification, Clinical Research courses" },
            { step: "Networking", details: "Document projects, LinkedIn profile" },
            { step: "Apply for CRC Roles", details: "Hospitals, CROs, clinical trial units" },
            { step: "Interview Prep", details: "GCP knowledge, protocols" },
            { step: "Land The Job", details: "CRC role in hospital or CRO" }
        ]
    },
    "lab-technician": {
        title: "Lab Technician 🧫🔬",
        category: "Life Science",
        summary: "Performs routine lab tests, maintains instruments, prepares samples, and supports scientists in research or diagnostics.",
        eligibility: {
            degree: "BSc/MSc in Life Sciences / Biotechnology / MLT diploma",
            skills: ["lab techniques", "sample handling", "documentation", "SOP compliance"]
        },
        salary: {
            fresher: "₹12,000 – ₹20,000/month",
            experienced: "₹20,000 – ₹35,000/month"
        },
        flow: [
            { step: "Education", details: "BSc/MSc Life Sciences / MLT diploma" },
            { step: "Learn Lab Basics", details: "Sample prep, microscopy, instrument operation, safety" },
            { step: "Develop Core Skills", details: "Lab records, data entry, SOP adherence" },
            { step: "Mini Projects", details: "Run small experiments, document results" },
            { step: "Internship", details: "Diagnostic/hospital/research lab (2-6 months)" },
            { step: "Certifications", details: "Lab technician certifications, safety courses" },
            { step: "Networking", details: "Document experiments, professional contacts" },
            { step: "Apply", details: "Hospitals, diagnostic labs, research institutes" },
            { step: "Interview Prep", details: "Explain techniques, accuracy" },
            { step: "Land The Job", details: "Lab Technician role" }
        ]
    },
    "bioinformatician": {
        title: "Bioinformatician 💻🧬",
        category: "Life Science",
        summary: "Analyzes biological data using computational tools, databases, and algorithms. Supports genomics, proteomics, and research projects.",
        eligibility: {
            degree: "BSc/MSc in Bioinformatics, Biotechnology, Computational Biology, or CS + Biology",
            skills: ["Python/R", "statistics", "database usage", "genomics"]
        },
        salary: {
            fresher: "₹20,000 – ₹35,000/month",
            experienced: "₹35,000 – ₹60,000/month"
        },
        flow: [
            { step: "Education", details: "BSc/MSc Bioinformatics / Biotech / CS+Biology" },
            { step: "Learn Computational Skills", details: "Python/R, Linux, NCBI/Ensembl, Stats" },
            { step: "Mini Projects", details: "RNA-seq analysis, variant calling, reports" },
            { step: "Internship", details: "Research lab or biotech company (2-6 months)" },
            { step: "Certifications", details: "Bioinformatics specializations, NGS analysis" },
            { step: "Networking", details: "GitHub/Kaggle projects, LinkedIn" },
            { step: "Apply", details: "Bioinformatics analyst positions" },
            { step: "Interview Prep", details: "Discuss datasets, coding skills" },
            { step: "Land The Job", details: "Junior Bioinformatician" }
        ]
    },
    "environmental-scientist": {
        title: "Environmental Scientist 🌳🌎",
        category: "Life Science",
        summary: "Studies environmental issues, conducts tests, collects field data, and provides solutions for sustainability, pollution control, and biodiversity conservation.",
        eligibility: {
            degree: "BSc/MSc in Environmental Science, Ecology, Biology, or related fields",
            skills: ["Data analysis", "GIS basics", "field survey", "lab testing"]
        },
        salary: {
            fresher: "₹18,000 – ₹25,000/month",
            experienced: "₹25,000 – ₹45,000/month"
        },
        flow: [
            { step: "Education", details: "BSc/MSc Environmental Science / Biology" },
            { step: "Learn Core Skills", details: "Sampling, pollution assessment, GIS" },
            { step: "Mini Projects", details: "Field survey, lab analysis, reports" },
            { step: "Internship", details: "NGOs, govt labs, consultancy (2-6 months)" },
            { step: "Certifications", details: "GIS, Remote Sensing, Monitoring" },
            { step: "Networking", details: "Document reports, LinkedIn/ResearchGate" },
            { step: "Apply", details: "Environmental analyst / scientist roles" },
            { step: "Interview Prep", details: "Present field data, regulations knowledge" },
            { step: "Land The Job", details: "Environmental Scientist" }
        ]
    },
    "microbiologist": {
        title: "Microbiologist 🦠🔬",
        category: "Life Science",
        summary: "Studies microorganisms, including bacteria, viruses, fungi, and protozoa. Conducts experiments, analyzes cultures, and supports research, clinical diagnostics, or industrial applications.",
        eligibility: {
            degree: "BSc/MSc in Microbiology / Biotechnology / Life Sciences",
            skills: ["culturing techniques", "staining", "aseptic handling", "biochemical tests", "data analysis"]
        },
        salary: {
            fresher: "₹15,000 – ₹25,000/month",
            experienced: "₹25,000 – ₹45,000/month"
        },
        flow: [
            { step: "Education", details: "BSc/MSc Microbiology / Biotech / Life Sciences" },
            { step: "Learn Core Lab Skills", details: "Aseptic technique, culturing, staining, tests" },
            { step: "Develop Analytical Skills", details: "Data recording, documentation, SOPs" },
            { step: "Mini Projects", details: "Culture experiments, identification reports" },
            { step: "Internship", details: "Diagnostic/hospital/industrial lab (2-6 months)" },
            { step: "Certifications", details: "Lab safety, microbial handling" },
            { step: "Networking", details: "Document experiments, LinkedIn" },
            { step: "Apply", details: "QC microbiology, clinical/research lab" },
            { step: "Interview Prep", details: "Lab techniques, identification results" },
            { step: "Land The Job", details: "Microbiologist" }
        ]
    },
    "quality-control-analyst": {
        title: "Quality Control Analyst ⚖️🧪",
        category: "Life Science",
        summary: "Monitors product quality, performs analytical testing, ensures compliance with GMP/GLP standards, and maintains documentation for regulatory purposes.",
        eligibility: {
            degree: "BSc/MSc in Chemistry / Biochemistry / Life Sciences / Pharmacy",
            skills: ["analytical techniques", "HPLC basics", "lab documentation", "SOP compliance"]
        },
        salary: {
            fresher: "₹15,000 – ₹25,000/month",
            experienced: "₹25,000 – ₹40,000/month"
        },
        flow: [
            { step: "Education", details: "Chemistry / Biochem / Life Sciences / Pharmacy" },
            { step: "Learn Analytical Skills", details: "HPLC, spectrophotometry, titration, calibration" },
            { step: "Develop Documentation Skills", details: "SOPs, test results, QC reports" },
            { step: "Mini Projects", details: "Product analysis, deviation reporting" },
            { step: "Internship", details: "QC lab in pharma/food/biotech (2-6 months)" },
            { step: "Certifications", details: "GMP/GLP basics, instrument operation" },
            { step: "Networking", details: "Document experiments, connect with QA/QC" },
            { step: "Apply", details: "QC Analyst roles in industry" },
            { step: "Interview Prep", details: "QC processes, regulatory compliance" },
            { step: "Land The Job", details: "QC Analyst" }
        ]
    },
    "scientific-writer": {
        title: "Scientific Writer ✍️📚",
        category: "Life Science",
        summary: "Writes scientific content, including research articles, reports, proposals, and regulatory documents for journals, pharma, or research organizations.",
        eligibility: {
            degree: "BSc/MSc in Life Sciences, Biotechnology, Pharmacy",
            skills: ["scientific writing", "literature review", "referencing", "English proficiency"]
        },
        salary: {
            fresher: "₹18,000 – ₹30,000/month",
            experienced: "₹35,000 – ₹60,000/month"
        },
        flow: [
            { step: "Education", details: "Life Sciences / Biotech / Pharmacy" },
            { step: "Learn Writing Skills", details: "Literature review, formatting, summarizing" },
            { step: "Mini Projects", details: "Summaries, lab reports, sample manuscripts" },
            { step: "Internship", details: "Med comms agency, journals (2-6 months)" },
            { step: "Certifications", details: "Scientific writing, Regulatory writing" },
            { step: "Networking", details: "Portfolio of samples, LinkedIn" },
            { step: "Apply", details: "Medical/scientific writer roles" },
            { step: "Interview Prep", details: "Show portfolio, writing clarity" },
            { step: "Land The Job", details: "Scientific Writer" }
        ]
    },
    "food-safety-officer": {
        title: "Food Safety Officer 🍎🧴",
        category: "Life Science",
        summary: "Ensures compliance with food safety regulations, conducts audits, tests samples, and monitors hygiene and quality in food production or services.",
        eligibility: {
            degree: "BSc in Food Science / Microbiology / Biotechnology / Life Sciences",
            skills: ["HACCP", "food microbiology", "quality auditing", "regulatory compliance"]
        },
        salary: {
            fresher: "₹15,000 – ₹25,000/month",
            experienced: "₹25,000 – ₹45,000/month"
        },
        flow: [
            { step: "Education", details: "Food Science / Microbiology / Biotech" },
            { step: "Learn Core Skills", details: "Microbiology, HACCP, Safety compliance" },
            { step: "Mini Projects", details: "Audits, hygiene reports" },
            { step: "Internship", details: "Food testing lab, FBO (2-6 months)" },
            { step: "Certifications", details: "HACCP, FSSAI, Food testing" },
            { step: "Networking", details: "Document audits, connect with professionals" },
            { step: "Apply", details: "FSO / Quality Analyst roles" },
            { step: "Interview Prep", details: "Present reports, regulations knowledge" },
            { step: "Land The Job", details: "Food Safety Officer" }
        ]
    },

    // PHARMA ROLES
    "medical-representative": {
        title: "Medical Representative (MR) 💊📈",
        category: "Pharma",
        summary: "Promotes and sells pharmaceutical products to doctors, hospitals, and pharmacies. Builds relationships, provides product information, and meets sales targets.",
        eligibility: {
            degree: "BSc / BPharm / Diploma in Pharma / Life Sciences",
            skills: ["Communication", "negotiation", "product knowledge", "CRM"]
        },
        salary: {
            fresher: "₹15,000 – ₹25,000/month + incentives",
            experienced: "₹30,000 – ₹60,000/month + incentives"
        },
        flow: [
            { step: "Education", details: "BSc / BPharm / Life Sciences" },
            { step: "Learn Product Knowledge", details: "Formulations, dosage, side effects" },
            { step: "Develop Core Skills", details: "Communication, negotiation, CRM" },
            { step: "Mini Projects", details: "Mock sales calls, presentations" },
            { step: "Internship", details: "Pharma company/distributor (2-3 months)" },
            { step: "Certifications", details: "Sales & marketing, soft skills" },
            { step: "Networking", details: "Contacts with doctors, LinkedIn" },
            { step: "Apply", details: "Pharma companies, hospitals" },
            { step: "Interview Prep", details: "Product knowledge, sales approach" },
            { step: "Land The Job", details: "Medical Representative" }
        ]
    },
    "pharmacovigilance-associate": {
        title: "Pharmacovigilance Associate (PV) 🧾⚠️",
        category: "Pharma",
        summary: "Monitors, documents, and evaluates adverse drug reactions (ADRs). Ensures drug safety and compliance with regulatory standards.",
        eligibility: {
            degree: "BPharm / MPharm / Life Sciences / MBBS",
            skills: ["Attention to detail", "documentation", "ADR reporting knowledge"]
        },
        salary: {
            fresher: "₹18,000 – ₹30,000/month",
            experienced: "₹35,000 – ₹60,000/month"
        },
        flow: [
            { step: "Education", details: "BPharm / MPharm / Life Sciences / MBBS" },
            { step: "Learn PV Basics", details: "ADR documentation, ICH guidelines" },
            { step: "Develop Core Skills", details: "Safety DB, medical terminology, reports" },
            { step: "Mini Projects", details: "ADR case studies, mock reports" },
            { step: "Internship", details: "PV dept of pharma/CRO (2-3 months)" },
            { step: "Certifications", details: "Pharmacovigilance courses" },
            { step: "Networking", details: "Internship reports, connect with PV pros" },
            { step: "Apply", details: "Pharma companies, CROs" },
            { step: "Interview Prep", details: "Case handling, regulatory guidelines" },
            { step: "Land The Job", details: "PV Associate" }
        ]
    },
    "regulatory-affairs-executive": {
        title: "Regulatory Affairs Executive 📑🏛️",
        category: "Pharma",
        summary: "Prepares regulatory submissions, ensures compliance with government regulations, and interacts with authorities for approvals.",
        eligibility: {
            degree: "BPharm / MPharm / Life Sciences / MBA Pharma",
            skills: ["Regulatory guidelines (CDSCO, FDA)", "documentation", "detail-oriented"]
        },
        salary: {
            fresher: "₹20,000 – ₹35,000/month",
            experienced: "₹40,000 – ₹70,000/month"
        },
        flow: [
            { step: "Education", details: "BPharm / MPharm / Life Sciences" },
            { step: "Learn Regulatory Guidelines", details: "CDSCO, FDA, EMA, approvals" },
            { step: "Develop Core Skills", details: "Document filing, compliance" },
            { step: "Mini Projects", details: "Mock dossiers, checklists" },
            { step: "Internship", details: "Pharma regulatory dept/CRO (2-3 months)" },
            { step: "Certifications", details: "Regulatory affairs certification" },
            { step: "Networking", details: "Dossier samples, LinkedIn" },
            { step: "Apply", details: "Pharma/Biotech regulatory roles" },
            { step: "Interview Prep", details: "Regulatory understanding" },
            { step: "Land The Job", details: "Regulatory Affairs Executive" }
        ]
    },
    "clinical-data-manager": {
        title: "Clinical Data Manager 💻📊",
        category: "Pharma",
        summary: "Manages clinical trial data, ensures accuracy, validation, and integrity of study information for regulatory submissions.",
        eligibility: {
            degree: "BSc / MSc / BPharm / Life Sciences / IT + Bioinfo",
            skills: ["Data entry", "database management", "Excel", "statistics"]
        },
        salary: {
            fresher: "₹20,000 – ₹35,000/month",
            experienced: "₹40,000 – ₹70,000/month"
        },
        flow: [
            { step: "Education", details: "Life Sciences / IT / BPharm" },
            { step: "Learn Data Tools", details: "EDC (Medidata/Oracle), validation, Excel" },
            { step: "Mini Projects", details: "Mock clinical DBs, quality checks" },
            { step: "Internship", details: "Pharma/CRO data dept (2-3 months)" },
            { step: "Certifications", details: "Clinical data management" },
            { step: "Networking", details: "Document projects, LinkedIn" },
            { step: "Apply", details: "CDM / Associate positions" },
            { step: "Interview Prep", details: "Mock projects, data handling" },
            { step: "Land The Job", details: "Junior CDM" }
        ]
    },
    "quality-assurance-officer": {
        title: "Quality Assurance Officer (QA) ✅🛡️",
        category: "Pharma",
        summary: "Ensures that manufacturing processes and products meet regulatory and quality standards. Conducts audits, documentation, and compliance checks.",
        eligibility: {
            degree: "BPharm / MPharm / Life Sciences / Chemistry",
            skills: ["GMP", "GLP", "documentation", "detail-oriented"]
        },
        salary: {
            fresher: "₹20,000 – ₹35,000/month",
            experienced: "₹40,000 – ₹70,000/month"
        },
        flow: [
            { step: "Education", details: "BPharm / MPharm / Life Sciences / Chemistry" },
            { step: "Learn QA Basics", details: "GMP, GLP, Batch records, Compliance" },
            { step: "Develop Core Skills", details: "Audits, reports, problem-solving" },
            { step: "Mini Projects", details: "Mock audits, deviation reports" },
            { step: "Internship", details: "QA dept in pharma/biotech (2-3 months)" },
            { step: "Certifications", details: "QA / GMP workshops" },
            { step: "Networking", details: "Audit reports, LinkedIn" },
            { step: "Apply", details: "QA Officer / Executive roles" },
            { step: "Interview Prep", details: "Audit knowledge, compliance" },
            { step: "Land The Job", details: "QA Officer" }
        ]
    },
    "production-chemist": {
        title: "Production Chemist 🧪🏭",
        category: "Pharma",
        summary: "Involved in manufacturing processes of drugs, ensuring correct formulation, quality checks, and process optimization.",
        eligibility: {
            degree: "BPharm / MPharm / Chemistry / Life Sciences",
            skills: ["Formulation basics", "chemical analysis", "process monitoring"]
        },
        salary: {
            fresher: "₹18,000 – ₹30,000/month",
            experienced: "₹35,000 – ₹60,000/month"
        },
        flow: [
            { step: "Education", details: "BPharm / Chemistry / Life Sciences" },
            { step: "Learn Production Basics", details: "Formulation, raw materials, instruments" },
            { step: "Develop Core Skills", details: "Process monitoring, lab testing, SOPs" },
            { step: "Mini Projects", details: "Production simulation, batch quality" },
            { step: "Internship", details: "Production unit pharma/biotech (2-3 months)" },
            { step: "Certifications", details: "GMP / Safety hiring" },
            { step: "Networking", details: "Batch reports, connect with production/QA" },
            { step: "Apply", details: "Production Chemist / Executive" },
            { step: "Interview Prep", details: "Production knowledge" },
            { step: "Land The Job", details: "Production Chemist" }
        ]
    },
    "formulation-development-scientist": {
        title: "Formulation & Development Scientist 🧬💡",
        category: "Pharma",
        summary: "Designs, develops, and tests new drug formulations, improving efficacy, stability, and delivery methods.",
        eligibility: {
            degree: "BPharm / MPharm / Life Sciences / Biotechnology",
            skills: ["Formulation science", "lab experimentation", "analytical techniques"]
        },
        salary: {
            fresher: "₹25,000 – ₹40,000/month",
            experienced: "₹45,000 – ₹80,000/month"
        },
        flow: [
            { step: "Education", details: "BPharm / MPharm / Biotech" },
            { step: "Learn Formulation Basics", details: "Drug delivery, excipients, lab formulation" },
            { step: "Develop Core Skills", details: "Stability/efficacy testing, HPLC, documentation" },
            { step: "Mini Projects", details: "Small-scale formulations, evaluation" },
            { step: "Internship", details: "R&D lab pharma/biotech (2-3 months)" },
            { step: "Certifications", details: "Formulation courses" },
            { step: "Networking", details: "Lab reports, LinkedIn" },
            { step: "Apply", details: "Formulation Scientist / R&D Associate" },
            { step: "Interview Prep", details: "Discuss experiments" },
            { step: "Land The Job", details: "Formulation Scientist" }
        ]
    },
    "medical-writer": {
        title: "Medical Writer ✍️🩺",
        category: "Pharma",
        summary: "Prepares scientific and medical content, including regulatory documents, research articles, and clinical study reports.",
        eligibility: {
            degree: "BPharm / MPharm / Life Sciences / MBBS",
            skills: ["Scientific writing", "regulatory knowledge", "literature review", "English"]
        },
        salary: {
            fresher: "₹20,000 – ₹35,000/month",
            experienced: "₹40,000 – ₹70,000/month"
        },
        flow: [
            { step: "Education", details: "BPharm / MPharm / Life Sciences / MBBS" },
            { step: "Learn Writing & Regulatory", details: "Papers, reports, ICH/GCP" },
            { step: "Develop Core Skills", details: "Literature review, editing" },
            { step: "Mini Projects", details: "Sample reports, document summaries" },
            { step: "Internship", details: "Med comms agency/pharma (2-3 months)" },
            { step: "Certifications", details: "Scientific/Regulatory writing" },
            { step: "Networking", details: "Portfolio, LinkedIn" },
            { step: "Apply", details: "Medical/Scientific Writer" },
            { step: "Interview Prep", details: "Present samples" },
            { step: "Land The Job", details: "Junior Medical Writer" }
        ]
    },
    "drug-safety-associate": {
        title: "Drug Safety Associate 🛡️💊",
        category: "Pharma",
        summary: "Monitors and evaluates drug safety, manages adverse event reporting, and ensures regulatory compliance.",
        eligibility: {
            degree: "BPharm / MPharm / Life Sciences / MBBS",
            skills: ["Pharmacovigilance", "documentation", "regulatory knowledge"]
        },
        salary: {
            fresher: "₹18,000 – ₹30,000/month",
            experienced: "₹35,000 – ₹60,000/month"
        },
        flow: [
            { step: "Education", details: "BPharm / MPharm / Life Sciences / MBBS" },
            { step: "Learn Drug Safety", details: "ADR documentation, ICH/FDA guidelines" },
            { step: "Develop Core Skills", details: "Safety DB, report writing" },
            { step: "Mini Projects", details: "Case evaluation, mock reports" },
            { step: "Internship", details: "PV dept pharma/CRO (2-3 months)" },
            { step: "Certifications", details: "Pharmacovigilance" },
            { step: "Networking", details: "Document experience, LinkedIn" },
            { step: "Apply", details: "Drug Safety/PV Associate" },
            { step: "Interview Prep", details: "ADR handling knowledge" },
            { step: "Land The Job", details: "Drug Safety Associate" }
        ]
    },

    // BIOTECH ROLES
    "bioprocess-engineer": {
        title: "Bioprocess Engineer ⚙️🧪",
        category: "Biotech",
        summary: "Designs, optimizes, and monitors large-scale biological production processes, including fermentation and bioreactor operations.",
        eligibility: {
            degree: "BTech / BSc / MSc in Biotechnology / Biochemical Engineering",
            skills: ["Bioprocessing", "fermentation", "instrumentation", "data analysis"]
        },
        salary: {
            fresher: "₹25,000 – ₹40,000/month",
            experienced: "₹50,000 – ₹90,000/month"
        },
        flow: [
            { step: "Education", details: "Biotech / Biochemical Engineering" },
            { step: "Learn Bioprocess Skills", details: "Fermentation, bioreactors, optimization" },
            { step: "Mini Projects", details: "Small-scale experiments, monitoring" },
            { step: "Internship", details: "Biotech/pharma production (2-6 months)" },
            { step: "Certifications", details: "Bioprocess engineering" },
            { step: "Networking", details: "Process reports, LinkedIn" },
            { step: "Apply", details: "Bioprocess Engineer roles" },
            { step: "Interview Prep", details: "Process knowledge" },
            { step: "Land The Job", details: "Bioprocess Engineer" }
        ]
    },
    "genetic-engineer": {
        title: "Genetic Engineer 🧬🔧",
        category: "Biotech",
        summary: "Modifies genes to improve traits, develop therapies, or produce biologically important molecules. Works in research or industrial biotech.",
        eligibility: {
            degree: "BSc / MSc / MTech in Biotechnology / Genetics / Molecular Biology",
            skills: ["CRISPR", "gene cloning", "molecular techniques", "bioinformatics"]
        },
        salary: {
            fresher: "₹25,000 – ₹40,000/month",
            experienced: "₹50,000 – ₹90,000/month"
        },
        flow: [
            { step: "Education", details: "Biotech / Genetics / Molecular Biology" },
            { step: "Learn Molecular Genetics", details: "Cloning, CRISPR, PCR, Bioinfo" },
            { step: "Mini Projects", details: "Gene editing experiments (simulated)" },
            { step: "Internship", details: "Research lab/biotech (2-6 months)" },
            { step: "Certifications", details: "CRISPR & molecular biology" },
            { step: "Networking", details: "Lab notebook, LinkedIn" },
            { step: "Apply", details: "Genetic Engineer/Research Associate" },
            { step: "Interview Prep", details: "Gene engineering techniques" },
            { step: "Land The Job", details: "Genetic Engineer" }
        ]
    },
    "molecular-biologist": {
        title: "Molecular Biologist 🧪🧬",
        category: "Biotech",
        summary: "Studies cellular processes at the molecular level, conducting experiments on DNA, RNA, and proteins to understand life mechanisms.",
        eligibility: {
            degree: "BSc / MSc in Biotechnology / Molecular Biology / Life Sciences",
            skills: ["PCR", "Western blotting", "cloning", "microscopy", "data analysis"]
        },
        salary: {
            fresher: "₹20,000 – ₹35,000/month",
            experienced: "₹40,000 – ₹70,000/month"
        },
        flow: [
            { step: "Education", details: "Biotech / Molecular Biology" },
            { step: "Learn Molecular Techniques", details: "PCR, blotting, cloning, microscopy" },
            { step: "Mini Projects", details: "Lab/virtual experiments" },
            { step: "Internship", details: "Mol bio lab (2-6 months)" },
            { step: "Certifications", details: "Lab techniques" },
            { step: "Networking", details: "Lab notebooks, LinkedIn" },
            { step: "Apply", details: "Molecular Biologist / Associate" },
            { step: "Interview Prep", details: "Techniques & results" },
            { step: "Land The Job", details: "Molecular Biologist" }
        ]
    },
    "fermentation-scientist": {
        title: "Fermentation Scientist 🍶🧪",
        category: "Biotech",
        summary: "Designs, monitors, and optimizes microbial fermentation processes to produce biologics, enzymes, or pharmaceuticals at lab and industrial scales.",
        eligibility: {
            degree: "BSc / MSc / BTech in Biotechnology / Microbiology / Biochemical Engineering",
            skills: ["Fermentation techniques", "bioreactor operation", "microbial culture", "analytical methods"]
        },
        salary: {
            fresher: "₹25,000 – ₹40,000/month",
            experienced: "₹50,000 – ₹90,000/month"
        },
        flow: [
            { step: "Education", details: "Biotech / Microbiology / Biochemical Eng" },
            { step: "Learn Fermentation", details: "Culture optimization, bioreactor handling" },
            { step: "Mini Projects", details: "Small fermentation experiments" },
            { step: "Internship", details: "Biotech/pharma fermentation lab (2-6 months)" },
            { step: "Certifications", details: "Bioprocess/fermentation courses" },
            { step: "Networking", details: "Experiments data, LinkedIn" },
            { step: "Apply", details: "Fermentation Scientist/Associate" },
            { step: "Interview Prep", details: "Experiments & optimization" },
            { step: "Land The Job", details: "Fermentation Scientist" }
        ]
    },
    "biomedical-engineer": {
        title: "Biomedical Engineer 🏥⚙️",
        category: "Biotech",
        summary: "Combines engineering and biology to design, develop, and maintain medical devices, diagnostics, and healthcare equipment.",
        eligibility: {
            degree: "BTech / MTech in Biomedical Engineering / Biotechnology / Electronics",
            skills: ["Medical device design", "instrumentation", "physiology", "simulation software"]
        },
        salary: {
            fresher: "₹25,000 – ₹45,000/month",
            experienced: "₹50,000 – ₹90,000/month"
        },
        flow: [
            { step: "Education", details: "Biomedical Eng / Biotech / Electronics" },
            { step: "Learn Core Skills", details: "Device design, sensors, biomechanics" },
            { step: "Mini Projects", details: "Prototypes, device testing" },
            { step: "Internship", details: "Medical device co / hospital R&D (2-6 months)" },
            { step: "Certifications", details: "Instrumentation, CAD" },
            { step: "Networking", details: "Prototypes, LinkedIn" },
            { step: "Apply", details: "Biomedical Engineer / R&D" },
            { step: "Interview Prep", details: "Prototype projects" },
            { step: "Land The Job", details: "Biomedical Engineer" }
        ]
    },
    "bioinformatics-specialist": {
        title: "Bioinformatics Specialist 💻🧬",
        category: "Biotech",
        summary: "Uses computational tools to analyze biological data such as DNA, RNA, and protein sequences, aiding research and drug discovery.",
        eligibility: {
            degree: "BSc / MSc / BTech in Biotechnology / Bioinformatics / Life Sciences",
            skills: ["Python/R", "sequence analysis", "databases", "statistics"]
        },
        salary: {
            fresher: "₹25,000 – ₹40,000/month",
            experienced: "₹50,000 – ₹90,000/month"
        },
        flow: [
            { step: "Education", details: "Biotech / Bioinformatics" },
            { step: "Learn Comp Bio", details: "Sequence analysis, databases, protein structure" },
            { step: "Mini Projects", details: "Analyze sequences, pattern prediction" },
            { step: "Internship", details: "Bioinfo lab / Pharma R&D (2-6 months)" },
            { step: "Certifications", details: "Bioinformatics, Data analysis" },
            { step: "Networking", details: "Project summaries, GitHub" },
            { step: "Apply", details: "Bioinformatics Specialist" },
            { step: "Interview Prep", details: "Computational projects" },
            { step: "Land The Job", details: "Bioinformatics Specialist" }
        ]
    },
    "cell-culture-technician": {
        title: "Cell Culture Technician 🧫🧬",
        category: "Biotech",
        summary: "Maintains and grows cell lines in the lab, assisting research and production of biologics or vaccines.",
        eligibility: {
            degree: "BSc / MSc in Biotechnology / Microbiology / Life Sciences",
            skills: ["Sterile techniques", "cell handling", "microscopy", "documentation"]
        },
        salary: {
            fresher: "₹18,000 – ₹30,000/month",
            experienced: "₹35,000 – ₹60,000/month"
        },
        flow: [
            { step: "Education", details: "Biotech / Microbiology" },
            { step: "Learn Cell Culture", details: "Aseptic technique, media prep, microscopy" },
            { step: "Mini Projects", details: "Grow cell lines, document morphology" },
            { step: "Internship", details: "Biotech/pharma lab (2-6 months)" },
            { step: "Certifications", details: "Cell culture, Safety" },
            { step: "Networking", details: "Lab reports, LinkedIn" },
            { step: "Apply", details: "Cell Culture Technician" },
            { step: "Interview Prep", details: "Cell handling experience" },
            { step: "Land The Job", details: "Cell Culture Technician" }
        ]
    },
    "r-and-d-scientist": {
        title: "R&D Scientist 🔬💡",
        category: "Biotech",
        summary: "Conducts experiments to discover new drugs, vaccines, or biological products and improves existing processes or products.",
        eligibility: {
            degree: "MSc / MTech / PhD in Biotechnology / Life Sciences / Biochemistry",
            skills: ["Experimental design", "analytical techniques", "lab management"]
        },
        salary: {
            fresher: "₹30,000 – ₹50,000/month",
            experienced: "₹60,000 – ₹1,00,000/month"
        },
        flow: [
            { step: "Education", details: "MSc / MTech / PhD" },
            { step: "Learn Research", details: "Methodology, instruments, data collection" },
            { step: "Mini Projects", details: "Experiments, analysis" },
            { step: "Internship", details: "R&D lab / Biotech co (2-6 months)" },
            { step: "Certifications", details: "Specialized biotech courses" },
            { step: "Networking", details: "Publications, Lab notebook" },
            { step: "Apply", details: "R&D Scientist / Associate" },
            { step: "Interview Prep", details: "Research projects" },
            { step: "Land The Job", details: "R&D Scientist" }
        ]
    },
    "quality-control-microbiologist": {
        title: "Quality Control Microbiologist ⚖️🦠",
        category: "Biotech",
        summary: "Tests microbial quality of products, ensures compliance with safety standards, and monitors contamination in biopharma or food biotech industries.",
        eligibility: {
            degree: "BSc / MSc in Microbiology / Biotechnology / Life Sciences",
            skills: ["Microbial testing", "aseptic techniques", "documentation", "QC standards"]
        },
        salary: {
            fresher: "₹18,000 – ₹30,000/month",
            experienced: "₹35,000 – ₹60,000/month"
        },
        flow: [
            { step: "Education", details: "Microbiology / Biotech" },
            { step: "Learn QC Micro", details: "Sterile technique, culturing, contamination tests" },
            { step: "Mini Projects", details: "Contamination testing, documentation" },
            { step: "Internship", details: "QC lab biotech/pharma (2-6 months)" },
            { step: "Certifications", details: "HACCP, GMP, Safety" },
            { step: "Networking", details: "Lab reports, LinkedIn" },
            { step: "Apply", details: "QC Microbiologist" },
            { step: "Interview Prep", details: "Lab tests knowledge" },
            { step: "Land The Job", details: "QC Microbiologist" }
        ]
    }
};
