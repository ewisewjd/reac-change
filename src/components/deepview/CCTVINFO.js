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
  Typography
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
    
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
    
      <Table>
          
            <TableBody>

                  <TableCell>
                    {data.ml_case_name}
                  </TableCell>
                  <TableCell>
                    {data.ml_case_count}
                  </TableCell>
                  <TableCell>
                    {data.ml_case_region_uuid}
                  </TableCell>
                
            </TableBody>
          </Table>
    </Box>
  </Card>
);



