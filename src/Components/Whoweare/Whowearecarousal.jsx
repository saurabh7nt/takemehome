import React from 'react'
import image111 from '../../Images/PetHome111.jpg'

export default function Whowearecarousal() {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <div class="card ">
                            <img src={image111} class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <h1 class="card-title text-dark text-end">TakemeHome</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
