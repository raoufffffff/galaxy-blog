import { Outlet } from "react-router-dom"
import { Header } from "./components/header/Header"

function App() {

  return (
    <div
      className='w-full min-h-[10000vh] bg-[#000811]'
    >
      <Header />
      <Outlet />

    </div>
  )
}

export default App
