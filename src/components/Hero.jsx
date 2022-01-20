import React from 'react'

const Hero = ({char}) => {

    const {image, name, appearance, biography, work} = char

    const addHero = () => {
        
        console.log('Agregando a mis heroes...')

    }

    return (
        <div className="col">
            <div className="card h-55 bg-dark border-dark border-3">
                <img src={image.url} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h4 className="card-title text-light text-center pb-2">{name}</h4>
                        <div className='row justify-content-evenly'>
                            <button type="button" className="btn btn-warning col-4 fw-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Details
                            </button>
                            <button type="button" className="btn btn-success col-4 fw-bold" onClick={addHero}>
                            Add
                            </button>
                        </div>
                    
                    
                    {/* Modal */}
                    
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content bg-dark border-warning border-3">
                                <div className="modal-header">
                                    <h5 className="modal-title text-light" id="staticBackdropLabel">{name}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <img src={image.url} alt="" className='img-fluid p-2'/>
                                <div className="modal-body text-light">
                                    
                                
                                ● Peso: {appearance.weight[1]} <br />
                                ● Altura: {appearance.height[1]} <br />
                                ● Nombre: <br />
                                ● Alias: {biography.aliases} <br />
                                ● Color de ojos: <br />
                                ● Color de cabello: <br />
                                ● Lugar de trabajo: {work.base}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default Hero
