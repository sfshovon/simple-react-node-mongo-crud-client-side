import { useEffect, useState } from 'react';

const GetAndDeleteUser = () => {
  const [users,setUsers] = useState([]);
  useEffect( () => {
    fetch('https://simple-react-node-mongo-crud-server-side.vercel.app/user')
    .then(res => res.json()
    .then(data => setUsers(data)))
  },[]);
  const handleUserDelete = id => {
    const proceed = window.confirm("Are you sure you want to delete this user?");
    if(proceed){
      // console.log("Deleting user with ID: ",id)
      const url = `https://simple-react-node-mongo-crud-server-side.vercel.app/user/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          // console.log("Data Has Been Deleted");
          const remainingUsers = users.filter(user => user._id !== id)
          setUsers(remainingUsers);
        }
      })
    }
  }
  return { users, handleUserDelete }
};

export default GetAndDeleteUser;