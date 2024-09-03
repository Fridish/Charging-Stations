import MapComponent from '../../components/MapComponent/MapComponent'
import SearchComponent from '../../components/SearchbarComponent/SearchComponent';
import styles from './Map.module.css'
function Map () {
    return (
        <div className={styles.base}>
            <SearchComponent />
            <MapComponent/>
        </div>
    )
}
export default Map;