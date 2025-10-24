import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Label } from './ui/label';

const FooterMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenSubmitted, setTokenSubmitted] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !tokenSubmitted || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [80.0138303, 16.2561751], // Ravipadu coordinates
      zoom: 15,
    });

    // Add marker at the location
    new mapboxgl.Marker({ color: '#3b82f6' })
      .setLngLat([80.0138303, 16.2561751])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          '<div class="text-sm"><strong>Amalodhbhavi Electricals</strong><br/>D.No 3-14 Main Road<br/>Opposite CSB Bank, Ravipadu</div>'
        )
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, [tokenSubmitted, mapboxToken]);

  if (!tokenSubmitted) {
    return (
      <div className="space-y-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
        <div>
          <Label htmlFor="mapbox-token" className="text-sm text-gray-300">
            Enter Mapbox Public Token
          </Label>
          <p className="text-xs text-gray-400 mt-1 mb-2">
            Get your token from{' '}
            <a
              href="https://mapbox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              mapbox.com
            </a>
          </p>
          <Input
            id="mapbox-token"
            type="text"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            placeholder="pk.xxxxx..."
            className="mb-2"
          />
          <button
            onClick={() => setTokenSubmitted(true)}
            disabled={!mapboxToken}
            className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white text-sm rounded-md transition-colors"
          >
            Load Map
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[200px] rounded-lg overflow-hidden border border-white/10">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default FooterMap;
