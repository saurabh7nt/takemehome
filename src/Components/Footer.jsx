import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div class="container-fluid bg-dark text-white mt-5 px-4">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3  bg-dark text-white bg-light">
                            <div class="card border border-0" style={{ 'width': '18rem' }}>
                                <div className='bg-dark text-white'>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                    </svg>
                                </div>
                                <div class="card-body bg-dark text-white">
                                    <h5 class="card-title">TakemeHome</h5>
                                    <p class="card-text">Together we can make this world a better place for our nonhuman companions, one day at a time, one animal at a time! Donate Now!</p>
                                    <a href="#" class="btn btn-primary">Donate Now <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                    </svg></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 bg-dark text-white bg-light">
                            <ul>
                                <li className='d-flex align-items-center mb-5'>
                                    <Link className='fw-semibold fs-3 text-reset text-decoration-none' to="/home">Contact</Link>
                                </li>
                                <li className='d-flex  align-items-center mb-4'>
                                    <Link className='text-reset text-decoration-none' to=''>1st cross, 1st Main Rd, Veerannapalya, Bengaluru 560045</Link>
                                </li>
                                <li className='d-flex  align-items-center mb-5'>
                                    <Link className='text-reset text-decoration-none' to=''>9876543210</Link>
                                </li>
                                <li className='d-flex  align-items-center mb-5'>
                                    <Link className='text-reset text-decoration-none' to="">Privacy policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="p-3 bg-dark text-white bg-light">
                            <ul>
                                <li className='d-flex  align-items-center mb-5'>
                                    <Link className='fw-semibold fs-3 text-reset text-decoration-none' to="">Discover</Link>
                                </li>
                                <li className='d-flex  align-items-center mb-5'>
                                    <Link className='text-reset text-decoration-none' to="/home">Events</Link>
                                </li>
                                <li className='d-flex  align-items-center mb-5'>
                                    <Link className='text-reset text-decoration-none' to=''>Careers</Link>
                                </li>
                                <li className='d-flex  align-items-center mb-5'>
                                    <Link className='text-reset text-decoration-none' to=''>Become a Volunteer</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
