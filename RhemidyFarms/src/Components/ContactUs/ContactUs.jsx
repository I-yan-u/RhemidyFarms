import { useState } from 'react';
import { Send, Mail, Phone, MapPin, MapIcon, Check } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    sender: '',
    subject: '',
    messageBody: '',
    to: 'info@rhemidyfarms.com',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const config = {
    user: 'setho@rhemidyfarms.com',
    pass: 'seth@RhemidyFarms',
    host: 'smtp.zoho.com',
    port: '465',
    type: 'smtp',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate form submission
      const response = await fetch('https://yandev-mailer.vercel.app/send', {
        // const response = await fetch('http://localhost:8081/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, config }),
      });

      if (!response.ok) {
        // Handle error
        setIsSubmitting(false);
        throw new Error('Network response was not ok');
      }
      setIsSubmitting(false);
      setSent(true);
      setToastMsg('Message sent successfully!');
    } catch (error) {
      setIsSubmitting(false);
      setSent(true);
      setToastMsg('Failed to send message.');
      console.error('Error submitting form:', error);
      return;
    } finally {
      setFormData({
        name: '',
        sender: '',
        messageBody: '',
        subject: '',
        to: 'info@rhemidyfarms.com',
      });
      setIsSubmitting(false);
      setTimeout(() => {
        setSent(false);
      }, 4000);
    }
  };

  return (
    <section className="flex items-center justify-center w-[100%] min-h-screen px-4 py-32">
      <div className="flex flex-row w-full max-w-6xl h-auto lg:h-screen bg-white rounded-3xl shadow-2xl overflow-hidden">
        {sent && (
          <div className="fixed z-10 top-[70px] left-1/2 -translate-x-1/2 w-fit bg-black/80 rounded-full text-white flex items-center justify-start gap-2 p-2 shadow-lg">
            <span className="rounded-full p-1.5 bg-emerald-400">
              <Check size={16} className="font-medium" color="white" />
            </span>
            <h3>{toastMsg}</h3>
          </div>
        )}
        {/* Left Panel - Contact Info */}
        <div className="relative hidden md:flex w-full lg:w-2/5 bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 p-8 lg:p-12 flex-col justify-center">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Get In <span className="text-emerald-100">Touch</span>
            </h2>
            <p className="text-emerald-100 mb-12 text-lg leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-emerald-100">info@rhemidyfarms.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-emerald-100">+234 (805) 602-1086</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Office Location</p>
                  <p className="text-emerald-100">
                    2, Church Street, Ajegunle bus stop, Lagos, Nigeria
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MapIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Farm Location</p>
                  <p className="text-emerald-100">
                    Plot 5/7, Osolo Road, Ilogbo, Ogun state, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-20 h-20 border-2 border-white/20 rounded-full"></div>
            <div className="absolute bottom-16 right-16 w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
        </div>

        {/* Right Panel - Contact Form */}
        <div className="w-full lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Send Message
            </h3>
            <p className="text-gray-600 mb-4">
              Fill out the details below and we'll get back to you shortly.
            </p>

            <div className="space-y-2">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-emerald-600">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-emerald-600">
                  Email Address
                </label>
                <input
                  type="email"
                  name="sender"
                  value={formData.sender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-400"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-emerald-600">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-emerald-600">
                  Message
                </label>
                <textarea
                  name="messageBody"
                  value={formData.messageBody}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-400 resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:from-emerald-600 hover:to-teal-700 focus:ring-4 focus:ring-emerald-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
