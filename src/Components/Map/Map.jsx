import React from 'react'
import MapTitle from './MapTitle/MapTitle'
import LeafletMap from './LeafletMap/LeafletMap'


function Map() {
  return (
    <div className='bg-background1 my-10 h-max'>
      <MapTitle />
      <LeafletMap />
    </div>

  )
}

export default Map



