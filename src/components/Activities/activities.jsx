import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations/index';
import certificatImage from '../../assets/images/certificat.png';
import secretaireImage from '../../assets/images/secretaire.png';
import jlmLogo from '../../assets/images/jlm.png';
import codexLogo from '../../assets/images/codex.png';
import activitiesBackground from '../../assets/images/activities.png';

const Activities = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });
    const { currentLanguage } = useLanguage();
    const t = translations[currentLanguage];

    const activitiesData = t.activities.activitiesData.map((activity, index) => ({
        ...activity,
        id: index + 1,
        image: [certificatImage, secretaireImage][index],
        logo: [jlmLogo, codexLogo][index]
    }));

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

    return (
        <section 
            ref={ref} 
            id="activities" 
            className="min-h-screen py-20 flex items-center w-full relative overflow-hidden"
        >
            <div className="w-full relative">
                {/* Activities Title - Full Width Behind Containers */}
                <motion.div 
                    className="w-full text-center absolute top-1/2 lg:top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 
                        className="text-6xl lg:text-9xl xl:text-[15rem] font-black leading-none"
                        style={{
                            backgroundImage: `url(${activitiesBackground})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        {t.activities.title}
                    </h1>
                </motion.div>

                {/* Content Container */}
                <motion.div 
                    className="space-y-6 w-full relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* First Container */}
                    <motion.div
                        className="bg-white/10 backdrop-blur-md w-full lg:w-2/3 mb-20 mt-10 rounded-r-[30px] lg:rounded-r-[100px] p-6 lg:p-8 border border-gray-200 shadow-2xl h-auto lg:h-[300px]"
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.02,
                        }}
                    >
                        <div className="flex flex-col lg:flex-row items-start h-full gap-6">
                            {/* Logo Image */}
                            <img 
                                src={activitiesData[0].logo} 
                                alt='logo'
                                className="w-20 h-20 lg:w-auto lg:h-full object-contain mx-auto lg:mx-0"
                            />
                            
                            {/* Content */}
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                                    {activitiesData[0].title}
                                </h3>
                                <p className="text-accent mb-4 leading-relaxed font-light text-lg">
                                    {activitiesData[0].date}
                                </p>
                                <p className="text-gray-600 mb-1 leading-relaxed text-lg">
                                    {activitiesData[0].description}
                                </p>
                                <div className="flex flex-wrap gap-1 justify-center lg:justify-start">
                                    {activitiesData[0].features.map((feature, featureIndex) => (
                                        <span 
                                            key={featureIndex}
                                            className="px-1.5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-300 font-medium"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Certificate Image */}
                            <img 
                                src={activitiesData[0].image} 
                                alt={activitiesData[0].title}
                                className="w-30 h-30 lg:w-auto lg:h-full object-contain mx-auto lg:mx-0"
                            />
                        </div>
                    </motion.div>

                    {/* Second Container */}
                    <motion.div
                        className="bg-white/10 backdrop-blur-md w-full lg:w-2/3 rounded-l-[30px] lg:rounded-l-[100px] p-6 lg:p-8 border border-gray-200 shadow-2xl h-auto lg:h-[300px] ml-auto"
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.02,
                        }}
                    >
                        <div className="flex flex-col lg:flex-row items-start h-full gap-6">
                            {/* Secretaire Image */}
                            <img 
                                src={activitiesData[1].image} 
                                alt={activitiesData[1].title}
                                className="w-30 h-30 lg:w-auto lg:h-full object-contain mx-auto lg:mx-0 lg:order-1"
                            />
                            
                            {/* Content */}
                            <div className="flex-1 text-center lg:text-left lg:order-2">
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                                    {activitiesData[1].title}
                                </h3>
                                <p className="text-accent mb-4 leading-relaxed font-light text-lg">
                                    {activitiesData[1].date}
                                </p>
                                <p className="text-gray-600 mb-1 leading-relaxed text-lg">
                                    {activitiesData[1].description}
                                </p>
                                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                    {activitiesData[1].features.map((feature, featureIndex) => (
                                        <span 
                                            key={featureIndex}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-300 font-medium"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Logo Image */}
                            <img 
                                src={activitiesData[1].logo} 
                                alt='logo'
                                className="w-20 h-20 lg:w-auto lg:h-auto object-contain mx-auto lg:mx-0 lg:order-3"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Activities;