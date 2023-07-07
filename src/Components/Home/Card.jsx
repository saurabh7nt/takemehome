import React from 'react'
// import kitty from '/Images/Kitty01.jpg'
import kitty from '../../Images/Kitty01.jpg'
import dollar from '../../Images/dog02.jpg'
import dog11 from '../../Images/dog11.jpg'
import peter from '../../Images/Cat02.jpg'

export default function Card() {
    return (
        <>
        <div className='container mt-3'>
            <div className="row">
                <div className="col-md-12">
                    <h1>Why Choose Adoption ?</h1>
                    <p>Choosing adoption is a compassionate and fulfilling decision that brings numerous benefits to both the adopter and the adopted pet. Here are some compelling reasons to choose adoption when considering adding a new furry member to your family:</p>
                </div>
            </div>
        </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3 col-sm-2">
                        <div class="card">
                            <img src={kitty} class="card-img-top" alt="..." />
                            <div class="card-body">
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <h3 class="card-text">KITTY</h3>
                                <button className='btn btn-primary'>Adopt Me ! Please</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-2">
                        <div class="card">
                            <img src={dog11} class="card-img-top" alt="..." />
                            <div class="card-body">
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <h3 class="card-text">DOLLAR</h3>
                                <button className='btn btn-primary'>Adopt Me ! Please</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-2">
                        <div class="card">
                            <img src={dollar} class="card-img-top" alt="..." />
                            <div class="card-body">
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <h3 class="card-text">SCOOBY</h3>
                                <button className='btn btn-primary'>Adopt Me ! Please</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-2">
                        <div class="card">
                            <img src={peter} class="card-img-top" alt="..." />
                            <div class="card-body">
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <h3 class="card-text">PETER</h3>
                                <button className='btn btn-primary'>Adopt Me ! Please</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
