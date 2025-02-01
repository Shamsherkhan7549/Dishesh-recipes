import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Contact = () => {
  return (
    <>
      <Navbar/>
      <div className='container'>
          <div className='row'>
            <div className="col-12 col-sm-10 col-md-8 col-lg-8 col-xl-6">
              <form action="" className='my-5 d-flex flex-column gap-4'>
              <h2>Contact Us</h2>
                <input type="text" placeholder='Your name' className='form-control'/>
                <input type="text " placeholder='Your email' className='form-control'/>
                <textarea type="text" placeholder='Message' rows={5} className='form-control'/>
                <button type='submit' className='w-25 bg-success text-white rounded border-none'>Submit</button>
              </form>
            </div>
          </div>
      </div>
      <div className='fixed-bottom'>
      <Footer/>
      </div>
    </>
  )
}

export default Contact