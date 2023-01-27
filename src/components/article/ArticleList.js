import React, { useEffect, useState } from "react";
// import axios from "axios";
import { axiosInstance } from "../../apis/axios";
import Article from "./Article";

const ArticleList = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    <>
      {users.map((user) => (
        <Article key={user.id} name={user.name} />
      ))}
    </>
  );
};

export default ArticleList;
