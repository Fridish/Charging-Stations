import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css'
function Home () {
    const navigate = useNavigate();
    return (
        <div className={styles.base}>
            <h1 className={styles.header}>Charge Skövde</h1>
            <p className={styles.paragraph}>Find the location of all vehicle charging stations in Skövde City </p>
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
    )
}
export default Home;