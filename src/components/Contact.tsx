import { useState } from 'react';
import { Mail, Send, MapPin, MessageCircle } from 'lucide-react';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import FadingVideo from './FadingVideo';

const CONTACT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4';

const socialLinks = [
  { name:'Gmail',        href:'mailto:partharakshit5653@gmail.com',            icon: Mail,     label:'partharakshit5653@gmail.com' },
  { name:'LinkedIn',     href:'https://www.linkedin.com/in/partharakshit',     icon: Linkedin, label:'LinkedIn Profile' },
  { name:'GitHub',       href:'https://github.com/CoderPartha012',             icon: Github,   label:'GitHub Profile' },
];

const Contact = () => {
  const [form, setForm]         = useState({ name:'', email:'', message:'' });
  const [status, setStatus]     = useState({ type:'', message:'' });
  const [submitting, setSubmitting] = useState(false);
  const [focused, setFocused]   = useState<string|null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type:'', message:'' });
    try {
      const res = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message, to_name: 'Partha Rakshit' },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      if (res.status === 200) {
        setStatus({ type:'success', message:'Thank you! I\'ll get back to you soon.' });
        setForm({ name:'', email:'', message:'' });
      }
    } catch {
      setStatus({ type:'error', message:'Oops! Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 ' +
    'focus:ring-1 focus:ring-white/20 text-white placeholder-transparent font-body outline-none transition-all';
  const labelClass = 'absolute left-4 pointer-events-none font-body transition-all duration-200';

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      <FadingVideo src={CONTACT_VIDEO} className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <div className="container mx-auto px-8 md:px-16 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-body text-white/80 mb-4 tracking-wide">// Get in Touch</p>
          <h2 className="font-heading italic text-white leading-[0.9] tracking-[-3px]"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            Let's build<br />something great
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

          {/* ── Left: info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="liquid-glass rounded-[1.25rem] p-8 flex flex-col gap-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="liquid-glass rounded-[0.75rem] w-11 h-11 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading italic text-white text-2xl tracking-[-0.5px] leading-none">
                  Let's Connect
                </h3>
              </div>
              <p className="text-sm font-body font-light text-white/70 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities.
                Whether you need quality assurance expertise or want to collaborate on something
                innovative, I'd love to hear from you.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: MapPin, label:'Location', value:'Gurgaon, Haryana, India' },
                { icon: Mail,   label:'Email',    value:'partharakshit5653@gmail.com' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="liquid-glass rounded-[0.75rem] w-11 h-11 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-xs font-body text-white/40">{label}</p>
                    <p className="text-sm font-body text-white/80">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <p className="text-xs font-body text-white/50 uppercase tracking-widest">Connect with me</p>
              {socialLinks.map(({ name, href, icon: Icon, label }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                  className="liquid-glass rounded-xl flex items-center gap-4 p-4
                             hover:-translate-y-0.5 transition-transform duration-200">
                  <div className="liquid-glass rounded-[0.75rem] w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-white/70" />
                  </div>
                  <div>
                    <p className="text-sm font-body font-medium text-white/80">{name}</p>
                    <p className="text-xs font-body text-white/40">{label}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="liquid-glass rounded-[1.25rem] p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="liquid-glass rounded-[0.75rem] w-11 h-11 flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-heading italic text-white text-2xl tracking-[-0.5px] leading-none">
                Send Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input type="text" id="name" value={form.name} onChange={handleChange}
                  onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                  className={inputClass} placeholder="Your Name" required />
                <label htmlFor="name" className={`${labelClass} ${
                  focused === 'name' || form.name
                    ? '-top-2 text-xs text-white/60 px-2 bg-black rounded'
                    : 'top-4 text-sm text-white/30'}`}>Your Name</label>
              </div>

              {/* Email */}
              <div className="relative">
                <input type="email" id="email" value={form.email} onChange={handleChange}
                  onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                  className={inputClass} placeholder="Your Email" required />
                <label htmlFor="email" className={`${labelClass} ${
                  focused === 'email' || form.email
                    ? '-top-2 text-xs text-white/60 px-2 bg-black rounded'
                    : 'top-4 text-sm text-white/30'}`}>Your Email</label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea id="message" value={form.message} onChange={handleChange}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                  rows={6} className={`${inputClass} resize-none`}
                  placeholder="Your Message" required />
                <label htmlFor="message" className={`${labelClass} ${
                  focused === 'message' || form.message
                    ? '-top-2 text-xs text-white/60 px-2 bg-black rounded'
                    : 'top-4 text-sm text-white/30'}`}>Your Message</label>
              </div>

              <button type="submit" disabled={submitting}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-full
                            bg-white text-black font-body font-semibold text-sm
                            hover:bg-white/90 transition-colors
                            ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                <Send className={`w-4 h-4 ${submitting ? 'animate-pulse' : ''}`} />
                {submitting ? 'Sending…' : 'Send Message'}
              </button>

              {status.message && (
                <div className={`liquid-glass rounded-xl px-4 py-3 flex items-center gap-3
                                 ${status.type === 'success' ? 'text-white/80' : 'text-white/60'}`}>
                  <span>{status.type === 'success' ? '✅' : '❌'}</span>
                  <p className="text-sm font-body">{status.message}</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
