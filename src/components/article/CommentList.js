import React, {useState, useEffect} from "react";
import { axiosInstance } from "../../apis/axios";
import { TextField } from "@mui/material";

const CommentList = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [update, setUpdate] = useState(false);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);

        setLoading(true);

        const response = await axiosInstance.get(
          `/users`
        );
        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);
  
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  return (
    <table style={{ borderSpacing: "0 10px" }}>
      <colgroup>
        <col style={{ width: "15%" }} />
        <col style={{ width: "70%" }} />
        <col style={{ width: "8%" }} />
      </colgroup>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
          <td>{user.name}</td>
          <td>
            {!update ? 
            (user.email) :
            (<TextField
        style={{ width: "90%", marginRight: "1%", background: "white" }}
        size="small"
        placeholder="댓글을 입력하세요"
        rows={4}
      />)
            }
            </td>
          <td>
            <a
              href="#!"
              style={{
                color: "blue",
                textAlign: "right",
                marginRight: "10px",
                fontFamily: "pretendard-light",
              }}
              onClick= {() => setUpdate(!update)}
            >
              수정
            </a>
            <a
              href="#!"
              style={{
                color: "red",
                textAlign: "right",
                marginRight: "5px",
                fontFamily: "pretendard-light",
              }}
            >
              삭제
            </a>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
  );
};
export default CommentList;
