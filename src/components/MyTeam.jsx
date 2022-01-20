import React from 'react'
import MyHero from './MyHero'


const MyTeam = () => {

    return (
       
        <div className="accordion container mb-3" >
            <div className="accordion-item bg-dark border-3 border-danger">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <span className='text-danger fw-bold'>MY TEAM</span>  
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className="row row-cols-md-3 g-3">
                    
                        <MyHero />
                        <MyHero />
                        <MyHero />
                        <MyHero />
                        <MyHero />
            
                    
                    </div>
                </div>  
                </div>
            </div>
        </div> 
    )
}

export default MyTeam
