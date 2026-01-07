import { CheckCircle, Heart, FileText, Brain, MessageSquare, BookOpen, Target, Users, Microscope } from "lucide-react";
const careers = [
  {
    title: "Medical Coder",
    icon: CheckCircle,
    salary: "₹2.5L – ₹5L per annum (entry) | up to ₹10L+ (experienced)",
    description: "Assign standardized codes to medical diagnoses and procedures for insurance billing and analytics.",
    path: [
      "Bachelor’s in Life Science/Pharmacy/Nursing/Allied Health",
      "Specialized training/certification in Medical Coding (CPC, CCS, etc.)",
      "Entry-level Medical Coder role",
      "Progress to Senior Coder, Auditor, Team Lead or QA roles"
    ],
    resources: [
      { label: "AAPC Medical Coding Guide", url: "https://www.aapc.com/" },
      { label: "AHIMA - ICD Resources", url: "https://www.ahima.org/" }
    ],
    skills: [
      "ICD-10, CPT, HCPCS knowledge",
      "Attention to detail",
      "Analytical skills",
      "Basic medical terminology"
    ],
    education: [
      "Bachelor's degree in Life Sciences/Pharmacy/Nursing",
      "Medical Coding Certification (CPC/CCS/CCA)"
    ]
  },
  {
    title: "Clinical Research Associate",
    icon: Heart,
    salary: "₹3L – ₹8L per annum (entry) | ₹12L+ (senior)",
    description: "Monitor and coordinate clinical trials to ensure compliance with Good Clinical Practice and regulations.",
    path: [
      "Bachelor’s/Master’s in Life Science/Pharmacy/Nursing",
      "Postgraduate diploma in clinical research (optional)",
      "Start as Clinical Trial Assistant/CRA Trainee",
      "Move to CRA, Senior CRA, Project Manager"
    ],
    resources: [
      { label: "ICH GCP Guidelines", url: "https://ichgcp.net/" },
      { label: "Transcelerate CRA Competency", url: "https://www.transceleratebiopharmainc.com/" }
    ],
    skills: [
      "GCP/ICH knowledge",
      "Communication & coordination",
      "Documentation",
      "Site management"
    ],
    education: [
      "Bachelor’s/Master’s in Life Sciences/Pharmacy/Nursing",
      "Clinical Research Certification (optional)"
    ]
  },
  {
    title: "Regulatory Affairs",
    icon: FileText,
    salary: "₹4L – ₹10L per annum (entry) | ₹15L+ (manager/expert)",
    description: "Ensure products (drugs, biologics, devices) meet all regulatory requirements before and after being marketed.",
    path: [
      "Bachelor’s in Pharmacy/Life Sciences/Biotech",
      "Regulatory Affairs certification (optional)",
      "Regulatory Affairs Associate",
      "Senior RA Specialist, RA Manager"
    ],
    resources: [
      { label: "CDSCO India", url: "https://cdsco.gov.in/" },
      { label: "US FDA Regulatory Resources", url: "https://www.fda.gov/" }
    ],
    skills: [
      "Understanding of regulatory guidelines",
      "Dossier compilation",
      "Attention to detail",
      "Communication"
    ],
    education: [
      "Bachelor’s/Master’s in Pharmacy/Life Sciences",
      "Postgraduate Diploma in Regulatory Affairs (optional)"
    ]
  },
  {
    title: "Pharmacovigilance",
    icon: Brain,
    salary: "₹3L – ₹6L per annum (entry) | ₹10L+ (senior/manager)",
    description: "Monitor and analyze drug safety, prepare reports on adverse events, and ensure pharma compliance.",
    path: [
      "Bachelor’s/Master’s in Pharmacy/Life Sciences",
      "Certification in Pharmacovigilance (optional)",
      "Drug Safety Associate (entry role)",
      "Senior PV Officer, PV Manager"
    ],
    resources: [
      { label: "WHO Uppsala Monitoring Centre", url: "https://www.who-umc.org/" }
    ],
    skills: [
      "Case processing",
      "Medical evaluation",
      "Regulatory reporting",
      "Detail orientation"
    ],
    education: [
      "Bachelor’s/Master’s in Pharmacy/Life Sciences",
      "Basic knowledge of pharma regulations"
    ]
  },
  {
    title: "Clinical Data Management",
    icon: MessageSquare,
    salary: "₹3L – ₹7L per annum (entry) | ₹12L+ (senior/expert)",
    description: "Ensure the accuracy, integrity, and security of data generated in clinical trials.",
    path: [
      "Bachelor’s in Life Sciences/IT/Statistics",
      "Certificate/diploma in Clinical Data Management (optional)",
      "Data Coordinator/Entry roles",
      "Data Manager, CDM Lead"
    ],
    resources: [
      { label: "Society for Clinical Data Management", url: "https://www.scdm.org/" }
    ],
    skills: [
      "Database management",
      "Attention to detail",
      "Data cleaning and query resolution",
      "Understanding of clinical trial design"
    ],
    education: [
      "Bachelor’s in Science/IT",
      "Certifications in CDM tools (Medidata/RAVE)"
    ]
  },
  {
    title: "Medical Writing",
    icon: BookOpen,
    salary: "₹3L – ₹8L per annum (entry) | ₹15L+ (senior/expert)",
    description: "Develop clinical and regulatory documents for submissions, publication, and education.",
    path: [
      "Bachelor’s/Master’s in Life Sciences/Pharma",
      "Medical Writing course/certification (optional)",
      "Associate/Intern/Junior Medical Writer",
      "Senior Writer, Editor, Specialist"
    ],
    resources: [
      { label: "AMWA Medical Writing", url: "https://www.amwa.org/" }
    ],
    skills: [
      "Scientific writing",
      "Literature review",
      "Clarity & conciseness",
      "Publication standards"
    ],
    education: [
      "Bachelor’s/Master’s in Life Sciences/Pharma",
      "Training in scientific communication"
    ]
  },
  {
    title: "Clinical SaaS",
    icon: Target,
    salary: "₹4L – ₹9L per annum (entry) | ₹14L+ (senior/product manager)",
    description: "Support and deploy software solutions for clinical trial management and data analysis.",
    path: [
      "Bachelor’s in IT/Statistics or Life Science (with tech exposure)",
      "Learn key clinical SaaS platforms (CTMS, EDC, etc.)",
      "SaaS Administrator/Support Associate",
      "Product Specialist, Customer Success Manager"
    ],
    resources: [
      { label: "Medidata - Clinical Cloud Solutions", url: "https://www.medidata.com/" }
    ],
    skills: [
      "Software proficiency",
      "Problem solving",
      "User support",
      "Process automation"
    ],
    education: [
      "Bachelor’s in Life Sciences/IT",
      "Certification in clinical data/software systems"
    ]
  },
  {
    title: "Hospital & Healthcare Management",
    icon: Users,
    salary: "₹3.5L – ₹10L per annum (entry/AM role) | ₹20L+ (senior/COO)",
    description: "Supervise hospital operations, budgeting, HR, regulatory, and patient care quality.",
    path: [
      "Bachelor’s in Hospital Admin/Nursing/Life Sciences",
      "MBA/MHA or diploma in healthcare management",
      "Executive roles: start as trainee/assistant manager",
      "Move to Operations Head, Admin Manager, Director"
    ],
    resources: [
      { label: "NABH Quality Standards", url: "https://www.nabh.co/" }
    ],
    skills: [
      "Operations management",
      "Financial planning",
      "Team leadership",
      "Healthcare regulations"
    ],
    education: [
      "Bachelor’s (BA/BSc) + MBA/MHA",
      "Healthcare management certification"
    ]
  },
  {
    title: "Medical Device",
    icon: Microscope,
    salary: "₹3.5L – ₹8L per annum (entry/sales/QA) | ₹15L+ (specialist/manager)",
    description: "Work on product design, regulatory, sales, or technical support for medical devices.",
    path: [
      "BTech/BSc in Biomedical/Mechanical/Electronics or Life Science",
      "Device QA, sales, or R&D internship/training",
      "Join as Device Associate/Specialist",
      "Advance to Regulatory, QA, Product or Sales Lead"
    ],
    resources: [
      { label: "Association of Medical Device Industry", url: "https://www.amdi.in/" }
    ],
    skills: [
      "Product knowledge",
      "Regulatory guidelines",
      "Technical troubleshooting",
      "Sales communication"
    ],
    education: [
      "BTech/BSc Biomedical/related",
      "Special courses on devices/ISO/QA"
    ]
  }
];
