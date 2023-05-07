import { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LocationMarker } from "./location-marker/location-marker";
import useMapStore from "../../store/use-map-store";

export const Map = () => {
  const mapPosition = useMapStore((state) => state.mapPosition);
  const setMapPosition = useMapStore((state) => state.setMapPosition);

  useEffect(() => {
    if (!mapPosition || (mapPosition[0] === 0 && mapPosition[1] === 0)) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentPosition: LatLngTuple = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        setMapPosition(currentPosition);
      });
    }
  }, [mapPosition, setMapPosition]);

  return (
    <MapContainer
      center={mapPosition ?? [0, 0]}
      zoom={18}
      style={{
        height: "98vh",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker initialPosition={mapPosition} />
    </MapContainer>
  );
};
