import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations/index';

const Education = () => {
    const { currentLanguage } = useLanguage();
    const t = translations[currentLanguage];

    const educationData = [
        {
            id: 1,
            year: t.education.highschool.year,
            degree: t.education.highschool.degree,
            type: t.education.highschool.type
        },
        {
            id: 2,
            year: t.education.university.year,
            degree: t.education.university.degree,
            institution: t.education.university.institution,
            type: t.education.university.type
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            x: -50 
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

    return (
        <section id="education" className="py-20 min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto px-6 w-full">
                {/* Simple Title */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-black mb-4">
                        {t.education.title}
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                </motion.div>

                {/* Timeline */}
                <motion.div 
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Timeline Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2"></div>

                    {educationData.map((edu, index) => (
                        <motion.div 
                            key={edu.id}
                            className={`relative flex items-center mb-12 ${
                                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                            variants={itemVariants}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-black rounded-full border-4 border-white transform -translate-x-1/2 z-10"></div>

                            {/* Year */}
                            <div className={`w-1/2 ${index % 2 === 0 ? 'pl-10 md:pr-8 md:text-right' : 'pl-10 md:pl-8'}`}>
                                <span className="text-lg font-sans font-bold text-black">
                                    {edu.year}
                                </span>
                            </div>

                            {/* Content */}
                            <div className={`w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                                    <div className="flex items-start gap-4">
                                        {edu.type === t.education.university.type && (
                                                <img 
                                                    src="src/assets/images/ensa.png" 
                                                    alt="ENSA"
                                                    className="w-20 h-20 object-contain"
                                                />
                                        )}
                                        <div className="flex-1">
                                            <h3 className="text-lg font-sans font-bold text-black mb-2">
                                                {edu.degree}
                                            </h3>
                                            {edu.institution && (
                                                <p className="text-gray-600 font-medium">
                                                    {edu.institution}
                                                </p>
                                            )}
                                            <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                                {edu.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Education;