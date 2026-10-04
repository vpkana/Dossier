import { useTheme } from '../../contexts/ThemeContext';
import NextChapter from '../../components/NextChapter/NextChapter';

import profileImg from '../../assets/profile.jpg';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

import problemSolving from '../../assets/What Drives Me/problemSolvingDark.png';
import learningNewTech from '../../assets/What Drives Me/learningNewTechDark.png';
import openSource from '../../assets/What Drives Me/openSourceDark.png';
import cleanCode from '../../assets/What Drives Me/cleanCodeDark.png';
import userExperience from '../../assets/What Drives Me/uxDark.png';

import problemSolvingLight from '../../assets/What Drives Me/problemSolvingLight.png';
import learningNewTechLight from '../../assets/What Drives Me/learningNewTechLight.png';
import openSourceLight from '../../assets/What Drives Me/openSourceLight.png';
import cleanCodeLight from '../../assets/What Drives Me/cleanCodeLight.png';
import userExperienceLight from '../../assets/What Drives Me/uxLight.png';


const timelineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

const passions = [
  {
    title: 'Problem Solving',
    icon: '🧩',
    description: 'I love breaking down complex challenges into elegant solutions. Every bug is a puzzle waiting to be solved.',
    color: 'from-blue-500 to-cyan-500',
    image: problemSolving,
    imageLight: problemSolvingLight
  },
  {
    title: 'Learning New Tech',
    icon: '🚀',
    description: 'Always excited to dive into emerging technologies. Currently exploring AI/ML and cloud architecture.',
    color: 'from-purple-500 to-pink-500',
    image: learningNewTech,
    imageLight: learningNewTechLight
  },
  {
    title: 'Open Source',
    icon: '🌟',
    description: 'Contributing to the developer community. Building tools that others can use and improve upon.',
    color: 'from-green-500 to-emerald-500',
    image: openSource,
    imageLight: openSourceLight
  },
  {
    title: 'Clean Code',
    icon: '✨',
    description: 'Writing code that reads like poetry. Maintainable, scalable, and beautiful solutions.',
    color: 'from-orange-500 to-red-500',
    image: cleanCode,
    imageLight: cleanCodeLight
  },
  {
    title: 'User Experience',
    icon: '🎨',
    description: 'Creating interfaces that users love to interact with. Every pixel matters in the user journey.',
    color: 'from-indigo-500 to-purple-500',
    image: userExperience,
    imageLight: userExperienceLight
  },
  // {
  //   title: 'Coffee & Code',
  //   icon: '☕',
  //   description: 'Best debugging sessions happen with a good cup of coffee. The perfect fuel for late-night coding.',
  //   color: 'from-amber-500 to-orange-500',
  //   image: coffeeAndCode,
  //   imageLight: coffeeAndCodeLight
  // }  
];

const timeline = [
  {
    year: '2016-2019',
    title: 'High School',
    subtitle: 'SSLC',
    // description: 'Completed my high school education with a strong foundation in science and mathematics.',
    link: 'https://alikeonline.org/ssslst-institutions/high-school/',
    type: 'education'
  },
  {
    year: '2019-2021',
    title: 'Pre-University College',
    subtitle: 'PCMB',
    // description: 'Focused on advanced science subjects and prepared for engineering entrance exams.',
    link: 'https://alikeonline.org/ssslst-institutions/pre-univesity-college/',
    type: 'education'
  },
  {
    year: '2021-2025',
    title: 'Bachelor of Engineering',
    subtitle: 'Computer Science Engineering',
    // description: 'Currently pursuing my BE degree with focus on software development and modern technologies.',
    link: 'https://gsksjti.ac.in/',
    type: 'education'
  },
  {
    year: '2025',
    title: 'Full Stack Developer Intern',
    subtitle: 'Inventech Info Solutions',
    // description: 'Working on real-world projects, gaining hands-on experience in full-stack development.',
    link: 'https://inventechinfo.com/',
    type: 'experience'
  },
  {
    year:'2026',
    title: 'Master of Technology',
    subtitle: 'Software Engineering',
    link: 'https://www.manit.ac.in/',
    type: 'education'

  }
];

const AboutMe = () => {
  const { theme } = useTheme();
  
  return (
    <section
      id="about"
      className="relative text-white py-20 px-6 md:px-16 overflow-hidden theme-transition"
      style={{
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            About Venkatesh Prabhatha Kana
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            M.Tech Software Engineering student at MANIT Bhopal and full-stack developer with a computer science background.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Profile Section */}
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={profileImg}
                alt="Venkatesh Prabhatha Kana"
                className="relative z-10 w-48 h-48 rounded-full object-cover border-4 shadow-2xl"
                style={{ borderColor: 'var(--border-primary)' }}
              />
            </motion.div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Venkatesh Prabhatha Kana</h2>
              <p className="font-medium mb-4" style={{ color: 'var(--accent-secondary)' }}>Full-Stack Developer</p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: 'var(--accent-primary)' }}>1+</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: 'var(--accent-secondary)' }}>10+</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Projects</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: 'var(--accent-tertiary)' }}>100%</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Dedication</div>
                </div> */}
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                My Story
              </h3>

              <p
                className="leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                I'm an M.Tech Software Engineering student at{' '}
                <span
                  className="font-medium"
                  style={{ color: 'var(--accent-secondary)' }}
                >
                  MANIT Bhopal
                </span>
                , with a background in Computer Science and a passion for building
                well-crafted digital experiences. With hands-on experience at{' '}
                <span
                  className="font-medium"
                  style={{ color: 'var(--accent-secondary)' }}
                >
                  Inventech
                </span>{' '}
                and{' '}
                <span
                  className="font-medium"
                  style={{ color: 'var(--accent-secondary)' }}
                >
                  Rooman Technologies
                </span>
                , I specialize in developing scalable full-stack applications.
              </p>

              <p
                className="leading-relaxed mb-4"
                style={{ color: 'var(--text-muted)' }}
              >
                My expertise spans modern technologies including{' '}
                <strong style={{ color: 'var(--accent-secondary)' }}>
                  React.js
                </strong>
                ,{' '}
                <strong style={{ color: 'var(--accent-secondary)' }}>
                  NestJS
                </strong>
                ,{' '}
                <strong style={{ color: 'var(--accent-secondary)' }}>
                  Redux
                </strong>
                , and{' '}
                <strong style={{ color: 'var(--accent-secondary)' }}>
                  MySQL
                </strong>
                . I'm also expanding my knowledge in{' '}
                <strong style={{ color: 'var(--accent-secondary)' }}>
                  Machine Learning
                </strong>{' '}
                and{' '}
                <strong style={{ color: 'var(--accent-secondary)' }}>
                  Artificial Intelligence
                </strong>
                , while strengthening my foundations in software engineering and
                problem solving.
              </p>

              <p
                className="leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                I'm always exploring new technologies, working on meaningful projects,
                and learning better ways to turn ideas into reliable, impactful
                software.
              </p>
            </motion.div>

            {/* Skills Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'TypeScript', 'NestJS', 'MySQL', 'Redux', 'Tailwind CSS', 'Git'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 border rounded-full text-sm"
                    style={{
                      background: 'var(--bg-tertiary)',
                      borderColor: 'var(--border-primary)',
                      color: 'var(--accent-primary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Personal Information Section - Simple & Cool */}
        <div id="personal-info" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                Personal Information
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>Get to know me better</p>
            </div>
            
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Location */}
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                    {/* Use an inline SVG instead of Font Awesome for reliable icon rendering */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-primary)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4.5 8-10A8 8 0 104 12c0 5.5 8 10 8 10z" />
                      <circle cx="12" cy="12" r="3" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Location</p>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>India, Karnataka</p>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                    {/* Inline SVG for a globe/language icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-secondary)' }}>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Languages</p>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>English, Kannada, Hindi</p>
                  </div>
                </div>

                {/* Timezone */}
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                    {/* Inline SVG for clock icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-tertiary)' }}>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Timezone</p>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>IST (UTC+5:30)</p>
                  </div>
                </div>

                {/* Work Preference */}
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                    {/* Inline SVG for briefcase icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-primary)' }}>
                      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7V5a4 4 0 00-8 0v2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Work Preference</p>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Remote & Hybrid</p>
                  </div>
                </div>

                {/* Education */}
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                    {/* Inline SVG for graduation cap icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-secondary)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a7 7 0 0014 0" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Education</p>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>B.E. Computer Science</p>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                    {/* Inline SVG for code icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-tertiary)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Experience</p>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>1+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I Love Section - Completely Redesigned */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              What Drives Me
            </h3>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Beyond the code, these are the things that make me excited to be a developer every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passions.map((passion, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-2xl group-hover:from-blue-500/10 group-hover:to-teal-500/10 transition-all duration-300" style={{ background: 'var(--bg-tertiary)' }}></div>
                <div className="relative backdrop-blur-sm p-6 rounded-2xl border hover:border-blue-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full" style={{
                  background: 'var(--bg-secondary)',
                  borderColor: 'var(--border-secondary)'
                }}>
                  <div className="flex flex-col h-full">
                    {/* <div className={`text-3xl bg-gradient-to-br ${passion.color} p-3 rounded-xl w-fit mb-4`}>
                      {passion.icon}
                    </div> */}
                    <img
                      src={theme === 'light' ? passion.imageLight : passion.image}
                      alt={passion.title}
                      className="w-10 h-10 mb-4"
                    />
                    <h4 className="text-lg font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                      {passion.title}
                    </h4>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                      {passion.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Timeline Section */}
        <div id="journey">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              My Journey
            </h3>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              A timeline of my educational and professional growth in the tech world.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-teal-500 to-indigo-500 h-full rounded-full hidden md:block"></div>
            {/* Mobile Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-teal-500 to-indigo-500 h-full rounded-full md:hidden"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={timelineVariants}
                  className={`relative flex items-center md:${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} flex-col`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 shadow-lg z-10" style={{ borderColor: 'var(--bg-primary)' }}></div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} mt-8 md:mt-0`}>
                    <article className="backdrop-blur-sm p-6 rounded-xl border hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group" style={{
                      background: 'var(--bg-secondary)',
                      borderColor: 'var(--border-secondary)'
                    }}>
                      {/* Image and Year */}
                      <div className="flex items-center gap-4 mb-4">
                        <div>
                          <span className="text-lg font-bold" style={{ color: 'var(--accent-primary)' }}>{item.year}</span>
                          <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-1"></div>
                        </div>
                      </div>
                      
                      {/* Title and Subtitle */}
                      <h4 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                        {item.title}
                      </h4>
                      <p className="text-sm font-medium mb-3" style={{ color: 'var(--accent-secondary)' }}>
                        {item.subtitle}
                      </p>
                      
                      {/* Description */}
                      {/* <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p> */}
                      
                      {/* Link Button */}
                      {item.link && item.link !== '#' && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm border rounded-lg transition-all duration-300 hover:scale-105"
                          style={{
                            background: 'var(--bg-tertiary)',
                            borderColor: 'var(--border-primary)',
                            color: 'var(--accent-primary)'
                          }}
                        >
                          Visit {item.type === 'education' ? 'Institution' : 'Company'}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </article>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Chapter in Dossier */}
        <div className="mt-16">
          <NextChapter
            prevPage={{
              title: "Academic & Credentials",
              path: "/education"
            }}
            nextPage={{
              chapterNumber: "Page: 04 / 04",
              title: "Let's Connect & Collaborate",
              description: "Reach out for opportunities, discussions, or questions. Direct message and contact channels.",
              path: "/contact",
              badgeText: "NEXT CHAPTER"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
