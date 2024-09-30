import styles from './HeroStyle.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instaLight from '../../assets/instagram-light.svg';
import instaDark from '../../assets/instagram-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import gitLight from '../../assets/github-light.svg';
import gitDark from '../../assets/github-dark.svg';
import CV from '../../assets/cv.pdf';
import {useTheme} from '../../common/ThemeContext';


function Hero() {
    const {theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? instaLight : instaDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const gitIcon = theme === 'light' ? gitLight : gitDark;
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Profile of Abhilesh Vaka" />
            <img className={styles.colorMode} src={themeIcon} alt="switch btwn light and dark mode" onClick={toggleTheme}/>
        </div>
        <div className="styles.info">
            <h1>Abhilesh Vaka</h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="https://instagram.com">
                    <img src={twitterIcon} alt="instagram" />
                </a>
                <a href="https://www.linkedin.com/in/abhilesh-vaka-2a879a257/">
                    <img src={linkedinIcon} alt="linkedIn" />    
                </a>
                <a href="https://github.com/abhilesh1018">
                    <img src={gitIcon} alt="github" />
                </a>
            </span>
            <p className={styles.description}>
                My self Abhilesh and I am a Computer Science Student graduating in Vellore Institue of Technology
            </p>
            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>

        </div>
    </section>
  )
}

export default Hero