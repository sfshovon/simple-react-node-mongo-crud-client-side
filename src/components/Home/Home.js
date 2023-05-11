import React from 'react';
import GetAndDeleteUser from '../CRUD/GetAndDeleteUser';
import UserInfo from '../UserInfo/UserInfo';

const Home = () => {
  const { users, handleUserDelete } = GetAndDeleteUser();

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