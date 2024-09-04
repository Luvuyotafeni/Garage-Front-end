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

    </>
  )
}

export default Home