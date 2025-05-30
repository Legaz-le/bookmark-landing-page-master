import "../index.css"
import Header from './Header'
import Features from './Features'
import Pricing from "./Pricing"
import Faqs from "./Faqs"
import Contact from "./Contact"
import Footer from "./Footer"

const App = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 '>
      <Header/>
      <Features />
      <Pricing/>
      <Faqs />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App

