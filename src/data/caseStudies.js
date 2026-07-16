import loginImg from '@/assets/projects/voicex/login.png'
import registerImg from '@/assets/projects/voicex/reg.png'
import otpImg from '@/assets/projects/voicex/otp.png'
import dashboardImg from '@/assets/projects/voicex/dashboard.png'
import complaintImg from '@/assets/projects/voicex/complaint.png'
import trackingImg from '@/assets/projects/voicex/tracking.png'
import adminDashboardImg from '@/assets/projects/voicex/admin-dashboard.png'
import manageComplaintsImg from '@/assets/projects/voicex/manage-complaints.png'
import complaintDetailsImg from '@/assets/projects/voicex/complaint-details.png'
import resolutionMailImg from '@/assets/projects/voicex/resolution-mail.png'
import feedbackImg from '@/assets/projects/voicex/feedback.png'
import thankYouImg from '@/assets/projects/voicex/thank-you.png'

import mediFlowHomeImg from '@/assets/projects/Mediflow/home.png'
import mediFlowHome1Img from '@/assets/projects/Mediflow/home 1.png'
import mediFlowHome2Img from '@/assets/projects/Mediflow/home 2.png'
import mediFlowHome3Img from '@/assets/projects/Mediflow/home 3.png'
import mediFlowHome4Img from '@/assets/projects/Mediflow/home 4.png'
import mediFlowDoctorDashboardImg from '@/assets/projects/Mediflow/doctor-dashboard.png'
import mediFlowPatientDashboardImg from '@/assets/projects/Mediflow/patient-dashboard.png'
import mediFlowDoctorFormImg from '@/assets/projects/Mediflow/doctor-form.png'
import mediFlowPatientFormImg from '@/assets/projects/Mediflow/patient-form.png'
import mediFlowTableViewImg from '@/assets/projects/Mediflow/table-view.png'
import mediFlowPatientViewImg from '@/assets/projects/Mediflow/patient-view.png'

import newsSenseHomeImg from '@/assets/projects/NewsSense/home.png'
import newsSenseSearchInterfaceImg from '@/assets/projects/NewsSense/search-interface.png'
import newsSenseActiveSearchImg from '@/assets/projects/NewsSense/active-search.png'
import newsSenseSemanticResultsImg from '@/assets/projects/NewsSense/semantic-results.png'
import newsSenseLanguageFilterImg from '@/assets/projects/NewsSense/language-filter.png'
import newsSenseBilingualResultsImg from '@/assets/projects/NewsSense/bilingual-results.png'
import newsSenseUrduResultsImg from '@/assets/projects/NewsSense/urdu-results.png'
import newsSenseResultsPaginationImg from '@/assets/projects/NewsSense/results-pagination.png'
import newsSenseResultsNavigationImg from '@/assets/projects/NewsSense/results-navigation.png'
import newsSenseFooterImg from '@/assets/projects/NewsSense/footer.png'

/**
 * Case study content keyed by project slug.
 *
 * Add an entry when a full case study is ready.
 * Do not invent content — leave fields null or empty until real data exists.
 *
 * Expected shape per slug:
 * {
 *   slug: string,
 *   role: string | null,
 *   team: string | null,
 *   overview: string | null,
 *   problem: string | null,
 *   solution: string | null,
 *   outcome: string | null,
 *   workflow: Array<string | { id?: string, title: string, description?: string }>,
 *   features: Array<string | { id?: string, title: string, description?: string, icon?: string }>,
 *   techGroups: Array<{ id?: string, label: string, items: string[] }>,
 *   techHighlights: Array<string | { id?: string, label: string, detail?: string }>,
 *   gallery: Array<{ id?: string, src: string, alt?: string, caption?: string }>,
 *   architecture: string | { summary?: string, points?: string[] } | null,
 *   challenges: Array<string | { id?: string, title: string, description?: string }>,
 *   learnings: Array<string | { id?: string, title?: string, description: string }>,
 *   results: Array<string | { id?: string, label: string, value?: string }>,
 *   nextSteps: string | null,
 *   nextVersion: string | string[] | null,
 * }
 */
export const caseStudies = {
  voicex: {
    slug: 'voicex',
    role: 'Full-Stack Developer',
    team: '2 Developers',
    duration: 'Approximately 2 Weeks',
    overview:
      'VoiceX is a full-stack University Complaint Management Portal that allows students to submit complaints, track their progress, receive automated notifications, and provide feedback after resolution while enabling administrators to manage the complete complaint lifecycle.',
    problem:
      'Many universities still rely on paper forms, verbal reporting, or scattered communication channels for complaint handling. This causes delayed resolutions, poor tracking, lack of transparency, inefficient communication, and difficulty managing complaint records.',
    solution:
      'VoiceX centralizes complaint management into a secure web application where students can submit complaints, upload supporting files, monitor progress, and receive automated email updates while administrators manage assignments and resolution workflows.',
    outcome:
      'A complete end-to-end complaint management system demonstrating authentication, role-based authorization, complaint tracking, workflow management, automated email notifications, and feedback collection.',
    workflow: [
      'Student Registration',
      'Email OTP Verification',
      'Secure Login',
      'Complaint Submission',
      'Department Assignment',
      'Complaint Processing',
      'Status Update',
      'Automatic Resolution Email',
      'Student Feedback',
      'Complaint Closed',
    ],
    features: [
      {
        id: 'authentication',
        title: 'Authentication',
        description:
          'Secure Login, JWT Authentication, OTP Verification, Password Hashing',
        icon: 'shield',
      },
      {
        id: 'complaint-management',
        title: 'Complaint Management',
        description:
          'Complaint Submission, Complaint Tracking, Dynamic Categories, File Upload, Search & Filtering',
        icon: 'layers',
      },
      {
        id: 'administration',
        title: 'Administration',
        description:
          'Admin Dashboard, Complaint Assignment, Status Management, Department Management',
        icon: 'layout',
      },
      {
        id: 'communication',
        title: 'Communication',
        description:
          'Resolution Email, Feedback Collection, Complaint Notifications',
        icon: 'sparkles',
      },
      {
        id: 'security',
        title: 'Security',
        description:
          'Protected Routes, Role Based Access Control, Input Validation, JWT Authorization',
        icon: 'zap',
      },
    ],
    techGroups: [
      {
        id: 'frontend',
        label: 'Frontend',
        items: ['HTML5', 'CSS3', 'JavaScript'],
      },
      {
        id: 'backend',
        label: 'Backend',
        items: ['Node.js', 'Express.js'],
      },
      {
        id: 'database',
        label: 'Database',
        items: ['MongoDB'],
      },
      {
        id: 'authentication',
        label: 'Authentication',
        items: ['JWT', 'bcrypt.js'],
      },
      {
        id: 'services',
        label: 'Services',
        items: ['Nodemailer', 'Multer'],
      },
      {
        id: 'development',
        label: 'Development',
        items: ['VS Code', 'Postman'],
      },
    ],
    techHighlights: [],
    gallery: [
      {
        id: 'login',
        src: loginImg,
        alt: 'VoiceX login',
        caption: 'Secure authentication for students and administrators.',
      },
      {
        id: 'register',
        src: registerImg,
        alt: 'VoiceX registration',
        caption: 'Account creation with role selection.',
      },
      {
        id: 'otp',
        src: otpImg,
        alt: 'VoiceX OTP verification',
        caption: 'Email verification before account activation.',
      },
      {
        id: 'dashboard',
        src: dashboardImg,
        alt: 'VoiceX student dashboard',
        caption: 'Student dashboard showing complaint statistics.',
      },
      {
        id: 'complaint',
        src: complaintImg,
        alt: 'VoiceX complaint submission',
        caption:
          'Complaint submission with categories, attachments, and detailed information.',
      },
      {
        id: 'tracking',
        src: trackingImg,
        alt: 'VoiceX complaint tracking',
        caption: 'Students can monitor complaint status in real time.',
      },
      {
        id: 'admin-dashboard',
        src: adminDashboardImg,
        alt: 'VoiceX admin dashboard',
        caption:
          'Administrative dashboard with complaint overview and analytics.',
      },
      {
        id: 'manage-complaints',
        src: manageComplaintsImg,
        alt: 'VoiceX manage complaints',
        caption: 'Centralized complaint management for administrators.',
      },
      {
        id: 'complaint-details',
        src: complaintDetailsImg,
        alt: 'VoiceX complaint details',
        caption: 'Review, assign departments, and update complaint status.',
      },
      {
        id: 'resolution-mail',
        src: resolutionMailImg,
        alt: 'VoiceX resolution email',
        caption: 'Automatic email notification sent after complaint resolution.',
      },
      {
        id: 'feedback',
        src: feedbackImg,
        alt: 'VoiceX feedback',
        caption: 'Students provide ratings and comments after resolution.',
      },
      {
        id: 'thank-you',
        src: thankYouImg,
        alt: 'VoiceX thank you',
        caption: 'Confirmation after successful feedback submission.',
      },
    ],
    architecture: null,
    challenges: [
      {
        id: 'jwt-rbac',
        description:
          'Designing a secure authentication system using JWT while implementing role-based access control for students and administrators.',
      },
    ],
    learnings: [
      'REST API Design',
      'JWT Authentication',
      'MongoDB Integration',
      'Secure Password Hashing',
      'Email Automation',
      'File Upload Handling',
      'CRUD Architecture',
      'Full Stack Project Structure',
    ],
    results: [
      'Complete complaint lifecycle',
      'Secure authentication system',
      'Automated email workflow',
      'Responsive interface',
      'Centralized complaint management',
    ],
    nextSteps: null,
    nextVersion:
      'If continued, the project would include cloud deployment, real-time notifications, analytics, mobile support, scalability improvements, and additional university administration features.',
  },

  mediflow: {
    slug: 'mediflow',
    role: 'Database & APEX Developer',
    team: '2 Developers',
    heroDescription:
      'MediFlow is a centralized healthcare management platform developed with Oracle APEX and Oracle Database. The system streamlines hospital administration by managing doctors, patients, appointments, departments, prescriptions, medicines, payments, and analytics within a single integrated application.',
    overview:
      'MediFlow was developed to digitize hospital administration through a centralized database-driven platform. It provides doctor management, patient records, appointment scheduling, department management, prescription management, medicine inventory, payment tracking, and administrative analytics in one place. Oracle APEX provides the application interface while Oracle Database powers the relational backend.',
    problem:
      'Hospitals often rely on disconnected systems, spreadsheets, or manual processes for managing appointments, patient records, doctor assignments, and billing. This creates duplicate records, scheduling conflicts, inefficient workflows, and difficulty maintaining data consistency.',
    solution:
      'MediFlow centralizes the complete healthcare workflow into one platform. The application uses a normalized Oracle Database with relational entities connected through primary and foreign keys, while Oracle APEX provides an efficient web interface for administrators to manage hospital operations.',
    outcome: null,
    workflow: [
      'Patient Registration',
      'Doctor Registration',
      'Department Assignment',
      'Appointment Scheduling',
      'Prescription Generation',
      'Medicine Assignment',
      'Payment Recording',
      'Analytics Dashboard',
    ],
    features: [
      {
        id: 'doctor-management',
        title: 'Doctor Management',
        description: 'Manage doctor profiles, departments, and specializations.',
        icon: 'shield',
      },
      {
        id: 'patient-management',
        title: 'Patient Management',
        description: 'Store patient information with complete medical records.',
        icon: 'layers',
      },
      {
        id: 'appointment-scheduling',
        title: 'Appointment Scheduling',
        description: 'Schedule and manage appointments efficiently.',
        icon: 'layout',
      },
      {
        id: 'department-management',
        title: 'Department Management',
        description: 'Maintain hospital departments and doctor assignments.',
        icon: 'boxes',
      },
      {
        id: 'prescription-management',
        title: 'Prescription Management',
        description: 'Generate prescriptions linked to appointments.',
        icon: 'sparkles',
      },
      {
        id: 'medicine-inventory',
        title: 'Medicine Inventory',
        description: 'Track medicines associated with prescriptions.',
        icon: 'cpu',
      },
      {
        id: 'payment-management',
        title: 'Payment Management',
        description: 'Manage billing records and payment history.',
        icon: 'zap',
      },
      {
        id: 'analytics-dashboard',
        title: 'Analytics Dashboard',
        description:
          'Visualize appointments, departments, and payment statistics.',
        icon: 'code',
      },
    ],
    techGroups: [
      {
        id: 'application',
        label: 'Application',
        items: ['Oracle APEX'],
      },
      {
        id: 'database',
        label: 'Database',
        items: ['Oracle Database'],
      },
      {
        id: 'languages',
        label: 'Languages',
        items: ['SQL', 'PL/SQL'],
      },
      {
        id: 'concepts',
        label: 'Concepts',
        items: [
          'Relational Database Design',
          'Normalization',
          'Entity Relationships',
          'CRUD Operations',
        ],
      },
    ],
    techHighlights: [],
    gallery: [
      {
        id: 'landing-dashboard',
        src: mediFlowHomeImg,
        alt: 'MediFlow landing dashboard',
        caption: 'Landing Dashboard',
      },
      {
        id: 'hospital-overview',
        src: mediFlowHome1Img,
        alt: 'MediFlow hospital overview',
        caption: 'Hospital Overview',
      },
      {
        id: 'analytics-dashboard',
        src: mediFlowHome2Img,
        alt: 'MediFlow analytics dashboard',
        caption: 'Analytics Dashboard',
      },
      {
        id: 'department-statistics',
        src: mediFlowHome3Img,
        alt: 'MediFlow department statistics',
        caption: 'Department Statistics',
      },
      {
        id: 'operations-overview',
        src: mediFlowHome4Img,
        alt: 'MediFlow operations overview',
        caption: 'Operations Overview',
      },
      {
        id: 'doctor-dashboard',
        src: mediFlowDoctorDashboardImg,
        alt: 'MediFlow doctor management',
        caption: 'Doctor Management',
      },
      {
        id: 'patient-dashboard',
        src: mediFlowPatientDashboardImg,
        alt: 'MediFlow patient management',
        caption: 'Patient Management',
      },
      {
        id: 'doctor-form',
        src: mediFlowDoctorFormImg,
        alt: 'MediFlow doctor form',
        caption: 'Doctor Form',
      },
      {
        id: 'patient-form',
        src: mediFlowPatientFormImg,
        alt: 'MediFlow patient form',
        caption: 'Patient Form',
      },
      {
        id: 'doctor-records',
        src: mediFlowTableViewImg,
        alt: 'MediFlow doctor records table',
        caption: 'Doctor Records',
      },
      {
        id: 'patient-records',
        src: mediFlowPatientViewImg,
        alt: 'MediFlow patient records',
        caption: 'Patient Records',
      },
    ],
    architecture: {
      summary:
        'MediFlow is built on a normalized relational database schema. Core entities are connected through primary keys and foreign keys, enforcing one-to-many relationships and referential integrity across the healthcare workflow.',
      points: [
        'Departments',
        'Doctors',
        'Patients',
        'Appointments',
        'Medicines',
        'Prescriptions',
        'Payments',
        'Primary Keys',
        'Foreign Keys',
        'One-to-Many Relationships',
        'Referential Integrity',
        'Normalized Schema',
      ],
    },
    challenges: [
      {
        id: 'normalized-schema',
        description: 'Creating a normalized database schema.',
      },
      {
        id: 'referential-integrity',
        description: 'Maintaining referential integrity.',
      },
      {
        id: 'multi-entity-relationships',
        description: 'Managing relationships between multiple entities.',
      },
      {
        id: 'scalable-crud',
        description: 'Building scalable CRUD interfaces.',
      },
      {
        id: 'realtime-analytics',
        description: 'Generating real-time analytics from relational data.',
      },
      {
        id: 'admin-dashboards',
        description: 'Designing intuitive administrative dashboards.',
      },
    ],
    learnings: [],
    results: [
      {
        id: 'complete-platform',
        value: '✓',
        label: 'Complete Healthcare Management Platform',
      },
      {
        id: 'apex-application',
        value: '✓',
        label: 'Oracle APEX Web Application',
      },
      {
        id: 'relational-entities',
        value: '7',
        label: 'Relational Database Entities',
      },
      {
        id: 'crud-operations',
        value: '✓',
        label: 'Complete CRUD Operations',
      },
      {
        id: 'analytics-dashboard',
        value: '✓',
        label: 'Interactive Analytics Dashboard',
      },
      {
        id: 'normalized-design',
        value: '✓',
        label: 'Normalized Database Design',
      },
    ],
    nextSteps: null,
    nextVersion: [
      'Role-Based Authentication',
      'Patient Portal',
      'Doctor Availability Calendar',
      'Online Appointment Booking',
      'Email Notifications',
      'SMS Reminders',
      'Digital Prescriptions',
      'REST API',
      'Cloud Deployment',
    ],
  },

  newssense: {
    slug: 'newssense',
    role: 'AI Engineering Intern',
    team: '2 Developers',
    heroDescription:
      'NewsSense is a bilingual AI-powered semantic search platform developed during an AI Engineering Internship. Instead of relying on exact keyword matching, the system understands the meaning of user queries using transformer embeddings and retrieves the most semantically relevant English and Urdu news articles.',
    overview:
      'NewsSense was developed to improve Pakistani news retrieval through semantic search. The platform provides semantic search, English and Urdu support, transformer embeddings, vector database retrieval, and language filtering. User queries and news articles are converted into embeddings and compared using semantic similarity instead of exact keyword matching, enabling retrieval based on meaning rather than identical vocabulary.',
    problem:
      'Traditional keyword search depends on exact words. A query like "Economic reforms introduced by the government" may fail to match an article titled "New financial policies announced by the administration," even though both discuss the same topic. Semantic search solves this by understanding meaning rather than exact vocabulary.',
    solution:
      'NewsSense converts English and Urdu news into a standardized dataset, cleans and chunks the text, generates multilingual-e5-base embeddings through SentencePiece tokenization, and stores vectors with metadata in ChromaDB. At query time, the same embedding pipeline produces a query vector that retrieves the most semantically similar articles with language filtering and relevance scoring.',
    outcome:
      'A complete bilingual Pakistani news semantic search engine with transformer embeddings, ChromaDB retrieval, language filtering, and a Gradio interface for interactive search and evaluation.',
    workflow: [
      'English Dataset',
      'Urdu Dataset',
      'Merge Datasets',
      'Data Cleaning',
      'Preprocessing',
      'Chunking',
      'SentencePiece Tokenization',
      'Embedding Generation',
      'ChromaDB',
      'Semantic Search',
      'Relevant Results',
    ],
    features: [
      {
        id: 'objective-bilingual-engine',
        title: 'Bilingual Semantic Search Engine',
        description:
          'Develop a bilingual semantic search engine for Pakistani news retrieval.',
        icon: 'sparkles',
      },
      {
        id: 'objective-language-support',
        title: 'English & Urdu Support',
        description:
          'Support English and Urdu news articles within one retrieval pipeline.',
        icon: 'layers',
      },
      {
        id: 'objective-embeddings',
        title: 'Embedding Generation & Storage',
        description:
          'Learn embedding generation and storage for semantic indexing.',
        icon: 'cpu',
      },
      {
        id: 'objective-vector-dbs',
        title: 'Vector Database Comparison',
        description:
          'Compare vector database technologies including FAISS and ChromaDB.',
        icon: 'boxes',
      },
      {
        id: 'objective-evaluation',
        title: 'Performance Evaluation',
        description:
          'Evaluate semantic search performance across retrieval quality and latency.',
        icon: 'zap',
      },
      {
        id: 'feature-semantic-search',
        title: 'Semantic Search',
        description:
          'Retrieve articles by meaning using transformer embeddings and similarity ranking.',
        icon: 'code',
      },
      {
        id: 'feature-language-filter',
        title: 'Language Filtering',
        description:
          'Filter results across All Languages, English, or Urdu.',
        icon: 'layout',
      },
      {
        id: 'feature-chromadb',
        title: 'ChromaDB Retrieval',
        description:
          'Store embeddings, documents, and metadata together for flexible semantic queries.',
        icon: 'shield',
      },
    ],
    techGroups: [
      {
        id: 'languages-frameworks',
        label: 'Languages & Frameworks',
        items: ['Python', 'FastAPI', 'Gradio'],
      },
      {
        id: 'ai-nlp',
        label: 'AI & NLP',
        items: [
          'Sentence Transformers',
          'multilingual-e5-base',
          'SentencePiece',
          'NLP',
        ],
      },
      {
        id: 'vector-databases',
        label: 'Vector Databases',
        items: ['ChromaDB', 'FAISS'],
      },
      {
        id: 'data-tooling',
        label: 'Data & Tooling',
        items: ['NumPy', 'Pandas'],
      },
    ],
    techHighlights: [
      {
        id: 'model-selection',
        label: 'Model Selection: e5-small → e5-base',
        detail:
          'The project initially used intfloat/multilingual-e5-small for efficiency, but semantic results were inconsistent. Upgrading to intfloat/multilingual-e5-base improved semantic understanding, multilingual support, retrieval accuracy, and embedding quality — with higher memory and compute cost traded for significantly better search quality.',
      },
      {
        id: 'faiss-cpu',
        label: 'FAISS CPU',
        detail:
          'Fast indexing and exact vector search, but no metadata storage and requires manual persistence.',
      },
      {
        id: 'faiss-gpu',
        label: 'FAISS GPU',
        detail:
          'Fastest search latency with GPU acceleration, but no metadata support and requires an NVIDIA GPU.',
      },
      {
        id: 'chromadb-choice',
        label: 'Why ChromaDB Was Selected',
        detail:
          'ChromaDB stores vectors, documents, and metadata together with CRUD support, automatic persistence, and filtering. Despite slower indexing and search latency than FAISS, it provided the operational flexibility needed for bilingual semantic retrieval with language filters and article metadata.',
      },
      {
        id: 'dataset',
        label: 'Dataset Standardization',
        detail:
          'English and Urdu news datasets were merged into one standardized schema with Article ID, Language, Title, Content, Category, and Date. Preprocessing removed duplicates and empty records, standardized column names, added language labels, and assigned unique article IDs.',
      },
      {
        id: 'preprocessing',
        label: 'Text Preprocessing Pipeline',
        detail:
          'URLs, email addresses, HTML tags, and extra spaces were removed, then title and content were combined. Cleaner text improved embedding quality before semantic indexing.',
      },
      {
        id: 'chunking',
        label: 'Chunking Strategy',
        detail:
          'Articles were split into 80-word chunks with 20-word overlap to preserve context across boundaries. Each chunk received its own Chunk ID linked to the original article.',
      },
      {
        id: 'tokenization-embeddings',
        label: 'Tokenization & Embeddings',
        detail:
          'Each text chunk is processed with SentencePiece, converted to token IDs, passed through multilingual-e5-base to produce a 768-dimensional embedding, and stored in ChromaDB. SentencePiece was selected for strong multilingual support including Urdu.',
      },
    ],
    gallery: [
      {
        id: 'landing-interface',
        src: newsSenseHomeImg,
        alt: 'NewsSense landing interface',
        caption: 'Landing Interface — branded search experience with live index status.',
      },
      {
        id: 'search-interface',
        src: newsSenseSearchInterfaceImg,
        alt: 'NewsSense search interface',
        caption: 'Search Interface — guided discovery with popular news categories.',
      },
      {
        id: 'active-search',
        src: newsSenseActiveSearchImg,
        alt: 'NewsSense active search query',
        caption: 'Active Search — query entry with recent history and popular topics.',
      },
      {
        id: 'semantic-results',
        src: newsSenseSemanticResultsImg,
        alt: 'NewsSense semantic search results',
        caption: 'Semantic Search Results — relevance scores with performance metrics.',
      },
      {
        id: 'language-filter',
        src: newsSenseLanguageFilterImg,
        alt: 'NewsSense language filtering controls',
        caption: 'Language Filtering — All Languages, English, or Urdu with relevance sorting.',
      },
      {
        id: 'bilingual-results',
        src: newsSenseBilingualResultsImg,
        alt: 'NewsSense bilingual English and Urdu results',
        caption: 'Bilingual Results — English and Urdu articles ranked by semantic similarity.',
      },
      {
        id: 'urdu-results',
        src: newsSenseUrduResultsImg,
        alt: 'NewsSense Urdu semantic results',
        caption: 'Urdu Retrieval — multilingual semantic matching for Urdu news coverage.',
      },
      {
        id: 'results-pagination',
        src: newsSenseResultsPaginationImg,
        alt: 'NewsSense results pagination',
        caption: 'Results Navigation — paginated browsing across large result sets.',
      },
      {
        id: 'results-navigation',
        src: newsSenseResultsNavigationImg,
        alt: 'NewsSense results navigation and branding footer',
        caption: 'Discovery Footer — product branding beneath navigable search results.',
      },
      {
        id: 'interface-footer',
        src: newsSenseFooterImg,
        alt: 'NewsSense interface footer',
        caption: 'Interface Footer — Gradio-powered semantic search product branding.',
      },
    ],
    architecture: {
      title: 'System Architecture',
      subtitle: 'How embeddings, chunking, and ChromaDB power semantic retrieval.',
      summary:
        'NewsSense follows an end-to-end semantic retrieval architecture. English and Urdu datasets are merged and cleaned, articles are chunked with overlap, SentencePiece tokenizes each chunk, multilingual-e5-base produces 768-dimensional embeddings, and ChromaDB stores vectors with article metadata. At search time, the query follows the same tokenization and embedding path; ChromaDB compares the query embedding with stored vectors and returns the most semantically similar articles. ChromaDB stores embedding vectors, article IDs, chunk IDs, titles, content, categories, and language together — enabling filtered bilingual retrieval that FAISS alone cannot provide without additional infrastructure.',
      points: [
        'Article ID',
        'Language',
        'Title',
        'Content',
        'Category',
        'Date',
        'Chunk ID',
        '80-Word Chunks',
        '20-Word Overlap',
        'SentencePiece',
        'multilingual-e5-base',
        '768-D Embeddings',
        'ChromaDB Vectors',
        'Metadata Filtering',
        'Cosine Similarity',
      ],
    },
    challenges: [
      {
        id: 'understanding-semantic-search',
        title: 'Understanding Semantic Search',
        description:
          'Moving from keyword matching to meaning-based retrieval required learning embeddings, similarity scoring, and evaluation of relevance quality.',
      },
      {
        id: 'bilingual-data',
        title: 'Working with Bilingual Data',
        description:
          'Combining English and Urdu news into one pipeline demanded careful cleaning, language labeling, and multilingual tokenization.',
      },
      {
        id: 'embedding-model-choice',
        title: 'Choosing the Right Embedding Model',
        description:
          'Balancing speed and quality meant testing e5-small, identifying weak relevance, and upgrading to e5-base for stronger multilingual semantics.',
      },
      {
        id: 'gpu-availability',
        title: 'GPU Availability',
        description:
          'Limited GPU access constrained FAISS GPU experiments and influenced embedding and indexing strategy choices.',
      },
      {
        id: 'learning-vector-databases',
        title: 'Learning Vector Databases',
        description:
          'Comparing FAISS and ChromaDB required understanding persistence, metadata, filtering, and operational trade-offs for production-ready retrieval.',
      },
    ],
    learnings: [
      {
        id: 'theory-ai',
        title: 'Theoretical Knowledge',
        description:
          'Artificial Intelligence, Natural Language Processing, Tokenization, Embeddings, Cosine Similarity, and Semantic Search.',
      },
      {
        id: 'practical-skills',
        title: 'Practical Skills',
        description:
          'Sentence Transformers, ChromaDB, FAISS, Semantic Retrieval, Performance Evaluation, and building a complete AI search pipeline.',
      },
    ],
    results: [
      {
        id: 'semantic-engine',
        value: '✓',
        label: 'Pakistani Semantic Search Engine',
      },
      {
        id: 'bilingual-retrieval',
        value: '✓',
        label: 'English & Urdu Semantic Retrieval',
      },
      {
        id: 'transformer-embeddings',
        value: '✓',
        label: 'Transformer-based Embeddings',
      },
      {
        id: 'chromadb-integration',
        value: '✓',
        label: 'ChromaDB Integration',
      },
      {
        id: 'vector-pipeline',
        value: '✓',
        label: 'Vector Database Pipeline',
      },
      {
        id: 'ai-retrieval',
        value: '✓',
        label: 'AI-powered Information Retrieval',
      },
    ],
    nextSteps: null,
    nextVersion: [
      'Hybrid Search',
      'Expand Dataset',
      'Support More Languages',
      'Advanced Re-ranking',
      'Cloud Deployment',
      'Performance Optimization',
    ],
  },
}

export function getCaseStudyBySlug(slug) {
  if (!slug) return null
  return caseStudies[slug] ?? null
}

export function hasCaseStudy(slug) {
  return Boolean(getCaseStudyBySlug(slug))
}
