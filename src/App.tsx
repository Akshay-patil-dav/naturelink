
import './App.css'
import HeaderApp from './components/medicineheader.tsx'
import Medicineheader from './components/HeroSection.tsx'
import NatureLinkProcess from './components/NatureLinkProcess.tsx'
import { ProductGrid } from './components/pages/product/ProductGrid.tsx'
// import { PageHeader } from './components/pages/product/PageHeader.tsx'
import Footer from './components/Footer.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export  function Homepage() {
  return (
    <>
     <Medicineheader />
      <NatureLinkProcess /> 
    </>
  );
}

export function ProductPage() {
  return (
    <>
      <Medicineheader />
       <ProductGrid />
    </>
  );
}

function App() {
 
  return (
    <>
    <HeaderApp />
   
    {/* <Medicineheader />
    <NatureLinkProcess /> */}
  {/* <PageHeader /> */}
   
  

     <BrowserRouter>
           {/* Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<ProductPage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
     </BrowserRouter>
       <Footer />
    </>
  )
}

export default App
