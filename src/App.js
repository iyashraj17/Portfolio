import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icon Components ---
const FiMail = (props) => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const FiPhone = (props) => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const FiMapPin = (props) => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const FiLinkedin = (props) => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const FiGithub = (props) => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const FiDownload = (props) => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
const FiMenu = (props) => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const FiX = (props) => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const FaLeetcode = (props) => <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-1.374 1.374v18.75a1.374 1.374 0 0 0 1.374 1.374h7.125a1.374 1.374 0 0 0 1.374-1.374v-18.75a1.374 1.374 0 0 0-1.374-1.374h-7.125zm-10.125 3.75a1.374 1.374 0 0 0-1.374 1.374v15a1.374 1.374 0 0 0 1.374 1.374h7.125a1.374 1.374 0 0 0 1.374-1.374v-3.75h-2.75v2.5h-4.375v-12.5h4.375v2.5h2.75v-3.75a1.374 1.374 0 0 0-1.374-1.374h-7.125z"/></svg>;

// --- Static Data ---
const resumeData = {
    name: "Yashraj Singh Rathore",
    tagline: "Turning Data into Actionable Insight.",
    location: "Kanpur, Uttar Pradesh, India",
    email: "rathoresinghyashraj17@gmail.com",
    phone: "+91-6387175894",
    bio: "Analytical and data-driven professional with hands-on experience in predictive modeling, data visualization, and AI/ML applications. Skilled in Python, SQL, Excel, and Power BI, with a strong ability to extract insights from complex datasets. Passionate about using data to solve real-world problems and support strategic decision-making in fast-paced environments.",
    skills: {
        technical: ["Python (Pandas, Numpy, Matplotlib)", "SQL (Advanced Queries)", "Power BI", "Excel", "Data Cleaning", "Predictive Analytics"],
        soft: ["Emotional Intelligence", "Client Communication", "Adaptability", "Curiosity", "Team Collaboration", "Product Lifecycle", "Market Research", "Data-Driven Decision Making"]
    },
    projects: [
        { title: "SaaS Sales Analytics Dashboard", description: "Built an interactive business dashboard using MySQL and Power BI to analyze sales, profit, and customer segmentation for a SaaS business, featuring an AWS-inspired dark UI.", tech: ["Power BI", "MySQL", "DAX"], link: "https://github.com/iyashraj17/AWS_SALES_PROJECT" },
        { title: "Loan Approval Predictor (LLM)", description: "Built an LLM-augmented machine learning model to automate loan approvals with 85% accuracy, analyzing 5,000+ records to identify critical patterns.", tech: ["Python", "Machine Learning", "LLM"], link: "https://github.com/iyashraj17/LLM_PROJECT" },
        { title: "Smart Environmental Monitoring System", description: "Developed an IoT-based sensor network using Arduino to track air quality and gas anomalies, and visualized trends through a user-focused dashboard.", tech: ["IoT", "Arduino"], link: "https://github.com/iyashraj17" }
    ],
    experience: [
        { role: "Data Analyst Intern", company: "Astute Systems Technology", period: "May 2024 - July 2024", contributions: ["Led end-to-end data analysis projects using Python, Excel, and Power BI for business reporting.", "Identified KPIs and delivered actionable insights that influenced strategic decisions.", "Effectively communicated findings to non-technical stakeholders in concise reports."] },
        { role: "Simulation Intern", company: "Defence Research and Development Organisation (DRDO)", period: "Aug 2023 - Sept 2023", contributions: ["Translated theoretical defense models into simulation systems using C and Excel-based frameworks.", "Performed result synthesis and documentation aligned with Agile validation workflows.", "Gained cross-functional experience collaborating in a high-stakes R&D environment."] }
    ],
    certifications: [
        { name: "Generative Al with Large Language Models", issuer: "AWS + Deeplearning.AI", link: "https://www.coursera.org/account/accomplishments/verify/VRNYY3J9D2NF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
        { name: "Google: Translate Data into Insights", issuer: "Google", link: "https://www.coursera.org/account/accomplishments/certificate/BHYW24ONE0Z4" },
        { name: "Google: Foundations of Data Science/Data Analytics", issuer: "Google", link: "https://www.coursera.org/account/accomplishments/verify/DEPCQ9RM73W6" },
        { name: "Google: Getting Started with Python", issuer: "Google", link: "https://www.coursera.org/account/accomplishments/certificate/4A4EI77RNUHF" }
    ],
    socials: {
        linkedin: "https://www.linkedin.com/in/yashraj-singh-rathore-a0a47a235/",
        github: "https://github.com/iyashraj17",
        leetcode: "https://leetcode.com/u/SINGHRATHORE17/"
    },
    resumeUrl: "https://drive.google.com/file/d/1x0UG0sIROzmI6dzP2uCpKCqTPi4WrPnm/view?usp=drive_link"
};

const navLinks = [
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'experience', title: 'Experience' },
    { id: 'certifications', title: 'Certifications' },
    { id: 'contact', title: 'Contact' },
];

// --- Main App Component ---
const App = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleScroll = () => {
        const sections = ['about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        let currentSection = '';
        for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element && scrollPosition >= element.offsetTop) {
                currentSection = sectionId;
            }
        }
        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const tailwindScript = document.createElement('script');
        tailwindScript.src = 'https://cdn.tailwindcss.com';
        document.head.appendChild(tailwindScript);

        const fontLink = document.createElement('link');
        fontLink.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Source+Sans+Pro:wght@400;600&display=swap";
        fontLink.rel = "stylesheet";
        document.head.appendChild(fontLink);

        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            body { font-family: 'Source Sans Pro', sans-serif; background-color: #1a1a1a; color: #d1d5db; }
            h1, h2, h3, h4, h5, h6 { font-family: 'Playfair Display', serif; }
            .gradient-text { background: -webkit-linear-gradient(45deg, #e0e0e0, #b0b0b0); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
            .glassmorphism { background: rgba(26, 26, 26, 0.6); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); }
            section { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
            section.is-visible { opacity: 1; transform: translateY(0); }
            .aurora-background { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; overflow: hidden; background: #1a1a1a; }
            .aurora-shape { position: absolute; border-radius: 50%; filter: blur(100px); }
            .shape1 { width: 400px; height: 400px; background: rgba(192, 132, 252, 0.1); top: 10%; left: 10%; animation: move 15s infinite alternate; }
            .shape2 { width: 300px; height: 300px; background: rgba(253, 186, 116, 0.1); top: 50%; right: 10%; animation: move 18s infinite alternate-reverse; }
            @keyframes move { from { transform: translate(0, 0) rotate(0deg); } to { transform: translate(100px, 50px) rotate(45deg); } }
        `;
        document.head.appendChild(styleSheet);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('is-visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('section').forEach(section => observer.observe(section));

        return () => {
            if (document.head.contains(tailwindScript)) document.head.removeChild(tailwindScript);
            if (document.head.contains(fontLink)) document.head.removeChild(fontLink);
            if (document.head.contains(styleSheet)) document.head.removeChild(styleSheet);
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="aurora-background">
                <div className="aurora-shape shape1"></div>
                <div className="aurora-shape shape2"></div>
            </div>
            <Header navLinks={navLinks} activeSection={activeSection} onLinkClick={scrollToSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main className="container mx-auto px-6 md:px-12">
                <HeroSection onButtonClick={() => scrollToSection('about')} />
                <Section id="about"><About /></Section>
                <Section id="skills"><Skills /></Section>
                <Section id="projects"><Projects /></Section>
                <Section id="experience"><Experience /></Section>
                <Section id="certifications"><Certifications /></Section>
                <Section id="contact"><Contact /></Section>
            </main>
            <Footer />
        </>
    );
};

// --- Layout Components ---
const Header = ({ navLinks, activeSection, onLinkClick, isMenuOpen, setIsMenuOpen }) => (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="container mx-auto flex justify-between items-center p-4 glassmorphism rounded-xl">
            <h1 className="text-3xl font-bold text-white tracking-wider">YSR</h1>
            <nav className="hidden md:flex space-x-8">
                {navLinks.map(link => (
                    <button key={link.id} onClick={() => onLinkClick(link.id)} className={`text-lg font-medium transition-colors relative ${activeSection === link.id ? 'text-gray-100' : 'text-gray-400 hover:text-white'}`}>
                        {link.title}
                        {activeSection === link.id && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-100 rounded-full"></span>}
                    </button>
                ))}
            </nav>
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl text-white">
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
        </div>
        {isMenuOpen && (
            <div className="md:hidden mt-2 p-4 glassmorphism rounded-xl">
                <nav className="flex flex-col space-y-4">
                    {navLinks.map(link => (
                        <button key={link.id} onClick={() => onLinkClick(link.id)} className="text-lg text-left text-gray-300 hover:text-white">
                            {link.title}
                        </button>
                    ))}
                </nav>
            </div>
        )}
    </header>
);

const HeroSection = ({ onButtonClick }) => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text">{resumeData.name}</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">{resumeData.tagline}</p>
            <button onClick={onButtonClick} className="px-8 py-3 bg-transparent border-2 border-gray-300 text-gray-300 font-bold rounded-full text-lg hover:bg-gray-300 hover:text-gray-900 transition-all duration-300">
                Explore My Work
            </button>
        </section>
    );
};

const Section = ({ id, children }) => <section id={id} className="py-20">{children}</section>;

const Footer = () => (
    <footer className="text-center py-8 text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
            <a href={resumeData.socials.github} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-white transition-colors"><FiGithub /></a>
            <a href={resumeData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-white transition-colors"><FiLinkedin /></a>
            <a href={resumeData.socials.leetcode} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-white transition-colors"><FaLeetcode /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Yashraj Singh Rathore. All Rights Reserved.</p>
    </footer>
);

// --- Content Components ---
const About = () => (
    <>
        <h2 className="text-5xl font-bold mb-12 text-center gradient-text">About Me</h2>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="relative group mb-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-amber-400 rounded-full blur-xl opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <img 
                    src="https://i.ibb.co/bjnH3Bsj/ch-sihs-2025-07-14-at-22-26-51-fb095227.jpg" 
                    alt="Yashraj Singh Rathore" 
                    className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105" 
                />
            </div>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {resumeData.bio}
            </p>
            <div className="flex items-center justify-center gap-8 mb-8">
                <div className="relative group">
                    <FiMail className="text-gray-400 w-8 h-8 cursor-pointer transition-colors hover:text-white"/>
                    <span className="absolute bottom-full mb-2 w-max px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {resumeData.email}
                    </span>
                </div>
                <div className="relative group">
                    <FiPhone className="text-gray-400 w-8 h-8 cursor-pointer transition-colors hover:text-white"/>
                     <span className="absolute bottom-full mb-2 w-max px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {resumeData.phone}
                    </span>
                </div>
                <div className="relative group">
                    <FiMapPin className="text-gray-400 w-8 h-8 cursor-pointer transition-colors hover:text-white"/>
                     <span className="absolute bottom-full mb-2 w-max px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {resumeData.location}
                    </span>
                </div>
            </div>
            <a href={resumeData.resumeUrl} download="Yashraj_Singh_Rathore_Resume.pdf" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-white transition-colors">
                <FiDownload /> Download Resume
            </a>
        </div>
    </>
);

const Skills = () => (
    <>
        <h2 className="text-5xl font-bold mb-12 text-center gradient-text">Skills</h2>
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-3xl font-bold mb-6 text-white">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                    {resumeData.skills.technical.map(skill => <span key={skill} className="bg-gray-800 text-gray-300 py-2 px-4 rounded-lg">{skill}</span>)}
                </div>
            </div>
            <div>
                <h3 className="text-3xl font-bold mb-6 text-white">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                    {resumeData.skills.soft.map(skill => <span key={skill} className="bg-gray-800 text-gray-300 py-2 px-4 rounded-lg">{skill}</span>)}
                </div>
            </div>
        </div>
    </>
);

const Projects = () => (
    <>
        <h2 className="text-5xl font-bold mb-12 text-center gradient-text">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumeData.projects.map(p => (
                <div key={p.title} className="p-6 glassmorphism rounded-xl flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl">
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-white">{p.title}</h3>
                        <p className="mb-4 text-gray-400">{p.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {p.tech.map(t => <span key={t} className="text-sm bg-gray-700 text-gray-300 py-1 px-3 rounded-full">{t}</span>)}
                        </div>
                    </div>
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-semibold transition-colors">
                        View on GitHub <FiGithub />
                    </a>
                </div>
            ))}
        </div>
    </>
);

const Experience = () => (
    <>
        <h2 className="text-5xl font-bold mb-12 text-center gradient-text">Experience</h2>
        <div className="relative border-l-2 border-gray-700 pl-8 space-y-12">
            {resumeData.experience.map(job => (
                <div key={job.company} className="relative">
                    <div className="absolute -left-10 w-4 h-4 bg-gray-300 rounded-full mt-1.5 border-4 border-gray-800"></div>
                    <p className="text-sm text-gray-500">{job.period}</p>
                    <h3 className="text-2xl font-bold text-white mt-1">{job.role}</h3>
                    <p className="text-xl text-gray-400 mb-3">{job.company}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {job.contributions.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </>
);

const Certifications = () => (
    <>
        <h2 className="text-5xl font-bold mb-12 text-center gradient-text">Certifications</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
            {resumeData.certifications.map(cert => (
                <a href={cert.link} key={cert.name} target="_blank" rel="noopener noreferrer" className="block p-4 glassmorphism rounded-xl transition-all duration-300 hover:border-gray-400/50">
                    <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                    <p className="text-gray-400">{cert.issuer}</p>
                </a>
            ))}
        </div>
    </>
);

const Contact = () => (
    <>
        <h2 className="text-5xl font-bold mb-8 text-center gradient-text">Get In Touch</h2>
        <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`mailto:${resumeData.email}`} className="inline-block px-8 py-4 bg-gray-200 text-gray-900 font-bold rounded-lg text-lg hover:bg-white transition-colors">
                    Email Me
                </a>
                <a href={resumeData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-400 text-gray-300 font-bold rounded-lg text-lg hover:bg-gray-400 hover:text-gray-900 transition-colors">
                    <FiLinkedin /> LinkedIn
                </a>
            </div>
        </div>
    </>
);

export default App;
