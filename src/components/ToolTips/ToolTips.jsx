import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {useState} from 'react';
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
        <div className='tooltips_item'>
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
                                label={props.nameState + " "+ props.requiredTitle} 
                                variant={'outlined'}
                                color={'secondary'}
                                onChange={(event)=>{
                                    props.parentState[props.nameState] = event.target.value;
                                    setValueState(event.target.value);
                                    CheckError(event.target.value , props.nameState , setError, props.requiredTitle);
                                }} 
                                onBlur={(e)=> CheckError(e.target.value , props.nameState , setError, props.requiredTitle)}
                                value={valueState}
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
