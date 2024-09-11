import React from 'react'
import './Vehicles.css'
import honda from './Assets/honda.jpg'
import Hyundai from './Assets/HYUNDAI.jpg'
import Isuzu from './Assets/ISUZU.png'
import Jaguar from './Assets/JAGUAR.jpg'
import KIA from './Assets/KIA-removebg-preview.png'
import Mazda from './Assets/MAZDA.png'
import Mercedes from './Assets/MERCEDES.jpg'
import MINI from './Assets/MINI.jpg'
import Mitsubishi from './Assets/MITSUBISHI.png'
import Nissan from './Assets/MITSUBISHI.png'
import Opel from './Assets/OPEL.png'
import Puegeot from './Assets/PEUGEOT.jpg'
import Renault from './Assets/RENAULT.png'
import SAAB from './Assets/SAAB.jpg'
import Tata from './Assets/TATA.jpg'
import Toyota from './Assets/TOYOTA.jpg'
import Voklswagen from './Assets/VOLKSWAGEN.jpg'
import Volvo from './Assets/VOLVO.jpg'

const Vehicles = () => {
  return (
    <div className='container'>
      <h2>Vehicles</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={honda} alt='honda' />
              <div className='card-body'></div>
            </div>

          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={Hyundai} alt='Hyundai'/>
              <div className='card-body'></div>
            </div>

          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={Isuzu} alt='Isuzu'/>
              <div className='card-body'></div>
            </div>

          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={Jaguar} alt='Jaguar'/>
              <div className='card-body'></div>
            </div>

          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={KIA} alt='Kia'/>
              <div className='card-body'></div>
            </div>

          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={Mazda} alt='Mazda' />
              <div className='card-body'></div>
            </div>

          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={Mercedes} alt='Mercedes'/>
              <div className='card-body'></div>
            </div>

          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={MINI} alt='MINI'/>
              <div className='card-body'></div>
            </div>

          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={Mitsubishi} alt='Mitsubushi'/>
              <div className='card-body'></div>
            </div>

          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={Nissan} alt='Nissan'/>
              <div className='card-body'></div>
            </div>

          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={Opel} alt='Opel'/>
              <div className='card-body'></div>
            </div>

          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={Puegeot} alt='Puegeot'/>
              <div className='card-body'></div>
            </div>

          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={Renault} alt='Renault'/>
              <div className='card-body'></div>
            </div>

          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={SAAB} alt='SAAB'/>
              <div className='card-body'></div>
            </div>

          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={Tata} alt='Tata'/>
              <div className='card-body'></div>
            </div>

          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={Toyota} alt='Toyota'/>
              <div className='card-body'></div>
            </div>
          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={Volvo} alt='Volvo'/>
              <div className='card-body'></div>
            </div>
          </div>
          <div className='col-md-4 mb-2 mt-2'>
            <div className='card middle-card'>
              <img src={Voklswagen} alt='Voklswage'/>
              <div className='card-body'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Vehicles