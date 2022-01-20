import React from 'react'
import Header from './Header'
import Search from './Search'
import MyTeam from './MyTeam'
import HeroList from './HeroList'


const Home = ({setHeroes, characters}) => {
    return (
        <>
           
            <Header />
        
            <Search 
                setHeroes={setHeroes}
            />

            <HeroList 
                characters={characters}
            />

            <MyTeam />

        </>
    )
}

export default Home