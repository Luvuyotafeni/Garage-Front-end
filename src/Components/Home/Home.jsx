import React from 'react'
import './Home.css'
import hero from "../Assets/download__14_-removebg-preview.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import ai from '../Assets/artificial-intellegence_13320504.png'
import engine from '../Assets/transport_14982232.png'
import manual from '../Assets/manual-transmission_2557346.png'
import starter from '../Assets/starter_6509098.png'
import oil from '../Assets/engine-oil_1820651.png'
import brakes from '../Assets/car_12841175.png'
import wcu from '../Assets/download (15).jpg'

const Home = () => {
  return (
    <>
      <section>
        <div className='hero'>
          <div className='hero_img'>
            <img src={hero} alt='' />
          </div>
          <div>
            <h3>Lastro Workshop</h3>
            <p>if we can't fix i tno one can <span>Period</span></p>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className="row">
            <div className="col-md-3 mb-2 mt-2">
              <div className="card middle-card">
                <img src={engine} className="card-img-top img-fluid w-25 mx-auto" alt="Side Image 1" />
                <div className="card-body">
                  <h5 className="card-title">Image 1</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2 mt-2">
              <div className="card middle-card">
                <img src={brakes} className="card-img-top img-fluid w-25 mx-auto" alt="Middle Image" />
                <div className="card-body">
                  <h5 className="card-title">Image 2</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2 mt-2">
              <div className="card middle-card">
                <img src={ai} className="card-img-top img-fluid w-25 mx-auto" alt="Side Image 2" />
                <div className="card-body">
                  <h5 className="card-title">Image 3</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2 mt-2">
              <div className="card middle-card">
                <img src={manual} className="card-img-top img-fluid w-25 mx-auto" alt="Side Image 1" />
                <div className="card-body">
                  <h5 className="card-title">Image 4</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-2 mt-2">
              <div className="card middle-card">
                <img src={starter} className="card-img-top img-fluid w-25 mx-auto" alt="Middle Image" />
                <div className="card-body">
                  <h5 className="card-title">Image 5</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2 mt-2">
              <div className="card middle-card">
                <img src={oil} className="card-img-top img-fluid w-25 mx-auto" alt="Side Image 2" />
                <div className="card-body">
                  <h5 className="card-title">Image 6</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2 mt-2">
              <div className="card middle-card">
                <img src={oil} className="card-img-top img-fluid w-25 mx-auto" alt="Side Image 2" />
                <div className="card-body">
                  <h5 className="card-title">Image 6</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2 mt-2">
              <div className="card middle-card">
                <img src={oil} className="card-img-top img-fluid w-25 mx-auto" alt="Side Image 2" />
                <div className="card-body">
                  <h5 className="card-title">Image 6</h5>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section className='about-us'>
        <h2 className='text-center '>About Us</h2>
        <div className='about-text text-center'>
          <p>LASTROALPICINOS WORKSHOP, has extensive experience in the stream of mechanics, 
            we have repair private owned vehicles, Taxis, Bakkies, BMW, VW, Volvo, Mercedes,
            Old models Cars, Latest model vehicle and Company fleets of a total of 38 vehicles for a period of 
            Three years contract. 
            We believe that if we can’t fix it, no one can fix it period…… we are the best of best in this stream. 
            Plus, years workmanship, integrity, trustworthy, working closely with clients, meet deadlines, solving 
            complex mechanics issues that give us credit as highly rated skilled professional mechanics.
            Affordable car service is always guaranteed. Qualified and Expertly Trained mechanics always………. 
            Lastly we’re a 4.0 star rated mechanics workshop currently and we are looking to reach a five-star 
            rating soonest. 
            Certified Mechanics employed 4; Serviced done 8562; Satisfied clients 5862; Total repairs 6542
          </p>
        </div>
      </section>
      <section>
        <h2 className='text-center'>Why choose us</h2>
        <div className='f_flex wcu_text'>
          <div>
            <p className='text-center'>Our workshop is save, installed with 24/7 CCTV Camera and a fence
            24/7 monitoring security guards 
            Your vehicle has extra security we park cars inside the shop
            Our Yard has fence no loss of vehicles occurred before 
            Affordable prices 
            Our workmanship has a guarantee 
            We don’t keep client’s vehicles for long period, we fix cars
            We keep Records for each vehicle
            Clients arrive with sad faces and leave with a happy smile 
            Free Check-ups
            Free Diagnosis Machine Test
            Free bearing Press T & C apply
            All our mechanics work carries a guarantee of 6 months.
            We handle complain very professional
            We put clients first always………
            Free Engine services Book stamp
            Free Engine, Gearbox, Differential oil changes for our clients only T & C Apply!!!!
            </p>
          </div>
          <div>
            <img src={wcu} />
          </div>
        </div>
      </section>

    </>
  )
}

export default Home