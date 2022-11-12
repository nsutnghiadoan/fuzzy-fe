import {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Chart from "../Charts";
import TableContainer from "@mui/material/TableContainer";
import * as React from "react";
import {ListRuleDefault} from "../Rule";
import {getNameRuleETO, getNameRuleMoisture, getNameRuleSowing, getNameRuleSpeed} from "../listData";
import {etoData, moistureData, sowingData, speedData} from "../Charts/GetDataChart";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


export default function Header( props ) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = useState(false);
    const [openData, setOpenData] = useState(false);
    const [value, setValue] = useState(0);
    let countRule = 0;
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleOpen = () => setOpen(true);
    const handleOpenData = () => setOpenData(true);
    const handleClose = () => setOpen(false);
    const handleCloseData = () => setOpenData(false);
    return (
        <header id='header'>
            <h1>Fuzzy Logic based Automatic Plant Watering System - Group 7</h1>
            <Button onClick={handleOpen}>See group members</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={'card_avatar'}>
                    <Card sx={{width : 'auto'}}>
                        <CardContent>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/131681329_378541606780229_7652201149218769161_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=sv2ugJ-aPjoAX-SZANH&_nc_ht=scontent.fhan2-2.fna&oh=00_AfDlXH6A-TWqZtrgkV4EI0UUfCWnLeyhhSHETqpNbB4mvg&oe=6391BB20"
                                sx={{ width: 100, height: 100 }}
                            />
                            <Typography>
                                Doan Duc Nghia - B18DCCN447
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{width : 'auto'}}>
                        <CardContent>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/281512907_1960717770782627_6225446857364546104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3oLSae7WZFEAX9x4Cq5&_nc_ht=scontent.fhan2-4.fna&oh=00_AfBaRaeci7Azl-v5C3yykhRoOzeXsI9yBZWoxk1rBNxi4Q&oe=636F193A"
                                sx={{ width: 100, height: 100 }}
                            />
                            <Typography>
                                Le Ngoc Nam - B18DCCN425
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{width : 'auto'}}>
                        <CardContent>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/151253399_1942713732551642_6908986606219520730_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=HLt-j6jpnOQAX9dar9E&tn=Awb4_HX-EXHodSwh&_nc_ht=scontent.fhan2-2.fna&oh=00_AfCArK5aAi5z0Ubu4aVxRiiqz58yonoZH2ZfPPMYKOv3NQ&oe=63919DD2"
                                sx={{ width: 100, height: 100 }}
                            />
                            <Typography>
                                Tran Viet Hieu - B18DCCN227
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Modal>
            <Button onClick={handleOpenData}>See List Rules and Membership Functions</Button>
            <Modal
                open={openData}
                onClose={handleCloseData}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="List Rules" />
                            <Tab label="Membership Functions" />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
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
                                    {ListRuleDefault.map((row) => {
                                        countRule++;
                                        return (
                                            <TableRow
                                                key={countRule}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">{countRule}</TableCell>
                                                <TableCell align="right">{getNameRuleETO(row.eto.rule)}</TableCell>
                                                <TableCell align="right">{getNameRuleMoisture(row.moisture.rule)}</TableCell>
                                                <TableCell align="right">{getNameRuleSowing(row.sowing.rule)}</TableCell>
                                                <TableCell align="right">{getNameRuleSpeed(row.speed.rule)}</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <h3>EVAPOTRANSPIRATION DIFFERENCE Membership Function</h3>
                        <Chart arrRule = {etoData} />
                        <h3>MOISTURE VALUE Membership Function</h3>
                        <Chart arrRule = {moistureData} />
                        <h3>MONTH AFTER SOWING Membership Function</h3>
                        <Chart arrRule = {sowingData} />
                        <h3>SPEED OF WATER IN VALVE Membership Function</h3>
                        <Chart arrRule = {speedData} />
                    </TabPanel>
                </Box>
            </Modal>
        </header>
    )
}
