import { 
  Shield, 
  Zap, 
  Server, 
  Building, 
  Users, 
  FileSearch,
  type LucideIcon
} from 'lucide-react';

export interface ContentSection {
  title: string;
  content: string;
}

export interface RelatedService {
  title: string;
  slug: string;
}

export interface ServiceType {
  id: number;
  title: string;
  slug: string;
  icon: LucideIcon;
  shortDescription: string;
  keyFeatures: string[];
  contentSections: ContentSection[];
  relatedServices: RelatedService[];
}

export const servicesData: ServiceType[] = [
  {
    id: 1,
    title: "Security Systems",
    slug: "security-systems",
    icon: Shield,
    shortDescription: "Comprehensive video surveillance and access control solutions from small businesses to large-scale enterprises.",
    keyFeatures: [
      "Customized CCTV solutions for facilities of all sizes",
      "Advanced access control with biometric options",
      "24/7 monitoring and alert systems",
      "Integration with existing security infrastructure",
      "AI-powered video analytics"
    ],
    contentSections: [
      {
        title: "CCTV Access Control",
        content: `
          <p>Our CCTV Access Control services offer a wide range of video surveillance solutions, catering to diverse needs from small businesses to large-scale global enterprises. We pride ourselves on our ability to deliver tailored security systems that meet specific requirements, regardless of the project's size or complexity.</p>
          
          <h3 class="text-xl font-semibold mt-6 mb-3">Small-Scale Solutions</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Single Camera Installations:</strong> Ideal for small shops, offices, or residential properties with high-quality, weatherproof cameras for indoor or outdoor use.</li>
            <li><strong>Multi-Camera Systems for Small Businesses:</strong> Coverage for multiple entry points, sales floors, and storage areas with local storage options and cloud backup capabilities.</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-6 mb-3">Medium-Scale Deployments</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Corporate Office Solutions:</strong> Comprehensive coverage of parking lots, entry points, and office spaces with access control integration for enhanced security.</li>
            <li><strong>Multi-Site Business Networks:</strong> Centralized management of cameras across multiple locations with standardized equipment and protocols for consistency.</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-6 mb-3">Large-Scale Enterprise Solutions</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Campus-Wide Deployments:</strong> High-density camera coverage for educational institutions or corporate campuses with facial recognition and license plate reading capabilities.</li>
            <li><strong>Industrial and Critical Infrastructure Protection:</strong> Rugged, explosion-proof cameras for harsh environments and long-range surveillance options for perimeter security.</li>
          </ul>
        `
      },
      {
        title: "Access Control Systems",
        content: `
          <p>Our access control systems provide sophisticated security management with advanced integration capabilities and modern authentication methods.</p>
          
          <h3 class="text-xl font-semibold mt-6 mb-3">Key Features</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Biometric authentication options</li>
            <li>Mobile access credentials</li>
            <li>Integration with video surveillance</li>
            <li>Real-time monitoring and reporting</li>
          </ul>
        `
      }
    ],
    relatedServices: [
      { title: "Security Audit & Design", slug: "security-audit" },
      { title: "Electrical & Automation", slug: "electrical-automation" }
    ]
  },
  {
    id: 2,
    title: "Electrical & Automation",
    slug: "electrical-automation",
    icon: Zap,
    shortDescription: "Reliable electrical systems and intelligent automation solutions for modern facilities.",
    keyFeatures: [
      "Power distribution and backup systems",
      "Intelligent lighting solutions",
      "Smart climate control systems",
      "Centralized building automation",
      "Energy efficiency optimization"
    ],
    contentSections: [
      {
        title: "Power Systems",
        content: `
          <p>Our power systems provide reliable and efficient electrical distribution for your facility.</p>
          
          <h3 class="text-xl font-semibold mt-6 mb-3">Solutions Include</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>UPS systems</li>
            <li>Power distribution units</li>
            <li>Emergency power systems</li>
            <li>Power monitoring and management</li>
          </ul>
        `
      }
    ],
    relatedServices: [
      { title: "Security Systems", slug: "security-systems" },
      { title: "IT Services", slug: "it-services" }
    ]
  },
  {
    id: 3,
    title: "IT Services",
    slug: "it-services",
    icon: Server,
    shortDescription: "Streamlined business operations with comprehensive IT services designed to enhance efficiency and security.",
    keyFeatures: [
      "Network infrastructure management",
      "Cloud solutions and migration",
      "Cybersecurity services",
      "24/7 technical support",
      "IT consulting and strategy"
    ],
    contentSections: [
      {
        title: "Network Services",
        content: `
          <p>Comprehensive network solutions for modern businesses.</p>
          
          <h3 class="text-xl font-semibold mt-6 mb-3">Services Include</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Network design and implementation</li>
            <li>Wireless solutions</li>
            <li>Network security</li>
            <li>Performance optimization</li>
          </ul>
        `
      }
    ],
    relatedServices: [
      { title: "Security Systems", slug: "security-systems" },
      { title: "Electrical & Automation", slug: "electrical-automation" }
    ]
  },
  {
    id: 4,
    title: "Civil Works",
    slug: "civils",
    icon: Building,
    shortDescription: "Construction of security posts, lighting installation, and infrastructure for security systems.",
    keyFeatures: [
      "Security post construction",
      "Strategic lighting installation",
      "Automatic gate foundations",
      "Underground cable installation",
      "Infrastructure development"
    ],
    contentSections: [
      {
        title: "Construction Services",
        content: `
          <p>Professional construction services for security infrastructure.</p>
          
          <h3 class="text-xl font-semibold mt-6 mb-3">Services Include</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Security post design and construction</li>
            <li>Lighting system installation</li>
            <li>Gate and barrier foundations</li>
            <li>Cable pathway construction</li>
          </ul>
        `
      }
    ],
    relatedServices: [
      { title: "Security Systems", slug: "security-systems" },
      { title: "Electrical & Automation", slug: "electrical-automation" }
    ]
  },
  {
    id: 5,
    title: "Recruitment",
    slug: "recruitment",
    icon: Users,
    shortDescription: "Specialized recruitment agency connecting businesses with top-tier technical professionals.",
    keyFeatures: [
      "Technical talent acquisition",
      "Staff augmentation",
      "Contract-to-hire options",
      "Skill assessment services",
      "Industry-specific recruitment"
    ],
    contentSections: [
      {
        title: "Recruitment Services",
        content: `
          <p>Expert recruitment services for technical professionals.</p>
          
          <h3 class="text-xl font-semibold mt-6 mb-3">Services Include</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Technical talent sourcing</li>
            <li>Candidate screening</li>
            <li>Skill verification</li>
            <li>Placement services</li>
          </ul>
        `
      }
    ],
    relatedServices: [
      { title: "IT Services", slug: "it-services" },
      { title: "Security Systems", slug: "security-systems" }
    ]
  },
  {
    id: 6,
    title: "Security Audit & Design",
    slug: "security-audit",
    icon: FileSearch,
    shortDescription: "In-depth analysis and tailored design of security hardware systems to enhance safety and protection.",
    keyFeatures: [
      "Security system assessment",
      "Vulnerability analysis",
      "Custom security design",
      "Compliance verification",
      "Risk mitigation planning"
    ],
    contentSections: [
      {
        title: "Audit Services",
        content: `
          <p>Comprehensive security auditing and design services.</p>
          
          <h3 class="text-xl font-semibold mt-6 mb-3">Services Include</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Security assessment</li>
            <li>Risk analysis</li>
            <li>System design</li>
            <li>Implementation planning</li>
          </ul>
        `
      }
    ],
    relatedServices: [
      { title: "Security Systems", slug: "security-systems" },
      { title: "IT Services", slug: "it-services" }
    ]
  }
];