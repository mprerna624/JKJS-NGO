import { Footer, Header } from './Components'
import { Outlet } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <div className='w-full min-h-screen flex flex-col justify-between' style={{background: "var(--bg-page)"}}>
      <Header />

      <main className='flex-grow'>
          <Outlet />
      </main>

      <Footer />

      <div className="w-full bg-black text-white text-center font-semibold tracking-wider py-2" style={{fontFamily: 'var(--ff-o)'}}>Website developed with passion by <span className="text-[#ff000d]">Prerna Mittal</span></div>

      <Analytics />
    </div>
  )
}

export default App
