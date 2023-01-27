import React from "react";
import {Box, Button, Fade, FormControl, InputLabel, MenuItem, Popper, Select, TextField} from '@mui/material'
import moment from "moment";
// import {IconButton} from '@mui/material'
// import CloseIcon from '@mui/icons-material/Close';

export default function CreateSchedule(props) {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
      setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;


    const [type, setType] = React.useState('휴가');

    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
      <div style={{position: "absolute", right: "32px"}}>
        <button aria-describedby={id} type="button" onClick={handleClick}>
          일정 등록
        </button>
        <Popper id={id} open={open} anchorEl={anchorEl} elevation={3} transition placement="bottom-end"
            sx={{zIndex: 5}}
        >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Box sx={{
                    position: "relative",
                    backgroundColor: "white",
                    padding: "12px",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start"
                }}>
                    <div style={{marginTop: 0, marginBottom: "20px"}}>
                        <span style={{marginLeft: "50px"}}>새로운 일정 등록</span>
                        <Button variant="outlined" size="small" onClick={handleClick}
                        sx={{
                            marginLeft: "30px",
                            minWidth: "30px"
                        }}>×</Button>
                    </div>

                    <FormControl sx={{ m: 1, minWidth: 120, margin: 0, marginBottom: "15px" }} size="small">
                      <InputLabel id="demo-simple-select-label">일정 종류</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label="일정 종류"
                        onChange={handleChange}
                      >
                        <MenuItem value={"휴가"}>휴가</MenuItem>
                        <MenuItem value={"공가"}>공가</MenuItem>
                        <MenuItem value={"출장"}>출장</MenuItem>
                        <MenuItem value={"교육"}>교육</MenuItem>
                        <MenuItem value={"기타"}>기타</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      id="outlined-textarea"
                      label="일정 제목"
                      placeholder="일정"
                      multiline
                      sx={{
                        marginBottom: "15px"
                      }}
                    />
                    <TextField
                        id="datetime-start"
                        label="일정 시작 일시"
                        type="datetime-local"
                        defaultValue={moment().format('yyyy-MM-DDTHH:mm')}
                        InputLabelProps={{shrink: true}}
                        sx={{
                            marginBottom: "15px"
                        }}
                    />
                    <TextField
                        id="datetime-end"
                        label="일정 종료 일시"
                        type="datetime-local"
                        defaultValue={moment().add(1, 'hours').format('yyyy-MM-DDTHH:mm')}
                        InputLabelProps={{shrink: true}}
                        sx={{
                            marginBottom: "15px"
                        }}
                    />
                    <Button variant="contained"
                        sx={{
                            marginLeft: "auto"
                        }}>
                        등록
                    </Button>
                </Box>
              </Fade>
            )}
        </Popper>
      </div>
    );
}