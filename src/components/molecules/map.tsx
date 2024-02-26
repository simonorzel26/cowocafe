'use client'
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Replace "your_access_token" with your Mapbox access token
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
mapboxgl.accessToken = 'pk.eyJ1IjoiY3N0cm50IiwiYSI6ImNsbWE2dW0zNzB0YTMzZXRjbTFhZnpoaXIifQ.zL4eczZN_s2rrlu_NAPkWg';

interface CafeMapProps {
  lng: number;
  lat: number;
  zoom: number;
}

const CafeMap: React.FC<CafeMapProps> = ({ lng, lat, zoom }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // This check ensures that mapboxgl.Map is not called server-side
    if (typeof window !== 'undefined' && mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/light-v10', // Customize this style according to your design
        center: [lng, lat],
        zoom: zoom,
        attributionControl: false,
        scrollZoom: false,
      });
      const enableScrollZoom = () => {
        map.scrollZoom.enable();
        // Optionally, remove the event listener if you want this to happen only once
        map.off('click', enableScrollZoom);
      };

      // Add a 'click' event listener to the map
      map.on('click', enableScrollZoom);
      map.on('load', () => {
        const logoElements = document.querySelectorAll('.mapboxgl-ctrl-logo');
        logoElements.forEach(el => el.remove());
      });
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');
      map.addControl(new mapboxgl.AttributionControl({
        compact: true
      }));

      return () => map.remove();
    }
  }, [lng, lat, zoom]);

  return (
  <>
    <div ref={mapContainerRef} style={{ width: '100%', height: '300px' }} />
  </>);
};

export default CafeMap;
