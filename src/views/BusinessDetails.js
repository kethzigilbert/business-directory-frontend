
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { PlacesService } from '../api';
import { useQuery } from 'react-query';
import groupOpeningHours from '../utils/group-opening-hours'
import { useMemo } from 'react';
import { Alert, CircularProgress } from '@mui/material';
const BusinessDetails = () => {
    const placeId = 'ohGSnJtMIC5nPfYRi_HTAg';
    const { isLoading, isError: isPlaceDetailsError, data: placeData = {} } = useQuery(
        ["PLACE_DETAILS", placeId],
        async () => {
            const response = await PlacesService.getPlaceDetails(placeId)
            return response?.data
        }
        ,
        {
            enabled: true,
            retry: false,
            refetchOnWindowFocus: false
        }
    );


    const { name, address, opening_hours = {} } = placeData;
    const { days = {} } = opening_hours;


    const openingTimings = useMemo(() => groupOpeningHours(days), [days])
    


    return (
        <>
        {isLoading && <div className='d-flex flex-row justify-content-center align-items-center h-100'><CircularProgress/></div>}
        {isPlaceDetailsError && <div className='d-flex flex-row justify-content-center align-items-center h-100'><Alert severity="error">Unable to retreive the Place details right now. Please try again later</Alert> </div>}
        { !isLoading && !isPlaceDetailsError && <div className="d-flex flex-row h-100 py-3 px-2 justify-content-between ">

            <Card variant="outlined" className="col-sm-12 col-md-7 me-1 col-12 col-lg-7">
                <CardContent>
                    <Typography variant="h5" style={{ fontWeight: '550' }}>
                        {name}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                        {address}
                    </Typography>
                </CardContent>

            </Card>
            <Card variant="outlined" className="col-sm-12 col-md-5 col-12 col-lg-5">
                <CardContent>
                    <Typography variant="h5" style={{ fontWeight: '550' }}>
                        Opening Hours
                    </Typography>

                    <div className='d-flex flex-column mt-5'>
                        {openingTimings?.map((each) => {
                            const { label, values = [] } = each
                            return (
                                <div className='d-flex flex-row'>
                                    <div className='col-8'>
                                        <Typography variant="body1" color="text.secondary" component="div">
                                            {label}
                                        </Typography>
                                    </div>
                                    <div className='d-flex flex-column col-4 '>
                                        {values.map((each) =>

                                            <Typography variant="body1" color="text.secondary" component="div">
                                                {each}
                                            </Typography>
                                        )

                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </CardContent>

            </Card>
        </div>}
        </>
    )
}

export default BusinessDetails