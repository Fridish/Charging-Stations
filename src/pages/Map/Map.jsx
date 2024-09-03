import MapComponent from '../../components/MapComponent/MapComponent'
import SearchComponent from '../../components/SearchbarComponent/SearchComponent';
import useFetch from '../../hooks/usefetch';
import styles from './Map.module.css'
function Map () {
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
        </div>
    )
}
export default Map;