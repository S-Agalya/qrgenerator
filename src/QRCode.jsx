import React, { useState } from 'react'
import './QRCode.css';
const QRCode = () => {
  const [img,setImg]=useState("")
  const [loading,setLoading]=useState(false)
  const [qrData,setQRData]=useState("")
  const [qrSize,setQRSize]=useState("")

  const isGenerateDisabled = !qrData.trim() || !qrSize.trim() || loading;
  


  async  function generator(){
    

        setLoading(true)
        setImg("")
        try {
          const timestamp = new Date().getTime();
          const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}&t=${timestamp}`
          setImg(url)
        } catch (error) {
          console.log("error in generating qr code",error)
        }finally{
          setLoading(false)
        }
    }

    function downloadQR(){
       if (!img) return;
      fetch(img).then((response)=>response.blob())
      .then((blob)=>{
        const link=document.createElement("a")
        link.href=URL.createObjectURL(blob)
        link.download=`${qrData}QRCode.png`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
    }
  return (
    <div className='app-container'>
        <h1>QR CODE GENERATOR</h1>
        {loading && <p className="loading-text">Please wait....</p>}

        {img && <img src={img} className='qr-code-image'/>}
        <div>
            <label htmlFor='dataInput' className='input-label'>
                Data for QR Code *
            </label>

            <input type='text' id='dataInput' value={qrData} placeholder='Enter data for QR Code' required onChange={(e)=>setQRData(e.target.value)}/>
            <label htmlFor='sizeInput' className='input-label'>
                image size (e.g 300)*:
            </label>
            <input type='text' id='sizeInput' value={qrSize} placeholder='Enter image size' required onChange={(e)=>setQRSize(e.target.value)}/>

            <button className='generate-button' disabled={isGenerateDisabled} onClick={generator}>Generate QR Code</button>
            <button className='download-button' onClick={downloadQR} disabled={!img}>Download QR Code</button>
        </div>
      <p className='footer'>Desgined By Agalya</p>
    </div>
  )
}

export default QRCode
