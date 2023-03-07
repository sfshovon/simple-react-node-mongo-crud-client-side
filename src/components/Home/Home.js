import React, { useEffect, useState } from 'react';
import UserInfo from '../UserInfo.js/UserInfo';

const Home = () => {
  const [users,setUsers] = useState([]);

  useEffect( () => {
    fetch('http://localhost:5000/user')
    .then(res => res.json()
    .then(data => setUsers(data)))
  },[]);

  const handleUserDelete = id => {
    const proceed = window.confirm("Are you sure you want to delete this user?");
    if(proceed){
      // console.log("Deleting user with ID: ",id)
      const url = `http://localhost:5000/user/${id}`;
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

  return (
    <div className="bg-green-100 min-h-screen m-0">
      <div>
        <h1 className="py-10 text-dark text-3xl font-bold"><span className="underline"> Total Users: </span> {users.length} </h1>
      </div>
    
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table data-theme="wireframe"  className="w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 text-left text-lg font-semibold uppercase tracking-wider text-center"> Name </th>
                <th className="px-5 py-3 border-b-2 text-left text-lg font-semibold uppercase tracking-wider text-center"> Email </th>
                <th className="px-5 py-3 border-b-2 text-left text-lg font-semibold uppercase tracking-wider"> Update </th>
                <th className="px-5 py-3 border-b-2 text-left text-lg font-semibold uppercase tracking-wider"> Remove Item </th>
              </tr>
            </thead>
            <tbody>
                {
                  users.map(user => 
                    <UserInfo 
                      key={user._id} 
                      user={user} 
                      handleUserDelete={handleUserDelete}
                    />
                  )
                }
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;