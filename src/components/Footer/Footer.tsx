import { useLocation, useNavigate } from "react-router-dom";

const linkedIn = "https://www.linkedin.com/in/vpkana/";
const gitHub = "https://github.com/vpkana";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  // Define quick links for each page
  const getQuickLinks = () => {
    switch (location.pathname) {
      case "/":
        return [
          { href: "#hero", label: "Home" },
          { href: "#skills", label: "Skills" },
          { href: "#projects", label: "Projects" },
        ];
      case "/education":
        return [
          { href: "#education", label: "Education" },
        ];
      case "/projects":
        return [
          { href: "#projects", label: "Projects" },
          { href: "/about", label: "About Me" },
          { href: "/education", label: "Education" },
        ];
      case "/projects/momentum":
        return [
          { href: "/projects", label: "Projects" },
          { href: "/about", label: "About Me" },
          { href: "/contact", label: "Contact Me" },
        ];
      case "/about":
        return [
          { href: "#about", label: "About Me" },
          { href: "#personal-info", label: "Personal Info" },
          { href: "#journey", label: "Journey" },
        ];
      case "/contact":
        return [
          { href: "#contact", label: "Contact Me" },
        ];
      default:
        return [
          { href: "#hero", label: "Home" },
          { href: "#skills", label: "Skills" },
          { href: "#projects", label: "Projects" },
        ];
    }
  };

  const quickLinks = getQuickLinks();

  return (
    <footer 
      className="relative py-12 px-6 border-t theme-transition"
      style={{
        background: 'var(--bg-secondary)',
        color: 'var(--text-secondary)',
        borderColor: 'var(--border-secondary)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-8 left-10 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-8 right-10 w-32 h-32 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Content - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="flex items-center space-x-4">
            <div 
              className="w-10 h-10 border rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: 'var(--bg-tertiary)',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)'
              }}
            >
              <span className="font-bold text-lg">V</span>
            </div>
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
                Venkatesh Prabhatha Kana
              </h3>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Full-Stack Developer</p>
            </div>
          </div>

          {/* Quick Links - Horizontal */}
          <div className="flex items-center space-x-8">
            {quickLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="transition-colors duration-300 text-sm font-medium hover:text-blue-400"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border rounded-lg transition-all duration-300 hover:scale-110"
              style={{
                background: 'var(--bg-tertiary)',
                borderColor: 'var(--border-secondary)',
                color: 'var(--text-primary)'
              }}
              aria-label="GitHub"
            >
              <i className="devicon-github-original text-lg"></i>
            </a>
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border rounded-lg transition-all duration-300 hover:scale-110"
              style={{
                background: 'var(--bg-tertiary)',
                borderColor: 'var(--border-secondary)',
                color: 'var(--text-primary)'
              }}
              aria-label="LinkedIn"
            >
              <i className="devicon-linkedin-plain text-lg"></i>
            </a>
            <a
              onClick={() => navigate("/contact")}
              className="p-2 border rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                background: 'var(--bg-tertiary)',
                borderColor: 'var(--border-secondary)',
                color: 'var(--text-primary)'
              }}
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                &copy; {currentYear} Venkatesh Prabhatha Kana. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Available for hire</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-globe" style={{ color: 'var(--accent-primary)' }}></i>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}> India | Remote</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <i className="devicon-react-original text-blue-400"></i>
                <span className="text-xs text-gray-500">Built with React</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
