import React from 'react'
import image from '../../Images/wbg4.jpg'

export default function Feature3() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-7 mt-5">
                        <h1><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg> UNCONDITIONAL LOVE</h1>
                        <p> Adopted pets often exhibit a deep sense of gratitude and appreciation. They understand that they've been given a second chance at life, and they often shower their adopters with unconditional love, loyalty, and companionship. The bond that forms between an adopted pet and their new family can be truly special and fulfilling.</p>
                        <h1><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg> RESCUE ORGANIZATIONS</h1>
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
