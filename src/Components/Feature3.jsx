import React from 'react'
import image from '../Images/Cat03.jpg'

export default function Feature3() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-7 mt-5">
                        <h1>UNCONDITIONAL LOVE</h1>
                        <p> Adopted pets often exhibit a deep sense of gratitude and appreciation. They understand that they've been given a second chance at life, and they often shower their adopters with unconditional love, loyalty, and companionship. The bond that forms between an adopted pet and their new family can be truly special and fulfilling.</p>
                        <h1>RESCUE ORGANIZATIONS</h1>
                        <p> Adoption comes with the added benefit of ongoing support from the shelter or rescue organization. They can offer advice, resources, and guidance to help ensure a successful transition and address any questions or concerns you may have as a new pet owner.
                        </p>
                    </div>
                    <div className="col-md-5 image-container">
                        <img className='img-fluid pop-up-image' src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
