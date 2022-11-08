import {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function Header( props ) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                <Box sx={style}>
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
        </header>
    )
}
