import styles from './navbarStyles.module.css';
import CV from '../../assets/cv.pdf';
import logo from '../../assets/abhi.jpg';

function Navbar() {
  return (
    <section id="nav" className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.nav__logo}><img id='img' src={logo} alt="Profile" /></div>
        <div className={styles.nav__menu}>
          <ul>
            <li className={styles.nav__menu__link}><a href="#hero"><div className={styles.nav_color}>Home</div></a></li>
            <li className={styles.nav__menu__link}><a href={CV} download><div className={styles.nav_color}>About</div></a></li>
            <li className={styles.nav__menu__link}><a href="#contact"><div className={styles.nav_color}>Contact</div></a></li>
          </ul>
        </div>
      </nav>
      <div className={styles.bg} />
    </section>
  );
}

export default Navbar;
