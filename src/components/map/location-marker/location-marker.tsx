import { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

interface LocationMarkerProps {
  initialPosition: LatLngTuple | null;
}

export function LocationMarker(props: LocationMarkerProps) {
  const [position, setPosition] = useState<LatLngTuple | null>(null);

  const map = useMapEvents({});

  useEffect(() => {
    map.locate();
  }, [map]);

  useEffect(() => {
    setPosition(props.initialPosition);
  }, [props.initialPosition]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        My first marker! <br /> nice.
      </Popup>
    </Marker>
  );
}
