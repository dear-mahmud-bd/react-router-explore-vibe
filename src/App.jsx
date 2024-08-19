import { Outlet } from "react-router-dom";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";


function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="fixed top-0 left-0 w-full z-10 shadow-md">
          <Navbar></Navbar>
        </header>

        <main className="flex-grow mt-20">
          <div className="container max-w-7xl mx-auto p-4">
            <Outlet></Outlet>
          </div>
        </main>

        <footer className="mt-auto bg-base-200 w-full">
          <Footer></Footer>
        </footer>
      </div>
    </>
  )
}

export default App
