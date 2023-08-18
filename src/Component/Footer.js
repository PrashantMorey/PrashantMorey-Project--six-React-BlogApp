import React from 'react'
import facebook from './Images/facebook.png'
import twitter from './Images/twitter.png'
import instagram from './Images/instagram.png'
import youtube from './Images/youtube.png'

function Footer() {
  return (
    <div className='footer'>
        <div  className='footerInside'>
            <p><b style={{color:'white'}}>For Business</b></p>
            <p>Employer</p>
            <p>Helth Plan</p>
            <p>Individual</p>
        </div>
        <div className='footerInside'>
            <p><b style={{color:'white'}}>Resources</b></p>
            <p>Resource Center</p>
            <p>Testiomonials</p>
            <p>STV</p>
        </div>
        <div className='footerInside'>
            <p><b style={{color:'white'}}>Partners</b></p>
            <p>Swming Tech</p>
        </div>
        <div className='footerInside'>
            <p><b style={{color:'white'}}>Company</b></p>
            <p>About</p>
            <p>Press</p>
            <p>Career</p>
            <p>Contact</p>
        </div>
        <div className='footerInside'>
            <p><b style={{color:'white'}}>Cpming soon on</b></p>
            <p>
            <div className="LogosOfShare">
                  <img className="imgFace" src={facebook} alt="facebook" />
                  <img src={twitter} alt="twitter" />
                  <img src={instagram} alt="instagram" />
                  <img className="imgYou" src={youtube} alt="youtube" />
                </div>
            </p>
        </div>
    </div>
  )
}

export default Footer
