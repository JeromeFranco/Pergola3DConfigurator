import React from 'react';
import MaterialIcon from 'material-icons-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer-section'>
        <div>
          MODEL
        </div>
        <div>
          <select className='Footer-model-select'>
            <option value="camargue">Camargue</option>
          </select>
        </div>
      </div>
      <div className='Footer-section'>
        <div>
          <MaterialIcon icon='euro_symbol' size={50} color='#fff' />
        </div>
        <div>
          <div className='Footer-section-label'>STARTING AT</div>
          <div className='Footer-section-value'>0.00</div>
        </div>
      </div>
      <div className='Footer-section'>
        <div>
          <MaterialIcon icon='phone_iphone' size={50} color='#fff' />
        </div>
        <div>
          <div className='Footer-section-label'>GET IN TOUCH</div>
          <div className='Footer-section-value'>+32 56 62 71 11</div>
        </div>
      </div>
      <div className='Footer-section Footer-download'>
        <div>
          <div className='Footer-section-label'>REVIEW &amp;</div>
          <div className='Footer-section-value'>DOWNLOAD</div>
        </div>
        <div>
          <MaterialIcon icon='save_alt' size={50} color='#fff' />
        </div>
      </div>
    </footer>
  )
}


export default Footer;