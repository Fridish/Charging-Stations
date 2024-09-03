import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './MapComponent.module.css';

function MapComponent() {

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
  );
};

export default MapComponent