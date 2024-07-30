import React from 'react'

const Header = () => {
  return (
    <div>
        <nav>
            <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/blog">Blog</Link>
            </li>
            <li>
            <Link to="/menu">Gallery</Link>
            </li>
            <li>
            <Link to="/vehicles"> Vehicles</Link>
            </li>
            <li>
            <Link to="/reserve">Parts</Link>
            </li>
            <li>
            <Link to="/reserve">Careers</Link>
            </li>
            <li>
            <Link to="/reserve">Contact us</Link>
            </li>
        </ul>
    </nav>
    </div>
  )
}

export default Header