import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Card() {

    const navigate = useNavigate();

    const handleButtonClick = (petName, data) => {
        console.log(petName);
        navigate(`/adoption/${petName}`, { state: data });
      };

    const data = [{ 
        name: "Kitty",
        age: "1 year",
        vaccinated : "Yes",
        size : "Medium",
        gender : "Female",
        sterilization : "Yes",
        imagePath : '/Images/Kitty01.jpg'
     },
     { 
        name: "Dollar",
        age: "1 year",
        vaccinated : "Yes",
        size : "Small",
        gender : "Male",
        sterilization : "Yes",
        imagePath : '/Images/dog02.jpg'
     },
     { 
        name: "Scooby",
        age: "1 year",
        vaccinated : "Yes",
        size : "Small",
        gender : "Male",
        sterilization : "Yes",
        imagePath : '/Images/dog11.jpg'
     },{ 
        name: "Peter",
        age: "1 year",
        vaccinated : "Yes",
        size : "Medium",
        gender : "Male",
        sterilization : "Yes",
        imagePath : '/Images/cat02.jpg'
     }];

    return (
        <>
            <div className='container mt-3'>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Why Choose Adoption ?</h1>
                        <p>Choosing adoption is a compassionate and fulfilling decision that brings numerous benefits to both the adopter and the adopted pet. Here are some compelling reasons to choose adoption when considering adding a new furry member to your family:</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3 col-sm-2">
                        <div class="card">
                            <img src={process.env.PUBLIC_URL + '/Images/Kitty01.jpg'} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3 class="card-text">Kitty</h3>
                                <button className='btn btn-primary' onClick={() => handleButtonClick('Kitty', data)} >Adopt Me ! Please</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-2">
                        <div class="card">
                            <img src={process.env.PUBLIC_URL + '/Images/dog02.jpg'} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3 class="card-text">DOLLAR</h3>
                                <button className='btn btn-primary' onClick={() => handleButtonClick('Dollar', data)} >Adopt Me ! Please</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-2">
                        <div class="card">
                            <img src={process.env.PUBLIC_URL + '/Images/dog11.jpg'} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3 class="card-text">SCOOBY</h3>
                                <button className='btn btn-primary' onClick={() => handleButtonClick('Scooby', data)} >Adopt Me ! Please</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-2">
                        <div class="card">
                            <img src={process.env.PUBLIC_URL + '/Images/cat02.jpg'} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3 class="card-text">PETER</h3>
                                <button className='btn btn-primary' onClick={() => handleButtonClick('Peter', data)} >Adopt Me ! Please</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
