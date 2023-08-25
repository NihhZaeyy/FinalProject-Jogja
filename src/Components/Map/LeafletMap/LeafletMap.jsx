import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';

// ==== Database local
import museumsData from '/src/Database/museumsData.json'
import attractionsData from '/src/Database/attractionsData.json'


// ================ CSS styles for leaflet-container ada di app.css

import "leaflet/dist/leaflet.css"

function LeafletMap() {


    const redIcon = new L.icon ({
      iconUrl: '/src/assets/marker-red.png',
      iconSize: [32 , 38],
      iconAnchor: [16, 38],
    });

  const position = [-7.79 , 110.4]
  return (
    <div className='flex justify-center items-center py-10'>
    <MapContainer 
      center={position} 
      zoom={11}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {museumsData.map((museum, index) => (
        <Marker key={index} position={museum.position}>
          <Popup>
            <div className='flex flex-col justify-center items-center' >
              <h3>{museum.name}</h3>
              <img className='rounded-[8px]' src={museum.pic} alt={museum.name} width="100" />
              {/* === BLM MASUKIN LINK KE DATABASE museumsData.js === */}
              <a className=' text-white' href={museum.link} >
                <button className='bg-button px-2 py-1 mt-2 rounded text-white cursor-pointer' >
                  Visit Site
                </button>
              </a>
            </div>
          </Popup>
        </Marker>
      ))};

      {attractionsData.map((attraction, index) => (
        <Marker key={index} position={attraction.position} icon={redIcon}>
          <Popup>
            <div className='flex flex-col justify-center items-center' >
              <h3>{attraction.name}</h3>
              <img className='rounded-[8px]' src={attraction.pic} alt={attraction.name} width="100" />
              {/* === BLM MASUKIN LINK KE DATABASE attractionsData.js === */}
              <a className=' text-white' href={attraction.link} >
                <button className='bg-button px-2 py-1 mt-2 rounded text-white cursor-pointer' >
                  Visit Site
                </button>
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
  )
}

export default LeafletMap
