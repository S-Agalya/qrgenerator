import React from 'react'
import './QRCode.css';
const QRCode = () => {
  return (
    <div className='app-container'>
        <h1>QR CODE GENERATOR</h1>
        <img src="src\assets\download.jpeg" className='qr-code-image'/>
        <div>
            <label htmlFor='dataInput' className='input-label'>
                Data for QR Code
            </label>

            <input type='text' id='dataInput' placeholder='Enter data for QR Code'/>
            <label htmlFor='sizeInput' className='input-label'>
                image size (e.g 300):
            </label>
            <input type='text' id='sizeInput' placeholder='Enter image size'/>

            <button className='generate-button'>Generate QR Code</button>
            <button className='download-button'>Download QR Code</button>
        </div>
      <p className='footer'>Desgined By Agalya</p>
    </div>
  )
}

export default QRCode
