import React from "react";
import { TextField, Button } from "@mui/material";

const CreateComment = () => {
  return (
    <>
      <TextField
        style={{ width: "90%", marginRight: "1%", background: "white" }}
        size="small"
        placeholder="댓글을 입력하세요"
      />
      <Button
        variant="outlined"
        style={{
          width: "8%",
          fontFamily: "pretendard-medium",
          height: "40px",
        }}
      >
        등록
      </Button>
    </>
  );
};

export default CreateComment;