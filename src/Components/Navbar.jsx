import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                        <div class="container-fluid">
                            <Link class="navbar-brand" to="/"> <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                            </svg> TakemeHome</Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            About Us
                                        </Link>
                                        <ul class="dropdown-menu">
                                            <li><Link class="dropdown-item" to="/about/whoweare">Who we are ?</Link></li>
                                            <li><Link class="dropdown-item" to="/about/ourteam">Our Team</Link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/services">Services</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/faq">Faq</Link>
                                    </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
