import React, { useEffect, useState } from 'react'
import Header from '../users/components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Landingpage() {

  
    
useEffect(()=>{

const carousel = document.getElementById("carousel");
  const slides = document.querySelectorAll("#carousel > div");
  const totalSlides = slides.length;
  let index = 0;

  document.getElementById("nextBtn").addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  });
  setInterval(() => {
  index = (index + 1) % totalSlides;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}, 3000);
},[])
  return (
    <>
    <Header/>
    <header className='flex justify-center items-center'>
      <div id='main' className="flex justify-center items-center w-full">
        <div className='md:gird grid-cols-3 w-full'>
          <div></div>
          <div className='text-white flex justify-center items-center flex-col px-5'>
            <h1 className='text-5xl text-shadow-2xs text-shadow-black'>Share your thoughts on books you love</h1>
            <p className='text-black'>Post books you’ve read and leave quick, meaningful reviews</p>
            <div className='flex justify-center items-center mt-10 w-full'>
              <input type="text" placeholder='Search Books' className='py-2 px-4 bg-white rounded-3xl placeholder-gray-400 w-xl text-black'/>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='text-blue-600' style={{marginTop:'5px', marginLeft:'-40px'}}/>
            </div>
          </div>
          <div></div>
        </div>
      </div>
        
    </header>

    {/* new arrival */}
    <section className='flex justify-center items-center flex-col md:p-10 md:px-40 p-5'>

      <div className='flex justify-center items-center my-5'>
        <Link to={'/all-books'}><button className='px-3 py-2 rounded-2xl bg-amber-800 text-white hover:border hover:border-amber-800 hover:bg-white hover:text-amber-900'>Explore More</button></Link>
      </div>
    </section>

    {/* Author */}
    <section className='flex justify-center items-center flex-col md:p-10 md:px-40 p-5'>
      <div className='md:grid grid-cols-2 w-full'>
        <div>
          <div className="flex justify-center items-center flex-col">
            <h4>FEATURED AUTHORS</h4>
            <h1 className='text-2xl'>Captivates with every word</h1>
            
            <p className='mt-5 text-justify'>When you want something, all the universe conspires in helping you to achieve it. There is only one thing that makes a dream impossible to achieve: the fear of failure. The secret of life, though, is to fall seven times and to get up eight times. The simple things are also the most extraordinary things, and only the wise can see them. Everyone seems to have a clear idea of how other people should lead their lives, but none about his or her own.</p>
            <p className='mt-3 text-justify'>Tell your heart that the fear of suffering is worse than the suffering itself. And that no heart has ever suffered when it goes in search of its dreams, because every second of the search is a second's encounter with God and with eternity. Don't give in to your fears. If you do, you won't be able to talk to your heart. People are capable, at any time in their lives, of doing what they dream of.</p>
            <p className='mt-6 text-justify'>- Paulo Coelho</p>
          </div>
        </div>
        <div>
          <div>
            <img className='mx-10 mt-10' src="https://highprofiles.info/wp-content/uploads/2016/04/coelho-main-900x675.jpg" alt="no image" style={{height:'400px'}} />
          </div>
        </div>
      </div>
    </section>

    {/* testimonials */}
    <div className="flex justify-center items-center flex-col md:py-10 md:px-40 p-6">
      <h3>TESTIMONIALS</h3>
      <h3 className='text-2xl'>See What Others Are Saying</h3>
    

    {/* <!-- Carousel Container --> */}
<div className="relative w-full max-w-4xl mx-auto overflow-hidden">
  
  {/* <!-- Carousel Slides --> */}
  <div id="carousel" className="flex transition-transform duration-500">
    <div className="min-w-full flex justify-center items-center flex-col md:py-10 md:px-40 p-6 h-64">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small/five-stars-rating-icon-png.png" alt="no image" style={{width:'150px', height:'150px'}} className='mt-5' />
      <p className='mt-3'>"I feel like I just re-found my love for the library again. This app helps re-connect with these amazing and free resources back inot reading books but also magazines. I know the library is free but I didn't know what an array they have for electronic resources. It is great and helpful."</p>
      <h6 className='mt-3'>John Leo</h6>
    </div>
    <div className="min-w-full flex justify-center items-center flex-col md:py-10 md:px-40 p-6 h-64">
      <img src="https://static.vecteezy.com/system/resources/previews/012/707/550/non_2x/stars-customer-reviews-illustration-png.png" alt="no image" style={{width:'150px', height:'150px', borderRadius:'50%'}} className='mt-5' />
      <p className='mt-3'>"I love reading and anywhere I can read as freely as I enjoy it. they allow me to read my fill regardless of my inability to always get to the library or to search stacks at bookstores. I can be comfortable in my own place."</p>
      <h6 className='mt-3'>Dona Mathew</h6>
    </div>
    <div className="min-w-full flex justify-center items-center flex-col md:py-10 md:px-40 p-6 h-64">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/019/636/194/small/stars-customer-reviews-illustration-png.png" alt="no image" style={{width:'150px', height:'150px', borderRadius:'50%'}} className='mt-5' />
      <p className='mt-3'>"I’ve been using this online book review app for a few weeks now. One small improvement could be adding more personalized recommendations based on my reading history, but overall, this app is good for readers."</p>
      <h6 className='mt-3'>Zoya Faruqui</h6>
    </div>
    
  </div>

  {/* <!-- Prev Button --> */}
  <button id="prevBtn" className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200">
  </button>

  {/* <!-- Next Button --> */}
  <button id="nextBtn" className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200">
  </button>
</div>
</div>
    <Footer/>
    </>
  )
}

export default Landingpage
