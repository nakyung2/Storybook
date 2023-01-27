import React, { useState } from "react";
import { Box, TextField, Avatar, Button } from "@mui/material";
// import axios from "axios";

const CreateArticle = () => {
  const [article, setArticle] = useState("");

  const Article = (e) => {
    setArticle(e.target.value);
  };

  const CreateArticleButtonClick = (e) => {
    e.preventDefault();
    if (article === "") {
      alert("입력없음");
    } else {
      setArticle(article);
      alert(article);

      setArticle("");
      console.log("article = ", article);

    }
  };

  return (
    <Box sx={{ background: "white" }}>
      <table>
        <tbody>
          <tr>
            <td>
              <Avatar src="img/wibee1.png" sx={{ margin: "10px" }} />
            </td>
            <td>User</td>
          </tr>
        </tbody>
      </table>
      <TextField
        id="outlined-multiline-static"
        multiline
        fullWidth
        rows={4}
        onChange={Article}
        value={article}
        placeholder="방명록을 작성해주세요"
      />

      <p style={{ textAlign: "right", marginTop: "6px" }}>
        <Button
          onClick={CreateArticleButtonClick}
          variant="outlined"
          style={{ width: "13%", fontFamily: "pretendard-medium" }}
        >
          등록
        </Button>
      </p>
    </Box>
  );
};

export default CreateArticle;
