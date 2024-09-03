import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css'
function Home () {
    const navigate = useNavigate();
    return (
        <div className={styles.base}>
        <h1 className={styles.header}>Charge Skövde</h1>
        <p className={styles.paragraph}>Find the location of all vehicle charging stations in Skövde City </p>
        <button className={styles.button} onClick={ () => navigate("/map")}>Find Stations</button>
        </div>
    )
}
export default Home;