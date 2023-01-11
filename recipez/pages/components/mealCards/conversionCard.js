import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import conversionChart from '../../../images/conversionChart.png'
import Box from '@mui/material/Box';


function createData(name, tablespoons, teaspoons, milliliters, ) {
  return { name, tablespoons: tablespoons, teaspoons: teaspoons, milliliters: milliliters };
}

const rows = [
  createData('1/16 Cup', '1 tbsp', '3 tsp','15 ml'),
  createData('1/8 Cup', '2 tbsp', '6 tsp','30 ml'),
  createData('1/4 Cup', '4 tbsp', '12 tsp','60 ml'),
  createData('1/3 Cup', '5 1/3 tbsp', '16 tsp','80ml'),
  createData('1/2 Cup', '8 tbsp', '24 tsp','120 ml'),
  createData('2/3 Cup', '10 2/3 tbsp', '32 tsp','160 ml'),
  createData('3/4 Cup', '12 tbsp', '36 tsp','180 ml'),
  createData('1 Cup', '16 tbsp', '48 tsp','240 ml'),
];

export default function ConversionTable() {
  return (<>
  <Box sx={{textAlign:'center'}}>    
    <img src={conversionChart.src} style={{width: '400px'}}/>    
  </Box>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell>Cups</TableCell>
            <TableCell align="right">Tablespoons</TableCell>
            <TableCell align="right">Teaspoons</TableCell>
            <TableCell align="right">Milliliters(g)</TableCell>           
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
            <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                {row.name}
                </TableCell>
                <TableCell align="right">{row.tablespoons}</TableCell>
                <TableCell align="right">{row.teaspoons}</TableCell>
                <TableCell align="right">{row.milliliters}</TableCell>              
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    
  
  </>
  );
}