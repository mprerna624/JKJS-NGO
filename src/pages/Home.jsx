import React from 'react'
import { CarouselSection, Container, Button, HeadingUnderline }from '../Components';
import {card_icon1, card_icon2, card_icon3, jkjs_intro, feed_india_img, get_involved_img, aktionLogo, jbwLogo,C3Logo, people_icon, days_icon, volunteer_icon} from '../assets'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const introCards = [
        {
            icon: card_icon1,
            heading: "Community Kitchens - Shree Jee Rasoi",
            content: "We operate community kitchens that provide hot, nutritious meals to those in need. Our kitchens are strategically located in high-need areas to maximize our reach's impact and effectiveness."
        },
        {
            icon: card_icon2,
            heading: "Food Distribution Programs",
            content: "We organize food drives and distribute essential groceries to low-income families and individuals. Our focus is on providing balanced nutrition to support health and well-being."
        },
        {
            icon: card_icon3,
            heading: "Partnerships and Collaborations",
            content: "We work with local organizations, businesses, and volunteers to expand our reach and efficiency. By joining forces, we can ensure that more food reaches those who need it the most."
        }
    ]

  return (
    <>
        <CarouselSection />

        {/* Cards Section */}
        <div className="w-full sm:py-14">
            <Container className="text-center flex flex-wrap justify-center gap-x-4 gap-y-8 md:justify-evenly xl:justify-between">
                    {
                        introCards.map((card, index) => (
                            <div key={index} className='px-4 py-6 max-w-80 rounded-xl bg-gray-200 text-white shadow-xl my-6 sm:m-0 sm:p-8' style={{background: "var(--bg-card)" }}>
                                <div className="mx-auto w-24 h-16">
                                    <img src={card.icon} alt="icons" />
                                </div>
                                <h3 className='mt-10 font-bold text-2xl heading-font'>{card.heading}</h3>
                                <p className='mt-6 text-base leading-7 text-pretty'>{card.content}</p>
                            </div>
                        ))
                    }
            </Container>
        </div>

        {/* About Intro */}
        <div className="bg-gray-900 text-white" style={{background: "var(--bg-dark)", color: "var(--para-light)"}}>
            <Container>
                <div className='py-20 flex flex-col items-center gap-10 lg:flex-row-reverse lg:gap-14 xl:gap-28'>
                    <div>
                        <img src={jkjs_intro} alt="image" className='max-h-72 lg:max-h-[auto]'/>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <h2 className='font-bold text-3xl heading-font' style={{color: "var(--heading-light)"}}>Jan Kalyan Jan Sahyog Foundation</h2>
                        <HeadingUnderline />
                        <p className='mt-6 leading-7 tracking-wide'>We believe that no one should go hungry. Our mission is simple yet profound - to ensure that every individual in India has access to nutritious and sufficient food. With your support, we strive to eliminate hunger and create a future where every meal is a source of strength and hope. Join us in our mission to create a world where everyone has access to the essential nourishment they deserve.</p>
                        <Button className='mt-8' onClick={() => navigate('/about')}>Read More</Button>
                    </div>
                </div>
            </Container>
        </div>
        
        {/* Feed India Mission */}
        <div className="w-full" style={{color: "var(--para-dark)"}}>
        <Container>
            <div className='py-20 flex flex-col items-center gap-10 lg:flex-row lg:gap-14 xl:gap-28'>
                <div>
                    <img src={feed_india_img} alt="image" className='max-h-72 lg:max-h-[auto]'/>
                </div>
                <div className='w-full lg:w-1/2'>
                    <h2 className='font-bold heading-font text-3xl' style={{color: "var(--heading-dark)"}}>Feed India - Mission to Nourish Every Soul</h2>
                    <HeadingUnderline />
                    <p className='mt-6 leading-7 tracking-wide'>Despite India's growing economy, hunger remains a critical issue. Millions of families face food insecurity every day. Children go to bed hungry, and adults struggle to find their next meal. This challenge is not just about lack of food but also about the distribution and accessibility of nutritious meals. </p> 
                    <p className='mt-1 leading-7 tracking-wide'> Our Approach: We provide hot meals through community kitchens and distribute groceries to those in need. We also educate communities about nutrition and collaborate with partners to maximize our impact.</p>
                    <div className="mt-10 mx-auto w-[90%]">
                        <div className='h-[5px] bg-slate-300 rounded-full relative
                                        before:absolute before:h-[5px] before:w-1/2 before:inset-0 before:bg-orange-600 before:rounded-full
                                        after:content-["50%"] after:absolute after:w-11 after:h-11 after:left-[50%] after:-translate-x-[50%] after:-translate-y-[50%] after:p-2 after:pt-[10px] after:bg-orange-600 after:text-white after:rounded-full'
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

        {/* Get Involved */}
        <div className="w-full bg-gray-900 text-white" style={{background: "var(--bg-dark)", color: "var(--para-light)"}}>
            <Container>
                <div className='py-20 flex flex-col items-center gap-10 lg:flex-row-reverse lg:justify-between lg:gap-14 xl:gap-28'>
                    <div>
                        <img src={get_involved_img} alt="image" className='max-h-72 lg:max-h-[auto]'/>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <h2 className='font-bold text-3xl heading-font' style={{color: "var(--heading-light)"}}>Get Involved</h2>
                        <HeadingUnderline />
                        <dl className='mt-6 leading-7 tracking-wide'>
                            <dt className='font-bold heading-font text-lg underline underline-offset-2'>Donate and Make a Difference</dt>
                            <dd className='opacity-80'>Your contributions make a direct impact. Every donation helps us provide meals, groceries, and nutritional education to those in need.</dd>

                            <dt className='font-bold heading-font text-lg underline underline-offset-2 mt-5'>Volunteer Your Time</dt>
                            <dd className='opacity-80'>Join our team of dedicated volunteers who help in various capacities, from serving meals to organizing food drives and spreading awareness.</dd>

                            <dt className='font-bold heading-font text-lg underline underline-offset-2 mt-5'>Spread the Word About Our Mission</dt>
                            <dd className='opacity-80'>Share our mission with your network. The more people know about our cause, the more support we can garner to tackle hunger.</dd>

                            <dt className='font-bold heading-font text-lg underline underline-offset-2 mt-5'>Partner with Us</dt>
                            <dd className='opacity-80'>If you represent a business, consider partnering with us for corporate social responsibility initiatives. Together, we can make a substantial difference.</dd>
                        </dl>
                    </div>
                </div>
        </Container>
        </div>

        {/* Our Supporters */}
        <div className="w-full" style={{color: "var(--para-dark)"}}>
            <Container className='py-14'>
                <h1 className="font-bold heading-font text-4xl text-center" style={{color: "var(--heading-dark)"}}>Our Generous Supporters</h1>
                <HeadingUnderline className='mx-auto' />
                <div className='mt-16 flex flex-wrap justify-evenly items-center gap-16'>
                    <div className='w-72'><img src={aktionLogo} alt="Aktion Safety Solutions Pvt. Ltd." /></div>
                    <div className='w-72'><img src={jbwLogo} alt="JBW Industries Pvt. Ltd." /></div>
                    <div className='w-72'><img src={C3Logo} alt="JBW Industries Pvt. Ltd." /></div>
                </div>
            </Container>
        </div>

        {/* Achievement Section */}
        <div className="w-full border border-t-2" style={{color: "var(--para-dark)"}}>
            <Container>
                <div className="py-20 flex flex-col justify-between gap-12 lg:flex-row">
                    <div className='lg:w-1/2'>
                        <h3 className='font-semibold text-[42px] leading-relaxed text-pretty' style={{color: "var(--heading-dark)"}}>A world where food is abundant, resources are shared, and every person has the opportunity to thrive.</h3>
                        <HeadingUnderline />
                        <p className='mt-6 leading-relaxed'>We like providing assistance to anyone who struggles with hunger. We started daily food donations for around 100-200 people and we have already completed 365+ days to serve food on daily basis.</p>
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-around gap-12 md:flex-row md:items-end">
                        <div>
                            <img src={people_icon} alt="Icon" className='w-[105px] h-[105px] mx-auto' />
                            <p className='font-semibold text-center text-6xl mt-6 text-[var(--heading-dark)]'>146 K</p>
                            <p className='my-4 text-center font-semibold'>People Helped</p>
                        </div>
                        <div>
                            <img src={days_icon} alt="Icon" className='w-[105px] h-[105px] mx-auto' />
                            <p className='font-semibold text-center text-6xl mt-6 text-[var(--heading-dark)]'>400+</p>
                            <p className='my-4 text-center font-semibold'>Days Food Served</p>
                        </div>
                        <div>
                            <img src={volunteer_icon} alt="Icon" className='w-[105px] h-[105px] mx-auto' />
                            <p className='font-semibold text-center text-6xl mt-6 text-[var(--heading-dark)]'>24</p>
                            <p className='my-4 text-center font-semibold'>Volunteers</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Home