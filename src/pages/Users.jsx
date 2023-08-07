import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  const { id } = useParams();

  const [user, setUser] = useState({});

  async function getUser() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(data);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Link to="/">Go Back</Link>
      <h1>{id}</h1>
      <div>{user.id}</div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.username}</div>
    </div>
  );
}

export default Users;
