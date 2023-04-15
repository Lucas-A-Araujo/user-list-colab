import React, { useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
  
    const fetchUsers = () => {
      fetch(`https://randomuser.me/api/?results=20`)
        .then(response => response.json())
        .then(data => setUsers(data.results));
    }
  
    return (
      <>
        <button onClick={fetchUsers}>Search</button>
        {users.map(user => (
          <div key={user.email}>
            <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
            <div>
                <p>personal info</p>
              <div>
                Name: {user.name.first} {user.name.last}
              </div>
              <div>
                E-mail: {user.email}
              </div>
              <div>
                Username: {user.login.username}
              </div>
              <div>
                Age: {user.dob.age}
              </div>
              <div>
                Phone: {user.phone}
              </div>
              <div>
                Call: {user.cell}
              </div>
              <p>Location</p>
              <div>
                Address: {user.location.street.name}, N° {user.location.street.number}
              </div>
              <div>
                Location: {user.location.city}, {user.location.state}, {user.location.country}
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default Home