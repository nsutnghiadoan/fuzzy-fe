import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { WiHumidity } from "react-icons/wi";
import { TextField } from '@mui/material';
import { CheckError } from './CheckError';



export default function ToolTips( props ) {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('');
    const handleTooltipOpen = () => {
        setOpen(!open);
    };
    const [valueState, setValueState] = useState(0);
    const handleTooltipClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <ClickAwayListener onClickAway={handleTooltipClose}>
                <div>
                    <Tooltip
                        PopperProps={{
                            disablePortal: true,
                        }}
                        onClose={handleTooltipClose}
                        open={open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        placement="top-start"
                        title={
                            <TextField 
                                id={`input_${props.nameState}`} 
                                label={props.nameState} 
                                variant={'outlined'}
                                color={'secondary'}
                                onChange={(event)=>{
                                    props.parentState[props.nameState] = event.target.value;
                                    setValueState(event.target.value);
                                    CheckError(event.target.value , props.nameState , setError);
                                }} 
                                onBlur={(e)=> CheckError(e.target.value , props.nameState , setError)}
                            />
                        }
                    >
                        <Button onClick={handleTooltipOpen}>{valueState == '' ? props.icon  : valueState}</Button>
                    </Tooltip>
                </div>
            </ClickAwayListener>
            <p className='error'>{error}</p>
        </div>
    )
}
