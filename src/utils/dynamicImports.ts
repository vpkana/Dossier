import { lazy } from 'react';

// Route-level components (pages) - these will be in the 'pages' chunk
export const Home = lazy(() => import('../models/Home/Home'));
export const Education = lazy(() => import('../components/Education/Education'));
export const AboutMe = lazy(() => import('../models/AboutMe/AboutMe'));
export const Contact = lazy(() => import('../models/Contact/Contact'));
export const PageNotFound = lazy(() => import('../models/PageNotFound/PageNotFound'));
export const UnderConstruction = lazy(() => import('../models/UnderConstruction/UnderConstruction'));
export const MomentumProject = lazy(() => import('../models/Projects/MomentumProject'));

// Home page components - these will be dynamically loaded
export const Hero = lazy(() => import('../components/Hero/Hero'));
export const Skills = lazy(() => import('../components/Skills/Skills'));
export const Projects = lazy(() => import('../components/Projects/Projects'));

// Heavy components - these will be in the 'components-heavy' chunk
export const SplitText = lazy(() => import('../components/Split Text/SplitText'));
export const CountUp = lazy(() => import('../components/Count Up/CountUp'));
export const PDFModal = lazy(() => import('../components/PDFModal/PDFModal'));

// Background components (if needed)
export const Particles = lazy(() => import('../components/Background/Particles'));
export const FuzzyText = lazy(() => import('../components/FuzzyText/FuzzyText')); 