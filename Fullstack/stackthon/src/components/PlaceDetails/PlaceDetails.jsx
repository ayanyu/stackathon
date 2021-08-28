import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'

// import LocationMarker from './Map/Map/LocationSpot'

// import PhoneIcon from '@material-ui/icons/'
import useStyles from './styles';
const PlaceDetails = ({places}) => {
    console.log('place')
    const classes = useStyles();
    return (
            <Card elevation={6}>
                <CardMedia 
                style={{ height: 350 }}
                image={'https://cdn1.vectorstock.com/i/1000x1000/38/25/cartoon-hospital-building-emergency-clinic-vector-24613825.jpg'}
                title={places.centername}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" className={classes.color}>Name: {places.centername}</Typography>
                    <Typography gutterBottom variant="h6">{places.address}</Typography>
                    <Typography gutterBottom variant="h6">{places.city}</Typography>
                    <Typography gutterBottom variant="h6">{places.state}</Typography>
                    <Typography gutterBottom variant="h6">{places.url}</Typography>


                </CardContent>
            </Card>
        
    )
}

export default PlaceDetails;