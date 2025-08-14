import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <>
      <div className='md:grid grid-cols-3 md:p-10 p-5 text-white bg-amber-900'>
        <div>
          <h1 className='text-2xl'>ABOUT US</h1>
          <p className='mt-3 text-justify'>At Book Review Board, we believe that stories have the power to inspire, educate, and connect people across the world. Our mission is to bring the joy of reading into the palm of your hand, anytime and anywhere.</p>
        </div>
        <div className='md:flex justify-center md:py-0 py-5 '>
          <div>
            <h1 className='text-2xl'>NEWS LETTER</h1>
            <p className='mt-4'>Stay Updated with our latest trends</p>
            <div className='flex mt-4'>
              <input type="text" placeholder='Email ID' className='bg-white p-2 placeholder:text-gray-400 text-black' />
              <button className='bg-amber-400 py-2 px-3 text-black'><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
          </div>
        </div>
        <div>
          <h1 className='text-2xl'>FOLLOW US</h1>
          <p className='mt-4'>Let us be social</p>
          <div className='flex mt-3'>
            <FontAwesomeIcon icon={faInstagram} className='me-2' />
            <FontAwesomeIcon icon={faXTwitter} className='me-2' />
            <FontAwesomeIcon icon={faFacebook} className='me-2' />
            <FontAwesomeIcon icon={faLinkedin} className='me-2' />
          </div>
        </div>
      </div>
      <div className="bg-black p-2 text-center">
        <p className='text-white' style={{ fontSize: '10px' }}>Copyright @ 2023 All rights reserved | This website is made with<span className='text-amber-300'><FontAwesomeIcon icon={faHeart} className='mx-1' /> </span>by Thasleema Nassar</p>
      </div>
    </>
  )
}

export default Footer

