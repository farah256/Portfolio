import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations/index';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });
    const { currentLanguage } = useLanguage();
    const t = translations[currentLanguage];
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: 'Farah'
            };

            await emailjs.send(
                'service_822cwep',
                'template_rdyaija',
                templateParams,
                'MyEVjV-KctuEbZS5y'
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
            
            setTimeout(() => setSubmitStatus(''), 5000);
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(''), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Contact Section */}
            <section 
                ref={ref} 
                id="contact" 
                className="min-h-screen py-20 flex items-center relative overflow-hidden z-20"
            >
                <div className="max-w-4xl mx-auto px-6 w-full">
                    {/* Contact Title */}
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-heading text-black mb-4">
                            {t.contact.title}
                        </h2>
                        <motion.div 
                            className="w-24 h-1 bg-accent mx-auto rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 96 } : { width: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                    </motion.div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <motion.div 
                            className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {t.contact.success}
                        </motion.div>
                    )}
                    
                    {submitStatus === 'error' && (
                        <motion.div 
                            className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {t.contact.error}
                        </motion.div>
                    )}

                    {/* Contact Form */}
                    <motion.form 
                        onSubmit={handleSubmit} 
                        className="space-y-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Name and Email Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Field */}
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                                    placeholder={t.contact.name}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                                    placeholder={t.contact.email}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        {/* Message Field */}
                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none"
                                placeholder={t.contact.message}
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full md:w-auto px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 group ${
                                isSubmitting 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-black text-white hover:bg-gray-800'
                            }`}
                            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    {t.contact.sending}
                                </>
                            ) : (
                                <>
                                    {t.contact.send}
                                    <motion.span
                                        className="group-hover:translate-x-1 transition-transform duration-200"
                                    >
                                        →
                                    </motion.span>
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </div>
            </section>
        </>
    );
};

export default Contact;