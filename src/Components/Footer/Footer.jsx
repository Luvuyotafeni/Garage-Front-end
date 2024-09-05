import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='shorts'>
        <div>
            <h3>Quick Links</h3>
            <div></div>
        </div>
        <div>
            <h3>Address</h3>
            <div>
                <p>
                    SHOP NO: 10, EZIMBUZINI AUTO HUB, ISIZINDA
                    SOMAKHENIKHA,MUNICIPALITY MECHANICAL WORKSHOPS, 
                    CORNER OF PRINCE MCWAYIZENI DRIVE, DURBAN 4089
                </p>
            </div>
        </div>
        <div>
            <h3>Working Hours</h3>
            <div>
                <p>Mon-fri <span>07:00 - 17:00</span></p>
                <p>Sat-Sun <span>08:00 - 15:00</span></p>
                <p>Public holidays<span>09:00 - 14:00</span></p>
            </div>
        </div>
    </div>
  )
}

export default Footer