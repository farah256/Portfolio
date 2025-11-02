import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations/index';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });
    const { currentLanguage } = useLanguage();
    const t = translations[currentLanguage];

    const experiences = [
        {
            id: 1,
            title: t.experience.mobileDev.title,
            period: t.experience.mobileDev.period,
            company: t.experience.mobileDev.company,
            description: t.experience.mobileDev.description,
            image: "src/assets/images/klaxonalogo 1.png",
            technologies: ["Flutter","Dart", "Supabase", "Mapbox", "Figma", "Jira", "GitLab CI/CD"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
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
        }
    };

    // Function to format description with bold text
    const formatDescription = (text) => {
        return text.split('*').map((part, index) => {
            if (index % 2 === 0) {
                return part;
            } else {
                return <strong key={index} className="font-bold text-black">{part}</strong>;
            }
        });
    };

    return (
        <section ref={ref} id="experience" className="py-20 min-h-screen flex items-center relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 w-full">
                {/* Full Width Massive Title */}
                <motion.div 
                    className="w-full text-center mb-10 relative -z-20"
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-6xl md:text-8xl lg:text-[11rem] font-sans font-black text-black uppercase tracking-tight leading-none">
                    {t.experience.title}
                    </h2>
                </motion.div>

                {/* Experience Content with Glass Effect */}
                <motion.div 
                    className="bg-white/20 backdrop-blur rounded-3xl border border-white/30 shadow-2xl p-8 md:p-10 relative -mt-16 md:-mt-24 lg:-mt-32"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-3xl"></div>
                    
                    {/* Experience Content */}
                    <motion.div 
                        className="relative z-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {experiences.map((exp, index) => (
                            <motion.div 
                                key={exp.id}
                                className="space-y-8"
                                variants={itemVariants}
                            >
                                {/* Top Section: Title on Left, Image on Right */}
                                <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                                    {/* Left: Title and Metadata */}
                                    <div className="lg:w-2/3 space-y-4">
                                        <motion.h3 
                                            className="text-2xl md:text-3xl font-sans font-bold text-black"
                                            variants={itemVariants}
                                        >
                                            {t.experience.mobileDev.title}
                                        </motion.h3>
                                        <motion.div 
                                            className="text-black"
                                            variants={itemVariants}
                                        >
                                            <div className="text-lg italic">{t.experience.mobileDev.period}</div>
                                            <div className="text-lg font-bold">{t.experience.mobileDev.company}</div>
                                        </motion.div>
                                    </div>

                                    
                                </div>

                                {/* Divider */}
                                <motion.div 
                                    className="w-full h-px bg-gray-300"
                                    initial={{ scaleX: 0 }}
                                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                />

                                {/* Description with Different Fonts */}
                                <motion.div 
                                    className="space-y-6"
                                    variants={itemVariants}
                                >
                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-gray-700 text-xl leading-relaxed text-justify font-sans">
                                            {formatDescription(t.experience.mobileDev.description)}
                                        </p>
                                    </div>

                                    {/* Technologies Tags */}
                                    <motion.div 
                                        className="flex flex-wrap gap-3"
                                        variants={itemVariants}
                                    >
                                        {exp.technologies.map((tech, techIndex) => (
                                            <motion.span
                                                key={techIndex}
                                                className="px-4 py-2 bg-accent/20 text-accent-dark rounded-full text-sm font-medium border border-accent/30 font-mono"
                                                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                                                whileTap={{ scale: 0.95 }}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.4, delay: 0.8 + techIndex * 0.1 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div 
                        className="absolute top-6 right-6 w-16 h-16 bg-blue-200/30 rounded-full blur-xl"
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div 
                        className="absolute bottom-6 left-6 w-12 h-12 bg-purple-200/30 rounded-full blur-xl"
                        animate={{ 
                            scale: [1.2, 1, 1.2],
                            opacity: [0.4, 0.2, 0.4]
                        }}
                        transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default Experience;