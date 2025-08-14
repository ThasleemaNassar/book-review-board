import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { loginApi, registerApi } from '../services/allApi'

function Auth({register}) {


  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  //console.log(userDetails);

  const navigate = useNavigate()

  const handleRegister = async () => {

    const { username, password, email } = userDetails

    if (!username || !password || !email) {
      toast.info('Please fill the form completely')
    }
    else {
      const result = await registerApi({ username, password, email })
      console.log(result);
      if (result.status == 200) {
        toast.success("Registration successful")
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        navigate('/login')
      }
      else if (result.status == 406) {
        toast.warning(result.response.data)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      }
      else {
        toast.error("Something went wrong")
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      }
    }
  }


  const handleLogin = async () => {

    const { email, password } = userDetails

    if (!email || !password) {
      toast.info("Please enter all details")
    }
    else {
      const result = await loginApi({ email, password })
      console.log(result);

      if (result.status == 200) {

        toast.success("Login successful")
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        setTimeout(() => {
            navigate('/')
          }, 2002)
      }

      else if (result.status == 403 || result.status == 406) {
        toast.warning(result.response.data)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      }
      else {
        toast.error("Something went wrong")
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      }
    }


  }

  return (
    <>
      <div id='loginpage' className='flex justify-center items-center flex-col'>
        <h1 className='text-4xl font-bold'>BOOK REVIEW BOARD</h1>
        <div className="md:grid grid-cols-3 w-full mt-10">
          <div></div>
          <div className='p-5'>
            <form className='bg-amber-900 p-5 rounded flex justify-center items-center flex-col'>
              <div style={{width:'70px', height:'70px', borderRadius:'50%', border:'1px solid white'}} className='flex justify-center items-center text-white'>
                <FontAwesomeIcon icon ={faUser} className='fa-2x'/>
              </div>

              {register? <h1 className='text-white text-2xl my-4'>Register</h1> :
              <h1 className='text-white text-2xl my-4'>Login</h1>}
              
              {register&&<div className="my-3 w-full">
                <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='Username' className='w-full bg-white rounded p-2' />
              </div>}
        
              <div className="my-3 w-full">
                <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type="text" placeholder='Email' className='w-full bg-white rounded p-2' />
              </div>
              <div className="my-3 w-full">
                <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type="text" placeholder='Password' className='w-full bg-white rounded p-2' />
              </div>
              <div className="my-3 w-full">
                {register?<button type='button' onClick={handleRegister} className='w-full bg-green-700 p-2 rounded text-white hover:bg-green-800'>Register</button> :
                <button type='button' onClick={handleLogin} className='w-full bg-green-700 p-2 rounded text-white hover:bg-green-800'>Login</button>}
              </div>
              
              <div className='text-white'>
                {register?<p>Are you Already User? <Link to={'/login'} className='text-blue-400 underline'>Login</Link></p> :
                <p>Are you a New User? <Link to={'/register'} className='text-blue-400 underline'>Register</Link></p>}
              </div>
            </form>
          </div>
          <div></div>
        </div>
      </div>  

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )
}

export default Auth

