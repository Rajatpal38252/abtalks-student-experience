import { motion } from 'framer-motion';
import { CalendarDays, ExternalLink, GitBranch, Globe2 } from 'lucide-react';

function formatDate(value) { return new Date(value).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }); }

export default function PortfolioCards({ projects, profile = false }) {
  if (!projects.length) return <div className="portfolio-empty card">Complete your first challenge to add a project to your portfolio.</div>;
  return <div className={`portfolio-card-grid ${profile ? 'portfolio-card-grid--profile' : ''}`}>{projects.map((project, index) => <motion.article className="portfolio-card card" key={`${project.day}-${project.github}`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} whileHover={{ y: -4 }}><div className="portfolio-card-top"><span>Day {project.day}</span><strong>+{project.xpEarned || 50} XP</strong></div><h3>{project.title}</h3>{profile && <div className="portfolio-skills">{(project.skills || []).map((skill) => <span key={skill}>{skill}</span>)}</div>}<p className="portfolio-date"><CalendarDays size={14} /> {formatDate(project.completedAt)}</p><div className="portfolio-links"><a href={project.github} target="_blank" rel="noreferrer"><GitBranch size={15} /> GitHub <ExternalLink size={13} /></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><Globe2 size={15} /> Live Demo <ExternalLink size={13} /></a>}</div></motion.article>)}</div>;
}
