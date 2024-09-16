import React from 'react'
import {Container, Button} from '../Components'
import image from '../assets/carousel/image-2.jpeg'

function AboutIntro() {
  return (
    <Container>
        <div className='py-10 flex flex-col items-center gap-10 lg:flex-row-reverse lg:gap-14 xl:gap-28'>
            <div>
                <img src={image} alt="image" className='max-h-72 lg:max-h-[auto]'/>
            </div>
            <div className='w-full lg:w-1/2'>
                <h2 className='font-bold text-3xl after:block after:w-1/5 after:h-1 after:bg-orange-600 after:rounded-full after:mt-4'>Jan Kalyan Jan Sahyog Foundation</h2>
                <p className='mt-6 text-white/75 leading-7 tracking-wide'>We believe that no one should go hungry. Our mission is simple yet profound - to ensure that every individual in India has access to nutritious and sufficient food. With your support, we strive to eliminate hunger and create a future where every meal is a source of strength and hope. Join us in our mission to create a world where everyone has access to the essential nourishment they deserve.</p>
                <Button className='mt-8'>Read More</Button>
            </div>
        </div>
    </Container>
  )
}

export default AboutIntro