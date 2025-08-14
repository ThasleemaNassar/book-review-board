import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCamera, faEye, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { addReviewApi, viewBookApi, viewReviewsApi } from '../../services/allApi'
import { FaStar } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify'


function Viewbook() {
  const [token, setToken] = useState("")
  const [modalStatus, setModalStatus] = useState(false)
  const [viewBook, setViewBook] = useState({})
  const [viewReview, setViewReview] = useState([])
  const [form, setForm] = useState({ rating: 0, comment: '' });

  const handleReset = () => {
    setForm({rating:0, comment:''})
  }


  const { id } = useParams()
  // console.log(id);

  const getViewBookDetails = async (id) => {
    const result = await viewBookApi(id)
    // console.log(result);
    setViewBook(result.data);
  }

  const getViewReviews = async () => {
    const result = await viewReviewsApi()
    // console.log(result);
    setViewReview(result.data);
  }
  console.log(viewReview);

  const addReview = async()=>{
    
    const {rating, comment} = form
    console.log(form);
    
    if(!rating || !comment){
      toast.info("Please add Rating & Review")
    }
    else{
       
      // create reqHeader
            const reqHeader = {
              "Authorization": `Bearer ${token}`
            }
            // console.log(reqHeader);
            
            console.log(form);
      
            const result = await addReviewApi(form, reqHeader)
            console.log(result);
      
            if (result.status == 200) {
              toast.success("Review added successfully")
      
            }
            else if (result.status == 401) {
              toast.warning(result.response.data)
      
            }
            else {
              toast.error("Something went wrong")
            }
      
            handleReset()
      
    }
  }


  useEffect(() => {if (sessionStorage.getItem("token")) {
      const tok = sessionStorage.getItem("token")
      setToken(tok)
    getViewBookDetails(id)
    getViewReviews()
  }
  }, [])


  return (
    <>
      <Header />

      <div className="md:p-20 p-5">
        <div className="md:p-10 p-5 shadow w-full">

          <div className="md:grid grid-cols-[1fr_3fr] w-full overflow-x-hidden">
            <div>
              <img src={viewBook?.imageurl} alt="no image" style={{ width: '100%', height: '400px' }} />
            </div>
            <div className="px-4 mt-5 md:mt-0">
              <h1 className='text-center font-medium text-3xl'>{viewBook?.title}</h1>
              <p className='text-blue-500 text-center mt-3 md:mt-0'>{viewBook?.author}</p>

              <div className='md:flex justify-between mt-10'>
                <p className='mt-3 md:mt-0'>Language : {viewBook?.language}</p>
                <p className='mt-3 md:mt-0'>Real Price : {viewBook?.price}</p>

              </div>
              <div className='md:flex justify-between mt-3'>
                <p className='mt-3 md:mt-0'>No. of pages : {viewBook?.noofpages}</p>
                <p className='mt-3 md:mt-0'>Discounted Price : {viewBook?.dprice}</p>

              </div>

              <h2 className='font-medium my-5 text-xl'>Reviews</h2>
              {viewReview?.length>0 ?
              viewReview?.map((item) => (
                <div className='my-10'>
                  <h4 className='my-2 font-bold'>{item?.username}</h4>
                <p className='mb-2'>Rating : {item?.rating} stars</p>
                <p className='text-justify'>{item?.comment}</p>
                </div>
              ))
              :
              <p>No reviews added yet </p>}
              <div className='flex justify-end m-10'>
                <Link to={'/all-books'}><button className='bg-blue-800 hover:bg-blue-900 text-white me-2 p-2'><FontAwesomeIcon icon={faBackward} className='text-white mx-2' />Back</button></Link>
                <button type='button' onClick={() => setModalStatus(true)} className='bg-green-800 hover:bg-green-900 text-white me-2 p-2'>Add Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* add review modal */}

      {modalStatus &&

        <div className="relative z-10" aria-labelledby="dialog-title" role="dialog" aria-modal="true" >

          <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

              <div className="relative transform overflow-hidden rounded bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                <div className="bg-white">
                  <div className='bg-gray-900 p-4 text-white flex justify-between items-center'>
                    <p className='text-xl'>Rate & Review</p>
                    <FontAwesomeIcon icon={faXmark} className='fa-2x' onClick={() => setModalStatus(false)} />
                  </div>
                  <div className="bg-gray-300 md:p-10 p-5  rounded">

                    <div className='flex flex-col'>

                      <div className="my-3 w-full flex justify-center items-center">
                        <label className='text-center'>Rating :
                          <div className='flex justify-center items-center my-2'>
                            {[1, 2, 3, 4, 5].map(num => (
                              <FaStar
                                key={num}
                                size={24}
                                style={{ cursor: 'pointer' }}
                                color={num <= form.rating ? '#ffc107' : '#e4e5e9'}
                                onClick={() => setForm({ ...form, rating:num })}
                              />
                            ))}
                          </div>
                        </label>
                      </div>
                      <div className="mb-3">
                        <textarea value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} placeholder='Comments' rows={'7'} className='p-2 bg-white rounded w-full'></textarea>
                      </div>

                      <div className="flex md:justify-end justify-center mt-4">
                        <button type='button' onClick={handleReset} className='bg-amber-700 text-white px-5 py-3 rounded hover:border hover:border-amber-700 hover:text-amber-700 hover:bg-white'>Reset</button>
                        <button type='button' onClick={addReview} className='bg-green-700 text-white px-5 py-3 rounded hover:border hover:border-green-700 hover:text-green-700 hover:bg-white ms-4'>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>}
<ToastContainer position='top-center' theme='colored' autoClose={2000} />


    </>
  )
}

export default Viewbook
