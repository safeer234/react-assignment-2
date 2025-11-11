import React from 'react'
import { useParams } from 'react-router-dom';
import image1 from '../images/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg'
function UsersDetails() {
    const { id } = useParams();
     const users = [
        {id: 1, name: 'John Doe', email:'john@example.com', age:20},
        {id: 2, name: 'Aizen Sosuke', email:'aizen123@example.com', age:23},
        {id: 3, name: 'Itachi Uchiha', email:'itachi@example.com', age:26},
        {id: 4, name: 'Madara Uchiha', email:'john@example.com', age:29},
        {id: 5, name: 'Killer Bean', email:'killer@example.com', age:37},
        {id: 6, name: 'Karl Johns', email:'karl@example.com', age:80},
        {id: 7, name: 'Vega Punk', email:'john@example.com', age:90},
      ];
       const user = users.find((u) => u.id === Number(id));

  if (!user) return <h1>User not found</h1>;
  return (
    <div>
      <div className='box'>
        <div className='w-20'><img src={image1} alt="" /></div>
         <h1>Name: {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Age:{user.age}</p>

      </div>
     
    </div>
  )
}

export default UsersDetails
