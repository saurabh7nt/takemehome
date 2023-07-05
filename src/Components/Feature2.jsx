import React from 'react'
import image from '../Images/Cat03.jpg'

export default function Feature2() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5 image-container">
                        <img className='img-fluid pop-up-image'src={image} alt="" />
                    </div>
                    <div className="col-md-7 mt-5">
                       <h1>FIND YOUR PERFECT MATCH</h1> 
                       <p>Adoption offers a diverse selection of pets, ranging from adorable puppies and kittens to mature and senior animals. With various breeds, sizes, and personalities available, you have the opportunity to find the perfect match that aligns with your lifestyle, preferences, and family dynamics.</p>
                       <h1>COST EFFECTIVE</h1>
                       <p>Adopting a pet is generally more cost-effective than purchasing one from a breeder or pet store. Adoption fees often cover the pet's initial veterinary care, vaccinations, and sometimes even microchipping and spaying/neutering. By adopting, you can potentially save on these initial expenses.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
