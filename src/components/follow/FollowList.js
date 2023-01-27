import React, {useState, useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { axiosInstance } from "../../apis/axios";
import FollowItem from "./FollowItem";

export default function FollowList() {
  const [age, setAge] = useState('');
  const [users, setUsers] = useState(null);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUsers(null);
        const response = await axiosInstance.get(
          `/users`
        );
        setUsers(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchUsers();
  }, []);

  // const onClickFollowList = () => {
  //   const response = axiosInstance.get(
  //     `/users`
  //   );
  //   setUsers(response.data);
  // }

  return (
    <FormControl sx={{ mb : 1, minWidth: "100%" }} size="small"
    // onClick={onClickFollowList}
    >
      <InputLabel id="demo-select-small">팔로우</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="팔로우"
        onChange={handleChange}
      >
        {users && users.map((user) => (
        <FollowItem key={user.id} name={user.name} />
      ))}
        {/* <MenuItem value=""><em>None</em></MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem> */}
      </Select>
    </FormControl>
  );
}