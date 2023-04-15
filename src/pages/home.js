import React, { useState, useEffect } from 'react';
import UserCard from '../components/user-card';
import theme from '../theme'



const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch(`https://randomuser.me/api/?results=20`)
      .then(response => response.json())
      .then(data => setUsers(data.results));
  }

  useEffect(() => {
    fetchUsers();
  }, []);


  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '80vw',
      margin: '0 auto',

      fontSize: '1.5em',
      backgroundColor: theme.BACKGROUND,
      color: theme.TEXT,
    },
  };

  return (
    <>
      <div style={styles.container}>
        {users.map(user => (
          <UserCard user={user} />
        ))}
      </div>
    </>
  )
}

export default Home