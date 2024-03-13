import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

export const TableSearch = ({ paginateParams, onSearchChange }) => {
    return (
        <>

            <TextField
                size='small'
                id="input-with-icon-textfield"
                label={`Search user by ${paginateParams.columns?.substring(0, 10)}...`}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
                onChange={(e) => onSearchChange(e.target.value)}
            />

        </>
    )
}
