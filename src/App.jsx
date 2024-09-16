import { Footer, Header } from './Components'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='w-full min-h-screen flex flex-col justify-between bg-slate-50'>
      <Header />

      <main className='flex-grow'>
          <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App
