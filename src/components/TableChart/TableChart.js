import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ToolTips from '../ToolTips/ToolTips';
import Chart from '../Charts';

const rows = [
    {
        eto : 1,
        moisture : 1,
        sowing : 1,
        speed : 1,
    },
    {
        eto : 2,
        moisture : 1,
        sowing : 1,
        speed : 3,
    },
    {
        eto : 1,
        moisture : 3,
        sowing : 3,
        speed : 1,
    }
];
function TableChart() {
    let countRule = 0;
    return (
        <TableContainer component={Paper}>
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Rule</TableCell>
                        <TableCell align="center">ETO difference</TableCell>
                        <TableCell align="center">Moisture</TableCell>
                        <TableCell align="center">Development Stage</TableCell>
                        <TableCell align="center">Speed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => {
                        countRule++;
                        return (
                            <TableRow
                                key={countRule}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{countRule}</TableCell>
                                <TableCell align="right"><Chart nameChart='eto' ruleValue={row.eto} xValue={20} yValue={0.5} /></TableCell>
                                <TableCell align="right"><Chart nameChart='moisture' ruleValue={row.moisture} xValue={20} yValue={0.5} /></TableCell>
                                <TableCell align="right"><Chart nameChart='sowing' ruleValue={row.sowing} xValue={20} yValue={0.5} /></TableCell>
                                <TableCell align="right"><Chart nameChart='speed' ruleValue={row.speed} xValue={20} yValue={0.5} /></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default TableChart;