import { useState, useEffect } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import axios from 'axios'

function App() {

  const [isLogged, setIsLogged] = useState(false)

  const [heroes, setHeroes] = useState([])
  const [characters, setCharacters] = useState([{}])

  
  useEffect(() => {

    const getAPI = async () => {

      try {
        const key = 7190499717634398
        const url = `https://superheroapi.com/api/${key}/search/${heroes}`
        const res = await axios(url)
        setCharacters(res.data.results)

      } catch (error) {
        console.log(error)
      }
      
    }
   
    getAPI()

  }, [heroes])

  

  return (
    <>

  {/* <Login /> */}
  
      <Home
      characters={characters}
      setHeroes={setHeroes}    
      />:
    
    </>
  )
}

export default App
