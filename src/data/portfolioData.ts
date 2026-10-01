import { Project, SkillCategoryGroup, ToolItem, ExperienceItem, EducationInfo } from '../types/portfolio';

export const PROFILE_PHOTO = '/images/foto.jpg';
export const HERO_IMAGE = '/images/foto.jpg';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/alexabelle-benedicta-0459603a5/';
export const INSTAGRAM_URL = 'https://instagram.com/alexbl__';
export const HOSPI_AI_LIVE_URL = 'https://hospi-ai.vercel.app/guest';
export const UTAITE_HUB_LIVE_URL = 'https://utaitehub-exuf.vercel.app?_vercel_share=Z1o0xLl68Tpwd7nOu3ASZkItfNA2rUa2';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'hospi-ai',
    title: 'HOSPI AI',
    category: {
      id: 'Business & Product Development',
      en: 'Business & Product Development'
    },
    categoryType: 'business',
    subtitle: {
      id: 'Solusi AI untuk Manajemen Permintaan Tamu Hotel & Guest Service',
      en: 'AI Solution for Hotel Guest Request Management & Guest Service'
    },
    shortDescription: {
      id: 'Solusi berbasis kecerdasan buatan untuk membantu industri perhotelan mengelola guest requests dan mengoptimalkan efisiensi komunikasi antara tamu dan hotel staff.',
      en: 'An AI-driven solution designed to assist hotels in managing guest requests and optimizing communication efficiency between guests and hotel staff.'
    },
    role: {
      id: 'Product Ideation, Business Model Structuring, & UI/UX Workflow',
      en: 'Product Ideation, Business Model Structuring, & UI/UX Workflow'
    },
    skills: [
      'Web & App Development',
      'Business Model',
      'UI/UX',
      'Product Development',
      'Design Thinking'
    ],
    image: '/images/VISUALISASI WEB.png',
    featured: true,
    links: {
      live: HOSPI_AI_LIVE_URL,
      note: {
        id: 'Website aktif dan dapat diakses langsung via Vercel',
        en: 'Live website deployed and accessible directly via Vercel'
      }
    },
    details: {
      overview: {
        id: 'HOSPI AI dirancang sebagai solusi terhadap inefisiensi komunikasi di lingkungan perhotelan, di mana permintaan tamu sering tertunda akibat alur manual antar departemen. Melalui asisten cerdas berbasis AI yang dapat diakses langsung oleh tamu via web, tamu dapat menyampaikan permintaan layanan kamar, fasilitas, atau informasi hotel secara real-time dengan pemrosesan otomatis ke staf terkait.',
        en: 'HOSPI AI was developed to address communication bottlenecks in hospitality environments, where guest inquiries frequently face delays due to manual department dispatching. Through an AI-powered smart assistant directly accessible via web, guests can submit room requests, amenity queries, or hotel information in real time with automated routing.'
      },
      myContribution: {
        id: 'Alexabelle berperan dalam mengidentifikasi titik friksi operasional (pain points), memetakan User Journey dari sisi tamu dan staf hotel, merumuskan model bisnis nilai tambah (Value Proposition Canvas), serta merancang arsitektur alur UI/UX antarmuka guest concierge.',
        en: 'Alexabelle contributed by identifying operational friction points, mapping user journeys for both guests and staff, formulating the value proposition canvas within the business model, and structuring the prototype UI/UX workflows for the guest concierge interface.'
      },
      process: {
        id: '1. Problem Definition: Analisis operasional penanganan permintaan tamu di hotel.\n2. Design Thinking: Memetakan empathy map, ideation fitur AI concierge, dan alur permintaan tamu.\n3. Business Modeling: Penyusunan Business Model Canvas (BMC) berfokus pada efisiensi biaya dan kepuasan tamu.\n4. Prototyping & Live Deployment: Mengembangkan dan meluncurkan antarmuka web interaktif HOSPI AI di Vercel.',
        en: '1. Problem Definition: Analyzed operational gaps in guest service response times.\n2. Design Thinking: Constructed empathy maps, ideated AI concierge feature sets, and mapped request scenarios.\n3. Business Modeling: Formulated a structured Business Model Canvas focusing on operational cost efficiency.\n4. Prototyping & Live Deployment: Developed and launched the interactive HOSPI AI web interface on Vercel.'
      },
      skillsApplied: [
        'Business Model Structuring',
        'Design Thinking Methodology',
        'UI/UX User Flow Mapping',
        'Product Ideation',
        'Hospitality Workflow Analysis'
      ],
      output: {
        id: 'Website interaktif HOSPI AI live, dokumen Business Model Canvas, diagram alur dispatching AI concierge, serta purwarupa desain antarmuka tamu yang fungsional.',
        en: 'Live interactive HOSPI AI website, Business Model Canvas document, AI concierge dispatch flowcharts, and functional guest-facing interface workflows.'
      },
      evidence: {
        status: {
          id: 'Website Live & Terdokumentasi',
          en: 'Live Website & Documented'
        },
        note: {
          id: 'Tangkapan layar antarmuka asli dari aplikasi HOSPI AI yang sedang aktif online.',
          en: 'Authentic interface screenshot of the active online HOSPI AI web application.'
        },
        image: '/images/VISUALISASI WEB.png',
        items: [
          {
            title: {
              id: 'Akses Antarmuka Tamu (Guest Portal)',
              en: 'Guest Portal Live Access'
            },
            type: 'Production URL',
            description: {
              id: 'Akses langsung antarmuka tamu HOSPI AI di domain Vercel.',
              en: 'Direct access to the live guest interface hosted on Vercel.'
            },
            status: {
              id: 'Aktif Online',
              en: 'Active Online'
            }
          },
          {
            title: {
              id: 'Business Model Canvas (BMC) Hospitality Framework',
              en: 'Business Model Canvas (BMC) Hospitality Framework'
            },
            type: 'Strategy Document',
            description: {
              id: 'Analisis segmentasi pelanggan, kanal integrasi, proporsi nilai, dan struktur biaya implementasi.',
              en: 'Customer segment analysis, integration channels, value propositions, and operational cost structure.'
            },
            status: {
              id: 'Tersedia dalam Laporan Proyek',
              en: 'Available in Project Report'
            }
          }
        ]
      }
    }
  },
  {
    id: 'utaite-hub',
    title: 'Utaite Hub',
    category: {
      id: 'Web Development / Digital Product',
      en: 'Web Development / Digital Product'
    },
    categoryType: 'web',
    subtitle: {
      id: 'Direktori & Platform Eksplorasi Kreator Musik Komunitas',
      en: 'Community Music Creator Exploration & Directory Platform'
    },
    shortDescription: {
      id: 'Personal web project yang dikembangkan sebagai direktori terkurasi, katalog diskografi, dan pusat interaksi bagi komunitas musik utaite.',
      en: 'A personal web project developed as a curated directory, discography catalog, and discovery platform for the utaite music community.'
    },
    role: {
      id: 'Web Developer & UI Designer',
      en: 'Web Developer & UI Designer'
    },
    skills: [
      'Web Development',
      'UI Design',
      'Digital Product Development',
      'Responsive Web'
    ],
    image: '/images/Screenshot 2026-10-01 230322.png',
    featured: false,
    links: {
      live: UTAITE_HUB_LIVE_URL,
      note: {
        id: 'Website aktif dan dapat diakses langsung via Vercel',
        en: 'Live website deployed and accessible directly via Vercel'
      }
    },
    details: {
      overview: {
        id: 'Utaite Hub adalah proyek web personal yang bertujuan menghubungkan pendengar dengan karya-karya vokalis utaite indie. Platform ini dirancang untuk menyajikan direktori terkurasi, katalog diskografi, serta navigasi pencarian yang intuitif dan ramah komunitas.',
        en: 'Utaite Hub is an independent personal web project aiming to bridge listeners with indie utaite vocalists. The platform is designed to provide curated directories, discography catalogs, and intuitive community-friendly navigation.'
      },
      myContribution: {
        id: 'Alexabelle merancang konsep antarmuka, menyusun layout kartu kreator dan navigasi kategori, serta mengimplementasikan struktur web frontend interaktif dan mengunggahnya secara live.',
        en: 'Alexabelle designed the interface layout, structured creator catalog cards and category navigation, and implemented the frontend web codebase deployed live.'
      },
      process: {
        id: '1. Research: Mengamati preferensi komunitas dan cara penggemar mencari rilisan baru.\n2. UI Mockup: Eksplorasi layout kartu kreator dan pemutar audio terintegrasi.\n3. Frontend Coding: Pembangunan struktur web responsif, transisi halus, dan sistem navigasi kategori.\n4. Deployment: Penerbitan platform ke Vercel untuk pengujian interaktif publik.',
        en: '1. Research: Observed community habits and discovery patterns for indie music releases.\n2. UI Mockup: Explored creator card layouts and embedded audio sample previews.\n3. Frontend Coding: Built responsive layout components, smooth transitions, and category navigation.\n4. Deployment: Published platform to Vercel for public interactive testing.'
      },
      skillsApplied: [
        'Responsive Web Development',
        'UI Interface Architecture',
        'Content Categorization',
        'Community Product Design'
      ],
      output: {
        id: 'Website interaktif langsung (live web app) dengan sistem katalog kreator, navigasi dinamis, dan visual modern ramah komunitas.',
        en: 'Live interactive web application featuring creator catalog schemes, dynamic navigation, and modern community-friendly UI.'
      },
      evidence: {
        status: {
          id: 'Website Live & Terdokumentasi',
          en: 'Live Website & Documented'
        },
        note: {
          id: 'Tangkapan layar antarmuka asli dari website Utaite Hub yang sedang online.',
          en: 'Authentic interface screenshot of the active Utaite Hub website.'
        },
        image: '/images/Screenshot 2026-10-01 230322.png',
        items: [
          {
            title: {
              id: 'Live Platform Deployment',
              en: 'Live Platform Deployment'
            },
            type: 'Production URL',
            description: {
              id: 'Akses langsung antarmuka web interaktif di domain Vercel.',
              en: 'Direct access to the interactive web interface hosted on Vercel.'
            },
            status: {
              id: 'Aktif Online',
              en: 'Active Online'
            }
          }
        ]
      }
    }
  },
  {
    id: 'academic-bmc',
    title: 'Business Model Canvas: Academic Coursework',
    category: {
      id: 'Business & Strategy Exploration',
      en: 'Business & Strategy Exploration'
    },
    categoryType: 'business',
    subtitle: {
      id: 'Tugas Kuliah Perancangan 9 Blok Business Model Canvas',
      en: '9-Block Business Model Canvas Coursework Design'
    },
    shortDescription: {
      id: 'Tugas kuliah perancangan Business Model Canvas (BMC) komprehensif, membedah 9 blok esensial untuk memvalidasi kelayakan produk dan proposisi nilai bisnis.',
      en: 'Comprehensive academic Business Model Canvas (BMC) coursework dissecting 9 essential blocks to validate product feasibility and business value proposition.'
    },
    role: {
      id: 'Business Model Planning & Synthesis',
      en: 'Business Model Planning & Synthesis'
    },
    skills: [
      'Business Model Canvas',
      'Value Proposition',
      'Market Analysis',
      'Revenue Streams',
      'Customer Segments'
    ],
    image: '/images/tempebar_BMC.jpg',
    featured: false,
    links: {
      note: {
        id: 'Lembar kerja tugas perkuliahan Bisnis Digital di Politeknik Internasional Bali',
        en: 'Digital Business academic coursework worksheet at Politeknik Internasional Bali'
      }
    },
    details: {
      overview: {
        id: 'Tugas perkuliahan Bisnis Digital yang menguji kemampuan merancang dan menyusun 9 blok Business Model Canvas secara terpadu. Proyek ini memetakan bagaimana sebuah ide bisnis menghasilkan nilai, menjangkau pasar sasaran, mengelola relasi pelanggan, serta mempertahankan profitabilitas.',
        en: 'A Digital Business academic coursework testing the structured formulation of the 9 building blocks of the Business Model Canvas. The project maps how a business idea generates value, accesses target markets, sustains customer relationships, and maintains operational viability.'
      },
      myContribution: {
        id: 'Alexabelle menyusun dan menganalisis setiap elemen BMC, mulai dari Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, hingga Cost Structure.',
        en: 'Alexabelle formulated and analyzed every BMC element, spanning Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, to Cost Structure.'
      },
      process: {
        id: '1. Problem & Customer Discovery: Mengidentifikasi target audiens dan pain points utama.\n2. Value Mapping: Menyelaraskan solusi dengan proposisi nilai unik.\n3. Canvas Synthesis: Memetakan hubungan antar 9 blok bisnis secara sistematis pada lembar kerja kanvas.\n4. Feasibility Review: Meninjau kelayakan finansial dan operasional model bisnis.',
        en: '1. Problem & Customer Discovery: Identified target audience and core pain points.\n2. Value Mapping: Aligned solutions with unique value propositions.\n3. Canvas Synthesis: Systematically mapped interrelationships across the 9 business blocks on the canvas sheet.\n4. Feasibility Review: Evaluated financial and operational feasibility of the business model.'
      },
      skillsApplied: [
        'Business Model Canvas (BMC)',
        'Value Proposition Design',
        'Customer Segmentation',
        'Operational & Cost Analysis'
      ],
      output: {
        id: 'Dokumentasi kanvas model bisnis lengkap (BMC canvas sheet) hasil tugas kuliah terstruktur.',
        en: 'Complete business model canvas documentation (BMC canvas sheet) produced as structured coursework.'
      },
      evidence: {
        status: {
          id: 'Dokumentasi Tugas Kuliah Asli',
          en: 'Original Coursework Documentation'
        },
        note: {
          id: 'Tangkapan dokumen/foto lembar kerja tugas kuliah Business Model Canvas yang telah dikerjakan.',
          en: 'Captured document/photo of the completed Business Model Canvas coursework worksheet.'
        },
        image: '/images/tempebar_BMC.jpg',
        items: [
          {
            title: {
              id: 'Lembar Kerja Business Model Canvas',
              en: 'Business Model Canvas Worksheet'
            },
            type: 'Academic Assignment',
            description: {
              id: 'Matriks 9 blok model bisnis yang dipetakan secara terstruktur.',
              en: '9-block business model matrix formulated systematically.'
            },
            status: {
              id: 'Terselesaikan & Dinilai',
              en: 'Completed & Evaluated'
            }
          }
        ]
      }
    }
  },
  {
    id: 'creative-poster-design',
    title: 'Graphic & Promotional Poster Design',
    category: {
      id: 'Graphic & Visual Design',
      en: 'Graphic & Visual Design'
    },
    categoryType: 'creative',
    subtitle: {
      id: 'Perancangan Poster Visual & Aset Komunikasi Grafis',
      en: 'Visual Poster Design & Graphic Communication Assets'
    },
    shortDescription: {
      id: 'Karya perancangan poster visual kreatif buatan Alexabelle, dirancang dengan memperhatikan hierarki tipografi, komposisi warna, dan daya tarik visual untuk komunikasi digital.',
      en: 'Creative visual poster design crafted by Alexabelle, focusing on typographic hierarchy, color composition, and visual appeal for digital communication.'
    },
    role: {
      id: 'Graphic Designer & Visual Creator',
      en: 'Graphic Designer & Visual Creator'
    },
    skills: [
      'Graphic & Visual Design',
      'Typography',
      'Visual Hierarchy',
      'Digital Illustration',
      'Canva & Design Tools'
    ],
    image: '/images/Fotografi.png',
    featured: false,
    links: {
      note: {
        id: 'Karya desain poster grafis asli buatan Alexabelle Benedicta',
        en: 'Original graphic poster artwork created by Alexabelle Benedicta'
      }
    },
    details: {
      overview: {
        id: 'Karya desain poster visual orisinal buatan Alexabelle Benedicta yang menggabungkan estetika grafis modern dengan tata letak visual yang dinamis untuk menarik minat audiens dan menyampaikan pesan secara terstruktur.',
        en: 'Original visual poster design crafted by Alexabelle Benedicta blending contemporary graphic aesthetics with dynamic visual layouts to captivate audience interest and deliver structured messaging.'
      },
      myContribution: {
        id: 'Alexabelle merancang konsep visual secara mandiri, memilih palet warna, mengatur komposisi elemen grafis dan tipografi agar pesan tersampaikan secara atraktif, proporsional, dan profesional.',
        en: 'Alexabelle conceptualized the visual artwork independently, selected color palettes, and structured graphic composition and typography for attractive, proportional, and professional communication.'
      },
      process: {
        id: '1. Concept Ideation: Menentukan moodboard dan tema visual poster.\n2. Visual Composition: Eksplorasi layout, perpaduan warna, dan penempatan elemen grafis utama.\n3. Typography & Detailing: Mengatur hierarki judul, teks pendukung, dan sentuhan visual akhir agar mudah dibaca.',
        en: '1. Concept Ideation: Established visual moodboard and thematic poster direction.\n2. Visual Composition: Explored layouts, color blending, and focal graphic element placement.\n3. Typography & Detailing: Tuned typographic hierarchy, supporting copy, and finishing visual polish for optimal legibility.'
      },
      skillsApplied: [
        'Graphic Design',
        'Visual Hierarchy',
        'Layout Composition',
        'Typography Styling',
        'Digital Asset Production'
      ],
      output: {
        id: 'Poster desain grafis beresolusi tinggi yang siap dipublikasikan untuk media digital maupun materi promosi.',
        en: 'High-resolution graphic design poster ready for digital distribution and promotional collateral.'
      },
      evidence: {
        status: {
          id: 'Karya Desain Asli',
          en: 'Original Design Artwork'
        },
        note: {
          id: 'Karya poster visual orisinal buatan Alexabelle Benedicta.',
          en: 'Original visual poster design created by Alexabelle Benedicta.'
        },
        image: '/images/Fotografi.png',
        items: [
          {
            title: {
              id: 'Aset Poster Visual Resolusi Penuh',
              en: 'Full-Resolution Visual Poster Asset'
            },
            type: 'Graphic Artwork',
            description: {
              id: 'Desain poster orisinal lengkap dengan komposisi tata letak dan grafis estetis.',
              en: 'Original poster artwork complete with aesthetic composition and layout.'
            },
            status: {
              id: 'Karya Terselesaikan',
              en: 'Completed Artwork'
            }
          }
        ]
      }
    }
  }
];

export const CORE_SKILL_GROUPS: SkillCategoryGroup[] = [
  {
    category: {
      id: 'DIGITAL & TECHNOLOGY',
      en: 'DIGITAL & TECHNOLOGY'
    },
    skills: [
      {
        name: 'Web Development',
        description: {
          id: 'Developing and implementing websites for personal and community-based digital projects.',
          en: 'Developing and implementing websites for personal and community-based digital projects.'
        }
      },
      {
        name: 'UI Design',
        description: {
          id: 'Designing digital interfaces with attention to layout, visual hierarchy, and user experience.',
          en: 'Designing digital interfaces with attention to layout, visual hierarchy, and user experience.'
        }
      },
      {
        name: 'AI-Assisted Development',
        description: {
          id: 'Using generative AI tools to support ideation, prototyping, content development, and digital project workflows.',
          en: 'Using generative AI tools to support ideation, prototyping, content development, and digital project workflows.'
        }
      }
    ]
  },
  {
    category: {
      id: 'BUSINESS & PRODUCT',
      en: 'BUSINESS & PRODUCT'
    },
    skills: [
      {
        name: 'Business Model Development',
        description: {
          id: 'Developing business models and mapping key components of a proposed product or service.',
          en: 'Developing business models and mapping key components of a proposed product or service.'
        }
      },
      {
        name: 'Product Ideation',
        description: {
          id: 'Translating problems and user needs into digital product concepts and features.',
          en: 'Translating problems and user needs into digital product concepts and features.'
        }
      },
      {
        name: 'Digital Business Strategy',
        description: {
          id: 'Applying digital business concepts to product, marketing, and technology-related projects.',
          en: 'Applying digital business concepts to product, marketing, and technology-related projects.'
        }
      }
    ]
  },
  {
    category: {
      id: 'CREATIVE & MARKETING',
      en: 'CREATIVE & MARKETING'
    },
    skills: [
      {
        name: 'Digital Marketing',
        description: {
          id: 'Developing digital marketing concepts and promotional strategies for academic and project-based campaigns.',
          en: 'Developing digital marketing concepts and promotional strategies for academic and project-based campaigns.'
        }
      },
      {
        name: 'Social Media Marketing',
        description: {
          id: 'Planning content and coordinating social media production workflows.',
          en: 'Planning content and coordinating social media production workflows.'
        }
      },
      {
        name: 'Graphic & Visual Design',
        description: {
          id: 'Creating promotional materials, digital visuals, and presentation assets using design tools.',
          en: 'Creating promotional materials, digital visuals, and presentation assets using design tools.'
        }
      }
    ]
  }
];

export const TOOLS: ToolItem[] = [
  {
    name: 'Google Sheets',
    category: 'Analysis & Tracking',
    icon: 'Table',
    academicUsage: {
      id: 'Digunakan untuk analisis data bisnis, penjadwalan timeline, dan tracking proyek perkuliahan.',
      en: 'Utilized for business data analysis, milestone scheduling, and academic project tracking.'
    }
  },
  {
    name: 'Google Docs',
    category: 'Documentation & Strategy',
    icon: 'FileText',
    academicUsage: {
      id: 'Digunakan untuk penyusunan laporan studi kasus, proposal proyek bisnis, dan sintesis riset pasar.',
      en: 'Utilized for case study reporting, business project proposals, and market research synthesis.'
    }
  },
  {
    name: 'Figma',
    category: 'UI/UX & Prototyping',
    icon: 'Layout',
    academicUsage: {
      id: 'Digunakan untuk eksplorasi wireframing, perancangan antarmuka web/mobile, dan user journey mapping.',
      en: 'Utilized for wireframe exploration, web/mobile interface design, and user journey mapping.'
    }
  },
  {
    name: 'Canva',
    category: 'Visual & Presentation',
    icon: 'Palette',
    academicUsage: {
      id: 'Digunakan untuk perancangan materi visual presentasi studi kasus dan poster grafis kreatif.',
      en: 'Utilized for presentation deck design, creative graphic poster artwork, and visual assets.'
    }
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'project-hospi',
    organization: 'HOSPI AI — Smart Hospitality Service',
    role: {
      id: 'Product Ideator & Business Modeler',
      en: 'Product Ideator & Business Modeler'
    },
    description: {
      id: 'Mengembangkan konsep solusi AI hospitality untuk mengoptimalkan guest request management hotel, merumuskan alur user journey, dan memetakan model bisnis operasional terintegrasi.',
      en: 'Developed an AI hospitality solution concept to streamline hotel guest request management, formulated user journeys, and mapped integrated operational business models.'
    },
    skills: [
      'Product Ideation',
      'Design Thinking',
      'Business Model',
      'UI/UX Mapping'
    ]
  },
  {
    id: 'project-utaite',
    organization: 'Utaite Hub — Music Creator Directory',
    role: {
      id: 'Web Developer & UI Designer',
      en: 'Web Developer & UI Designer'
    },
    description: {
      id: 'Merancang dan membangun web app direktori kurasi kreator musik secara independen, mengimplementasikan tampilan responsif, dan meluncurkannya secara live di Vercel.',
      en: 'Independently designed and built a music creator curation directory web app, implemented responsive UI components, and deployed it live to Vercel.'
    },
    skills: [
      'Web Development',
      'UI Design',
      'Digital Product',
      'Vercel Deployment'
    ]
  },
  {
    id: 'academic-bmc-exp',
    organization: 'Politeknik Internasional Bali — Coursework Assignment',
    role: {
      id: 'Business Model Formulation & Analysis',
      en: 'Business Model Formulation & Analysis'
    },
    description: {
      id: 'Menyusun dan menganalisis 9 blok Business Model Canvas untuk tugas kuliah, mengevaluasi proposisi nilai, analisis biaya operasional, serta pemetaan kanal pelanggan.',
      en: 'Synthesized and analyzed the 9 blocks of the Business Model Canvas for academic coursework, evaluating value propositions, cost structure, and customer channels.'
    },
    skills: [
      'Business Model Canvas',
      'Value Proposition',
      'Market Feasibility'
    ]
  },
  {
    id: 'creative-poster-exp',
    organization: 'Creative Visual Work — Graphic Poster Design',
    role: {
      id: 'Graphic Designer & Visual Creator',
      en: 'Graphic Designer & Visual Creator'
    },
    description: {
      id: 'Merancang karya poster visual kreatif dengan perhatian khusus pada hierarki tipografi, komposisi warna, dan penyampaian pesan promosi.',
      en: 'Designed creative visual poster artwork with dedicated attention to typographic hierarchy, color composition, and promotional messaging.'
    },
    skills: [
      'Graphic Design',
      'Visual Layout',
      'Typography',
      'Canva'
    ]
  }
];

export const EDUCATION_INFO: EducationInfo = {
  institution: {
    id: 'Politeknik Internasional Bali',
    en: 'Politeknik Internasional Bali'
  },
  program: {
    id: 'D4 Bisnis Digital',
    en: 'D4 Bisnis Digital (Digital Business)'
  },
  status: {
    id: 'Mahasiswa — Semester 3',
    en: 'Undergraduate Student — Semester 3'
  },
  period: '2025 — Sekarang',
  description: {
    id: 'Mempelajari integrasi teknologi digital dengan strategi bisnis, pengembangan produk, analisis pasar, serta inovasi berbasis kebutuhan pengguna.',
    en: 'Studying the intersection of digital technology with business strategy, product development, market analysis, and user-centric innovation.'
  },
  coursework: []
};

export const UI_TRANSLATIONS = {
  nav: {
    home: { id: 'Beranda', en: 'Home' },
    about: { id: 'Tentang', en: 'About' },
    projects: { id: 'Proyek', en: 'Projects' },
    skills: { id: 'Keahlian', en: 'Skills' },
    experience: { id: 'Pengalaman', en: 'Experience' },
    contact: { id: 'Kontak', en: 'Contact' },
    connectCta: { id: 'Hubungi Saya', en: "Let's Connect" }
  },
  hero: {
    name: 'Alexabelle Benedicta',
    studentRole: {
      id: 'Mahasiswa Politeknik Internasional Bali',
      en: 'Student at Politeknik Internasional Bali'
    },
    programBadge: {
      id: 'D4 Bisnis Digital',
      en: 'D4 Bisnis Digital'
    },
    semesterBadge: {
      id: 'Semester 3',
      en: 'Semester 3'
    },
    title: { id: 'Mahasiswa Bisnis Digital', en: 'Digital Business Student' },
    descriptor: {
      id: 'Digital Business · Product Development · Business Innovation',
      en: 'Digital Business · Product Development · Business Innovation'
    },
    intro: {
      id: 'Fokus pada eksplorasi ide produk, strategi bisnis berbasis teknologi, dan perancangan solusi yang berpusat pada pengguna.',
      en: 'Dedicated to product ideation, technology-driven business strategy, and human-centered digital solutions.'
    },
    ctaPortfolio: { id: 'Lihat Portfolio', en: 'View Portfolio' },
    ctaAbout: { id: 'Tentang Saya', en: 'About Me' },
    scrollIndicator: { id: 'Gulir untuk melihat karya', en: 'Scroll to explore works' }
  },
  about: {
    badge: { id: 'Profil Pribadi', en: 'Personal Profile' },
    title: { id: 'Tentang Saya', en: 'About Me' },
    mainText: {
      id: 'Mahasiswa Bisnis Digital yang tertarik pada pemanfaatan teknologi untuk menyelesaikan permasalahan bisnis dan meningkatkan pengalaman pengguna. Berpengalaman dalam pengembangan ide produk, strategi bisnis, serta pengelolaan proyek dan tim.',
      en: 'Digital Business student passionate about leveraging technology to solve business challenges and enhance user experiences. Experienced in product ideation, business strategy, as well as project and team coordination.'
    },
    pillars: [
      {
        title: { id: 'Digital Business', en: 'Digital Business' },
        desc: {
          id: 'Memahami bagaimana model bisnis modern berevolusi dengan pemanfaatan teknologi dan data.',
          en: 'Understanding how contemporary business models evolve through technology and data adoption.'
        }
      },
      {
        title: { id: 'Product & Business Innovation', en: 'Product & Business Innovation' },
        desc: {
          id: 'Mengembangkan konsep solusi dari tahap problem discovery hingga pemetaan alur eksekusi.',
          en: 'Developing solution concepts from initial problem discovery to execution roadmap mapping.'
        }
      },
      {
        title: { id: 'User-Centered Solutions', en: 'User-Centered Solutions' },
        desc: {
          id: 'Memprioritaskan kebutuhan pengguna nyata dalam perancangan antarmuka dan strategi produk.',
          en: 'Prioritizing genuine user needs in interface workflows and digital product strategies.'
        }
      }
    ],
    studentCard: {
      university: { id: 'Politeknik Internasional Bali', en: 'Politeknik Internasional Bali' },
      cohort: { id: 'D4 Bisnis Digital · Semester 3', en: 'D4 Bisnis Digital · Semester 3' },
      focus: { id: 'Fokus: Academic Projects, Personal Web Explorations & Business Strategy', en: 'Focus: Academic Projects, Personal Web Explorations & Business Strategy' }
    }
  },
  projects: {
    badge: { id: 'Karya Terpilih', en: 'Selected Works' },
    title: { id: 'Proyek & Pengalaman Relevan', en: 'Projects & Relevant Experience' },
    description: {
      id: 'Koleksi proyek akademik, inisiatif digital personal, dan eksplorasi kreatif yang dikembangkan selama studi.',
      en: 'A curated collection of academic projects, personal digital initiatives, and creative explorations developed during my studies.'
    },
    featuredLabel: { id: 'Featured Case Study', en: 'Featured Case Study' },
    viewProjectBtn: { id: 'Lihat Project', en: 'View Project' },
    allFilter: { id: 'Semua Proyek', en: 'All Projects' },
    businessFilter: { id: 'Business & Strategy', en: 'Business & Strategy' },
    webFilter: { id: 'Web & Digital Product', en: 'Web & Digital Product' },
    creativeFilter: { id: 'Creative & Visual', en: 'Creative & Visual' },
    marketingFilter: { id: 'Marketing & Content', en: 'Marketing & Content' },
    addProjectBtn: { id: '+ Tambah Proyek Baru', en: '+ Add New Project' },
    otherTitle: { id: 'Eksplorasi Proyek Tambahan', en: 'Additional Project Explorations' },
    otherSubtitle: {
      id: 'Dokumentasi proyek akademik dan eksplorasi strategi yang dapat terus diperbarui.',
      en: 'Documentation of academic projects and strategic explorations that can be continually updated.'
    }
  },
  projectModal: {
    overview: { id: 'Overview', en: 'Overview' },
    role: { id: 'My Role & Contribution', en: 'My Role & Contribution' },
    process: { id: 'Process & Methodology', en: 'Process & Methodology' },
    skillsApplied: { id: 'Skills Applied', en: 'Skills Applied' },
    output: { id: 'Output & Deliverables', en: 'Output & Deliverables' },
    evidence: { id: 'Evidence & Documentation', en: 'Evidence & Documentation' },
    links: { id: 'Tautan & Referensi', en: 'Links & References' },
    close: { id: 'Tutup', en: 'Close' },
    evidenceDisclaimer: {
      id: 'Catatan: Tangkapan layar dan dokumen pendukung asli akan diperbarui bertahap sesuai perkembangan perkuliahan.',
      en: 'Note: Authentic screenshots and supporting documents will be updated progressively as academic coursework proceeds.'
    }
  },
  skills: {
    badge: { id: 'Kapabilitas & Keahlian', en: 'Capabilities & Competencies' },
    title: 'CORE SKILLS & DIGITAL EXPERTISE',
    subtitle: {
      id: 'Kemampuan terapan dan perangkat lunak yang diasah melalui perkuliahan Bisnis Digital dan proyek nyata.',
      en: 'Applied competencies and software tools honed through Digital Business coursework and hands-on projects.'
    },
    hardSkillsTab: { id: 'Core Skills', en: 'Core Skills' },
    toolsTab: { id: 'Tools Digunakan', en: 'Tools Utilized' },
    toolsSubtitle: {
      id: 'Perangkat kerja utama yang digunakan dalam kolaborasi tim, dokumentasi, dan perancangan antarmuka.',
      en: 'Core software stack employed in team collaboration, documentation, and interface design.'
    }
  },
  experience: {
    badge: { id: 'Aktivitas & Proyek', en: 'Activities & Projects' },
    title: { id: 'Pengalaman Akademik & Proyek Digital', en: 'Academic & Digital Project Experience' },
    subtitle: {
      id: 'Jejak peran dan kontribusi dalam pengembangan ide produk, proyek web, dan penugasan strategi bisnis.',
      en: 'Record of roles and contributions in product ideation, web development, and business strategy coursework.'
    }
  },
  education: {
    badge: { id: 'Latar Belakang Akademik', en: 'Academic Background' },
    title: { id: 'Pendidikan', en: 'Education' },
    subtitle: {
      id: 'Fondasi akademik di bidang Bisnis Digital, menggabungkan pemikiran strategis dan kapabilitas teknologi.',
      en: 'Academic foundation in Digital Business, blending strategic mindset with technical capability.'
    },
    courseworkTitle: { id: 'Relevant Coursework (Mata Kuliah Relevan)', en: 'Relevant Coursework' }
  },
  contact: {
    badge: { id: 'Mari Terhubung', en: "Let's Connect" },
    title: { id: 'Connect With Me', en: 'Connect With Me' },
    subtitle: {
      id: 'Terbuka untuk diskusi proyek akademik, kolaborasi digital, dan eksplorasi seputar Bisnis Digital.',
      en: 'Open for academic project discussions, digital collaborations, and explorations in Digital Business.'
    },
    instagramLabel: { id: 'Instagram', en: 'Instagram' },
    linkedinLabel: { id: 'LinkedIn', en: 'LinkedIn' },
    linkedinStatus: { id: 'Terhubung', en: 'Connected' },
    linkedinNote: {
      id: 'Kunjungi profil LinkedIn resmi Alexabelle Benedicta.',
      en: 'Visit the official LinkedIn profile of Alexabelle Benedicta.'
    },
    emailLabel: { id: 'Email Pribadi', en: 'Direct Email' },
    copyEmail: { id: 'Salin Email', en: 'Copy Email' },
    copied: { id: 'Email Tersalin!', en: 'Email Copied!' },
    sendNoteTitle: { id: 'Kirim Pesan Sapaan', en: 'Send a Friendly Note' },
    namePlaceholder: { id: 'Nama Anda', en: 'Your Name' },
    messagePlaceholder: { id: 'Pesan atau topik diskusi...', en: 'Your message or discussion topic...' },
    sendBtn: { id: 'Kirim Pesan', en: 'Send Message' },
    sentSuccess: { id: 'Terima kasih! Pesan tersimpan untuk Alexabelle.', en: 'Thank you! Note logged for Alexabelle.' }
  },
  footer: {
    role: { id: 'D4 Bisnis Digital · Semester 3', en: 'D4 Bisnis Digital · Semester 3' },
    institution: { id: 'Politeknik Internasional Bali', en: 'Politeknik Internasional Bali' },
    rights: { id: 'Hak cipta dilindungi.', en: 'All rights reserved.' }
  }
};
