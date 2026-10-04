import { Link } from 'react-router-dom';
import NextChapter from '../../components/NextChapter/NextChapter';

const technologies = [
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Zustand',
  'Dexie',
  'IndexedDB',
  'Capacitor',
];

const MomentumProject = () => (
  <main
    className="relative min-h-screen text-white py-20 px-6 md:px-16 overflow-hidden theme-transition"
    style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
  >
    <div className="relative z-10 max-w-5xl mx-auto">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm">
        <Link to="/projects" className="hover:text-blue-400" style={{ color: 'var(--accent-primary)' }}>
          Selected projects
        </Link>
        <span aria-hidden="true"> / Momentum</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Momentum</h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
          An offline-first personal productivity application for task planning, time tracking,
          scheduling, consistency tracking, and local notifications.
        </p>
      </header>

      <section className="mb-12" aria-labelledby="momentum-purpose">
        <h2 id="momentum-purpose" className="text-2xl font-semibold mb-4">Purpose and features</h2>
        <p className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
          Momentum helps people decide what to do next and maintain a practical routine. It brings
          together daily and occasional tasks, custom sections, calendar planning, time-based
          performance tracking, streaks, recovery days, and next-action guidance.
        </p>
        <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Core productivity data is stored locally with IndexedDB, so the application can be used
          without an account, backend, or internet connection. Local notifications support reminders.
        </p>
      </section>

      <section className="mb-12" aria-labelledby="momentum-technologies">
        <h2 id="momentum-technologies" className="text-2xl font-semibold mb-4">Technologies</h2>
        <ul className="flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="px-4 py-2 rounded-full border"
              style={{
                background: 'var(--bg-secondary)',
                borderColor: 'var(--border-primary)',
                color: 'var(--accent-primary)',
              }}
            >
              {technology}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12" aria-labelledby="momentum-links">
        <h2 id="momentum-links" className="text-2xl font-semibold mb-4">Project links</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/vpkana/Momentum"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 font-semibold"
          >
            Momentum source code on GitHub
          </a>
          <a
            href="https://momentumz.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border font-semibold"
            style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
          >
            Open the live application
          </a>
        </div>
      </section>

      <NextChapter
        prevPage={{ title: 'All selected projects', path: '/projects' }}
        nextPage={{
          chapterNumber: 'Portfolio',
          title: 'About Venkatesh',
          description: 'Learn about Venkatesh Prabhatha Kana, his education, experience, and interests.',
          path: '/about',
          badgeText: 'ABOUT',
        }}
      />
    </div>
  </main>
);

export default MomentumProject;
