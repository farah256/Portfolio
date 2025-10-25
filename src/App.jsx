import About from "./components/About/about"
import Header from "./components/Header/header"
import Navbar from "./components/Navbar/navbar"


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
    </div>
  )
}

export default App