import { useNavigate } from 'react-router-dom';
import styles from './About.module.css'; 

function About() {
    const navigate = useNavigate();
    return (
        <div className={styles.base}>
            <h1 className={styles.header}>About Charge Skövde</h1>
            <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={() => navigate("/")}>
                    Home
                </button>
                <button className={styles.button} onClick={() => navigate("/map")}>
                    Map
                </button>
                <button className={styles.button} onClick={() => navigate("/about")}>
                    About
                </button>
                <a href="https://github.com/Fridish/Charging-Stations" className={styles.button} target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default About;
