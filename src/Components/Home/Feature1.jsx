import React from 'react'

export default function Feature1() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-7 mt-5">
                        <h1><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg> ANIMAL OVERPOPULATION</h1>
                        <p>The sad reality is that there are millions of homeless pets worldwide. By adopting, you become part of the solution to animal overpopulation. You're not only providing a loving home to one animal but also helping reduce the strain on shelters and rescues.</p>
                        <h1><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg> SAVE A LIFE</h1>
                        <p>By adopting a pet, you are giving a second chance to an animal in need. Shelters and rescue organizations often face overcrowding issues and limited resources, and by adopting, you are directly saving a life and making space for another animal in need.</p>
                    </div>
                    <div className="col-md-5 image-container">
                        <img className='img-fluid pop-up-image' src={process.env.PUBLIC_URL + '/Images/wbg1.webp'} loading='lazy' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
