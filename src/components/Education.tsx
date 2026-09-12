import { GraduationCap, School, MapPin, Calendar, BookOpen } from 'lucide-react';
import QAReveal from './QAReveal';

const education = [
  { school: 'Lovely Professional University', degree: 'Bachelor of Technology', specialization: 'Computer Science and Engineering', location: 'Phagwara, Punjab', score: '80.80%', period: '2020 – 2024', label: 'B.TECH / UNDERGRADUATE', icon: GraduationCap, tone: 'cyan' },
  { school: 'Jhantipahari High School', degree: 'Class 12th', specialization: 'Higher Secondary Education', location: 'Bankura, West Bengal', score: '78.2%', period: '2019', label: 'HIGHER SECONDARY', icon: School, tone: 'violet' },
  { school: 'Jhantipahari High School', degree: 'Class 10th', specialization: 'Secondary Education', location: 'Bankura, West Bengal', score: '77.42%', period: '2017', label: 'SECONDARY', icon: BookOpen, tone: 'mint' },
];

export default function Education() {
  return (
    <section id="education" className="qa-theme mf-section qa-education" aria-labelledby="education-title">
      <QAReveal className="qa-container">
        <div className="qa-section-heading qa-heading-row"><div><p className="qa-eyebrow">03 / EDUCATIONAL JOURNEY</p><h2 id="education-title">Strong foundations.<br /><span className="qa-gradient-text">An engineering mindset.</span></h2></div><p className="qa-section-summary">From school in Bankura to Computer Science and Engineering in Punjab—each chapter builds on the last.</p></div>
        <ol className="qa-education-journey">{[...education].reverse().map(({ school, degree, specialization, location, score, period, label, icon: Icon, tone }, index) => <li key={degree} className={`qa-education-item qa-tone-${tone}`}><div className="qa-journey-milestone"><span className="qa-journey-node">0{index + 1}</span><span><Calendar size={14} aria-hidden="true" />{period}</span></div><article className="qa-education-card" style={{ animationDelay: `${index * 110}ms` }}><div className="qa-education-card-top"><span className="qa-category-icon"><Icon size={25} aria-hidden="true" /></span><span className="qa-card-index">0{index + 1}</span></div><p className="qa-card-label">{label}</p><h3>{degree}</h3><p className="qa-degree-detail">{specialization}</p><p className="qa-school-name">{school}</p><p className="qa-school-location"><MapPin size={14} aria-hidden="true" />{location}</p><div className="qa-academic-score"><span>Academic score</span><strong>{score}</strong></div></article></li>)}</ol>
      </QAReveal>
    </section>
  );
}
