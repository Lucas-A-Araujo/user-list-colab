import React, { useState, useEffect } from 'react'
import UserCard from '../components/user-card'
import theme from '../theme'

const baseUrl = 'https://randomuser.me/api/'

const Home = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)


  const fetchUsers = () => {
    fetch(`${baseUrl}?results=20`)
      .then(response => response.json())
      .then(data => setUsers(data.results))
  }

  const handleContentLoad = () => {
    if (!isLoading) {
      setIsLoading(true)

      fetch(`${baseUrl}?results=20&page=${page}`)
        .then(response => response.json())
        .then(data => {
          setUsers(currentContent => [...currentContent, ...data.results])
          setIsLoading(false)
          setPage(currentPage => currentPage + 1)
        })
    }
  }

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !isLoading
    ) {
      handleContentLoad()
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  useEffect(() => {

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isLoading])


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
  }

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