import { ArrowUpRight, Award, Calendar } from 'lucide-react';
import QAReveal from './QAReveal';

const certifications = [
  { id: '01', title: 'Software Testing',                                     issuer: 'SkillStone',    date: 'Jan 2023', initial: 'SS',
    url: 'https://drive.google.com/file/d/1Gl6iGZjmrE9egjeqdtHnVuHoZH9J5SPE/view?usp=sharing' },
  { id: '02', title: 'Master Java Programming – Complete Beginner to Advanced', issuer: 'GeeksforGeeks', date: 'May 2023', initial: 'GG',
    url: 'https://media.geeksforgeeks.org/courses/certificates/acea10fcfb67e78a301faf3cf7b75278.pdf' },
  { id: '03', title: 'Web and Mobile Testing with Selenium',                 issuer: 'Coursera',      date: 'Mar 2023', initial: 'CO',
    url: 'https://www.coursera.org/account/accomplishments/certificate/GXBVT8VXVC4E' },
  { id: '04', title: 'API Testing using Postman',                            issuer: 'Postman',       date: 'Aug 2024', initial: 'PM',
    url: 'https://badges.parchment.com/public/assertions/RwuGsHy4R3SVYyiy5I7wxQ' },
  { id: '05', title: 'Introduction to Programming Using Python',             issuer: 'HackerRank',    date: 'Sep 2022', initial: 'HR',
    url: 'https://www.hackerrank.com/certificates/2463d87a894c' },
];

export default function Certifications() {
  return <section id="certifications" className="qa-theme mf-section qa-certifications" aria-labelledby="certifications-title"><QAReveal className="qa-container">
    <div className="qa-section-heading qa-heading-row"><div><p className="qa-eyebrow">06 / CERTIFICATIONS</p><h2 id="certifications-title">Learning that supports<br /><span className="qa-gradient-text">the work I do.</span></h2></div><p className="qa-section-summary">Five credentials across software testing, automation, APIs, and programming.</p></div>
    <div className="qa-cert-grid">{certifications.map(cert => <a className="qa-cert-card" key={cert.id} href={cert.url} target="_blank" rel="noopener noreferrer" aria-label={'View certificate: ' + cert.title}><div className="qa-cert-top"><span className="qa-cert-seal"><Award size={27} aria-hidden="true" /></span><span className="qa-card-index">{cert.id} / 05</span></div><p className="qa-cert-issuer">{cert.issuer}</p><h3>{cert.title}</h3><p className="qa-cert-date"><Calendar size={14} aria-hidden="true" />{cert.date}</p><div className="qa-cert-link">View certificate<ArrowUpRight size={18} aria-hidden="true" /></div></a>)}</div>
  </QAReveal></section>;
}
