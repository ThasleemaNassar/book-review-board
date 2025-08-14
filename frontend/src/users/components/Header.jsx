import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faBars, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const [clickStatus, setClickStatus] = useState(false)
  const [dropDownStatus, setDropDownStatus] = useState(false)
  const [token, settoken]= useState("")
  
  
    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        settoken(sessionStorage.getItem("token"))
      }
    },[])

  return (
    <>
      <div className='p-3 flex justify-between items-center bg-amber-600'>
        <div className='flex items-center'>
          <img src="https://cdn-icons-png.flaticon.com/512/4/4259.png" alt="no image" style={{ width: '60px', height: '60px' }} />
          
        </div>
        <div className='ms-20'>
          <h1 className='text-4xl hidden md:flex font-bold'>BOOK REVIEW BOARD</h1>
        </div>
        <div className='flex items-center'>
          
          <div className='md:flex hidden'>
            { !token?<Link to={'/login'}>
          <button className='px-4 py-3 ms-5 border border-black rounded cursor-pointer'><FontAwesomeIcon icon={faUser} className='me-2' />Login</button>
          </Link>

            :
             <div className="relative inline-block text-left">
              <div>
                <button onClick={() => setDropDownStatus(!dropDownStatus)} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs " aria-expanded="true" aria-haspopup="true">
                  <img src="https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png" alt="user icon" style={{ width: '50px', height: '50px' }} />
                </button>
              </div>

              {dropDownStatus && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0"><FontAwesomeIcon icon={faPowerOff} /> Logout</a>

                </div>
              </div>}
            </div>}



          </div>
        </div>
      </div>

      <nav className='bg-amber-900 p-3'>
        <div className="flex md:hidden justify-between items-center px-3">
          <span onClick={() => setClickStatus(!clickStatus)} className='text-white text-2xl'><FontAwesomeIcon icon={faBars} /></span>
          <Link to={'/login'}>
            <button className='px-4 py-3 ms-5 border border-white rounded text-white cursor-pointer'><FontAwesomeIcon icon={faUser} className='me-2' />Login</button>
          </Link>

        {/* <div className="relative inline-block text-left">
          <div>
            <button onClick={() => setDropDownStatus(!dropDownStatus)} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs " aria-expanded="true" aria-haspopup="true">
              <img src="https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png" alt="user icon" style={{ width: '50px', height: '50px' }} />
            </button>
          </div>

          {dropDownStatus && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
            <div className="py-1" role="none">
              <Link to={'/profile'}><a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0"><FontAwesomeIcon icon={faAddressCard} /> Profile</a></Link>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0"><FontAwesomeIcon icon={faPowerOff} /> Logout</a>

            </div>
          </div>}
          </div> */}

        </div>
        <ul className={clickStatus ? 'md:flex justify-center text-white' : 'text-white md:flex hidden justify-center me-10 mt-4 md:mt-0'}>
          <Link to={'/'}><li className='px-3'>Home</li></Link>
          <Link to={'/all-books'}><li className='px-3'>Books</li></Link>
          <Link to={'/careers'}><li className='px-3'>Careers</li></Link>
          <Link to={'/contact'}><li className='px-3'>Contact</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Header

