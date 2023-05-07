import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { LatLngTuple } from "leaflet";


interface MapStore {
    mapPosition: LatLngTuple;
    setMapPosition: (mapPosition: LatLngTuple) => void;
}

const useMapStore = create<MapStore>() (
    persist(
        (set) => ({
            mapPosition: [0, 0],
            setMapPosition: (mapPosition: LatLngTuple) => set({mapPosition}),
        }),
        {
            name: 'map-store',
            getStorage: () => sessionStorage,
        }
    )
);

export default useMapStore;
