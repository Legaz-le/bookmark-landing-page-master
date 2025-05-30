import "../index.css"
import Header from './Header'
import Features from './Features'
import Pricing from "./Pricing"
import Faqs from "./Faqs"

const App = () => {
  return (
    <div className='max-w-6xl mx-auto px-4'>
      <Header/>
      <Features />
      <Pricing/>
      <Faqs />
      
    </div>
  )
}

export default App

