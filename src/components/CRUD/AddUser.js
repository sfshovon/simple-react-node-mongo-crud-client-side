import React from 'react';

const AddUser = () => {
  const handleAddUser = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = {name, email};

    // send data to the server
    fetch('https://simple-react-node-mongo-crud-server-side.vercel.app/user', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
        console.log('success', data);
        alert('User Added Successfully!!!');
        e.target.reset();
    })
}
  return (
    <div className="bg-green-100">
    <form onSubmit={handleAddUser} className="min-h-screen flex items-center">
      <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
        <div className="py-5 text-2xl font-bold text-dark bg-sky-200 text-center px-5 md:px-10">
          <h1 className="animate-pulse">Add User</h1>
        </div>
        <div className="py-12 p-10 bg-white rounded-xl">
          <div className="mb-6">
            <h1 className="text-start mr-4 text-gray-700 font-bold mb-2">Name</h1>
            <input type="text" name="name" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Enter your name" required/>
          </div>
          <div>
            <h1 className="text-start mr-4 text-gray-700 font-bold mb-2">Email</h1>
            <input type="email" name="email" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your @email" required/>
          </div>
          <button type="submit" className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300">ADD USER</button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default AddUser;