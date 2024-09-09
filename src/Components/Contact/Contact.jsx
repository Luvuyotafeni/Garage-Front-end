import React from 'react'
import './Contact.css'
import contact_img from '../Assets/images (5).jpg'

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <div className='contact_img mt-2 mb-2'>
        <img src={contact_img}/>
      </div>
      <div className='container mt-2'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card middle-card'>
              <div className='card-body'>
                <h5>Receptionist</h5>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card middle-card'>
            <div className='card-body'>
                <h5>Salesman</h5>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card middle-card'>
            <div className='card-body'>
                <h5>Salesman</h5>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact