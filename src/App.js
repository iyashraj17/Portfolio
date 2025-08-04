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
    bio: "Analytical thinker and aspiring Product Management professional with hands-on experience in leveraging data for decision-making, user insights, and business growth. Skilled in translating large, complex datasets into actionable product strategies through tools like Python, SQL, Excel, and Power BI. Adept at collaborating with cross-functional teams, understanding user needs, and driving product improvements through data-backed experimentation and insights.",
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
    resumeUrl: "https://drive.google.com/file/d/1HjdjqJQoBBHqpvw2P9LSyG_wQ40xzuTk/view?usp=drive_link"
};

const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About Me' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'experience', title: 'Experience' },
    { id: 'certifications', title: 'Certifications' },
    { id: 'contact', title: 'Contact' },
];

// --- Hooks ---
const useTypingEffect = (text, speed = 100) => {
    const [displayedText, setDisplayedText] = useState('');
    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);
        return () => clearInterval(typingInterval);
    }, [text, speed]);
    return displayedText;
};

const useCursorFollow = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    useEffect(() => {
        const onMouseMove = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };
        const onMouseOver = (e) => { if (e.target.closest('a, button, .interactive')) setIsHovering(true); };
        const onMouseOut = (e) => { if (e.target.closest('a, button, .interactive')) setIsHovering(false); };
        window.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener('mouseover', onMouseOver);
        document.body.addEventListener('mouseout', onMouseOut);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.body.removeEventListener('mouseover', onMouseOver);
            document.body.removeEventListener('mouseout', onMouseOut);
        };
    }, []);
    return { cursorRef, isHovering };
};

// --- Helper for Ripple Effect ---
const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();
    button.appendChild(circle);
};

// --- Background Component ---
const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let particles = [];
        const particleCount = Math.floor(canvas.width / 30);

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 1,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
                ctx.fill();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(56, 189, 248, ${1 - dist / 100})`;
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background: '#030712' }} />;
};


// --- Page Components ---

const LandingPage = ({ onNavigate }) => {
    return (
        <div className="flex flex-col items-center justify-center flex-grow text-white text-center p-4">
            <div className="animate-fade-in-down">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4" style={{ fontFamily: "'Exo 2', sans-serif", textShadow: '0 0 20px rgba(56, 189, 248, 0.5)' }}>{resumeData.name}</h1>
                <p className="text-xl md:text-2xl text-blue-400 mb-12" style={{ fontFamily: "'Roboto', sans-serif" }}>{resumeData.tagline}</p>
            </div>
            <button
                onClick={onNavigate}
                className="relative overflow-hidden inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-110 animate-fade-in-up interactive shadow-lg shadow-blue-500/30 hover:shadow-blue-400/50"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
                Enter Portfolio
            </button>
        </div>
    );
};

const PortfolioPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = () => {
        const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        for (const section of sections) {
            const element = document.getElementById(section);
            if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                setActiveSection(section);
                break;
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('is-visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('section').forEach(section => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <header className="lg:hidden fixed top-0 left-0 right-0 bg-gray-900/50 backdrop-blur-md z-40 flex justify-between items-center p-4 border-b border-gray-800/50">
                <h1 className="text-xl font-bold text-blue-400" style={{ fontFamily: "'Exo 2', sans-serif" }}>YSR</h1>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl z-50 interactive">
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </header>

            <aside className={`fixed top-0 left-0 h-full bg-gray-900/50 backdrop-blur-md z-30 w-64 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:w-1/4 lg:max-w-xs xl:max-w-sm p-8 flex flex-col justify-between border-r border-gray-800/50`}>
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>{resumeData.name}</h1>
                    <p className="text-blue-400 text-lg mb-8">{resumeData.tagline}</p>
                    <nav>
                        <ul>
                            {navLinks.map(link => (
                                <li key={link.id} className="mb-4">
                                    <a href={`#${link.id}`} onClick={() => setIsMenuOpen(false)} className={`text-lg font-medium transition-all duration-300 flex items-center interactive ${activeSection === link.id ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`} style={{ fontFamily: "'Exo 2', sans-serif" }}>
                                        <span className={`w-8 h-px mr-4 bg-gray-500 transition-all duration-300 ${activeSection === link.id ? 'w-16 bg-blue-400' : ''}`}></span>
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <Footer socials={resumeData.socials} />
            </aside>

            <main className="lg:ml-[25%] xl:ml-[28%] p-4 sm:p-8 md:p-12 lg:p-16 mt-16 lg:mt-0">
                <Section id="home" title=""><Home tagline={resumeData.tagline} name={resumeData.name} /></Section>
                <Section id="about" title="About Me"><About bio={resumeData.bio} contact={{email: resumeData.email, phone: resumeData.phone, location: resumeData.location}} resumeUrl={resumeData.resumeUrl} /></Section>
                <Section id="skills" title="Skills"><Skills skills={resumeData.skills} /></Section>
                <Section id="projects" title="Projects"><Projects projects={resumeData.projects} /></Section>
                <Section id="experience" title="Experience"><Experience experience={resumeData.experience} /></Section>
                <Section id="certifications" title="Certifications"><Certifications certifications={resumeData.certifications} /></Section>
                <Section id="contact" title="Contact Me"><Contact email={resumeData.email} linkedin={resumeData.socials.linkedin} /></Section>
            </main>
        </>
    );
};


// --- Main App Component (Router) ---
const App = () => {
    const [page, setPage] = useState('landing'); // 'landing' or 'portfolio'
    const { cursorRef, isHovering } = useCursorFollow();

    // Effect for injecting dynamic styles
    useEffect(() => {
        const tailwindScript = document.createElement('script');
        tailwindScript.src = 'https://cdn.tailwindcss.com';
        document.head.appendChild(tailwindScript);

        const fontLink = document.createElement('link');
        fontLink.href = "https://fonts.googleapis.com/css2?family=Exo+2:wght@700&family=Roboto:wght@400;500&display=swap";
        fontLink.rel = "stylesheet";
        document.head.appendChild(fontLink);

        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
        body { 
            cursor: none; 
            font-family: 'Roboto', sans-serif;
            background-color: #030712;
            color: #f9fafb;
        }
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Exo 2', sans-serif;
        }
        .text-glow {
            text-shadow: 0 0 8px rgba(56, 189, 248, 0.3);
        }
        .card-illuminate {
             position: relative;
             overflow: hidden;
             background: rgba(17, 24, 39, 0.8);
             border: 1px solid rgba(56, 189, 248, 0.2);
        }
        .card-illuminate:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(110deg, transparent 25%, rgba(56, 189, 248, 0.2), transparent 75%);
            transition: left 0.6s ease-in-out;
        }
        .card-illuminate:hover:before {
            left: 100%;
        }
        .cursor-dot { position: fixed; top: -20px; left: -20px; width: 10px; height: 10px; background-color: #38bdf8; border-radius: 50%; pointer-events: none; z-index: 9999; transition: transform 0.1s ease-out, width 0.3s ease, height 0.3s ease, background-color 0.3s ease; mix-blend-mode: difference; }
        .cursor-dot.hovered { width: 40px; height: 40px; background-color: rgba(56, 189, 248, 0.5); }
        @keyframes fade-in-down { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-right { 0% { opacity: 0; transform: translateX(-30px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes fade-in-left { 0% { opacity: 0; transform: translateX(30px); } 100% { opacity: 1; transform: translateX(0); } }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s 0.2s ease-out forwards; }
        .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; }
        section { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        section.is-visible { opacity: 1; transform: translateY(0); }
        .ripple { position: absolute; border-radius: 50%; background: rgba(255, 255, 255, 0.3); transform: scale(0); animation: ripple-effect 0.6s linear; }
        @keyframes ripple-effect { to { transform: scale(4); opacity: 0; } }
        `;
        document.head.appendChild(styleSheet);
        
        return () => {
            if (document.head.contains(tailwindScript)) document.head.removeChild(tailwindScript);
            if (document.head.contains(fontLink)) document.head.removeChild(fontLink);
            if (document.head.contains(styleSheet)) document.head.removeChild(styleSheet);
        };
    }, []);

    return (
        <>
            <ParticleBackground />
            <div className="relative z-10 min-h-screen flex flex-col">
                <div ref={cursorRef} className={`cursor-dot ${isHovering ? 'hovered' : ''}`}></div>
                {page === 'landing' ? (
                    <LandingPage onNavigate={() => setPage('portfolio')} />
                ) : (
                    <PortfolioPage />
                )}
            </div>
        </>
    );
};

// --- Section Components ---
const Section = ({ id, title, children }) => (
    <section id={id} className="py-16 min-h-screen/2">
        {title && <h2 className="text-2xl font-bold text-blue-400 mb-8 tracking-wider uppercase text-glow">{title}</h2>}
        {children}
    </section>
);

const Home = ({tagline, name}) => {
    const typedTagline = useTypingEffect(tagline, 80);
    return (
        <div className="flex items-center justify-center min-h-screen -mt-16 lg:mt-0">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in-down text-glow">{name}</h1>
                <p className="text-xl md:text-2xl text-blue-400 animate-fade-in-up h-8">{typedTagline}<span className="inline-block w-1 h-7 bg-blue-400 animate-pulse ml-1"></span></p>
            </div>
        </div>
    );
}

const About = ({ bio, contact, resumeUrl }) => (
    <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/3 animate-fade-in-right">
            <img src="https://i.ibb.co/bjnH3Bsj/ch-sihs-2025-07-14-at-22-26-51-fb095227.jpg" alt="Yashraj Singh Rathore" className="rounded-full w-48 h-48 lg:w-64 lg:h-64 mx-auto object-cover shadow-lg shadow-blue-500/20 border-4 border-gray-700" />
        </div>
        <div className="lg:w-2/3 animate-fade-in-left">
            <p className="text-gray-300 mb-6 text-lg">{bio}</p>
            <div className="space-y-3 text-gray-400 mb-8">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-4 interactive"><FiMail className="text-blue-400 w-5 h-5"/> {contact.email}</a>
                <a href={`tel:${contact.phone}`} className="flex items-center gap-4 interactive"><FiPhone className="text-blue-400 w-5 h-5"/> {contact.phone}</a>
                <div className="flex items-center gap-4"><FiMapPin className="text-blue-400 w-5 h-5"/> {contact.location}</div>
            </div>
            <a href={resumeUrl} download="Yashraj_Singh_Rathore_Resume.pdf" onClick={createRipple} className="relative overflow-hidden inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 interactive">
                <FiDownload className="w-5 h-5" /> Download Resume
            </a>
        </div>
    </div>
);

const Skills = ({ skills }) => (
    <div>
        <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
        <div className="flex flex-wrap gap-3 mb-8">
            {skills.technical.map(skill => <SkillTag key={skill} label={skill} />)}
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">Soft Skills & Domain Concepts</h3>
        <div className="flex flex-wrap gap-3">
            {skills.soft.map(skill => <SkillTag key={skill} label={skill} />)}
        </div>
    </div>
);

const SkillTag = ({ label }) => (
    <div className="bg-gray-800/80 text-blue-300 py-2 px-4 rounded-md text-sm font-medium cursor-default transition-all duration-300 hover:bg-gray-700/90 hover:shadow-md hover:shadow-blue-500/10 interactive border border-gray-700">
        {label}
    </div>
);

const Projects = ({ projects }) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
    </div>
);

const ProjectCard = ({ title, description, tech, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between interactive card-illuminate">
        <div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tech.map(t => <span key={t} className="text-xs bg-blue-900/50 text-blue-300 py-1 px-2 rounded-full">{t}</span>)}
            </div>
        </div>
        <div className="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 font-semibold transition-colors">
            View on GitHub <FiGithub className="w-5 h-5" />
        </div>
    </a>
);

const Experience = ({ experience }) => (
    <div className="relative border-l-2 border-blue-500/30 pl-8">
        {experience.map((job, index) => (
            <div key={index} className="mb-12 group">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 mt-1.5 border-4 border-gray-900 transition-transform group-hover:scale-125"></div>
                <p className="text-sm text-gray-500">{job.period}</p>
                <h3 className="text-xl font-bold text-white mt-1">{job.role}</h3>
                <p className="text-lg text-gray-400 mb-3">{job.company}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {job.contributions.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
            </div>
        ))}
    </div>
);

const Certifications = ({ certifications }) => (
    <div className="space-y-6">
        {certifications.map(cert => (
            <a href={cert.link} key={cert.name} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg transition-colors group interactive card-illuminate">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400">{cert.name}</h3>
                <p className="text-gray-400">{cert.issuer}</p>
            </a>
        ))}
    </div>
);

const Contact = ({ email, linkedin }) => (
    <div className="text-center">
        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
        </p>
        <div className="flex justify-center items-center gap-6">
            <a href={`mailto:${email}`} onClick={createRipple} className="relative overflow-hidden inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 interactive">
                <FiMail className="w-5 h-5" /> Email Me
            </a>
             <a href={linkedin} target="_blank" rel="noopener noreferrer" onClick={createRipple} className="relative overflow-hidden inline-flex items-center gap-3 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 interactive">
                <FiLinkedin className="w-5 h-5" /> LinkedIn Profile
            </a>
        </div>
    </div>
);

const Footer = ({ socials }) => (
    <div className="flex justify-center lg:justify-start space-x-6 text-gray-500">
        <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors interactive"><FiGithub /></a>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors interactive"><FiLinkedin /></a>
        <a href={socials.leetcode} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors interactive"><FaLeetcode /></a>
    </div>
);

export default App;
