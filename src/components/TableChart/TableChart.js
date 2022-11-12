import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chart from '../Charts';

function TableChart( props ) {
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
                    {props.rules.map((row) => {
                        countRule++;
                        return (
                            <TableRow
                                key={countRule}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{countRule}</TableCell>
                                <TableCell align="right"><Chart nameChart='eto' ruleValue={row.eto.rule} xValue={row.eto.input} yValue={row.eto.value} /></TableCell>
                                <TableCell align="right"><Chart nameChart='moisture' ruleValue={row.moisture.rule} xValue={row.moisture.input} yValue={row.moisture.value} /></TableCell>
                                <TableCell align="right"><Chart nameChart='sowing' ruleValue={row.sowing.rule} xValue={row.sowing.input} yValue={row.sowing.value} /></TableCell>
                                <TableCell align="right"><Chart nameChart='speed' ruleValue={row.speed.rule} yValue={row.speed.input} xValue={row.speed.valuey} xValue1={row.speed.valuex} /></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default TableChart;