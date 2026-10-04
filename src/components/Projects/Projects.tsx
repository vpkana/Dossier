const github = 'https://github.com/vpkana';
import { Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';

const empGithub = 'https://github.com/vpkana/Employee';
const taskGithub = 'https://github.com/vpkana/Task-Flow-Navigation';
const formGithub = 'https://github.com/vpkana/Form-Validation';
const momentumGithub = 'https://github.com/vpkana/Momentum';

// const empDemo = import.meta.env.VITE_EMPLOYEE_MANAGEMENT_SYSTEM_LIVE;
const taskDemo = 'https://taskflow-07.web.app/';
const formDemo = 'https://formvalidation-07.web.app/';
const momentumDemo = 'https://momentumz.web.app/'


const projects = [
  {
    title: "Momentum",
    description: "Offline-first personal productivity app for task planning, time tracking, scheduling, and consistency.",
    tooltip: "A minimalistic, offline-first personal productivity application designed to reduce friction and help users focus on what to do next. Built with Next.js, TypeScript, Tailwind CSS, Zustand, Dexie/IndexedDB, and Capacitor for Android. Features include Daily tasks, Reminders, Occasional tasks, custom sections with flexible scheduling, time-based performance tracking, streaks, recovery days, calendar planning, Next Action guidance, intelligent local notifications, dark mode, and customizable accent colors. All core productivity data is stored locally on the device, allowing the application to function without an account, backend, or internet connection.",
    github: momentumGithub,
    demo: momentumDemo,
    tech: [ "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Dexie", "IndexedDB", "Capacitor" ],
  },
  {
    title: "Employee Management System",
    description: "Full-stack web application with secure role-based access control and JWT authentication.",
    tooltip: "A comprehensive full-stack web application featuring secure role-based access control and JWT authentication. Built with React.js frontend and NestJS backend, it provides a complete solution for managing employee data with multi-level user hierarchy, RESTful APIs, and MySQL database integration for efficient CRUD operations. Includes employee registration, editing, deletion, and role-based permissions with Ant Design UI components.",
    github: empGithub,
    demo: "#",
    tech: ["React", "NestJS", "MySQL", "JWT", "Ant Design", "TypeScript"],
  },
  {
    title: "Task Flow Navigator",
    description: "Multi-functional web application with Ant Design Steps component and secure authentication flow.",
    tooltip: "A comprehensive multi-functional web application built with React and Ant Design Steps component. Features include secure login system with form validation, mobile number OTP verification for two-factor authentication, pagination logic for dynamic card display, and a fully functional To-Do List with add, edit, delete, and complete task features using component state management. Each step handles distinct tasks with user feedback mechanisms and improved UI performance.",
    github: taskGithub,
    demo: taskDemo,
    tech: ["React", "Ant Design", "JavaScript", "CSS", "State Management"],
  },
  {
    title: "Form Validation",
    description: "Company registration web application with pattern recognition and field validation for business details.",
    tooltip: "A comprehensive company registration web application built with React and Ant Design. Features include form validation for business-specific fields like PAN, TAN, and GST numbers with pattern recognition to verify data accuracy. Implements country-state cascading selectors, real-time validation feedback, and responsive design. Uses advanced form handling with pattern matching algorithms to ensure entered business details are correct and compliant with regulatory standards.",
    github: formGithub,
    demo: formDemo,
    tech: ["React", "Ant Design", "JavaScript", "Pattern Recognition", "Form Validation"],
  },
];

const Projects = () => {
  const navigate = useNavigate();

  const handleDemoClick = (demoUrl: string) => {
    if (!demoUrl || demoUrl === '#') {
      navigate('/under-construction');
    } else {
      window.open(demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      id="projects" 
      className="relative text-white py-20 px-6 md:px-16 overflow-hidden theme-transition"
      style={{
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Explore my latest work showcasing modern web development and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group backdrop-blur-sm border rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/40 p-6 flex flex-col justify-between"
              style={{
                background: 'var(--bg-secondary)',
                borderColor: 'var(--border-secondary)',
                boxShadow: '0 4px 6px var(--shadow-secondary)'
              }}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  {project.tooltip && (
                    <Tooltip
                      title={
                        <div className="text-left max-w-md">
                          <div className="font-semibold text-blue-300 mb-2">{project.title}</div>
                          <div className="text-gray-300 leading-relaxed text-sm">{project.tooltip}</div>
                        </div>
                      }
                      placement="top"
                      color="#1f2937"
                      overlayStyle={{ maxWidth: '400px' }}
                    >
                      <svg className="w-5 h-5 hover:text-blue-300 cursor-help transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'var(--accent-primary)' }}>
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </Tooltip>
                  )}
                </div>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs border rounded-full"
                      style={{
                        background: 'var(--bg-tertiary)',
                        borderColor: 'var(--border-primary)',
                        color: 'var(--accent-primary)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!project.github || project.github === '#') {
                      e.preventDefault();
                      alert('GitHub link not available yet!');
                    }
                  }}
                  className="flex-1 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 hover:text-white!important transition-all duration-300 text-sm font-medium text-center hover:scale-105"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDemoClick(project.demo);
                  }}
                  className="flex-1 px-4 py-2 rounded-xl bg-transparent border text-center transition-all duration-300 text-sm font-medium hover:scale-105"
                  style={{
                    borderColor: 'var(--accent-primary)',
                    color: 'var(--accent-primary)'
                  }}
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View more projects button */}
        <div className="text-center mt-12">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
