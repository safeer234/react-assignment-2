
import { Link } from "react-router-dom";

function Users() {
    
  const users = [
    {id: 1, name: 'John Doe', email:'john@example.com'},
    {id: 2, name: 'Aizen Sosuke', email:'aizen123@example.com'},
    {id: 3, name: 'Itachi Uchiha', email:'itachi@example.com'},
    {id: 4, name: 'Madara Uchiha', email:'john@example.com'},
    {id: 5, name: 'Killer Bean', email:'killer@example.com'},
    {id: 6, name: 'Karl Johns', email:'karl@example.com'},
    {id: 7, name: 'Vega Punk', email:'john@example.com'},
  ];
 
  
  return (
    <div>
<div className='ml-5 mt-10'>
      <h1 className='text-5xl font-bold text-blue-600'>Users List</h1>
    </div>
    <div className='ml-5 mt-4'>
      <ul>
{users.map((user, index) =>  (
<li className="list-disc ml-5" key = {index}>{user.name} - {user.email} <Link to= {`/usersdetails/${user.id}`}><button className="mt-8 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">view</button></Link></li>
      ))}
      </ul>
      

    </div>
    
    </div>
    
  )
}

export default Users
