import aiDark from '../../assets/Certificate Logo/aiDark.png';
import webDark from '../../assets/Certificate Logo/webDark.png';
import aiLight from '../../assets/Certificate Logo/aiLight.png';
import webLight from '../../assets/Certificate Logo/webLight.png';
import { useState, Suspense } from 'react';
import { PDFModal } from '../../utils/dynamicImports';

// Import all certificate PDFs
import aiLuminancePositioning from '../../assets/Certificates/AI Luminance Positioning.pdf';
import artificialIntelligence from '../../assets/Certificates/Artificial Intelligence.pdf';
import cloudComputing from '../../assets/Certificates/Cloud Computing.pdf';
import introductionToML from '../../assets/Certificates/Introduction To Machine Learning.pdf';
import naturalLanguageProcessing from '../../assets/Certificates/Natural Language Processing.pdf';
import programmingInJava from '../../assets/Certificates/Programming In Java.pdf';
import theJoyOfComputing from '../../assets/Certificates/The Joy Of Computing Using Python.pdf';
import webApplicationDevelopment from '../../assets/Certificates/Web Application Development.pdf';
import { useTheme } from '../../contexts/ThemeContext';

interface Certificate {
  id: string;
  title: string;
  platform: string;
  year: string;
  filename: string;
  domain: 'AI' | 'Web Dev';
}

const certificates: Certificate[] = [
  // AI Domain Certificates
  {
    id: 'ai-luminance-positioning',
    title: 'AI Luminance Positioning',
    platform: 'ADVI Group of Companies',
    year: '2023',
    filename: aiLuminancePositioning,
    domain: 'AI'
  },
  {
    id: 'joy-of-computing-python',
    title: 'The Joy of Computing using Python',
    platform: 'NPTEL',
    year: '2023',
    filename: theJoyOfComputing,
    domain: 'AI'
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    platform: 'NPTEL',
    year: '2024',
    filename: artificialIntelligence,
    domain: 'AI'
  },
  {
    id: 'machine-learning',
    title: 'Introduction to Machine Learning',
    platform: 'NPTEL',
    year: '2024',
    filename: introductionToML,
    domain: 'AI'
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    platform: 'NPTEL',
    year: '2024',
    filename: naturalLanguageProcessing,
    domain: 'AI'
  },
  // Web Domain Certificates
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    platform: 'NPTEL',
    year: '2024',
    filename: cloudComputing,
    domain: 'Web Dev'
  },
  {
    id: 'programming-java',
    title: 'Programming in Java',
    platform: 'NPTEL',
    year: '2024',
    filename: programmingInJava,
    domain: 'Web Dev'
  },
  {
    id: 'web-application-development',
    title: 'Web Application Development',
    platform: 'Rooman Technologies Pvt Ltd',
    year: '2024',
    filename: webApplicationDevelopment,
    domain: 'Web Dev'
  }
];

const CertificateViewer = () => {
  const { theme } = useTheme();
  const [expandedDomain, setExpandedDomain] = useState<'AI' | 'Web Dev' | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const aiCertificates = certificates.filter(cert => cert.domain === 'AI');
  const webCertificates = certificates.filter(cert => cert.domain === 'Web Dev');

  const handleCertificateClick = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleDownload = (certificate: Certificate) => {
    const link = document.createElement('a');
    link.href = certificate.filename;
    link.download = certificate.title + '.pdf';
    link.click();
  };

  const DomainSection = ({ 
    domain, 
    certificates, 
    icon
  }: { 
    domain: 'AI' | 'Web Dev'; 
    certificates: Certificate[]; 
    icon: string; 
  }) => (
    <div className="mb-8">
      <div className="group backdrop-blur-sm p-6 rounded-2xl border shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/40 cursor-pointer"
        style={{
          background: 'var(--bg-secondary)',
          borderColor: 'var(--border-secondary)',
          boxShadow: '0 4px 6px var(--shadow-secondary)'
        }}
        onClick={() => setExpandedDomain(expandedDomain === domain ? null : domain)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center h-21 gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
              <img src={icon} alt="" className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-semibold group-hover:text-blue-200 transition-colors duration-300" style={{ color: 'var(--accent-secondary)' }}>
                {domain} Certificates
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {certificates.length} certificate{certificates.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {expandedDomain === domain ? 'Collapse' : 'Expand'}
            </span>
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${expandedDomain === domain ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{ color: 'var(--accent-primary)' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        expandedDomain === domain ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
      }`}>
        <div className="space-y-4 pl-4">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group backdrop-blur-sm p-6 rounded-2xl border shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/40"
              style={{
                background: 'var(--bg-tertiary)',
                borderColor: 'var(--border-secondary)',
                boxShadow: '0 4px 6px var(--shadow-secondary)'
              }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold group-hover:text-blue-200 transition-colors duration-300 mb-2" style={{ color: 'var(--accent-secondary)' }}>
                    {cert.title}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {cert.platform} • {cert.year}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCertificateClick(cert)}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/30 rounded-xl text-blue-300! hover:bg-gradient-to-r hover:from-blue-600/40 hover:to-teal-600/40 transition-all duration-300 text-sm font-normal"
                  >
                    View Certificate
                  </button>
                  {/* <button
                    onClick={() => handleDownload(cert)}
                    className="px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl text-green-300 hover:bg-gradient-to-r hover:from-green-600/40 hover:to-emerald-600/40 transition-all duration-300 text-sm font-medium"
                  >
                    Download
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <DomainSection 
        domain="AI" 
        certificates={aiCertificates} 
        icon={theme === 'dark' ? aiDark : aiLight} 
      />
      <DomainSection 
        domain="Web Dev" 
        certificates={webCertificates} 
        icon={theme === 'dark' ? webDark : webLight} 
      />

      {selectedCertificate && (
        <Suspense fallback={<div>Loading PDF Modal...</div>}>
          <PDFModal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedCertificate(null);
            }}
            certificate={selectedCertificate}
            onDownload={() => handleDownload(selectedCertificate)}
          />
        </Suspense>
      )}
    </div>
  );
};

export default CertificateViewer; 