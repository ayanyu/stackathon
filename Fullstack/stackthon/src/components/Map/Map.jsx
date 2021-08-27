import React, { useState, useEffect} from 'react';
import GoogleMapReact  from 'google-map-react';
import { Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab'
import LocationMarker from './LocationSpot'
import LocationInfoBox from './LocationInfoBox'

import useStyles from './styles';

const Map = ({ data, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)
    // const markers = data.map(ev => {
    //         return <LocationMarker lat={ev.lat} lng={ev.lon} />
    // })
    // console.log(markers)

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    return (
            <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyAG9cx-Cl81xpcjfNhL6emoDjhNVdF8oFE'}}
            defaultCenter={center}
            defaultZoom= {zoom}
            margin={[50, 50, 50, 50]}
            >
            {/* {markers} */}
            {data.map((ev, i) => {
            return <LocationMarker lat={ev.lat} lng={ev.lon} key={i}  onClick={(setLocationInfo({name: ev.classname, address: ev.address}) )} />
            })}
           
            <LocationMarker lat={center.lat} lng={center.lng} 

            />

            {locationInfo && <LocationInfoBox info={locationInfo} />}
            
            </GoogleMapReact>

            </div>
        
    )
}

Map.defaultProps = {
    center: {
        lat: 43.000000,
        lng: -75.000000
    },
    zoom: 6
}

export default Map;