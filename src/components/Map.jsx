import React, { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Icon } from 'leaflet';
import styles from './Map.module.css';

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapContainerRef.current).setView([51.505, -0.09], 140);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const mcdonaldIcon = new Icon({
      iconUrl: 'https://placehold.it/30x30.png?text=McDonalds',
      iconSize: [30, 30],
      iconAnchor: [15, 40],
    });


    const mcdonaldMarker = L.marker([51.505, -0.09], { icon: mcdonaldIcon })
      .addTo(map)
      .bindPopup('McDonald\'s (South Location)')
      .openPopup();

    return () => map.remove();
  }, []);

  return (
    <div style={{ margin: "0px 100px", position: 'relative' }} >
      <div ref={mapContainerRef} className={styles.map}/>
      <div className={styles.mapdetails} >
          <h1>McDonald’s</h1>
          <h3>South London</h3>
          <p>Tooley St, London Bridge, London SE1 2TF,United Kingdom</p>
          <h5>Phone number</h5>
          <p3>+934443-43</p3>
          <h5>Website</h5>
          <p3>http://mcdonalds.uk/</p3>
        </div>
    </div>

  );
};

export default Map;