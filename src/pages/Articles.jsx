import { Button, Container } from '../Components';
import React, { useEffect, useState } from 'react';
import { bg_header } from '../assets';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'Feeding the Needy: Jan Kalyan Jan Sahyog Foundation',
    content: 'The Jan Kalyan Jan Sahyog foundation dedicated to feeding impoverished communities in India is truly making a significant impact. Their approach combines immediate relief with sustainable initiatives, addressing both hunger and the underlying causes of food insecurity.',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgSlSBLFGTd8oCp0nAwnWS2qhh3spK0uMe_F2tYJqKTNzd87J5P65knKA0I0kFkx04SkJSj5RmBMsrDxzGsvXYK2-RLDS55TWp_82BAE0FCoE_UIMv_2ogHgsVMtz-LjqmVYwtc3L4XKy3BlbTJFPI5V_KqvdW-85OWtxA3l0LJHtDv5w9ZYYQufeV-BQ=w558-h313',
    author: 'Mayank Behl',
    date: 'September 19, 2024',
    url: 'https://thejankalyanjansahyogfoundation.blogspot.com/2024/09/the-jan-kalyan-jan-sahyog-foundation.html'
  },
  {
    id: 2,
    title: 'Volunteering: Make a Difference in Your Community',
    content: 'The foundation focused on feeding underprivileged communities in India is doing commendable work in addressing hunger and food insecurity.  The foundation effectively provides nutritious meals to vulnerable populations, ensuring that children and families have access to essential food resources.',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjUqEXniWDLIgPgYn8_uuT9nLhu7ysGGHntqRUEjqEdrEbWdSs9Hg_j7TSTPvytii4SrioomZRox3Mj-JbU2h3WqI30XjSalQ_inAqHG5QbydXltlKdu1JtbQlG1A8mC0xkxij3eEh5p5sXG2ZAp1GUnznp-evxlxduOoktGkxFg0ZM8YfCMoxi8v0Wyw',
    author: 'Mayank Behl',
    date: 'September 20, 2024',
    url: 'https://thejankalyanjansahyogfoundation.blogspot.com/2024/09/jan-kalyan-jan-sahyog-foundation.html'
  },
];

const popularPosts = [
  {
    id: 1,
    title: 'Feeding the Needy',
    date: 'September 19, 2024',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgSlSBLFGTd8oCp0nAwnWS2qhh3spK0uMe_F2tYJqKTNzd87J5P65knKA0I0kFkx04SkJSj5RmBMsrDxzGsvXYK2-RLDS55TWp_82BAE0FCoE_UIMv_2ogHgsVMtz-LjqmVYwtc3L4XKy3BlbTJFPI5V_KqvdW-85OWtxA3l0LJHtDv5w9ZYYQufeV-BQ=w558-h313',
  },
  {
    id: 2,
    title: 'Volunteer: Make Difference',
    date: 'September 20, 2024',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjUqEXniWDLIgPgYn8_uuT9nLhu7ysGGHntqRUEjqEdrEbWdSs9Hg_j7TSTPvytii4SrioomZRox3Mj-JbU2h3WqI30XjSalQ_inAqHG5QbydXltlKdu1JtbQlG1A8mC0xkxij3eEh5p5sXG2ZAp1GUnznp-evxlxduOoktGkxFg0ZM8YfCMoxi8v0Wyw',
  },
];

const Articles = () => {

  const totalBlogs = articles.length;

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 1;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  const indexEndOfPage = currentPage * blogsPerPage;
  const indexStartOfPage = indexEndOfPage - blogsPerPage;
  const currentPageBlogs = articles.slice(indexStartOfPage, indexEndOfPage);

  const handlePrev = (e) => {
    setCurrentPage((prev) => Math.max(prev-1, 1))
  }

  const handleNext = (e) => {
   setCurrentPage((prev) => Math.min(prev+1, totalPages))
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

    // Bcoz <Link to='/articles'> redirects to the middle of the page 
    useEffect( () => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <>
        <div className={`heading-font w-full h-56 bg-cover bg-[50%_20%]`} style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${bg_header})`}}>
            <Container className='h-full'>
                <div className="h-full text-white font-bold text-5xl flex flex-col justify-center
                        after:block after:w-[7%] after:h-1 after:bg-orange-600 after:rounded-full after:mt-4"
                >
                Articles
                </div>
            </Container>
        </div>

        <div className="w-full py-20">
          <Container className='lg:flex lg:justify-between lg:gap-8'>
            {/* List of Blogs */}
            <div className="lg:w-3/4">
              <div className='flex flex-col gap-y-20'>
              { 
                currentPageBlogs.map((blog) => (
                  <div key={blog.id} className='eachBlog'>
                    <div><img src={blog.image} alt="blog-image" className='w-full md:h-96 object-center object-cover' /></div>
                    <div className='mt-6'>
                      <p className="text-sm text-orange-600">{blog.date}</p>
                      <h1 className="text-[27px] mt-1 heading-font">{blog.title}</h1>
                      <p className="text-sm mt-1">By {blog.author}</p>
                      <p className="mt-8 text-[var(--para-dark)]">{blog.content}</p>
                      <Button className='mt-4' to={blog.url} target='_blank'>Read More</Button>
                    </div>
                  </div>
                ))
              }
              </div>

              <div className='pagination my-14'>
                <button className='pagination-btn mr-2 px-3 py-1 rounded-md' onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
                { 
                  Array.from({length : totalPages}, (_, index) => (
                    <button key={index} onClick={() => handlePageClick(index+1)} className={`${currentPage === index+1 ? 'active' : ''} pagination-btn mr-2 px-3 py-1 rounded-md`}>{index+1}</button>
                  ))
                }
                <button className='pagination-btn mr-2 px-3 py-1 rounded-md' onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
              </div>

            </div>

            {/* Sidebar */}
            <aside className="sidebar lg:w-1/4">

              {/* Popular Posts */}
              <div className="popular-posts">
                <h3 className='heading-font text-2xl mb-6'>Popular Posts</h3>
                <div>
                  {
                    popularPosts.map((post) => (
                      <div key={post.id} className='mb-6 grid grid-cols-[90px_1fr] gap-6'>
                        <div className='w-[90px] h-[90px]'>
                          <img src={post.image} alt="post-image" className='w-full h-full object-cover' />
                        </div>
                        <div>
                          <h4>{post.title}</h4>
                          <p className='text-sm text-[var(--para-dark)]'>{post.date}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>

              {/* About Us */}
              <div className="mt-14">
                <h3 className="text-2xl heading-font mb-4">About Our NGO</h3>
                <p className="text-gray-600">We provide nutritious meals to underprivileged communities. Join us in the fight against hunger.</p>
                <Link to='/about' 
                  className="inline-block mt-4 px-4 py-2 rounded font-medium tracking-wider cursor-pointer outline-0 transition-colors duration-300 ease-in-out"
                  style={{background: "var(--bg-gradient-dark)", color: "#fff", fontFamily:'var(--ff-o)'}}
                  onMouseEnter={(e) => e.target.style.background = 'var(--bg-gradient-invert)'} //hover effect
                  onMouseLeave={(e) => e.target.style.background = 'var(--bg-gradient-dark)'}
                  >
                  Learn More
                </Link>
              </div>

              <div className='sm:flex sm:gap-6 lg:block'>
                {/* Donate Now */}
                <div className="mt-12 sm:w-1/2 lg:w-auto">
                  <h3 className="text-2xl heading-font mb-4">Donate Now</h3>
                  <p className="text-gray-600">Your support helps us reach more families in need.</p>
                  <Link to='#' target='_blank' 
                    className="inline-block mt-4 px-4 py-2 rounded font-medium tracking-wider cursor-pointer outline-0 transition-colors duration-300 ease-in-out"
                    style={{background: "var(--bg-gradient-dark)", color: "#fff", fontFamily:'var(--ff-o)'}}
                    onMouseEnter={(e) => e.target.style.background = 'var(--bg-gradient-invert)'} //hover effect
                    onMouseLeave={(e) => e.target.style.background = 'var(--bg-gradient-dark)'}
                  >
                    Donate
                  </Link>
                </div>

                {/* Social Media */}
                <div className="mt-12 sm:w-1/2 lg:w-auto">
                  <h3 className='text-2xl heading-font mb-4'>Follow Us</h3>
                  <div className="text-gray-600">Stay connected with us through social media for the latest updates.</div>
                  <div className='flex items-center gap-4 mt-4 text-orange-600'>
                    <Link to="#" className='inline-block text-xl'><FaFacebook /></Link>
                    <Link to="#" className='inline-block text-xl'><FaInstagram /></Link>
                    <Link to="#" className='inline-block text-xl'><FaXTwitter /></Link>
                    <Link to="#" className='inline-block text-2xl'><FaYoutube /></Link>
                    <Link to="#" className='inline-block text-xl'><FaLinkedin /></Link>
                </div>
                </div>
              </div>

            </aside>
          </Container>
        </div>
    </>
  );
};

export default Articles;
