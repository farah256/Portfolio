import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations/index';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });
    const { currentLanguage } = useLanguage();
    const t = translations[currentLanguage];

    const skills = [
        {
            title: t.skills.backend,
            technologies: [
                { name: "Python", image: "src/assets/images/python.png" },
                { name: "Java", image: "src/assets/images/java.png" },
                { name: "PHP", image: "src/assets/images/php.png" },
                { name: "Spring", image: "src/assets/images/spring.png" },
                { name: "C++", image: "src/assets/images/c++.png" },
                { name: "C", image: "src/assets/images/c.png" }
            ]
        },
        {
            title: t.skills.frontend, 
            technologies: [
                { name: "React", image: "src/assets/images/react.png" },
                { name: "JavaScript", image: "src/assets/images/js.png" },
                { name: "HTML", image: "src/assets/images/html.png" },
                { name: "CSS", image: "src/assets/images/css.png" },
                { name: "Sass", image: "src/assets/images/sass.png" }
            ]
        },
        {
            title: t.skills.mobile,
            technologies: [
                { name: "Android", image: "src/assets/images/android.png" },
                { name: "Flutter", image: "src/assets/images/flutter.png" },
                { name: "Dart", image: "src/assets/images/dart.png" },
            ]
        },
        {
            title: t.skills.database,
            technologies: [
                { name: "MySQL", image: "src/assets/images/mysql.png" },
                { name: "MongoDB", image: "src/assets/images/mongodb.png" },
                { name: "Supabase", image: "src/assets/images/supabase.png" },
            ]
        },
        {
            title: t.skills.tools,
            technologies: [
                { name: "Git", image: "src/assets/images/git.png" },
                { name: "Docker", image: "src/assets/images/docker.png" },
                { name: "Linux", image: "src/assets/images/linux.png" },
                { name: "Postman", image: "src/assets/images/postman.png" },
                { name: "Figma", image: "src/assets/images/figma.png" },
            ]
        }
    ];

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
            x: 50 
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 30 
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const iconVariants = {
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section 
            ref={ref}
            id="skills" 
            className="py-20 relative bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: `url('src/assets/images/background-pattern.jpeg')`,
            }}
        >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
            
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                {/* Skills Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-3xl md:text-5xl font-heading font-light text-black mb-4">
                    {t.skills.title}
                    </h3>
                    <motion.div 
                        className="w-16 h-1 bg-accent mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 64 } : { width: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                </motion.div>

                {/* Horizontal Scroll Container */}
                <div className="overflow-x-auto pb-6">
                    <motion.div 
                        className="flex flex-nowrap gap-6 min-w-max px-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {skills.map((skill, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-lg hover:shadow-xl cursor-pointer flex-shrink-0 w-80"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                {/* Skill Header */}
                                <motion.div 
                                    className="flex items-center gap-3 mb-6"
                                    whileHover={{ x: 5 }}
                                >
                                    <motion.div 
                                        className="w-3 h-3 bg-accent rounded-full"
                                        whileHover={{ scale: 1.5 }}
                                    />
                                    <h3 className="text-xl font-sans font-semibold text-black">{skill.title}</h3>
                                </motion.div>
                                
                                {/* Technologies Grid */}
                                <div className="grid grid-cols-3 gap-4">
                                    {skill.technologies.map((tech, techIndex) => (
                                        <motion.div 
                                            key={techIndex}
                                            className="flex flex-col items-center gap-2 group"
                                            variants={itemVariants}
                                            whileHover="hover"
                                        >
                                            <motion.div 
                                                className="w-14 h-14 rounded-xl border border-gray-300 overflow-hidden bg-white/80 flex items-center justify-center shadow-sm hover:shadow-md backdrop-blur-sm"
                                                variants={iconVariants}
                                            >
                                                <img 
                                                    src={tech.image} 
                                                    alt={tech.name}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </motion.div>
                                            <motion.span 
                                                className="text-xs font-sans text-gray-700 text-center font-medium"
                                                whileHover={{ color: "#000" }}
                                            >
                                                {tech.name}
                                            </motion.span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div 
                    className="text-center mt-6"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1 }}
                >
                    <p className="text-gray-600 text-sm">{t.skills.scrollHint}</p>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills;