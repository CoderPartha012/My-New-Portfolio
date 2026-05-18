import { useState } from 'react';
import { Mail, Send, Code2, MapPin, MessageCircle } from 'lucide-react';
// eslint-disable-next-line @typescript-eslint/no-deprecated
import { Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, message: formData.message, to_name: 'Partha Rakshit' },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      if (result.status === 200) {
        setStatus({ type: 'success', message: 'Thank you for your message! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'Gmail',
      href: 'mailto:partharakshit5653@gmail.com',
      icon: Mail,
      gradient: 'from-red-500 to-rose-500',
      bg: 'bg-red-500/10 hover:bg-red-500/20 border-red-500/20 hover:border-red-400/40',
      text: 'text-red-300',
      label: 'partharakshit5653@gmail.com',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/partharakshit',
      icon: Linkedin,
      gradient: 'from-blue-500 to-sky-500',
      bg: 'bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20 hover:border-blue-400/40',
      text: 'text-blue-300',
      label: 'LinkedIn Profile',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/CoderPartha012',
      icon: Github,
      gradient: 'from-slate-500 to-slate-400',
      bg: 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/25',
      text: 'text-slate-300',
      label: 'GitHub Profile',
    },
    {
      name: 'GeeksforGeeks',
      href: 'https://www.geeksforgeeks.org/user/partharakshit5653',
      icon: Code2,
      gradient: 'from-emerald-500 to-green-500',
      bg: 'bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/20 hover:border-emerald-400/40',
      text: 'text-emerald-300',
      label: 'GeeksforGeeks Profile',
    },
  ];

  const inputBase =
    'w-full px-4 py-4 rounded-xl bg-white/5 border border-cyan-400/15 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-transparent body-font outline-none transition-all duration-300';
  const labelBase =
    'absolute left-4 pointer-events-none subheading-font transition-all duration-300';

  return (
    <section id="contact" className="py-14 section-accent relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
      <div className="scan-line" style={{ animationDelay: '7s' }} />

      {/* Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl orb-float" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl orb-float-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">Get in Touch</h2>
          <div className="w-24 h-1 bg-white/30 mx-auto rounded-full mb-6" />
          <p className="text-white/80 max-w-2xl mx-auto body-font text-lg">
            Let's connect and discuss how we can work together to create amazing software experiences
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="card-enhanced p-8 h-full" style={{ background: 'rgba(5,13,26,0.65)' }}>
              <div className="flex items-center gap-3 mb-8">
                <MessageCircle className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white subheading-font">Let's Connect</h3>
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed body-font">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                Whether you need quality assurance expertise or want to collaborate on innovative solutions, I'd love to hear from you.
              </p>

              {/* Contact details */}
              <div className="space-y-5 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-sky-500 rounded-xl shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white subheading-font">Location</p>
                    <p className="text-slate-400 body-font">Gurgaon, Haryana, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white subheading-font">Email</p>
                    <p className="text-slate-400 body-font">partharakshit5653@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-5 subheading-font">Connect with me</h4>
                <div className="grid grid-cols-1 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up ${social.bg}`}
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <div className={`p-3 bg-gradient-to-br ${social.gradient} rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                        <social.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className={`font-semibold ${social.text} subheading-font`}>{social.name}</p>
                        <p className="text-slate-500 text-sm body-font">{social.label}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="card-enhanced p-8" style={{ background: 'rgba(5,13,26,0.65)' }}>
              <div className="flex items-center gap-3 mb-8">
                <Send className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white subheading-font">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text" id="name" value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={inputBase}
                    placeholder="Your Name"
                    required
                  />
                  <label htmlFor="name" className={`${labelBase} ${focusedField === 'name' || formData.name ? '-top-2 text-sm px-2 text-cyan-400 bg-[#071224] rounded' : 'top-4 text-slate-500'}`}>
                    Your Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email" id="email" value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={inputBase}
                    placeholder="Your Email"
                    required
                  />
                  <label htmlFor="email" className={`${labelBase} ${focusedField === 'email' || formData.email ? '-top-2 text-sm px-2 text-cyan-400 bg-[#071224] rounded' : 'top-4 text-slate-500'}`}>
                    Your Email
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message" value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className={`${inputBase} resize-none`}
                    placeholder="Your Message"
                    required
                  />
                  <label htmlFor="message" className={`${labelBase} ${focusedField === 'message' || formData.message ? '-top-2 text-sm px-2 text-cyan-400 bg-[#071224] rounded' : 'top-4 text-slate-500'}`}>
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full gradient-primary text-[#050d1a] px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 subheading-font text-lg ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status message — shown only below the button */}
                {status.message && (
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border animate-fade-in-up ${
                      status.type === 'success'
                        ? 'bg-emerald-500/10 text-emerald-300 border-emerald-400/25'
                        : 'bg-red-500/10 text-red-300 border-red-400/25'
                    }`}
                  >
                    <span className="text-lg">{status.type === 'success' ? '✅' : '❌'}</span>
                    <p className="text-sm body-font">{status.message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
