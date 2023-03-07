import React from 'react';
import { Link } from 'react-router-dom';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserInfo = ({user, handleUserDelete}) => {

  return (
    <tr>
      <td  className="w-full px-5 py-5 border-b font-bold">
        <p  className="text-2xl whitespace-no-wrap">{user.name}</p>
      </td>
      <td  className="w-full px-5 py-5 border-b font-semibold">
        <p  className="text-2xl whitespace-no-wrap">{user.email}</p>
      </td>
      <td  className="w-full px-5 py-5 border-b text-sm">
        <Link to={`/update/${user._id}`}><button> <FontAwesomeIcon className="hover:text-zinc-900" icon={faEdit}/> </button></Link>
      </td>
      <td  className="w-full px-5 py-5 border-b text-sm">
        <button onClick={() => handleUserDelete(user._id)} className="inline-block btn-sm bg-red-700 text-white px-2 py-1 rounded-full">
        
        <FontAwesomeIcon className="hover:text-zinc-900" icon={faTrash}/>   
        </button>
      </td>
    </tr>
  );
};

export default UserInfo;