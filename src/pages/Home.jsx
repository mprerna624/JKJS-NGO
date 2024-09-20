import React from 'react'
import { AboutIntro, CarouselSection, Container, Button }from '../Components';
import icon1 from '../assets/intro-icons/card-1.jpeg';
import icon2 from '../assets/intro-icons/card-2.png';
import icon3 from '../assets/intro-icons/card-3.jpeg';
import image from '../assets/carousel/image-2.jpeg'

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

        <div className="w-full">
        <Container>
            <div className='py-20 flex flex-col items-center gap-10 lg:flex-row lg:gap-14 xl:gap-28'>
                <div>
                    <img src={image} alt="image" className='max-h-72 lg:max-h-[auto]'/>
                </div>
                <div className='w-full lg:w-1/2'>
                    <h2 className='font-bold text-3xl after:block after:w-1/5 after:h-1 after:bg-orange-600 after:rounded-full after:mt-4'>Feed India - Mission to Nourish Every Soul</h2>
                    <p className='mt-6 leading-7 tracking-wide'>Despite India's growing economy, hunger remains a critical issue. Millions of families face food insecurity every day. Children go to bed hungry, and adults struggle to find their next meal. This challenge is not just about lack of food but also about the distribution and accessibility of nutritious meals. </p> 
                    <p className='mt-1 leading-7 tracking-wide'> Our Approach: We provide hot meals through community kitchens and distribute groceries to those in need. We also educate communities about nutrition and collaborate with partners to maximize our impact.</p>
                    <div className="mt-10 mx-auto w-[90%]">
                        <div className='h-[5px] bg-slate-300 rounded-full relative
                                        before:absolute before:h-[5px] before:w-1/2 before:inset-0 before:bg-orange-600 before:rounded-full
                                        after:content-["50%"] after:absolute after:w-11 after:h-11 after:left-[50%] after:-translate-x-[50%] after:-translate-y-[50%] after:p-2 after:bg-orange-600 after:text-white after:rounded-full'
                        >
                            {/* {Donate Line Bar} */}
                        </div>
                        <div className='flex justify-between items-center mt-4 text-black/75'>
                            <div>Raised: ₹12,345</div>
                            <div>Goal: ₹12,345</div>
                        </div>
                    </div>

                    <Button className='mt-8'>Donate Now</Button>
                </div>
            </div>
        </Container>
        </div>

        <div className="w-full bg-gray-900 text-white">
            <Container>
                <div className='py-20 flex flex-col items-center gap-10 lg:flex-row-reverse lg:gap-14 xl:gap-28'>
                    <div>
                        <img src={image} alt="image" className='max-h-72 lg:max-h-[auto]'/>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <h2 className='font-bold text-3xl after:block after:w-1/5 after:h-1 after:bg-orange-600 after:rounded-full after:mt-4'>Get Involved</h2>
                        <dl className='mt-6 leading-7 tracking-wide'>
                            <dt className='font-bold underline underline-offset-2'>Donate and Make a Difference</dt>
                            <dd className='opacity-60'>Your contributions make a direct impact. Every donation helps us provide meals, groceries, and nutritional education to those in need.</dd>

                            <dt className='font-bold underline underline-offset-2 mt-5'>Volunteer Your Time</dt>
                            <dd className='opacity-60'>Join our team of dedicated volunteers who help in various capacities, from serving meals to organizing food drives and spreading awareness.</dd>

                            <dt className='font-bold underline underline-offset-2 mt-5'>Spread the Word About Our Mission</dt>
                            <dd className='opacity-60'>Share our mission with your network. The more people know about our cause, the more support we can garner to tackle hunger.</dd>

                            <dt className='font-bold underline underline-offset-2 mt-5'>Partner with Us</dt>
                            <dd className='opacity-60'>If you represent a business, consider partnering with us for corporate social responsibility initiatives. Together, we can make a substantial difference.</dd>
                        </dl>
                    </div>
                </div>
        </Container>
        </div>
    </>
  )
}

export default Home