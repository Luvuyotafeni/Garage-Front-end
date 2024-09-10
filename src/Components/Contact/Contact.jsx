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
                <h5 className='text-center'>Receptionist</h5>
                <p><i className='bx bxs-user'></i> Qiqa Mbika</p>
                <p><i className='bx bxl-whatsapp'></i> 0839253459</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card middle-card'>
              <div className='card-body'>
                <h5 className='text-center'>Salesman</h5>
                <p><i className='bx bxs-user'></i> Calvin Moss</p>
                <p><i className='bx bxl-whatsapp'></i> 0732963634</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card middle-card'>
              <div className='card-body'>
                <h5 className='text-center'>Salesman</h5>
                <p><i className='bx bxs-user'></i> Sibusiso Bika</p>
                <p><i className='bx bxl-whatsapp'></i> 0834630321</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container d-flex justify-content-center align-items-center mt-3'>
        <div className='col-md-6'>
          <h2 className='text-center'>Leave a comment</h2>
          <form>
            <div className='form-row mt-2 mb-2'>
              <div className='col mb-3'>
                <label className='mb-2'>Name</label>
                <input className='form-control' type='text' placeholder='Enter your name' />
              </div>
            </div>
            <div className='form-row mb-2 mt-2'>
              <div className='col mb-3'>
                <label className='mb-2'>Email</label>
                <input className='form-control' type='email' placeholder='Enter your email' />
              </div>
            </div>
            <div className='form-row mb-2 mt-2'>
              <div className='col mb-3'>
                <label className='mb-2'>Subject</label>
                <input className='form-control' type='text' placeholder='Enter subject' />
              </div>
            </div>
            <div className='form-row mb-2 mt-2'>
              <div className='col mb-3'>
                <label>Message</label>
                <textarea rows={5} className='form-control' placeholder='Enter your message'></textarea>
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <button type='submit' className='btn btn-primary mt-3 mb-2'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
