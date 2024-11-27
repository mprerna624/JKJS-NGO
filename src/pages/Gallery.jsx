import React, { useEffect } from 'react';
import { Container } from '../Components';
import {bg_header, gallery_image1, gallery_image2, gallery_image3, gallery_image4, gallery_image5, gallery_image6, gallery_image7, gallery_image8, gallery_image9, gallery_image10} from "../assets"

function Gallery() {

    const images = [gallery_image1, gallery_image2, gallery_image3, gallery_image4, gallery_image5, gallery_image6, gallery_image7, gallery_image8, gallery_image9, gallery_image10]

    // Bcoz <Link to='/gallery'> redirects to the middle of the page 
    useEffect( () => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <>
        <div className={`heading-font w-full h-56 bg-cover bg-[50%_20%]`} 
            style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${bg_header})`}}
        >
            <Container className='h-full'>
                <div className="h-full text-white font-bold text-5xl flex flex-col justify-center
                            after:block after:w-[15%] after:lg:w-[7%] after:h-1 after:bg-orange-600 after:rounded-full after:mt-4"
                >
                Gallery
                </div>
            </Container>
        </div>

        <div className="w-full">
            <Container>
                <div className="py-10 gap-4 columns-1 sm:columns-2 lg:columns-3 md:py-20">
                    {
                        images.map((src, index) => (
                            <div key={index} className='mb-4 break-inside-avoid'>
                                <img src={src} alt='gallery-image' className='w-full object-cover rounded-lg' />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    </>
  )
}

export default Gallery