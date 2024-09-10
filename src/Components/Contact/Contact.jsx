import React from 'react'
import './Contact.css'
import contact_img from '../Assets/images (5).jpg'

const Contact = () => {
  return (
    <div>
      <h2 className='text-center'>Contact Us</h2>
      <div className='container contact_img mt-2 mb-2'>
        <img src={contact_img} alt='contact_img' className='contact_img center-text'/>
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
      <div className='container'>
        <form>
          <div className=' form-row mt-2 mb-2'>
            <label>Name</label>
            <input className='form-control'></input>
          </div>
          <div className='form-group mb-2 mt-2'>
            <label>Email</label>
            <input className='form-control'></input>
          </div>
          <div className='form-group mb-2 mt-2'>
            <label>Subject</label>
            <input className='form-control'></input>
          </div>
          <div>
            <textarea rows={10} cols={60}></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact