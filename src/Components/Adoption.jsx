import React from 'react'
import { useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom'

export default function Adoption() {

  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);

    setTimeout(() => {
      navigate('/home')
    }, 1700);
  };

  const location = useLocation();
  const data = location.state;

  const param = useParams();
  const petName = param.petName;

  const desiredElement = data.find(item => item.name == petName);

  return (
    <div>
       <div>
              {showAlert && (
                <div className="alert alert-success text-center font-weight-bold" role="alert">
                  Thank You For Adopting {desiredElement.name}, Happy Parenting !
                </div>
              )}
            </div>
      <div className="container mt-5 border border-dark border-2 rounded-1">
        <div className="row">
          <div className="col-md-4 ">
            <div class="mt-2 mb-2">
              <img class="img-fluid" src={process.env.PUBLIC_URL + desiredElement.imagePath} alt="First slide" />
            </div>
          </div>
          <div className="col-md-8">
            <h2 className='mt-5'>Pet name : {desiredElement.name}</h2>
            <div className="container mt-2">
              <div className="row">
                <div className="col-md-6 ">
                  <ul className='mt-2 mb-2 list-unstyled'>
                    <li className='mb-4'>
                      <h6><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                      </svg> Age : {desiredElement.age}</h6>
                    </li>
                    <li className='mb-4'>
                      <h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                          <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                        </svg> Size : {desiredElement.size}</h6>
                    </li>
                    <li className='mb-4'>
                      <h6> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                      </svg> Sterilization : {desiredElement.sterilization}</h6>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className='mt-2 mb-2 list-unstyled'>
                    <li className='mb-4'>
                      <h6><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                      </svg> Gender : {desiredElement.gender}</h6>
                    </li>
                    <li className='mb-4'>
                      <h6><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                      </svg> Vaccination : {desiredElement.vaccinated}</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container mt-1">
              <div className="row">
                <h4>{desiredElement.name} is a peace-loving Pet! She is a pleasant kitten to be around and is happy to humor anyone who wants to pet her.</h4>
              </div>
            </div>
            <div className="container mt-3 ">
              <div className="row">
                <div className="col-md-3">
                  <p>1. Friendly with Dogs</p>
                </div>
                <div className="col-md-3">
                  <p>2. Friendly with Kids</p>
                </div>
                <div className="col-md-3">
                  <p>3. Low Energetic</p>
                </div>
                <div className="col-md-3">
                  <p>4. Easy to Train</p>
                </div>
              </div>
            </div>
            <div className="container mt-2 mb-2">
              <div className="row">
                <div className="col-md-3">
                  <button type="button" class="btn btn-primary" onClick={handleClick}>Adopt me !</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

