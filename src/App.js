import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

function AnimatedSection({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.section>
  );
}

function App() {
  return (
    <div className="font-sans bg-[#f8f9fb] text-[#18181b] min-h-screen">
      {/* Sticky Navigation Bar with Animated Underline */}
      <motion.nav
        className="w-full flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur border-b border-gray-100 fixed top-0 left-0 z-50 shadow-sm"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-2">
          <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Hemanth Grandhi" className="w-10 h-10 rounded-full object-cover border border-gray-200" />
          <span className="font-bold text-lg tracking-tight">Hemanth Grandhi</span>
        </div>
        <ul className="flex gap-8 text-base font-medium relative">
          {NAV_LINKS.map(link => (
            <li key={link.href} className="group relative">
              <a href={link.href} className="hover:text-accent transition-colors duration-150 pb-1">
                {link.label}
                <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            </li>
          ))}
        </ul>
        <motion.a
          href="#contact"
          className="bg-accent text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-purple-700 transition scale-100 hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-accent focus:ring-offset-2"
          whileHover={{ scale: 1.07, boxShadow: '0 4px 24px #7C3AED33' }}
          whileTap={{ scale: 0.97 }}
        >
          Get in touch
        </motion.a>
      </motion.nav>

      {/* Hero Section with Parallax and Fade-in */}
      <AnimatedSection delay={0.1}>
        <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto pt-40 pb-20 px-6 md:px-12 gap-12 md:gap-0">
          <div className="flex-1 flex flex-col items-start gap-6">
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.2 }}
            >
              I’m <span className="text-accent">Hemanth Grandhi</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.3 }}
            >
              AI Developer | UI/UX Designer | Video Editor<br/>
              I code with purpose and edit with passion.
            </motion.p>
            <div className="flex gap-4 mt-2">
              <motion.a
                href="#projects"
                className="bg-accent text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-purple-700 transition scale-100 hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-accent focus:ring-offset-2"
                whileHover={{ scale: 1.07, boxShadow: '0 4px 24px #7C3AED33' }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href={process.env.PUBLIC_URL + '/Hemanth_Grandhi_Resume.pdf'}
                download
                className="bg-white border border-accent text-accent px-6 py-2 rounded-full font-semibold shadow hover:bg-accent hover:text-white transition scale-100 hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-accent focus:ring-offset-2"
                whileHover={{ scale: 1.07, boxShadow: '0 4px 24px #7C3AED33' }}
                whileTap={{ scale: 0.97 }}
              >
                Download Resume
              </motion.a>
            </div>
          </div>
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
            whileHover={{ scale: 1.08, boxShadow: '0 8px 32px #7C3AED44' }}
          >
            <motion.img 
              src={process.env.PUBLIC_URL + '/profile.jpg'} 
              alt="Hemanth Grandhi" 
              className="w-72 h-72 object-cover rounded-2xl shadow-xl border-4 border-white"
              whileHover={{ scale: 1.12, boxShadow: '0 12px 48px #7C3AED66' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
          </motion.div>
        </section>
      </AnimatedSection>

      {/* About Section with Fade-in */}
      <AnimatedSection delay={0.2}>
        <section className="max-w-4xl mx-auto py-16 px-6 md:px-0" id="about">
          <h2 className="text-3xl font-bold mb-6 text-accent">About</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <p className="mb-4 text-lg">Driven by curiosity and creativity, I’m a Computer Science & Engineering student at Shiv Nadar University (2023–2027) with hands-on AI/ML research experience at NIT Warangal. As the lead video editor for Telugu Super Humans and GBR TV, I blend technical innovation with compelling storytelling—crafting content that inspires and informs. Whether building intelligent solutions or designing captivating visuals, I thrive at the intersection of technology and creativity.</p>
              <ul className="space-y-2 text-base">
                <li className="flex items-center gap-2"><span className="text-accent">🤖</span> AI/ML Researcher, NIT Warangal</li>
                <li className="flex items-center gap-2"><span className="text-accent">🎬</span> Lead Video Editor, Telugu Super Humans & GBR TV</li>
                <li className="flex items-center gap-2"><span className="text-accent">🎓</span> B.Tech CSE, Shiv Nadar University (2023–2027)</li>
              </ul>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection delay={0.3}>
        <section className="max-w-6xl mx-auto py-16 px-6 md:px-0" id="skills">
          <h2 className="text-3xl font-bold mb-10 text-accent text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Tech', items: ['Python', 'JavaScript', 'MediaPipe', 'TensorFlow', 'Firebase'] },
              { title: 'Design & Tools', items: ['Figma', 'Canva', 'Premiere Pro', 'CapCut', 'Filmora'] },
              { title: 'Soft Skills', items: ['Creative thinking', 'Collaboration', 'Problem-solving'] },
            ].map((col, idx) => (
              <motion.div
                key={col.title}
                className="bg-white rounded-2xl shadow p-8 flex flex-col items-center border border-gray-100"
                whileHover={{ scale: 1.02, boxShadow: '0 4px 16px #7C3AED11' }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              >
                <motion.h3
                  className="text-xl font-semibold mb-2 text-accent"
                  whileHover={{ color: '#7C3AED' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                >{col.title}</motion.h3>
                <ul className="space-y-1 text-gray-700 text-base text-center">
                  {col.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection delay={0.4}>
        <section className="max-w-6xl mx-auto py-16 px-6 md:px-0" id="projects">
          <h2 className="text-3xl font-bold mb-10 text-accent text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Telugu Super Humans */}
            <motion.div
              className="bg-white rounded-2xl shadow p-8 flex flex-col items-center border border-gray-100 cursor-pointer"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #7C3AED22' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <span className="text-4xl mb-2">🎬</span>
              <motion.h3 
                className="text-xl font-semibold mb-1 text-accent"
                whileHover={{ color: '#7C3AED', y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >Video Editing</motion.h3>
              <p className="text-gray-700 mb-2 text-center">Telugu Super Humans</p>
              <p className="text-sm mb-2 text-gray-500">YouTube video editing for a popular channel.</p>
              <span className="text-xs text-accent">Tools: Premiere Pro, CapCut</span>
            </motion.div>
            {/* GBR TV */}
            <a href="https://www.youtube.com/@GbrtvEducationTelugu" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow p-8 flex flex-col items-center border border-gray-100 cursor-pointer hover:shadow-lg transition">
              <span className="text-4xl mb-2">📺</span>
              <h3 className="text-xl font-semibold mb-1 text-accent">Content Strategy</h3>
              <p className="text-gray-700 mb-2 text-center">GBR TV</p>
              <p className="text-sm mb-2 text-gray-500">Lead video editor and strategist for GBR TV.</p>
              <span className="text-xs text-accent">Tools: Filmora, CapCut</span>
            </a>
            {/* UI/UX Work */}
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center border border-gray-100">
              <span className="text-4xl mb-2">🧠</span>
              <h3 className="text-xl font-semibold mb-1 text-accent">UI/UX Work</h3>
              <p className="text-gray-700 mb-2 text-center">HireSense, Sign Language UI</p>
              <p className="text-sm mb-2 text-gray-500">UI/UX design for innovative apps.</p>
              <span className="text-xs text-accent">Tools: Figma, Canva</span>
            </div>
            {/* BidBuyGo Project */}
            <a href="https://github.com/hemanth-grandhi/Bidbuygo" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow p-8 flex flex-col items-center border border-gray-100 cursor-pointer hover:shadow-lg transition">
              <span className="text-4xl mb-2">🛒</span>
              <h3 className="text-xl font-semibold mb-1 text-accent">BidBuyGo – E-Commerce & Bidding Platform</h3>
              <p className="text-gray-700 mb-2 text-center">Full-stack e-commerce platform with bidding, authentication, and mobile-first responsive design.</p>
              <ul className="text-xs text-accent mb-2 list-disc list-inside text-left">
                <li>Integrated Firebase for auth, real-time bidding, splash screens, and notifications.</li>
                <li>Tech Stack: ReactJS, NodeJS, MySQL, Firebase, TailwindCSS, Bootstrap.</li>
              </ul>
              <span className="text-accent underline mt-2">View on GitHub</span>
            </a>
            {/* Digital Image Processing Project */}
            <a href="https://github.com/hemanth-grandhi" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow p-8 flex flex-col items-center border border-gray-100 cursor-pointer hover:shadow-lg transition">
              <span className="text-4xl mb-2">🖼️</span>
              <h3 className="text-xl font-semibold mb-1 text-accent">Digital Image Processing – Image Quality Assessment</h3>
              <p className="text-gray-700 mb-2 text-center">No-reference image quality model using dual-stream CNN with late fusion strategy.</p>
              <ul className="text-xs text-accent mb-2 list-disc list-inside text-left">
                <li>Trained on LIVE and TID2013 datasets, achieving high perceptual correlation.</li>
                <li>Tech Stack: Python, Keras, OpenCV, NumPy.</li>
              </ul>
              <span className="text-accent underline mt-2">View on GitHub</span>
            </a>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection delay={0.5}>
        <section className="max-w-6xl mx-auto py-16 px-6 md:px-0" id="services">
          <h2 className="text-3xl font-bold mb-10 text-accent text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🤖', title: 'AI/ML Development', desc: 'For real-world apps and insights engines' },
              { icon: '💻', title: 'Web & App Development', desc: 'React, Firebase, and more' },
              { icon: '🎨', title: 'UI/UX Design', desc: 'Prototyping and interface design' },
              { icon: '✂️', title: 'YouTube Video Editing', desc: 'Editing, reels, Shorts, content strategy' },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl shadow p-8 flex flex-col items-center border border-gray-100"
                whileHover={{ scale: 1.02, boxShadow: '0 4px 16px #7C3AED11' }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              >
                <span className="text-3xl mb-2">{service.icon}</span>
                <motion.h3
                  className="font-semibold mb-1 text-accent"
                  whileHover={{ color: '#7C3AED' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                >{service.title}</motion.h3>
                <p className="text-gray-700 text-center">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection delay={0.6}>
        <section className="max-w-2xl mx-auto py-16 px-6 md:px-0" id="contact">
          <h2 className="text-3xl font-bold mb-6 text-accent text-center">Contact</h2>
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex gap-6 text-lg">
              <span className="flex items-center gap-2"><span role="img" aria-label="email">📧</span> grandhihemanthkumar19@gmail.com</span>
              <span className="flex items-center gap-2"><span role="img" aria-label="phone">📞</span> +91 9059560699</span>
            </div>
            <div className="flex gap-6 text-lg">
              <a href="https://www.linkedin.com/in/hemanth-kumar-grandhi-8811b229a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline text-accent"><span role="img" aria-label="linkedin">🔗</span> LinkedIn</a>
              <a href="https://github.com/hemanth-grandhi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline text-accent"><span role="img" aria-label="github">🐙</span> GitHub</a>
              <span className="flex items-center gap-2"><span role="img" aria-label="youtube">📺</span> Telugu Super Humans, <a href="https://www.youtube.com/@GbrtvEducationTelugu" target="_blank" rel="noopener noreferrer" className="hover:underline text-accent">GBR TV</a></span>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

export default App;
