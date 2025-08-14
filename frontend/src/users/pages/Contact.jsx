import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faLocationDot, faMailBulk, faMailForward, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <>
      <Header />

      <div className='grid grid-cols-[1fr_4fr_1fr] mt-10'>
        <div></div>
        <div className='p-5'>
          <h1 className='text-center text-3xl'>Contacts</h1>
          <p className='text-justify mt-5 md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas error id ipsa aliquid mollitia maxime tenetur et dolores delectus numquam. Quibusdam iure nisi sunt expedita odit perspiciatis unde praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, odio itaque nobis natus distinctio autem tempore animi fugiat!</p>
        </div>
        <div></div>
      </div>

      <div className='md:grid grid-cols-3 md:p-10 p-5 md:ms-20'>
        <div className='flex justify-center items-center'>
          <div>
            <FontAwesomeIcon icon={faLocationDot} className='me-2 bg-gray-400 p-3 rounded flex justify-center items-center flex-col' style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid white' }} />
          </div>
          <div>
            <p>123 Main Steer, Apt 4B,</p>
            <p> Anytown, CA91234</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div>
            <FontAwesomeIcon icon={faPhone} className='me-2 bg-gray-400 p-3 rounded flex justify-center items-center flex-col' style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid white' }} />
          </div>
          <div>
            <p className='text-justify'>+91 9446139131</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div>
            <FontAwesomeIcon icon={faEnvelopeOpenText} className='me-2 bg-gray-400 p-3 rounded flex justify-center items-center flex-col' style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid white' }} />
          </div>
          <div>
            <p className='text-justify'>bookreviewboard@gmail.com</p>
          </div>
        </div>

      </div>

      <div className="md:grid grid-cols-2 md:p-10 p-5 md:ms-20">
        <div className='md:px-10'>
          <form className='bg-gray-400 p-5 rounded flex justify-center items-center flex-col'>
            <h1 className='text-center text-xl font-bold m-5'>Send me Message</h1>
            <div className="my-1 w-full">
              <input type="text" placeholder='Name' className='w-full bg-white rounded p-2' />
            </div>
            <div className="my-1 w-full">
              <input type="text" placeholder='Email ID' className='w-full bg-white rounded p-2' />
            </div>
            <div className="my-1 w-full">
              <textarea placeholder='Message' rows={'5'} className='p-2 border bg-white w-full rounded' ></textarea>
            </div>
            <div className="my-1 w-full">
              <button className='bg-black text-white rounded w-full'>Send<FontAwesomeIcon icon={faPaperPlane} className='ms-2' /> </button>
            </div>
          </form>
        </div>
        <div className='md:px-10 md:py-0 py-5'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251479.49747840138!2d76.13730642420359!3d9.986500064936651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1750276957492!5m2!1sen!2sin" className='rounded' style={{ width:'450px', height:'390px', border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div >

      <Footer />
    </>
  )
}

export default Contact

