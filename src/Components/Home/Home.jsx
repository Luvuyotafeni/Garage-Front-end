import React from 'react'
import './Home.css'
import hero from "../Assets/download__14_-removebg-preview.png"
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <div className="col-md-4">
              <div className="card middle-card">
                <img src='' className="card-img-top" alt="Side Image 1" />
                <div className="card-body">
                  <h5 className="card-title">Image 1</h5>
                  <p className="card-text">Description of the first image.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card middle-card">
                <img src='' className="card-img-top" alt="Middle Image" />
                <div className="card-body">
                  <h5 className="card-title">Image 2</h5>
                  <p className="card-text">Description of the middle image.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card middle-card">
                <img src='' className="card-img-top" alt="Side Image 2" />
                <div className="card-body">
                  <h5 className="card-title">Image 3</h5>
                  <p className="card-text">Description of the third image.</p>
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