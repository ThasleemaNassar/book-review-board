import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faLocationDot, faSquareArrowUpRight, faXmark } from '@fortawesome/free-solid-svg-icons'

function Careers() {

  const [modalStatus, setModalStatus] = useState(false)
  
  return (
    <>
      <Header />

      <div className='grid grid-cols-[1fr_4fr_1fr] md:my-20 my-10'>
        <div></div>
        <div className='p-5'>
          <h1 className='text-center text-3xl'>Careers</h1>
          <p className='text-justify mt-5 md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas error id ipsa aliquid mollitia maxime tenetur et dolores delectus numquam. Quibusdam iure nisi sunt expedita odit perspiciatis unde praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, odio itaque nobis natus distinctio autem tempore animi fugiat! Ea rerum voluptates eos sequi beatae omnis molestiae perferendis nostrum aliquam quae.</p>
        </div>
        <div></div>
      </div>

      <h1 className='md:ms-20 ms-10 text-2xl my-10'>Current Openings</h1>
      <div className="md:grid grid-cols-3 my-10">
        <div></div>
        <div className="flex px-5">
          <input type="text" placeholder='Search by Title' className='bg-white p-2 border border-gray-200 w-full' />
          <button className='bg-green-900 px-4 py-3 text-white hover:bg-green-950'>Search</button>
        </div>
        <div></div>
      </div>

      <div className='grid grid-cols-[1fr_4fr_1fr] md:my-20 my-10 px-5'>
        <div></div>
        <div className='p-5 shadow rounded'>
          <div className="grid grid-cols-[8fr_1fr]">
            <div>
              <h1 className='text-xl'>Job Title</h1>
              <hr className='border-gray-300 mt-3' />
            </div>
            <div>
              <button onClick={()=>setModalStatus(true)} className='bg-blue-800 py-3 px-3 rounded text-white ms-4'>Apply<FontAwesomeIcon icon={faSquareArrowUpRight} className='ms-1' /> </button>
            </div>
          </div>
          <div className='my-4'>
            <h1 className='text-blue-700'><FontAwesomeIcon icon={faLocationDot} /> Location</h1>
            <h1 className='mt-3'>Job Type : </h1>
            <h1 className='mt-3'>Salary : </h1>
            <h1 className='mt-3'>Qualification : </h1>
            <h1 className='mt-3'>Experience : </h1>
            <h1 className='text-justify mt-3'>Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed facere provident explicabo voluptatum quas in? Corporis, et, pariatur maiores doloremque ullam cumque sapiente corrupti est, dolor excepturi saepe inventore necessitatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit repellat autem sed possimus minus maxime adipisci. Suscipit corporis sed quisquam cum incidunt distinctio eligendi iure, quam perspiciatis assumenda eius necessitatibus.</h1>
          </div>
        </div>
        <div></div>
      </div>

      {modalStatus &&
            <div className="relative z-10" aria-labelledby="dialog-title" role="dialog" aria-modal="true" >
      
              <div className="fixed inset-0 bg-gray-500/75 transition-opacity"  aria-hidden="true"></div>
      
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      
                  <div className="relative transform overflow-hidden rounded bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                    <div className="bg-white">

                      {/* modal heading */}
                      <div className='bg-gray-900 p-4 text-white flex justify-between items-center'>
                        <p className='text-xl'>Application Form</p>
                        <FontAwesomeIcon icon={faXmark} className='fa-2x' onClick={()=>setModalStatus(false)} />
                      </div>

                      {/* modal body */}
                      <div className='p-4'>
                        <div className="md:grid grid-cols-2">
                          <div className='px-2'>
                            <div className="mb-3">
                              <input type="text" placeholder='Full Name' className='p-2 border border-gray-200 w-full rounded' />
                            </div>
                            <div className="mb-3">
                              <input type="text" placeholder='Email ID' className='p-2 border border-gray-200 w-full rounded' />
                            </div>
                          </div>
                          <div className='px-2'>
                            <div className="mb-3">
                              <input type="text" placeholder='Qualification' className='p-2 border border-gray-200 w-full rounded' />
                            </div>
                              <div className="mb-3">
                              <input type="text" placeholder='Phone' className='p-2 border border-gray-200 w-full rounded' />
                            </div>
                          </div>
                        </div>

                        <div className="px-2 md-3">
                          <textarea placeholder='Cover Letter' className='p-2 border border-gray-200 w-full rounded' ></textarea>
                        </div>
                        <div className="px-2 md-3">
                          <input type="file" className='border border-gray-200 w-full rounded file:bg-gray-300 file:p-2 file:text-gray-500' />
                        </div>
      
                      </div>

                      {/* modal footer */}
                      <div class="bg-gray-300 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button type="button" class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto">Submit</button>
            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 hover:text-yellow-600 sm:mt-0 sm:w-auto">Reset</button>
          </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}

      <Footer />
    </>
  )
}

export default Careers

