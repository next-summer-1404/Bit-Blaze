'use client';

import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
  ssr: false,
});
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), {
  ssr: false,
});
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
});

// interface IProps {
//   houseDetail: IHousesData
// }

const HouseLocation = () => {

  // const locations = houseDetail.
  return (
    <div className="w-full max-w-[100%] h-[1032px] rounded-[40px]"> 
      <MapContainer center={[35.6892, 51.3890]} zoom={12} className="w-full h-full rounded-[40px]">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <Marker position={[35.6892, 51.3890]}>
          <Popup>اینجا یه مارکر داریم که تهران رو نشون میده!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default HouseLocation;