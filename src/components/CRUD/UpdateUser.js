import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
  const {id} = useParams();
  const [user, setUser] = useState({});

  useEffect( () => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setUser(data))
  },[]);

  const handleUpdateUser = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const updatedUser = {name, email};

    // send data to the server
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data =>{
        console.log('success', data);
        alert('User Updated Successfully!!!');
        e.target.reset();
    })
}

  return (
    <div className="bg-green-100">
    <form onSubmit={handleUpdateUser} className="min-h-screen flex items-center">
      <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
        <div className="py-5 text-2xl font-bold text-dark bg-sky-200 text-center px-5 md:px-10">
          <h1>Update User Information</h1>
          <h1 className="text-xl">User: <span className="underline text-teal-600 font-semibold animate-pulse">{user.name}</span></h1>
        </div>
            
        <div className="py-12 p-10 bg-white rounded-xl">
          <div className="mb-6">
            <h1 className="text-start mr-4 text-gray-700 font-bold mb-2">Name</h1>
            <input type="text" name="name" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder={user.name} required/>
          </div>
          <div>
            <h1 className="text-start mr-4 text-gray-700 font-bold mb-2">Email</h1>
            <input type="email" name="email" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder={user.email} required/>
          </div>
          <button type="submit" className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300">UPDATE USER</button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default UpdateUser;