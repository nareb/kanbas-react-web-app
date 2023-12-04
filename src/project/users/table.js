import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";
import * as client from "./client";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ 
    username: "", 
    password: "", 
    role: "USER", 
    firstName:"",
    lastName: "",
  });

  const createUser = async () => {
  try {
    const newUser = await client.createUser(user);
    setUsers([newUser, ...users]);

  } catch (err) {
    console.log(err);
  }
  };


  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  useEffect(() => { fetchUsers(); }, []);
  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <thead> 
          <tr>
            <th>Username</th>
            <th>password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>role</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
              
            </td>
            <td>
            <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
            </td>
            <td>
              <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td>
              <BsPlusCircleFill onClick={createUser}/>
            </td>
          </tr>

        {users.map((user) => (
            <tr>
              <td>
                <Link
                  key={user._id}
                  to={`/project/users/${user._id}`}
                  className="list-group-item"
                >
                  {user.username}
                  
                </Link>
              </td>

              <td>{user.password}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.role}</td>
            </tr>   
          ))}
        </tbody>
      </table>
    </div>
  ); 
}

export default UserTable;