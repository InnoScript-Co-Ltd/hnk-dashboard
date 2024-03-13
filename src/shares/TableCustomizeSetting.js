

import React, { useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Close } from '@mui/icons-material';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';
import { MenuProps, Transition } from '../constants/config';

export const TableCustomizeSetting = ({payload, setColumns}) => {

    const [open, setOpen] = useState(false);

    const [columnName, setColumnName] = useState(payload.columns.map(column => {
        return column.id
    }).slice(0, 4));

    useEffect(() => {
        if (columnName.length) {
            const filteredColumns = payload.columns.filter(column => {
                return columnName.includes(column.id);
            });
            setColumns(filteredColumns);
        }
    }, [columnName]);


    // console.log(columns);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // console.log(userPayload.columns.filter(column => columnName.some(check => check === column.id)));

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setColumnName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    return (

        <>

            <Button size='small' onClick={handleClickOpen}>
                <MoreVertIcon />
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle sx={{
                    minWidth: '400px'
                }}>
                    <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <span>
                            Customize table setting
                        </span>
                        <Button onClick={handleClose}>
                            <Close color='error' />
                        </Button>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <FormControl size='small' sx={{ width: 100 }}>
                            <InputLabel id="columns">
                                Columns
                            </InputLabel>
                            <Select
                                // open={true}
                                labelId="columns"
                                id="columns"
                                multiple
                                value={columnName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Equip" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            // IconComponent={null}
                            >
                                {payload.columns.map((column) => {
                                    return (
                                        <MenuItem
                                            key={column.id}
                                            value={column.id}
                                        >
                                            <Checkbox checked={columnName.indexOf(column.id) > -1} />
                                            <ListItemText primary={column.label} />
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>

        </>

    )
}
