import img from '../../assets/image.webp';
// import DecryptedText from '../Decrypted Text/Decrypt';
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import type { Easing } from 'framer-motion';
import { SplitText, CountUp } from '../../utils/dynamicImports';
import ProfileExplorationDial from '../ProfileDial/ProfileExplorationDial';

// Loading component for dynamic imports
const ComponentLoader = () => (
  <div className="flex items-center justify-center py-4">
    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
  </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.05, 
      duration: 0.4 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      ease: [0.42, 0, 0.58, 1] as Easing, 
      duration: 0.3 
    } 
  },
};

const ProfileLinks = ({ className = '' }: { className?: string }) => (
  <nav className={`flex flex-nowrap items-center gap-2 ${className}`} aria-label="Professional profiles">
    <a
      href="https://github.com/vpkana"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-1.5 rounded-xl border px-2 py-2.5 text-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 sm:gap-2 sm:px-3"
      style={{
        background: 'var(--bg-secondary)',
        borderColor: 'var(--border-secondary)',
        color: 'var(--text-primary)',
      }}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-white transition-colors group-hover:bg-slate-700 sm:h-8 sm:w-8" aria-hidden="true">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.31-3.76-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.67.08-.67 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.01 3.31 1.52.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.12 2.96.72.78 1.15 1.77 1.15 2.99 0 4.27-2.61 5.21-5.1 5.49.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      </span>
      <span className="flex flex-col text-left leading-tight">
        <span className="font-semibold">GitHub</span>
      </span>
      <svg className="h-3 w-3 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-3.5 sm:w-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M7 4h9v9M15.5 4.5 6 14" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
    <a
      href="https://www.linkedin.com/in/vpkana/"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-1.5 rounded-xl border px-2 py-2.5 text-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 sm:gap-2 sm:px-3"
      style={{
        background: 'var(--bg-secondary)',
        borderColor: 'var(--border-secondary)',
        color: 'var(--text-primary)',
      }}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0a66c2] text-white transition-colors group-hover:bg-[#004182] sm:h-8 sm:w-8" aria-hidden="true">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.16 3.6a2.24 2.24 0 1 0-.06 4.48 2.24 2.24 0 0 0 .06-4.48ZM3.2 9.76h3.9v11.8H3.2V9.76Zm6.35 0h3.74v1.61h.05a4.1 4.1 0 0 1 3.69-2.03c3.95 0 4.68 2.6 4.68 5.98v6.24h-3.9v-5.53c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92v5.63h-3.9V9.76Z" />
        </svg>
      </span>
      <span className="flex flex-col text-left leading-tight">
        <span className="font-semibold">LinkedIn</span>
      </span>
      <svg className="h-3 w-3 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-3.5 sm:w-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M7 4h9v9M15.5 4.5 6 14" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  </nav>
);

const Hero = () => {
  return (
    <motion.section id="hero"
      className="relative min-h-screen w-full text-white overflow-hidden theme-transition"
      style={{
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 py-20 lg:py-0 lg:px-12 max-w-7xl mx-auto">
        <h1 className="sr-only">Venkatesh Prabhatha Kana</h1>
        
        {/* Left Content Side - Desktop Layout */}
        <motion.div
          className="hidden lg:flex w-full lg:w-1/2 flex-col justify-center items-start space-y-8 lg:pr-12"
          variants={itemVariants}
        >
          {/* Greeting */}
          <motion.div
            className="text-sm font-medium tracking-wider uppercase"
            style={{ color: 'var(--accent-secondary)' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Hello, I'm
          </motion.div>

          {/* Main Title */}
          <div className="space-y-4" aria-hidden="true">
            <div style={{ color: 'var(--text-primary)' }}>
              <Suspense fallback={<ComponentLoader />}>
                <SplitText
                  text="Venkatesh"
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
                  delay={50}
                  duration={0.5}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 50 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                />
              </Suspense>
            </div>
            <Suspense fallback={<ComponentLoader />}>
              <SplitText
                text="Prabhatha Kana"
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text"
                delay={300}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
            </Suspense>
          </div>

          {/* Description */}
          <motion.div 
            className="text-lg sm:text-xl leading-relaxed max-w-lg"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            {/* <DecryptedText */}
              {/* text=" */}
              M.Tech Software Engineering student at Maulana Azad National Institute of Technology (MANIT), Bhopal, with a background in computer science and an interest in building reliable software.
              {/* "
              animateOn="view"
              revealDirection="center" */}
            {/* /> */}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex w-full flex-nowrap items-center gap-2 pt-4 sm:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 whitespace-nowrap rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-600 to-teal-600 px-2.5 py-3 text-xs font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-teal-700 hover:shadow-xl sm:px-5 sm:py-4 sm:text-sm"
              style={{ color: "#fff" }}
            >
              Download Resume
            </a>
            {/* <a
              href="#projects"
              className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black! font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a> */}
            <ProfileLinks className="min-w-0" />
          </motion.div>

          {/* Social/Stats */}
          <motion.div 
            className="flex items-center space-x-8 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">
                <Suspense fallback={<ComponentLoader />}>
                  <CountUp
                    from={0}
                    to={1}
                    separator=","
                    direction="up"
                    duration={3}
                    className="count-up-text"
                  />
                </Suspense>+
              </div>
              <div className="text-sm text-gray-400">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">
                <Suspense fallback={<ComponentLoader />}>
                  <CountUp
                    from={0}
                    to={10}
                    separator=","
                    direction="up"
                    duration={3}
                    className="count-up-text"
                  />
                </Suspense>+
              </div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">
                <Suspense fallback={<ComponentLoader />}>
                  <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={3}
                    className="count-up-text"
                  />
                </Suspense>%
              </div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile Layout */}
        <motion.div
          className="lg:hidden w-full flex flex-col items-center space-y-8"
          variants={itemVariants}
        >
          {/* Greeting */}
          <motion.div
            className="text-sm font-medium text-blue-300 tracking-wider uppercase text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Hello, I'm
          </motion.div>

          {/* Main Title */}
          <div className="space-y-4 text-center" aria-hidden="true">
            <Suspense fallback={<ComponentLoader />}>
              <SplitText
                text="Venkatesh"
                className="text-4xl sm:text-5xl font-bold tracking-tight"
                delay={50}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </Suspense>
            <Suspense fallback={<ComponentLoader />}>
              <SplitText
                text="Prabhatha Kana"
                className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text"
                delay={300}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </Suspense>
          </div>

          {/* Description */}
          <motion.div 
            className="text-lg sm:text-xl leading-relaxed text-center max-w-lg"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            {/* <DecryptedText */}
              {/* text=" */}
              M.Tech Software Engineering student at Maulana Azad National Institute of Technology (MANIT), Bhopal, with a background in computer science and an interest in building reliable software.
              {/* animateOn="view" */}
              {/* revealDirection="center" */}
             {/* /> */}
          </motion.div>

          {/* Photo with Interactive Exploration Dial - Mobile */}
          <motion.div
            className="flex justify-center items-center py-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <ProfileExplorationDial
              imageSrc={img}
              alt="Venkatesh Prabhatha Kana"
              size="mobile"
            />
          </motion.div>

          {/* CTA Buttons - Mobile */}
          <motion.div 
            className="flex w-full max-w-sm flex-nowrap items-center justify-center gap-2 pt-4 sm:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 whitespace-nowrap rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-600 to-teal-600 px-2.5 py-3 text-xs font-semibold text-center shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-teal-700 hover:shadow-xl sm:px-5 sm:py-4 sm:text-sm"
              style={{ color: "#fff" }}
            >
              Download Resume
            </a>
            <ProfileLinks className="min-w-0" />
          </motion.div>

          <a
            href="#projects"
            className="rounded-xl border-2 border-blue-400 px-6 py-3 text-center font-semibold text-blue-400 transition-all duration-300 hover:scale-105 hover:bg-blue-400 hover:text-white"
          >
            View Projects
          </a>

          {/* Social/Stats - Mobile */}
          <motion.div 
            className="flex items-center justify-center space-x-8 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">1+</div>
              <div className="text-sm text-gray-400">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">10+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image Side with Interactive Exploration Dial - Desktop Only */}
        <motion.div
          className="hidden lg:flex w-full lg:w-1/2 justify-center items-center mt-12 lg:mt-0"
          variants={itemVariants}
        >
          <ProfileExplorationDial
            imageSrc={img}
            alt="Venkatesh Prabhatha Kana"
            size="desktop"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      >
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
