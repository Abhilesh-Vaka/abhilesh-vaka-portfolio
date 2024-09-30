import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Technical Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="DSA using Java"/>
            <SkillList src={checkMarkIcon} skill="OOPS using Java"/>
            <SkillList src={checkMarkIcon} skill="Python"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Prompt Engineering"/>
            <SkillList src={checkMarkIcon} skill="Cloud Fundamentals"/>
            <SkillList src={checkMarkIcon} skill="Expertise in Cloud Deployment Strategies"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="JavaScript"/>
            <SkillList src={checkMarkIcon} skill="Node"/>
        </div>
    </section>
  );
}

export default Skills