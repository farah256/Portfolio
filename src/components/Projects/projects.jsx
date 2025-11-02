import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations/index';
import project1 from "../../assets/images/attendance.png";
import project2 from "../../assets/images/rental-car.png";
import project3 from "../../assets/images/medical-system.jpg";

const Projects = () => {
    const ref = useRef(null);
    const detailsRef = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });
    const [selectedProject, setSelectedProject] = useState(null);
    const { currentLanguage } = useLanguage();
    const t = translations[currentLanguage];

    const projectsData = t.projects.projectsData.map((project, index) => ({
        ...project,
        id: index + 1,
        image: [
            project1,
            project2,
            project3,
        ][index],
        tags: [
            ["Spring boot", "Android", "React", "Mongo DB", "Dashboard", "Mobile"],
            ["React", "Spring Boot", "MySQL","Jira","Git", "Dashboard", "Website"],
            ["Spring Boot", "Angular","Tests","Docker","MySQL","Jenkins","Jira","Confluence","Git"],
        ][index],
        githubLink: [
            "https://github.com/farah256/Attendance-System-Project",
            "https://github.com/farah256/Rental-Car-System",
            "" // Empty for medical system
        ][index],
    }));

    // Auto-scroll to details when a project is selected
    useEffect(() => {
        if (selectedProject && detailsRef.current) {
            detailsRef.current.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [selectedProject]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const projectVariants = {
        hidden: { 
            opacity: 0, 
            y: 30 
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            y: -8,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.05,
            rotateY: 5,
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    const detailsVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    // Helper function to check if GitHub link is valid
    const hasValidGithubLink = (project) => {
        return project.githubLink && project.githubLink.trim() !== "";
    };

    return (
        <>
            <section ref={ref} id="projects" className="py-20 min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">
                    {/* Projects Title */}
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-black mb-4">
                            {t.projects.title}
                        </h2>
                        <motion.div 
                            className="w-24 h-1 bg-accent mx-auto rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 96 } : { width: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {projectsData.map((project) => (
                            <motion.div
                                key={project.id}
                                className="group cursor-pointer"
                                variants={projectVariants}
                                whileHover="hover"
                                onClick={() => handleProjectClick(project)}
                            >
                                {/* Project Image with Shadow */}
                                <motion.div 
                                    className="mb-4 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300"
                                    variants={imageVariants}
                                    whileHover="hover"
                                >
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-80 object-cover"
                                    />
                                </motion.div>

                                {/* Title and Tags */}
                                <div className="text-center">
                                    <h3 className="text-xl font-sans font-bold text-black mb-3 group-hover:text-accent transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    
                                    {/* Tags */}
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {project.tags.map((tag, index) => (
                                            <motion.span
                                                key={index}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Click Hint */}
                                    <motion.div 
                                        className="mt-3 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        {t.projects.clickHint}
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Project Details Section */}
            {selectedProject && (
                <motion.section
                    ref={detailsRef}
                    className="min-h-screen flex items-center justify-center relative bg-gray-900"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${selectedProject.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                    }}
                    initial="hidden"
                    animate="visible"
                    variants={detailsVariants}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors duration-200 z-50 bg-black/50 rounded-full p-2 backdrop-blur-sm"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Main Content Container */}
                    <div className="max-w-6xl mx-auto px-6 w-full">
                        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                            <div className="flex flex-col lg:flex-row">
                                
                                {/* Left Column - Image and Basic Info */}
                                <div className="lg:w-2/5 p-8 bg-black/20">
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        {/* Project Image */}
                                        <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                                            <img 
                                                src={selectedProject.image} 
                                                alt={selectedProject.title}
                                                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
                                            />
                                        </div>
                                        
                                        {/* Project Title */}
                                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                            {t.projects.projectsData[selectedProject.id - 1].title}
                                        </h1>
                                        
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {selectedProject.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium border border-white/30 backdrop-blur-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        {/* Action Buttons - Conditionally render GitHub button */}
                                        <div className="flex flex-col sm:flex-row gap-4 mt-20">
                                            {hasValidGithubLink(selectedProject) ? (
                                                <a
                                                    href={selectedProject.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                    </svg>
                                                    {t.projects.viewCode}
                                                </a>
                                            ) : (
                                                <div className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 text-gray-300 rounded-lg font-semibold cursor-not-allowed">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                    </svg>
                                                    {t.projects.privateRepo || "Coming soon"}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                </div>
                                
                                {/* Right Column - Detailed Information */}
                                <div className="lg:w-3/5 p-8">
                                    <motion.div
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="space-y-8"
                                    >
                                        {/* Description */}
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                                            <p className="text-gray-200 text-lg leading-relaxed">
                                                {t.projects.projectsData[selectedProject.id - 1].fullDescription}
                                            </p>
                                        </div>
                                        
                                        {/* Features */}
                                        <div>
                                            <h4 className="text-2xl font-bold text-white mb-4">{t.projects.features}</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {t.projects.projectsData[selectedProject.id - 1].features.map((feature, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                                        className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10"
                                                    >
                                                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                                                        <span className="text-gray-200 font-medium">{feature}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>
            )}
        </>
    )
}

export default Projects;