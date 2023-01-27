import React from "react";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

const SearchInput = (props) => {
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <FormControl variant="outlined">
    <InputLabel htmlFor="search-input">검색</InputLabel>
    <OutlinedInput
      id='search-input'
      type='text'
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            돋
          </IconButton>
        </InputAdornment>
      }
      label="검색"
    />
  </FormControl>
  )
}

export default SearchInput