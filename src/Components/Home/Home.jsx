import React from 'react'
import './Home.css'
import hero from "../Assets/download__14_-removebg-preview.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ai from '../Assets/artificial-intellegence_13320504.png'
import engine from '../Assets/transport_14982232.png'
import manual from '../Assets/manual-transmission_2557346.png'
import starter from '../Assets/starter_6509098.png'
import oil from '../Assets/engine-oil_1820651.png'
import brakes from '../Assets/car_12841175.png'
import wcu from '../Assets/download (15).jpg'
import worker1 from '../Assets/WORKER 1.jpg' 
import worker2 from '../Assets/wORKER 2.jpg'
import worker3 from '../Assets/wORKER 3.jpg'
import parking from '../Assets/garage_1571991.png'
import money from '../Assets/money_925748.png'
import diagnosis from '../Assets/diagnosis_9467368.png'

const Home = () => {
  return (
    <>
      <section>
        <div className='hero'>
          <div className='hero_img'>
            <img src={hero} alt='' />
          </div>
          <div className='moto'>
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
                  <h5 className="card-title text-center">Engine rebuilding</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2 mt-2">
              <div className="card middle-card">
                <img src={brakes} className="card-img-top img-fluid w-25 mx-auto" alt="Middle Image" />
                <div className="card-body">
                  <h5 className="card-title text-center">Brake and Clutch</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2 mt-2">
              <div className="card middle-card">
                <img src={ai} className="card-img-top img-fluid w-25 mx-auto" alt="Side Image 2" />
                <div className="card-body">
                  <h5 className="card-title text-center">Mechatronic Body repair</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2 mt-2">
              <div className="card middle-card">
                <img src={manual} className="card-img-top img-fluid w-25 mx-auto" alt="Side Image 1" />
                <div className="card-body">
                  <h5 className="card-title text-center">Gear Box Manual/Automatic</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-2 mt-2">
              <div className="card middle-card">
                <img src={starter} className="card-img-top img-fluid w-25 mx-auto" alt="Middle Image" />
                <div className="card-body">
                  <h5 className="card-title text-center">Carburetor services</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2 mt-2">
              <div className="card middle-card">
                <img src={oil} className="card-img-top img-fluid w-25 mx-auto" alt="Side Image 2" />
                <div className="card-body">
                  <h5 className="card-title text-center">Engine oil exchange</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2 mt-2">
              <div className="card middle-card">
                <img src={oil} className="card-img-top img-fluid w-25 mx-auto" alt="Side Image 2" />
                <div className="card-body">
                  <h5 className="card-title text-center">Turbo Charge Sevices</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2 mt-2">
              <div className="card middle-card">
                <img src={oil} className="card-img-top img-fluid w-25 mx-auto" alt="Side Image 2" />
                <div className="card-body">
                  <h5 className="card-title text-center">Differential Services</h5>
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
      <section className='mt-2 mb-2'>
        <h2 className='text-center' >Team</h2>
        <div className='row employee_box'>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card side'>
              <img src={worker1} className="card-img-top img-fluid w-75 mx-auto" />
              <div className='card-body '></div>
              <h5 className='card-title text-center'>Lawrence Mthembu</h5>
            </div> 
          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card '>
            <img src={worker2} className="card-img-top img-fluid w-75 mx-auto" />
            <div className='card-body'>
              <h5 className='card-title text-center'>Mary Sobukhwe</h5>

            </div>
            </div>
          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card side'>
              <img src={worker3} className="card-img-top img-fluid w-75 mx-auto"/>
              <div className='card-body' >
                <h5 className='card-title text-center'>Zukile Msamo</h5>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
          <div className='container '>
            <div className='row'>
              <div className='col-md-4 mb-2 mt-2'>
                <div className='card middle-card side'>
                  <img src={parking} className="card-img-top img-fluid w-25 mx-auto" />
                  <div className='card-body'>
                    <h5 className='text-center'>Safe parking</h5>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-2 mt-2'>
                <div className='card middle-card side'>
                  <img src={money} className="card-img-top img-fluid w-25 mx-auto" />
                  <div className='card-body'>
                    <h5 className='text-center'>Affordable prices</h5>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-2 mt-2'>
                <div className='card middle-card side'>
                  <img src={diagnosis} className="card-img-top img-fluid w-25 mx-auto" />
                  <div className='card-body'>
                    <h5 className='text-center'>Free diagnosis</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section>
        <h2 className='text-center mt-2'>Testimonials</h2>
        <div className='d-flex justify-content-center'>
          <div id="carouselExampleIndicators" className="carousel slide w-50" data-bs-ride="carousel">
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-block w-100">
                  <p className='text-center'>
                    The most incredibly helpful team. They came to our rescue,
                    made sure we were safe and sorted out our car in a few hours.
                    Thank you a million times. We are so grateful.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-block w-100">
                  <p className='text-center'>
                    Thandeka Ngcobo<br />
                    Upvotes on their friendly driver that dropped me off for free (as well as picked up the car),
                    and also they cleaned my car inside and out before returning it. Almost a bad experience
                    with them as a whole, but they recovered.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-block w-100">
                  <p className='text-center'>
                    My car Hyundai I20 had a water pump problem, it was overheating and the starter was damaged.
                    It was fixed in 3 hours, up and running till today. I will recommend LASTROALPICINOS WORKSHOP Mechanic.
                  </p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </section>


    </>
  )
}

export default Home