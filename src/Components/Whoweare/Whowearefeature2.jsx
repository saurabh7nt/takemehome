import React from 'react'
import me from '../../Images/dog02.jpg'

export default function Whowearefeature2() {
    return (
        <>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h1 class="card-title mt-5">Meet Our Founder, Saurabh !</h1>
                                        <p class="card-text">
                                            As a 9-year-old child, our founder Saurabh Tajane witnessed the death of a puppy he was taking care of in his street. Despite his best efforts, Saurabh could not save the puppy’s life! The incident left a deep imprint on his psyche and at that formative age, he decided to dedicate his life to animal help so that no street animal has to deal with such cruel fate. TakemeHome is the manifestation of Saurabh's childhood resolution in which many incredible generous people joined him, and made TakemeHome what it is today.
                                            <br />
                                            <br />
                                            Saurabh is a cyber security specialist who owns a firm that provides security solutions to corporate clients. So, when he is not busy saving lives, he is securing other people’s cyber assets.
                                        </p>
                                        <p class="card-text"><small class="text-body-secondary">Saurabh Tajane (Founder)</small></p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <img src={me} class="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
