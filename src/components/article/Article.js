import React, { useState } from "react";
import { Box } from "@mui/material";

import CreateComment from "./CreateComment";
import CommentList from "./CommentList";

const Article = ({name}) => {

  const[like, setLike] = useState(false)

  const ClickHeart = (e) => {
    setLike(!like)
  }

  return (
    <>
      <Box
        sx={{
          background: "#FADCE4",
          padding: "30px",
          marginTop: "6%",
          borderRadius: "8px"
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
                  src="img/bombom.png"
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
                  {/* User */}
                  {name}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <p style={{ fontSize: "20px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas eligendi architecto mollitia nisi esse maxime
                  assumenda ex. Id provident, inventore esse tempore accusamus,
                  illum, necessitatibus non voluptatibus doloribus enim nemo.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={like?"img/heart.png":"img/heart_empty.png"}
                  alt="heart"
                  style={{ width: "40px", float: "left" }}
                  onClick={ClickHeart}
                ></img>
                <p style={{ fontFamily: "pretendard-light", float: "right" }}>
                  2022.12.25 11:54:25
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <hr />

        <CreateComment />
        <CommentList />
      </Box>
    </>
  );
};

export default Article;
