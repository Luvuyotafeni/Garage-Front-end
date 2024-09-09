import React from 'react'
import promoter from './Assets/bullhorn_1997928.png'
import marketing from './Assets/target-marketing_13339945.png'
import Mechanic1 from './Assets/Mechanic1.jpg'
import Mechanic2 from './Assets/images (6).jpg'
import Mechanic3 from './Assets/images (7).jpg'
import './Careers.css'

const Careers = () => {
  return (
    <div>
      <h2 className='text-center'>Careers</h2>
      <div className='careers'>
        <div className='f_flex'>
          <div className='career_info'>
            <h5>Engine Mechanic</h5>
            <ul>
              <li>Barchelors Degree Mechanical Engineering</li>
              <li>2+ years experience</li>
            </ul>
          </div>
          <div>
            <img src={Mechanic1}/>
          </div>
        </div>
        <div className='f_flex'>
          <div>
            <img src={Mechanic2}></img>
          </div>
          <div className='career_info'>
            <h5>Gear Manual And Diff Mechanic</h5>
            <ul>
              <li>Barchelors Degree Mechanical Engineering</li>
              <li>2+ years experience</li>
            </ul>
          </div>
        </div>
        <div className='f_flex'>
          <div className='career_info'>
            <h5>Automatic Gearbox Mechanic</h5>
            <ul>
              <li>Barchelor's Degree in Mechanical Engineering</li>
              <li>2+ years experience</li>
            </ul>
          </div>
          <div>
            <img src={Mechanic3} />
          </div>
        </div>
        <div className='f_flex'>
          <div>
            <img src={promoter}></img>
          </div>
          <div className='career_info'>
            <h5>Online promoter</h5>
            <ul>
              <li>2+ years experience</li>
            </ul>
          </div>
        </div>
        <div className='f_flex'>
          <div className='career_info'>
            <h5>Marketing specialist</h5>
            <ul>
              <li>2+ years experience</li>
            </ul>
          </div>
          <div>
            <img src={marketing}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers