function User({ id, name, email, username }) {
  const pixels = "2px";
  return (
    <div style={{ border: `${pixels} solid black` }}>
      <div>{id}</div>
      <div>{name.toUpperCase()}</div>
      <div>{email}</div>
      <div>{username}</div>
    </div>
  );
}

export default User;
