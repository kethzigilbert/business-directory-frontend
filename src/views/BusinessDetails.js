
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const BusinessDetails = ()=>{
    const openingTimings = [{
        label : 'Monday',
        values : ['Closed']
    },
    {
        label : 'Tuesday-Friday',
        values : ['18:00-21:00','19:00-21:00']
    }
    ]
    return(
        <div className="d-flex flex-row h-100 py-3 px-2 justify-content-between ">
           
 <Card variant="outlined" className="col-sm-12 col-md-7 me-1 col-12 col-lg-7">
<CardContent>
       <Typography variant="h5" style={{fontWeight:'550'}}>
        Le Cafe du Marche
      </Typography>
      <Typography  color="text.secondary" gutterBottom>
       Rue de Conthey, lerchenstrasse 23
      </Typography>
    </CardContent>
    
    </Card>
    <Card variant="outlined" className="col-sm-12 col-md-5 col-12 col-lg-5">
<CardContent>
<Typography variant="h5" style={{fontWeight:'550'}}>
        Opening Hours
      </Typography>
     
      <div className='d-flex flex-column mt-5'>
      {openingTimings?.map((each)=>{
         const {label ,values =[]} = each
        return(
            <div className='d-flex flex-row'>
                <div className='col-8'>
                 <Typography variant="body1"   color="text.secondary" component="div">
                      {label}
                 </Typography>
                 </div>
                 <div className='d-flex flex-column col-4 '>
                 {values.map((each)=>
                    
      <Typography variant="body1"  color="text.secondary"  component="div">
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
        </div>
   )
}

export default BusinessDetails