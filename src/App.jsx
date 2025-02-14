import { Outlet } from "react-router-dom"
import { Header } from "./components/header/Header"

function App() {

  return (
    <div
      className='w-full min-h-[10000vh] '
    >
      <Header />
      <div
        className="fixed top-0 left-0 min-h-dvh min-w-screen -z-10 overflow-hidden "
      >

        <video
          src={'/vedoi/home.mp4'}
          loop
          autoPlay
          muted
          className="object-cover min-h-screen w-full"
        />
      </div>
      <Outlet />

    </div>
  )
}

export default App
