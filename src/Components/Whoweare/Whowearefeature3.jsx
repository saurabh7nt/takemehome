import React from 'react'

export default function Whowearefeature3() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={process.env.PUBLIC_URL + '/Images/dog11.jpg'} loading="lazy" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h1 className="card-title mt-5">Shubham, Our Co-founder & Trustee</h1>
                                        <p className="card-text">
                                            The sight of a suffering animal rattled Shubham's soul to the core. Her everyday encounter with human indifference and cruelty towards animals compelled her to help them, despite the unavailability of space, time and resources.
                                            All alone, she would pick the animal in pain, take her to CUPA or any other veterinary facility for treatment, and afterwards, allowed her to heal in her house for as much time as the animal needed. But obviously, she could not help all the animals she found in the need of it.
                                        </p>
                                        <p >When he came in contact with Saurabh through a WhatsApp group, they decided to partner each other for bringing TakemeHome into existence with a mission to help more and more animals in need. So, TakemeHome came into being in 2017, and Saurabh and Shubham have saved more than 2000 animals since!</p>
                                        <p className="card-text"><small className="text-body-secondary">Shubham Tajane (Co-Founder)</small></p>
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
