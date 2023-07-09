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
                                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
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
                                    <Link className='text-reset text-decoration-none' to=''><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg> 1st cross, 1st Main Rd, Veerannapalya, Bengaluru 560045</Link>
                                </li>
                                <li className='d-flex  align-items-center mb-5'>
                                    <Link className='text-reset text-decoration-none' to=''><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg> 9876543210</Link>
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
                                <li className='d-flex  align-items-center mb-3'>
                                    <Link className='text-reset text-decoration-none' to="/home"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                        <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803L10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                                    </svg> Report Animal in Distress</Link>

                                </li>
                                <li className='d-flex  align-items-center mb-3'>
                                    <Link className='text-reset text-decoration-none' to=''><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                        <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803L10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                                    </svg> Careers</Link>
                                </li>
                                <li className='d-flex  align-items-center mb-3'>
                                    <Link className='text-reset text-decoration-none' to=''><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                        <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803L10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                                    </svg> Events</Link>
                                </li>
                                <li className='d-flex  align-items-center mb-3'>
                                    <Link className='text-reset text-decoration-none' to=''><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                        <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803L10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                                    </svg> Become a Volunteer</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="p-3 bg-dark text-white bg-light">
                            <ul>
                                <li className='d-flex  align-items-center mb-5'>
                                    <Link className='fw-semibold fs-3 text-reset text-decoration-none' to="">Donors</Link>
                                </li>
                                <li className='d-flex  align-items-center mb-3'>
                                    <Link className='text-reset text-decoration-none' to="/home"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                        <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803L10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                                    </svg> One Day Meal Programme</Link>

                                </li>
                                <li className='d-flex  align-items-center mb-3'>
                                    <Link className='text-reset text-decoration-none' to=''><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                        <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803L10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                                    </svg> CSR Donations</Link>
                                </li>
                                <li className='d-flex  align-items-center mb-3'>
                                    <Link className='text-reset text-decoration-none' to=''><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                        <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803L10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                                    </svg> Donate in Honor</Link>
                                </li>
                                <li className='d-flex  align-items-center mb-3'>
                                    <Link className='text-reset text-decoration-none' to=''><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                        <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803L10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                                    </svg> Start a Fundraiser</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg-dark text-white">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">

                        </a>
                        <span class="mb-3 mb-md-0">2023 TakemeHome™ . All Rights Reserved</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3"><Link className='text-reset text-decoration-none' href="#">Terms of use</Link></li>
                        <li class="ms-3"><Link className='text-reset text-decoration-none' href="#">Privacy policy</Link></li>
                        <li class="ms-3"><a className=' text-decoration-none' href="">Back to Top</a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}
