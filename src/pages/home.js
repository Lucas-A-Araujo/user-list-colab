
const Home = () => {
  
    const fetchUsers = () => {
      fetch(`https://randomuser.me/api/`)
        .then(response => response.json())
        .then(data => console.log(data.results));
    }
  
    return (
      <>
        <button onClick={fetchUsers}>Search</button>
    </>
  )
}

export default Home