import './App.css'
import Footer from './Componants/Footer'
import Header from './Componants/Header'
import Home from './Componants/Home'
import QA from './Componants/QA'
import Services from './Componants/Services'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Main from './Componants/Main'
import InnerPage from './Componants/InnerPage'
function App() {

  return (
    <>
  <div className='flex flex-col'>
      <BrowserRouter>
      <Header /> 
      <Routes >  
      <Route path="/" element={<Main />} />   
      <Route path="/Service/:id" element={<InnerPage />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
