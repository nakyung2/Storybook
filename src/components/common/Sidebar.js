import React, { useState } from "react";
import { Avatar, TextField, Button } from "@mui/material";

import "./Sidebar.css";
import FollowList from "../follow/FollowList";
import FollowingList from "../follow/FollowingList";


// 사이드바 intro update 완료하기
const Sidebar = () => {
  let nowIntro =
    "안녕하세요~~ \n 디지털공통부 이지금입니다^0^ \n\n 저를 팔로우하시면 다양항 디지털공통부 소식을 확인하실 수 있어요 \n\n 서로 소통해요~^0^";
  const [introUpdate, setIntroUpdate] = useState(false);
  const [intro, setIntro] = useState(nowIntro);
  const [Follow, setFollow] = useState(false);

  const ChangeIntro = () => {
    nowIntro=intro
    setIntro(nowIntro)
    setIntroUpdate(!introUpdate)
  }

  return (
    <div className="sidebar">
      {/* <div className="sidebar-logo">WooriZip!</div> */}
      <div className="sidebar-minimi">
        <Avatar
          src="img/wibee2.png"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "container",
            boxShadow: "0 3px 5px #ccc",
          }}
        />
      </div>

      <div className="sidebar-info" style={{ fontFamily: "pretendard-light" }}>
        <table>
          <tbody>
            <tr>
              <td>Today</td>

              <td style={{ color: "tomato" }}>87</td>

              <td>|</td>
              <td>Total</td>
              <td>999+</td>
            </tr>

            <tr>
              <td></td>
            </tr>
            <tr>
              {/* <td colSpan={5}><hr color="lightgrey" style={{height: '1px'}}/></td> */}
            </tr>
            <tr />
            <tr>
              <td>팔로우</td>
              <td>102</td>
            </tr>
            <tr>
              <td colSpan={5}>
                <FollowList />
              </td>
            </tr>
            <tr>
              <td>팔로워</td>
              <td>223</td>
            </tr>
            <tr>
              <td colSpan={5}>
                <FollowingList />
              </td>
            </tr>
            <tr style={{ height: "10px", p: 0 }}>
              <td colSpan={5}>
                {Follow ? (
                  <Button
                    variant="outlined"
                    style={{ width: "100%" }}
                    onClick={() => setFollow(!Follow)}
                  >
                    팔로잉
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    style={{
                      width: "100%"
                    }}
                    onClick={() => setFollow(!Follow)}
                  >
                    팔로우
                  </Button>
                )}
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <div className="sidebar-myself">
        <div className="sidebar-myself-text">
          <div>
            {!introUpdate ? (
              nowIntro
            ) : (
              <TextField
                id="outlined-multiline-static"
                multiline
                fullWidth
                rows={10}
                style={{ width: "90%", marginRight: "1%", background: "white" }}
                size="small"
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
              />
            )}
          </div>
          <div style={{ float: "right", paddingRight: "5px" }}>
            {!introUpdate ? (
              <img
                src="img/pencil.png"
                alt="updateIntro"
                style={{ width: "15px" }}
                onClick={() => setIntroUpdate(!introUpdate)}
              />
            ) : (
              <div>
                <a
                  href="#!"
                  style={{
                    color: "blue",
                    fontFamily: "pretendard-light",
                  }}
                  onClick={ChangeIntro}
                >
                  수정
                </a>
                <a
                  href="#!"
                  style={{
                    color: "red",
                    fontFamily: "pretendard-light",
                  }}
                  onClick={ChangeIntro}
                >
                  삭제
                </a>
              </div>
            )}

            {/* 완료/ 취소 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
