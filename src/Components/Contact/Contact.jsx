import React from 'react'
import './Contact.css'
import contact_img from '../Assets/images (5).jpg'

const Contact = () => {
  return (
    <div>
      <h2 className='text-center'>Contact Us</h2>
      <div className='contact_img mt-2 mb-2'>
        <img src={contact_img} alt='comntact_img' className='contact_img'/>
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
          <div className='form-group mt-2 mb-2'>
            <label>Name</label>
            <input></input>
          </div>
          <div className='form-group mb-2 mt-2'>
            <label>Email</label>
            <input></input>
          </div>
          <div className='form-group mb-2 mt-2'>
            <label>Subject</label>
            <input></input>
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