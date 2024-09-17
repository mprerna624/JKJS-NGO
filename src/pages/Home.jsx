import React from 'react'
import { AboutIntro, CarouselSection, Container }from '../Components';
import icon1 from '../assets/intro-icons/card-1.jpeg';
import icon2 from '../assets/intro-icons/card-2.png';
import icon3 from '../assets/intro-icons/card-3.jpeg';

function Home() {

    const introCards = [
        {
            icon: icon1,
            heading: "Community Kitchens",
            content: "We operate community kitchens that provide hot, nutritious meals to those in need. Our kitchens are strategically located in high-need areas to maximize reach and impact."
        },
        {
            icon: icon2,
            heading: "Food Distribution Programs",
            content: "We organize food drives and distribute essential groceries to low-income families and individuals. Our focus is on providing balanced nutrition to support health and well-being."
        },
        {
            icon: icon3,
            heading: "Partnerships and Collaborations",
            content: "We work with local organizations, businesses, and volunteers to expand our reach and effectiveness. By joining forces, we can ensure that more food reaches those who need it the most."
        }
    ]

  return (
    <>
        <CarouselSection />

        <div className="w-full sm:my-14">
            <Container className="text-center flex flex-wrap justify-center gap-4 lg:gap-6 lg:justify-evenly xl:justify-between">
                    {
                        introCards.map((card, index) => (
                            <div key={index} className='px-4 py-6 max-w-80 rounded-xl bg-gray-200 my-6 sm:m-0 sm:p-8'>
                                <div className="mx-auto w-24 h-16">
                                    <img src={card.icon} alt="icons" className='mix-blend-darken' />
                                </div>
                                <h3 className='mt-6 font-bold text-2xl'>{card.heading}</h3>
                                <p className='mt-4 text-base leading-7'>{card.content}</p>
                            </div>
                        ))
                    }
            </Container>
        </div>

        <div className="bg-gray-900 text-white">
            <AboutIntro />
        </div>
    </>
  )
}

export default Home