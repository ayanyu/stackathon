import React, {useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import PlaceDetails from "../PlaceDetails/PlaceDetails"

import useStyles from './styles';

const List = ({data}) => {
    const classes = useStyles();
    const [type, setType] =useState('clinic')

    // const places = [
    //     {name: 'clinic 1' , image: 'https://mpng.subpng.com/20180430/ove/kisspng-clinic-medicine-health-care-clip-art-5ae6fbb055b1d4.194597271525087152351.jpg', address:'ssss', lat: "40.88464", lng: "-73.783813"},
    //     {name: 'clinic 1'},
    //     {name: 'clinic 1'},
    //     {name: 'clinic 1'},
    //     {name: 'clinic 1'},
    //     {name: 'clinic 1'},
    //     {name: 'clinic 1'}
    // ]

    return (
            <div className={classes.container}>
            <Typography variant="h4"> Clinics and Hospitals for PCR Covid Testing</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="clinics">Clinics</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {data?.map((places, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails places={places} />
                    </Grid>
                ))}
            </Grid>
            </div>
        
    )
}

export default List;