import * as React from 'react'
import Map, {Marker,Popup} from 'react-map-gl'
import { getCenter } from 'geolib'

function MapComponent({ searchResults }) {
  //transform searchResult obj into the {latitude:x, longitude:y} object
  const coordinates=searchResults.map(result=>({
    longitude:result.long,
    latitude:result.lat,
  }));

  // the lat and long of center of locations coordinates
  const center=getCenter(coordinates);

  return <Map 
    mapStyle='mapbox://styles/dianadragan/clkcjiifd001o01qphb4mdpdu'
    mapboxAccessToken={'pk.eyJ1IjoiZGlhbmFkcmFnYW4iLCJhIjoiY2xrY2phYXZwMDFybjNqbHZkbW1xaXh0aSJ9.9yrZU3zzAlwCkHgY7XXvMA'}
    initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 14
      }}
      style={{width: "100%", height: "100%"}}
  > 
    {searchResults.map((el)=>( 
      <div key={el.lat}>
        <Marker 
          longitude={el.lat} latitude={el.long}
          anchor="bottom"
        ><img src='../public/pin.png' /></Marker>
      </div>
    ))}
  </Map>
  
}

export default MapComponent