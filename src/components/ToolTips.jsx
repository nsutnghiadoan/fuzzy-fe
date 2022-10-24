import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { WiHumidity } from "react-icons/wi";

export default function ToolTips( props ) {
    const [open, setOpen] = useState(false);
    const handleTooltipOpen = () => {
        setOpen(!open);
    };
    const [age, setAge] = useState('');
    const handleTooltipClose = () => {
        setOpen(false);
    };
    const labelState = props.listData.index;
    console.log(props.parentState);
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
                        <>
                            <InputLabel id="demo-simple-select-label">Humidity</InputLabel>
                            <Select
                            value={age}
                            onChange={(event)=>{
                                console.log(props.listData.index);
                                setAge(event.target.value);
                                props.setListParam();
                            }}
                            displayEmpty
                            label='radiation'
                            defaultValue='hi'
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                            {props.listData.data.map((value, index)=>{
                                return (
                                    <MenuItem key={index} value={value}>{value}</MenuItem>
                                )
                            })}
                            </Select>
                        </>
                        }
                    >
                        <Button onClick={handleTooltipOpen}>{age == '' ? props.icon  : age}</Button>
                    </Tooltip>
                </div>
            </ClickAwayListener>
        </div>
    )
}
