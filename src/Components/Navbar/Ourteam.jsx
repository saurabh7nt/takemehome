import React from 'react'

export default function Ourteam() {
  return (
    <>
      <div className="container mt-2 mb-2">
        <div className="row">
          <h2 className="text-body">"We may have all come on different ships, but we're in the same boat now..." <small className='text-body-secondary text-end'> - Martin Luther King Jr.</small></h2>
          <p className='text-body-secondary'>A team composed of animal rescuers and doctors forms a powerful alliance in the mission to save and heal animals in need. Animal rescuers bring their unwavering dedication, compassion, and expertise in locating and rescuing animals in distress. They are the first responders, tirelessly working to provide immediate care, protection, and shelter to vulnerable creatures. On the other hand, doctors specializing in veterinary medicine bring their comprehensive knowledge, medical skills, and expertise to assess, diagnose, and treat various ailments and injuries. Their profound understanding of animal physiology and health enables them to administer appropriate medical interventions, surgeries, and rehabilitative care. Together, this dynamic team combines their unique strengths and talents, collaborating seamlessly to ensure the well-being and recovery of rescued animals. <strong>Their shared goal is to give these animals a second chance at life, providing them with the necessary medical attention, love, and support they require.</strong> Through their selfless dedication and united efforts, this remarkable team not only saves lives but also embodies the profound bond between humans and animals, embodying the values of compassion, empathy, and advocacy for the voiceless creatures that share our world.</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <div className="col">
              <div className="card image-container">
                <img src={process.env.PUBLIC_URL + '/Images/team55.jpg'} className="card-img-top pop-up-image" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Dr. Kunal Darekar</h5>
                  <h6 className="text-body-secondary">Medical Director</h6>
                  <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum voluptate libero tempore quas illo esse asperiores fuga nemo laborum rem debitis perspiciatis saepe recusandae id, nostrum culpa inventore impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam repellat nostrum deleniti provident repudiandae nam at unde nisi saepe, aut sapiente dolor voluptas autem iure similique magni tempore rerum.aut sapiente dolor voluptas autem iure similique magni tempore</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row row-cols-1 row-cols-md-2 g-4 ">
              <div className="col">
                <div className="card image-container">
                  <img src={process.env.PUBLIC_URL + '/Images/team11.jpg'} className="card-img-top pop-up-image" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Dr. Vikas Tajane </h5>
                    <h6 className="text-body-secondary">Veterinary Consultant</h6>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card image-container">
                  <img src={process.env.PUBLIC_URL + '/Images/team22.jpg'} className="card-img-top pop-up-image" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Dr. Pavan Darve</h5>
                    <h6 className="text-body-secondary">Veterinary Consultant</h6>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card image-container">
                  <img src={process.env.PUBLIC_URL + '/Images/team33.jpg'} className="card-img-top pop-up-image" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Dr. Ashlesh Bike</h5>
                    <h6 className="text-body-secondary">Veterinary Surgeon</h6>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card image-container">
                  <img src={process.env.PUBLIC_URL + '/Images/team44.jpg'} className="card-img-top pop-up-image" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Dr. Strange</h5>
                    <h6 className="text-body-secondary">Rescuer/Valunteer</h6>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
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
