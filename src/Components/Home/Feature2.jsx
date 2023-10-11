import React from 'react'

export default function Feature2() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5 image-container">
                        <img className='img-fluid pop-up-image'src={process.env.PUBLIC_URL + '/Images/wbg2.webp'} loading='lazy' alt="" />
                    </div>
                    <div className="col-md-7 mt-5">
                       <h1><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg> FIND YOUR PERFECT MATCH</h1> 
                       <p>Adoption offers a diverse selection of pets, ranging from adorable puppies and kittens to mature and senior animals. With various breeds, sizes, and personalities available, you have the opportunity to find the perfect match that aligns with your lifestyle, preferences, and family dynamics.</p>
                       <h1><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg> COST EFFECTIVE</h1>
                       <p>Adopting a pet is generally more cost-effective than purchasing one from a breeder or pet store. Adoption fees often cover the pet's initial veterinary care, vaccinations, and sometimes even microchipping and spaying/neutering. By adopting, you can potentially save on these initial expenses.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
