import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid} from '@material-ui/core'


import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
// import { getPlacesData } from './api';
// import PlaceDetails from './components/PlaceDetails/PlaceDetails'

const App = () => {
    const [places, setPlaces] = useState([]);
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        const URL = 'https://sheetlabs.com/NCOR/covidtestcentersinUS?state=NY'
        const getPlacesData = async () => {
            // setLoading(true)
            try {
                const {data} = await axios.get(URL);
                console.log('places')
                return data;
            } catch (error) {
                console.log('trying to get places data')
                console.log(error)
                // setLoading(false)
            }
        }
        getPlacesData()    
            .then((data) => {
                console.log(data);
                setPlaces(data)
            })
           }   ,[])
    return (
        <>
        <div>
            {/* { !loading ? <Map places={places} /> : <h1>Loadingggg</h1> } */}
        </div>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
            <List />
        </Grid>
        <Grid item xs={12} md={8}>
           <Map
                data={places}
                />
        </Grid>
        </Grid>
        </>
    )
}

export default App;