import { useState, type FormEvent } from 'react';
import { Mail, Send, MapPin, Github, Linkedin, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    if (!form.name.trim() || !form.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name and message.' });
      return;
    }
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setStatus({ type: 'error', message: 'Email delivery is currently unavailable. Your message has not been sent. Please use the email link to contact me directly; your draft has been kept here.' });
      return;
    }
    setSubmitting(true);
    setStatus({ type: '', message: '' });
    try {
      const result = await emailjs.send(serviceId, templateId, { from_name: form.name, from_email: form.email, message: form.message, to_name: 'Partha Rakshit' }, publicKey);
      if (result.status !== 200) throw new Error('Message delivery failed');
      setStatus({ type: 'success', message: "Thank you! Your message has been sent. I'll get back to you soon." });
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', message: 'Your message could not be sent. Please try again or email me directly.' });
    } finally { setSubmitting(false); }
  }
  return <section id="contact" className="qa-theme mf-section qa-contact contact-redesign" aria-labelledby="contact-title"><div className="qa-container">
    <div className="qa-contact-grid"><div className="qa-contact-copy"><p className="qa-eyebrow">07 / GET IN TOUCH</p><h2 id="contact-title">Great software<br />starts with a<br /><span className="qa-gradient-text">conversation.</span></h2><p>Hiring for a QA role or looking for someone who cares about the details? Let's talk about how I can help your team deliver reliable software.</p><span className="qa-contact-availability"><span className="qa-status-dot" />Open to QA Engineer & SDET opportunities</span><a className="qa-contact-email" href="mailto:partharakshit5653@gmail.com"><Mail size={21} aria-hidden="true" /><span>partharakshit5653@gmail.com</span><ArrowUpRight size={18} aria-hidden="true" /></a><p className="qa-contact-location"><MapPin size={16} aria-hidden="true" />Gurgaon, Haryana, India</p><div className="qa-contact-socials"><a href="https://www.linkedin.com/in/partharakshit" target="_blank" rel="noopener noreferrer"><Linkedin size={19} aria-hidden="true" />LinkedIn<ArrowUpRight size={15} aria-hidden="true" /></a><a href="https://github.com/CoderPartha012" target="_blank" rel="noopener noreferrer"><Github size={19} aria-hidden="true" />GitHub<ArrowUpRight size={15} aria-hidden="true" /></a></div></div>
    <form className="qa-contact-form" onSubmit={handleSubmit} aria-busy={submitting}><div className="qa-form-heading"><span className="qa-eyebrow">LET'S CONNECT</span><Send size={21} aria-hidden="true" /></div><h3>Send me a message</h3><p>Tell me about the role, project, or idea you have in mind.</p><div className="qa-form-fields"><label htmlFor="contact-name">Your name<input id="contact-name" name="name" autoComplete="name" required maxLength={120} value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} placeholder="Your full name" disabled={submitting} /></label><label htmlFor="contact-email">Email address<input id="contact-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={event => setForm({ ...form, email: event.target.value })} placeholder="you@company.com" disabled={submitting} /></label><label htmlFor="contact-message">Your message<textarea id="contact-message" name="message" required rows={5} maxLength={5000} value={form.message} onChange={event => setForm({ ...form, message: event.target.value })} placeholder="I'd like to discuss…" disabled={submitting} /></label></div><button type="submit" className="qa-button qa-button-primary" disabled={submitting}>{submitting ? 'Sending message…' : 'Send message'}<ArrowUpRight size={18} aria-hidden="true" /></button><div role="status" aria-live="polite" className={'qa-form-status ' + status.type}>{status.message && <>{status.type === 'success' ? <CheckCircle2 size={18} aria-hidden="true" /> : <AlertCircle size={18} aria-hidden="true" />}<span>{status.message}</span></>}</div></form></div>
  </div></section>;
}

