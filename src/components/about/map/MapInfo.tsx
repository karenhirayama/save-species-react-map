import React from 'react'
import { LatLonUfs } from './BrazilStates'
import { ComposableMap, Geographies, Geography } from "react-simple-maps";


export const MapInfo = () => {
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  return (
    <>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
          }
        </Geographies>
      </ComposableMap>
    </>
  )
}
