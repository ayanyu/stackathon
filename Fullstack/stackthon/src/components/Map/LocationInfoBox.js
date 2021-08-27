import useStyles from './styles';


const LocationInfoBox = ({ info }) => {
    const classes = useStyles();

    return (
        <div className={classes}>
            <h2>Clinic Info:</h2>
            <ul>
                <li>Name: <strong>{info.classname}</strong></li>
                <li>Address: <strong>{info.address}</strong></li>

            </ul>
        </div>
    )
}

export default LocationInfoBox