import { ClipboardCheck, CheckSquare, RotateCcw, Network, Database, Plug, FileSpreadsheet, Code2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const logos: Record<string, string> = {
  Java: 'java.svg', Selenium: 'selenium.svg', Playwright: 'playwright.svg', TestNG: 'testng.png', JUnit: 'junit.svg', Mockito: 'mockito.png', 'Katalon Studio': 'katalon.svg', Postman: 'postman.svg', JMeter: 'jmeter.svg', MySQL: 'mysql.svg', MongoDB: 'mongodb.svg', Python: 'python.svg', JavaScript: 'javascript.svg', C: 'c.svg', 'C++': 'cplusplus.svg', 'Spring Boot': 'spring.svg', 'Spring MVC': 'spring.svg', Hibernate: 'hibernate.svg', Maven: 'maven.svg', Docker: 'docker.svg', AWS: 'amazonwebservices.svg', Git: 'git.svg', GitHub: 'github.svg', Jenkins: 'jenkins.svg', Jira: 'jira.svg', Taiga: 'taiga.svg',
};
const concepts: Record<string, LucideIcon> = { 'Manual Testing': ClipboardCheck, 'Functional Testing': CheckSquare, 'Regression Testing': RotateCcw, 'Integration Testing': Network, 'REST APIs': Plug, JPA: Database, JDBC: Plug, 'MS Office': FileSpreadsheet };

/** Brand logos retain their original colors; testing concepts use semantic icons. */
export default function SkillIcon({ name }: { name: string }) {
  const logo = logos[name];
  const Icon = concepts[name] ?? Code2;
  return <span className={logo ? 'qa-skill-logo' : 'qa-skill-symbol'} aria-hidden="true">{logo ? <img src={'/icons/skills/' + logo} alt="" loading="lazy" width={24} height={24} /> : <Icon size={21} />}</span>;
}
