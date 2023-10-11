import React from 'react'

export default function Whowearefeature1() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={process.env.PUBLIC_URL + '/Images/Kitty01.jpg'} loading='lazy' class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h1 class="card-title mt-5">Who We Are?</h1>
                                        <p class="card-text">
                                            TakemeHome is a charitable organization dedicated to the help and welfare of street animals in Bangalore, India. TakeusHome was established in June 2017 by co-founders Saurabh & Shubham Tajane.
                                            <br/>
                                            <br/>  
                                            In the past 6 years, TakeusHome has grown from a small charity effort to a well-established animal welfare organization which has rescued more than 2500 street animals, and homes more than 200 dogs at its shelter.
                                            <br/>
                                            <br/>    
                                            TakemeHome means the harmony between all elements of nature, both human and nonhuman, and the organization is guided by the spirit of harmonious coexistence.
                                        </p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 months ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
