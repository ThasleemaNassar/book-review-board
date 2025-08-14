import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import { addBookApi, homeBookApi } from '../../services/allApi'

function AllBooks() {
  const [token, setToken] = useState("")
  const [allHomeBook, setAllHomeBook] = useState([])

  const getAllHomeBook = async () => {
    const result = await homeBookApi()
    console.log(result);
    setAllHomeBook(result.data)

  }
  console.log(allHomeBook);



  const [modalStatus, setModalStatus] = useState(false)

  const [bookDetails, setbookDetails] = useState({
    title: "",
    author: "",
    language: "",
    noofpages: "",
    isbn: "",
    imageurl: "",
    category: "",
    price: "",
    dprice: "",
    abstract: "",
    uploadImages: []

  })
  // console.log(bookDetails);
  const [preview, setPreview] = useState("")
  const [allUploadedImage, setallUploadedImage] = useState([])


  const handleUpload = (e) => {
    // console.log(e.target.files);
    const fileArray = bookDetails.uploadImages
    fileArray.push(e.target.files[0])
    setbookDetails({ ...bookDetails, uploadImages: fileArray })

    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
    // console.log(preview);

    let images = allUploadedImage
    images.push(url)
    setallUploadedImage(images)
    // console.log(allUploadedImage);
  }

  const handleReset = () => {
    setbookDetails({
      title: "",
      author: "",
      language: "",
      noofpages: "",
      isbn: "",
      imageurl: "",
      category: "",
      price: "",
      dprice: "",
      abstract: "",
      uploadImages: []
    })
    setPreview("")
    setallUploadedImage([])
  }

  const handleSubmit = async () => {
    const { title, author, language, noofpages, isbn, imageurl, category, price, dprice, abstract, uploadImages } = bookDetails
    console.log(title, author, language, noofpages, isbn, imageurl, category, price, dprice, abstract, uploadImages);
    if (!title || !author || !language || !noofpages || !isbn || !imageurl || !category || !price || !dprice || !abstract || uploadImages.length == 0) {
      toast.info("Please complete the form properly")
    }
    else {
      const reqbody = new FormData()

      for (let key in bookDetails) {
        if (key != 'uploadImages') {
          reqbody.append(key, bookDetails[key])
        }
        else {
          bookDetails.uploadImages.map((item) => {
            reqbody.append("uploadImages", item)
          })
        }
      }
      console.log(reqbody);

      // create reqHeader
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      console.log(reqbody);

      const result = await addBookApi(reqbody, reqHeader)
      console.log(result);

      if (result.status == 200) {
        toast.success("Book added successfully")

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

  useEffect(() => {

    if (sessionStorage.getItem("token")) {
      const tok = sessionStorage.getItem("token")
      setToken(tok)

      getAllHomeBook()

    }
  }, [])


  return (
    <>
      <Header />
      { token ? <div>
        <h1 className='my-10 text-center text-3xl'>Collections</h1>
        <div className="md:grid grid-cols-3 px-5">
          <div></div>
          <div className='flex justify-center items-center'>
            <button type='button' onClick={() => setModalStatus(true)} className='bg-amber-600 rounded-2xl px-4 py-3 mb-2 text-white hover:bg-amber-700'> Add New Book</button>
          </div>
          <div></div>
        </div>
        <section className='flex justify-center items-center flex-col md:p-10 md:px-40 p-5'>
          <div className='md:grid grid-cols-4 p-5'>
            {allHomeBook?.length > 0 ?
              allHomeBook?.map((item) => (
                <div className="p-3">
                  <div className="p-3 shadow-md">
                    <img src={item.imageurl} alt="no image" style={{ width: '100%', height: '300px' }} />
                    <div className="flex justify-center flex-col items-center mt-2">
                      <p className='text-amber-700'>Author</p>
                      <h3>{item.title.slice(0, 20)}...</h3>
                      <p>${item.dprice}</p>
                      <Link to={`/view-book/${item?._id}`} className='w-full'><button className='bg-amber-900 w-full p-2 text-white mt-3 hover:bg-amber-950'>View Book</button></Link>
                    </div>
                  </div>
                </div>))
              :
              <p>Loading...</p>}

          </div>
        </section>
      </div>
      :
      <div className="md:grid grid-cols-3 md:px-10 px-5 my-10">
        <div></div>
        <div>
          <img src="https://i.gifer.com/5F5d.gif" alt="no image" style={{ width: '100%', height: '400px' }} />
          <h1 className='text-center text-2xl text-blue-700'>Please <Link to={'/login'} className='text-red-600 underline'>Login</Link> To Explore More </h1>
        </div>
        <div></div>
      </div>}




      {modalStatus &&
        <div className="relative z-10" aria-labelledby="dialog-title" role="dialog" aria-modal="true" >

          <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

              <div className="relative transform overflow-hidden rounded bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                <div className="bg-white">
                  <div className='bg-gray-900 p-4 text-white flex justify-between items-center'>
                    <p className='text-xl'>Add Book</p>
                    <FontAwesomeIcon icon={faXmark} className='fa-2x' onClick={() => setModalStatus(false)} />
                  </div>
                  <div className="bg-gray-300 md:p-10 p-5 rounded">
                    <h1 className='text-center text-2xl font-medium'>Book Details</h1>
                    <div className='md:grid grid-cols-2'>
                      <div className='md:my-10 my-3 px-2'>
                        <div className="mb-3">
                          <input type="text" value={bookDetails.title} onChange={(e) => setbookDetails({ ...bookDetails, title: e.target.value })} placeholder='Title' className='p-2 bg-white rounded w-full' />
                        </div>
                        <div className="mb-3">
                          <input type="text" value={bookDetails.author} onChange={(e) => setbookDetails({ ...bookDetails, author: e.target.value })} placeholder='Author' className='p-2 bg-white rounded w-full' />
                        </div>
                        <div className="mb-3">
                          <input type="text" value={bookDetails.noofpages} onChange={(e) => setbookDetails({ ...bookDetails, noofpages: e.target.value })} placeholder='No. of Pages' className='p-2 bg-white rounded w-full' />
                        </div>
                        <div className="mb-3">
                          <input type="text" value={bookDetails.imageurl} onChange={(e) => setbookDetails({ ...bookDetails, imageurl: e.target.value })} placeholder='Image Url' className='p-2 bg-white rounded w-full' />
                        </div>
                        <div className="mb-3">
                          <input type="text" value={bookDetails.price} onChange={(e) => setbookDetails({ ...bookDetails, price: e.target.value })} placeholder='Price' className='p-2 bg-white rounded w-full' />
                        </div>
                        <div className="mb-3">
                          <input type="text" value={bookDetails.dprice} onChange={(e) => setbookDetails({ ...bookDetails, dprice: e.target.value })} placeholder='Discount Price' className='p-2 bg-white rounded w-full' />
                        </div>
                        <div className="mb-3">
                          <textarea placeholder='Abstract' value={bookDetails.abstract} onChange={(e) => setbookDetails({ ...bookDetails, abstract: e.target.value })} rows={'3'} className='p-2 bg-white rounded w-full'></textarea>
                        </div>
                      </div>
                      <div className='md:my-10 px-2'>

                        <div className="mb-3">
                          <input type="text" value={bookDetails.language} onChange={(e) => setbookDetails({ ...bookDetails, language: e.target.value })} placeholder='Language' className='p-2 bg-white rounded w-full' />
                        </div>
                        <div className="mb-3">
                          <input type="text" value={bookDetails.isbn} onChange={(e) => setbookDetails({ ...bookDetails, isbn: e.target.value })} placeholder='ISBN' className='p-2 bg-white rounded w-full' />
                        </div>
                        <div className="mb-3">
                          <input type="text" value={bookDetails.category} onChange={(e) => setbookDetails({ ...bookDetails, category: e.target.value })} placeholder='Category' className='p-2 bg-white rounded w-full' />
                        </div>

                        <div className='flex justify-center items-center mt-10 flex-col'>
                          {!preview ? <label htmlFor="uploadBookImg">
                            <input type="file" id='uploadBookImg' style={{ display: 'none' }} onChange={(e) => handleUpload(e)} />
                            <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="no image" id='uploadBookImg' style={{ width: '150px', height: '150px' }} />
                          </label>
                            :
                            <img src={preview} alt="no image" style={{ width: '200px', height: '200px' }} />
                          }

                          {preview && <div className='mt-5 flex items-center'>
                            {allUploadedImage.map((item) => (
                              <img src={item} alt="no image" style={{ width: '50px', height: '50px' }} className='mx-2' />
                            ))
                            }


                            {allUploadedImage.length < 3 && <label htmlFor="uploadBookImg">
                              <input type="file" id='uploadBookImg' style={{ display: 'none' }} onChange={(e) => handleUpload(e)} />
                              <FontAwesomeIcon icon={faPlus} className='p-2 shadow-lg bg-gray-400 border border-white ms-4' />
                            </label>}


                          </div>}
                        </div>

                      </div>


                    </div>

                    <div className="flex md:justify-end justify-center mt-4">
                      <button onClick={handleReset} className='bg-amber-700 text-white px-5 py-3 rounded hover:border hover:border-amber-700 hover:text-amber-700 hover:bg-white'>Reset</button>
                      <button onClick={handleSubmit} className='bg-green-700 text-white px-5 py-3 rounded hover:border hover:border-green-700 hover:text-green-700 hover:bg-white ms-4'>Submit</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

      <Footer />
    </>
  )
}

export default AllBooks

