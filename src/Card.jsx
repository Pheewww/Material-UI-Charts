import {Box}  from '@mui/material';
import Card from '@mui/material/Card';


import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';
import './Card.css'

export default function MediaControlCard() {
  return ( 
    <Box display="flex" flexDirection="row"  >
        {/*class='full'*/}
      <Box width="33.33%">
        <Card sx={{ display: 'flex' , flexDirection:'row', width: '100%' }}>
          {/* First Div */}
          <Box sx={{ flex: '1' }}>
            <CardContent>
              <Typography component="div" color="text.secondary" variant="h7" textAlign='left' >
                Watch Time
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div" textAlign='left' >
                  <h5>10+ <span className="bold-and-colored">Watched</span></h5> Last Month
              </Typography>
               
            </CardContent>
          </Box>

          {/* Second Div */}
           <Box className="box">
  <Icon
    sx={{
      position: 'absolute',
      top: '50%',
      right: 10,
     
      
      color: 'red',
    }}
    icon="fluent-emoji-high-contrast:television"
  />
</Box>
        </Card>
      </Box>

      <Box width="33.33%">
        <Card sx={{ display: 'flex' , flexDirection:'row', width: '100%' }}>
          {/* First Div */}
          <Box sx={{ flex: '1' }}>
            <CardContent>
              <Typography component="div" color="text.secondary" variant="h7" textAlign='left' >
                Watch Time
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div" textAlign='left' >
                  <h5>10+ <span className="bold-and-colored">Watched</span></h5> Last Month
              </Typography>
               
            </CardContent>
          </Box>

          {/* Second Div */}
          <Box className="box">
  <Icon
    sx={{
      position: 'absolute',
      top: '50%',
      right: 10,
     
      
      color: 'red',
    }}
    icon="fluent-emoji-high-contrast:television"
  />
</Box>
        </Card>
      </Box>

      <Box width="33.33%">
        <Card sx={{ display: 'flex' , flexDirection:'row', width: '100%' }}>
          {/* First Div */}
          <Box sx={{ flex: '1' }}>
            <CardContent>
              <Typography component="div" color="text.secondary" variant="h7" textAlign='left' >
                Watch Time
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div" textAlign='left' >
                  <h5>10+ <span className="bold-and-colored">Watched</span></h5> Last Month
              </Typography>
               
            </CardContent>
          </Box>

          {/* Second Div */}
         <Box className="box">
  <Icon
    sx={{
      position: 'absolute',
      top: '50%',
      right: 10,
     
      
      color: 'red',
    }}
    icon="fluent-emoji-high-contrast:television"
  />
</Box>

        </Card>
      </Box>
    </Box>
  );
}
