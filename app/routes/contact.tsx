import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // You can replace this URL with your actual API endpoint
      const response = await fetch('https://mail.alfbatz.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 px-4 bg-transparent min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 leading-tight">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            Have a project in mind? Let's make it a reality. I'd love to hear about your vision and discuss how I can help bring your creative ideas to life.
          </p>
        </div>
        {/* Contact Form */}
        <div className="bg-gray-900 border border-white rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-white text-sm font-medium mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-yellow-400" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-yellow-400" 
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="subject" className="block text-white text-sm font-medium mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-yellow-400" 
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-white text-sm font-medium mb-1">Message</label>
              <textarea 
                id="message" 
                rows={6} 
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-yellow-400"
              ></textarea>
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="md:col-span-2 p-4 bg-green-900 border border-green-500 text-green-300 rounded-lg">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="md:col-span-2 p-4 bg-red-900 border border-red-500 text-red-300 rounded-lg">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105 col-span-2 md:col-span-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}