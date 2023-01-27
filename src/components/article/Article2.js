import React from "react";
import { Box, TextField, Button } from "@mui/material";

const Article = () => {
  return (
    <>
      <Box
        sx={{
          background: "#8D776C",
          padding: "30px",
          marginTop: "6%",
          borderRadius: "8px",
          color: "white" 
        }}
      >
        <table>
          <colgroup>
            <col style={{ width: "20%", marginRight: "1%" }} />
            <col style={{ width: "80%" }} />
          </colgroup>
          <tbody>
            <tr>
              <td rowSpan={3}>
                <img
                  src="img/bamong.png"
                  style={{
                    margin: "5px",
                    width: "150px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  alt="minimi"
                />
              </td>
              <td>
                <span style={{ fontSize: "18px"}}>
                  User
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <p style={{ fontSize: "20px"}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas eligendi architecto mollitia nisi esse maxime
                  assumenda ex. Id provident, inventore esse tempore accusamus,
                  illum, necessitatibus non voluptatibus doloribus enim nemo.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p style={{ textAlign: "right", fontFamily: "pretendard-light"  }}>2022.12.25 11:54:25</p>
              </td>
            </tr>
          </tbody>
        </table>

        <hr />

        <TextField 
          style={{ width: "90%", marginRight: "1%", background: "white" }}
          size="small"
          placeholder="댓글을 입력하세요"  />
        <Button variant="outlined" style={{ width: "8%", fontFamily: 'pretendard-medium' }} >등록</Button>

        <table style={{ marginTop: "20px" }}>
          <colgroup>
            <col style={{ width: "15%" }} />
            <col style={{ width: "70%" }} />
            <col style={{ width: "8%"}} />
          </colgroup>
          <tbody>
            <tr>
              <td>nickname</td>
              <td>댓글내용</td>
              <td>
                <a href="#!" style={{color: "blue",  textAlign: "right", marginRight: "10px", fontFamily: 'pretendard-light'  }}>수정</a>
                <a href="#!" style={{color: "red",  textAlign: "right", marginRight: "5px", fontFamily: 'pretendard-light' }}>삭제</a>
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
    </>
  );
};

export default Article;
