import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

function Carousel({
    children, 
    autoSlide = true,
    className = ''
}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => setCurrentIndex( (currentIndexVal) => (
        currentIndexVal === 0 ? children.length - 1 : currentIndexVal - 1
    ) )

    const next = () => setCurrentIndex( (currentIndexVal) => (
        currentIndexVal === children.length - 1 ? 0 : currentIndexVal + 1
    ) )

    useEffect(() => {
        if(!autoSlide) return;
        const slideInterval = setInterval(next, 3000);
        return () => clearInterval(slideInterval);
    }, [])

  return (
    <div className={`overflow-hidden relative ${className}`}>
        {/* Children : All Images */}
        <div className='flex transition-transform ease-out duration-500'
          style={{transform : `translateX(-${currentIndex * 100}%)`}}
        >
            {children}
        </div>

        {/* Navigation Buttons */}
        <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button onClick={prev}
                className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
            >
                <ChevronLeft className='w-5 h-5 sm:w-10 sm:h-10' />
            </button>

            <button onClick={next}
                className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white flex justify-center items-center'
            >
                <ChevronRight className='w-5 h-5 sm:w-10 sm:h-10' />
            </button>
        </div>

        {/* Indicators */}
        <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
                {
                    children.map((_, index) => (
                        <div key={index}
                            className={`transition-all w-[6px] h-[6px] bg-white rounded-full ${currentIndex === index ? "scale-125" : "bg-opacity-50"}`} 
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Carousel