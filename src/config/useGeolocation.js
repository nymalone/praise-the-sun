import { useState, useEffect } from "react";
import Geolocation from '@react-native-community/geolocation';

export default function useGeoLocation(lat, lon) {
  const [latLon, setLatLon] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLatLon([position.coords.latitude, position.coords.longitude]);
      },
      (err) => {
        console.log(err);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  return latLon;
}
