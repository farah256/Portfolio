import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations/index';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });
    const { currentLanguage } = useLanguage();
    const t = translations[currentLanguage];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 20 
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

    return (
        <section ref={ref} id="about" className="py-20 min-h-screen flex items-center relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 w-full">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-light text-black mb-4">
                        {t.about.title}
                    </h2>
                    <motion.div 
                        className="w-24 h-1 bg-accent mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 96 } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </motion.div>

                {/* About Content */}
                <motion.div 
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <motion.div 
                        className="space-y-8 text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <div className="space-y-6">
                            <motion.p 
                                className="text-xl md:text-xl font-sans text-black leading-relaxed"
                                variants={itemVariants}
                            >
                                {t.about.paragraph1}
                            </motion.p>
                            
                            <motion.p 
                                className="text-xl md:text-xl font-sans text-black leading-relaxed"
                                variants={itemVariants}
                            >
                                {t.about.paragraph2}
                            </motion.p>
                        </div>
                       
                        <motion.div 
                            className="pt-4"
                            variants={itemVariants}
                        >
                            <p className="text-xl md:text-xl font-sans text-black italic border-l-4 border-accent pl-6 py-2">
                                {t.about.quote}
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default About;