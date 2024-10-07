import { Footer, Header } from './Components'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='w-full min-h-screen flex flex-col justify-between' style={{background: "var(--bg-page)"}}>
      <Header />

      <main className='flex-grow'>
          <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App
