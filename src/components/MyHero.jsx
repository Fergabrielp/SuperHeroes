import React from 'react'
import Imagen from '../assets/imagen.jpg'

const MyHero = () => {

    return (
        <div className="col">
                    <div className="card h-55 bg-dark border-secondary border-3">
                        <img src={Imagen} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h4 className="card-title text-light text-center pb-2">Heroe</h4>
                                <div className='row justify-content-evenly'>
                                    <button type="button" className="btn btn-warning col-4 fw-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Details
                                    </button>
                                    <button type="button" className="btn btn-danger col-4 fw-bold">
                                    Delete
                                    </button>
                                </div>
                           
                            
                            {/* Modal */}
                            
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content bg-dark border-warning border-3">
                                        <div className="modal-header">
                                            <h5 className="modal-title text-light" id="staticBackdropLabel">Nombre</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <img src={Imagen} alt="" className='img-fluid p-2'/>
                                        <div className="modal-body text-light">
                                            
                                        
                                        ● Peso: <br />
                                        ● Altura: <br />
                                        ● Nombre: <br />
                                        ● Alias: <br />
                                        ● Color de ojos: <br />
                                        ● Color de cabello: <br />
                                        ● Lugar de trabajo:
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

export default MyHero
