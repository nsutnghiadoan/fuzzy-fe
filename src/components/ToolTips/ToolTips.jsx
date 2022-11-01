import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {useState} from 'react';
import { TextField } from '@mui/material';


export default function ToolTips( props ) {
    const [open, setOpen] = useState(false);
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
                                onChange={props.handleChange} 
                                value={props.valueInput}
                                name={props.nameState}
                            />
                        }
                    >
                        <Button onClick={handleTooltipOpen}>{props.valueInput == '' ? props.icon  : props.valueInput}</Button>
                    </Tooltip>
                </div>
            </ClickAwayListener>
            <p className='error'>{props.error}</p>
        </div>
    )
}
