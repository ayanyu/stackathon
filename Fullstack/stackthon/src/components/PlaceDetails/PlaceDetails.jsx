import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'

// import LocationMarker from './Map/Map/LocationSpot'

// import PhoneIcon from '@material-ui/icons/'
import useStyles from './styles';
const PlaceDetails = ({place}) => {
    console.log('place')
    const classes = useStyles();
    return (
            <Card elevation={6}>
                <CardMedia 
                style={{ height: 350 }}
                image={'https://mpng.subpng.com/20180430/ove/kisspng-clinic-medicine-health-care-clip-art-5ae6fbb055b1d4.194597271525087152351.jpg'}
                title={place.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">{place.name}</Typography>
                    <Typography gutterBottom variant="h5">{place.address}</Typography>
                </CardContent>
            </Card>
        
    )
}

export default PlaceDetails;