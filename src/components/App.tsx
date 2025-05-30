import "../index.css"
import Header from './Header'
import Features from './Features'
import Pricing from "./Pricing"

const App = () => {
  return (
    <div className='max-w-6xl mx-auto px-4'>
      <Header/>
      <Features />
      <Pricing/>
      
    </div>
  )
}

export default App

