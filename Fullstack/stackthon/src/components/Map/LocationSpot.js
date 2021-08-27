import { Icon } from '@iconify/react'
import mapMarker from "@iconify/icons-mdi/hospital";

import useStyles from './styles';


const LocationSpot = ({ lat, lng, onClick}) => {
    const classes = useStyles();
    return (
        <div className={classes.markerContainer} onClick={onClick}>
            <Icon icon={mapMarker} />
        </div>

    )
}

export default LocationSpot;