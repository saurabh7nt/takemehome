import React from 'react'

export default function Carousal() {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <h1> Welcome to our Pet Adoption Platform!</h1>
                        <p>
                            At TakemeHome.com, we believe that every pet deserves a loving home. We are passionate about connecting people with their perfect furry companions and making the adoption process as seamless as possible. Whether you're looking for a playful kitten, a loyal dog, a chirpy bird, or any other type of animal companion, you've come to the right place! Start your journey to pet adoption today and experience the immeasurable joy that comes with giving a deserving pet a forever home. Together, we can make a difference in their lives!
                        </p>
                    </div>
                    <div className="text-start col-md-4">
                        <h1>Planning to Adopt a Pet?</h1>
                        <p>Browse pets from our network of over 11,500 shelters and rescues.</p>
                        <h3>Find your new best friend !</h3>
                    </div>
                </div>
            </div>
            <div className="container  mt-3">
                <div className="row ">
                    <div className="col-md-12">
                        <img className="img-fluid" src={process.env.PUBLIC_URL + '/Images/cover-photo.webp'} loading='lazy' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
