import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Avatar,
  Button,
  Box,
  Card,
  CardHeader,
  Divider,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  CardContent
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const data=() =>[
  {
    ml_case_name:'12345',
    ml_case_count:'12345',
    ml_case_region_uuid:'12345'


}]

export const CCTVINFO = (props) => (
  
  <Card {...props}>
    <CardHeader
      title="CCTVINFO"
    />
    <Divider />
     <CardContent>
    <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        
      </Box>
    
      <Typography>
      {data.ml_case_name}
      </Typography>
      <Typography>
      {data.ml_case_count}
      </Typography>
      <Typography>
      {data.ml_case_region_uuid}
      </Typography>
    </CardContent>
   
    
  </Card>
);



