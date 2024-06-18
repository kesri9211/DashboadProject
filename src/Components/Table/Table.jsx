import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'
function createData(title, views, watchtime, subscribers) {
  return { title, views, watchtime, subscribers};
}

const rows = [
  createData('Doubt Session', 1590, 16.0, 24),
  createData('MCA in VIT', 1370, 9.0, 7),
  createData('VIT Choose or Drop', 2262, 16.0, 24),
  createData('NCC Trakking 1', 705, 13.7, 6),
];

const makeStyle=(subscribers)=>{
    if(subscribers > 20)
    {
      return {
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
      }
    }
    else if(subscribers < 10)
    {
      return{
        background: '#ffadad8f',
        color: 'red',
      }
    }
    else{
      return{
        background: '#59bfff',
        color: 'white',
      }
    }
  }

export default function BasicTable() {
  return (
    <div className='Table'>
    <h3>Recent Table</h3>
    <TableContainer component={Paper}
    style={{boxShadow:'0px 13px 20px 0px #80808029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Video Title</TableCell>
            <TableCell align="left">Views</TableCell>
            <TableCell align="left">Watch Time&nbsp;(H)</TableCell>
            <TableCell align="left">Subscribers</TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">{row.views}</TableCell>
              <TableCell align="left">{row.watchtime}</TableCell>
              <TableCell align="left">
                    <span className="subscribers" style={makeStyle(row.subscribers)}>{row.subscribers}</span>
                  </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
