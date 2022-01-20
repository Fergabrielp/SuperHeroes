import React from 'react'
import Hero from './Hero' 


const HeroList = ({characters}) => {
    

    return (
        <div className='container mb-3 p-3'>
            <div className="row row-cols-md-3 g-3">
                {/* {characters.map(char => (
                    <Hero 
                        key={char.id}
                        char={char}
                    />
                ))} */}
            </div>
        </div>
    )
}

export default HeroList
