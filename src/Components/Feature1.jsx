import React from 'react'
import image from '../Images/Cat03.jpg'

export default function Feature1() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-7 mt-5">
                       <h1>ANIMAL OVERPOPULATION</h1>
                       <p>The sad reality is that there are millions of homeless pets worldwide. By adopting, you become part of the solution to animal overpopulation. You're not only providing a loving home to one animal but also helping reduce the strain on shelters and rescues.</p>
                       <h1>SAVE A LIFE</h1> 
                       <p>By adopting a pet, you are giving a second chance to an animal in need. Shelters and rescue organizations often face overcrowding issues and limited resources, and by adopting, you are directly saving a life and making space for another animal in need.</p>
                    </div>
                    <div className="col-md-5 image-container">
                        <img className='img-fluid pop-up-image'src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
