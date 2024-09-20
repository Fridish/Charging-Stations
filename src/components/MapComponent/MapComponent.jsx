import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './MapComponent.module.css';

function MapComponent(fetchdata) {

  const ChargingStations = fetchdata.fetchData;
  console.log(ChargingStations);
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const defaultOrigin = [13.846121, 58.390278]; //Skövde coordinates

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: defaultOrigin, // starting position [lng, lat]
      zoom: 13 // starting zoom
    });
  });

  return (
    <div
      className={styles.base}
      ref={mapContainerRef}
    />
  // useEffect(() => {
  //   mapRef.current = new mapboxgl.Map({
  //     container: mapContainerRef.current,
  //     center: defaultOrigin, // Default center
  //     zoom: 13,
  //   });

  //   if (location) {
  //     map.flyTo({
  //       center: location.coordinates,
  //       zoom: 14,
  //       essential: true, // This animation is considered essential with respect to prefers-reduced-motion
  //     });

  //     new mapboxgl.Marker().setLngLat(location.coordinates).addTo(map);
  //   }

  //   return () => map.remove();
  // }, [location]);

  // return (
  //   <div>
  //     <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />
  //     {stationInfo && (
  //       <div className="station-info">
  //         <h3>Charging Station Information</h3>
  //         <p><strong>Location:</strong> {stationInfo.Placering}</p>
  //         <p><strong>Type:</strong> {stationInfo.TYP}</p>
  //         <p><strong>Number of Chargers:</strong> {stationInfo.Antal}</p>
  //         <p><strong>Comment:</strong> {stationInfo.Kommentar}</p>
  //         <p><strong>URL:</strong> <a href={stationInfo.URL} target="_blank" rel="noopener noreferrer">{stationInfo.URL}</a></p>
  //         <p><strong>Cost:</strong> {stationInfo.Avgift}</p>
  //         <p><strong>Operating Hours:</strong> {stationInfo.Avgift_tid}</p>
  //       </div>
  //     )}
  //   </div>
  );
};

export default MapComponent