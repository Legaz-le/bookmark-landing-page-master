import "../index.css"
import Header from './Header'
import Features from './Features'
import Pricing from "./Pricing"
import Faqs from "./Faqs"
import Contackt from "./Contackt"

const App = () => {
  return (
    <div className='max-w-6xl mx-auto px-4'>
      <Header/>
      <Features />
      <Pricing/>
      <Faqs />
      <Contackt />
      
    </div>
  )
}

export default App

