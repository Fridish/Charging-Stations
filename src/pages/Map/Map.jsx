import { useNavigate } from 'react-router-dom'; // Import useNavigate
import MapComponent from '../../components/MapComponent/MapComponent'
import SearchComponent from '../../components/SearchbarComponent/SearchComponent';
import useFetch from '../../hooks/usefetch';
import styles from './Map.module.css'
function Map () {
    const navigate = useNavigate();  // Initialize navigate
    const { data, isLoading, error } = useFetch('/api/linkdokument/OpenData/Laddstation_fordon.json');
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>
      }
    return (
        <div className={styles.base}>
            <SearchComponent />
            <MapComponent fetchData={data}/>
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
export default Map;