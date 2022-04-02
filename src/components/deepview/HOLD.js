import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography,Button } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import {videopause as Video} from './react-player.js';

export const HOLD = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            HOLD
          </Typography>

        </Grid>
        
      </Grid>
        <Grid item>
          
        </Grid>
    </CardContent>
  </Card>
);
