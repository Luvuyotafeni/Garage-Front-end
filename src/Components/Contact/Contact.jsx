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
                <p><i class='bx bxs-user'></i>Qiqa Mbika</p>
                <p><i class='bx bxl-whatsapp'></i>0839253459</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card middle-card'>
            <div className='card-body'>
                <h5 className='text-center'>Salesman</h5>
                <p><i class='bx bxs-user'></i>Calvin Moss</p>
                <p><i class='bx bxl-whatsapp'></i>0732963634</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card middle-card'>
            <div className='card-body'>
                <h5 className='text-center'>Salesman</h5>
                <p><i class='bx bxs-user'></i>Sibusiso Bika</p>
                <p><i class='bx bxl-whatsapp'></i>0834630321</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className='container'>
        <form>
          <div className=' form-row mt-2 mb-2'>
            <div className='col-md-6 mb-3'>
              <label>Name</label>
              <input className='form-control'></input>
            </div>
          </div>
          <div className='form-row mb-2 mt-2'>
            <div className='col-md-6 mb-3'>
              <label>Email</label>
              <input className='form-control'></input>
            </div>
          </div>
          <div className='form-row mb-2 mt-2'>
            <div className='col-md-6 mb-3'>
              <label>Subject</label>
              <input className='form-control'></input>
            </div>
          </div>
          <div>
            <div className='col-md-6 mb-3'>
            <textarea rows={10} cols={30} className='form-control'></textarea>
            </div>
          </div>
          <button type='submit' className='btn btn-primary mt-3'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact