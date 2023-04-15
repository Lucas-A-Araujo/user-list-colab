import React, { useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch(`https://randomuser.me/api/?results=20`)
      .then(response => response.json())
      .then(data => setUsers(data.results));
  }

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '80vw',
      margin: '0 auto',
    },
    cardHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: '100%',
    },
    avatar: {
      width: '20vw',
      height: '10vh',
      borderRadius: '50%',
      marginRight: '20',
    },
  };

  return (
    <>
      <button onClick={fetchUsers}>Search</button>
      <div style={styles.container}>
        {users.map(user => (
          <div style={styles.cardContent} key={user.email}>
            <div style={styles.cardHeader}>
              <img style={styles.avatar} src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
              <p>
                {user.name.first} {user.name.last}
              </p>
            </div>
            <div>
              <p>personal info</p>
              <p>
                Username: {user.login.username}<br/>
                E-mail: {user.email}<br/>
                Age: {user.dob.age}<br/>
                Phone: {user.phone}<br/>
                Cell: {user.cell}
              </p>
            </div>
            <div>
              <p>Location</p>
              <p>
                Address: {user.location.street.name}, N° {user.location.street.number}<br/>
                Location: {user.location.city}, {user.location.state}, {user.location.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home