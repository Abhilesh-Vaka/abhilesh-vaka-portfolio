import styles from './ProjectsStyles.module.css';
import shopus from '../../assets/ShopUs.jpg';
import ProjectCard from '../../common/ProjectCard';
function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard
             src={shopus}
             link="www.github.com"
             h3="ShopUs"
             p="E-commerce Website"
            />
            <ProjectCard
             src={shopus}
             link="www.github.com"
             h3="Viberr" 
             p="Streaming App"
            />
            <ProjectCard
             src={shopus}
             link="www.github.com"
             h3="Viberr"
             p="Streaming App"
            />
        </div>
    </section>
  );
}

export default Projects