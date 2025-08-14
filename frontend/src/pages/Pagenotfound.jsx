import React from 'react'

function Pagenotfound() {
  return (
    <>
      <div className='grid grid-cols-3 w-full mt-10'>
      <div></div>
      <div className='flex justify-center items-center flex-col'>
        <img src="https://miro.medium.com/v2/resize:fit:1400/0*GUYQoLJ08bNdTigR.gif" alt="no image" className='w-full' />
        <div className='text-center'>
          <p>Oh No !</p>
          <h1 className='text-5xl mt-3'>Looks like you're Lost</h1>
          <p className='text-xl mt-3'>The page you are looking for is not available</p>
        </div>
        <button className='mt-5 bg-blue-900 text-white px-4 py-3 hover:bg-white hover:border hover:border-blue-900 hover:text-blue-900 '>Back Home</button>
      </div>
      <div></div>
      
    </div>
    </>
  )
}

export default Pagenotfound
