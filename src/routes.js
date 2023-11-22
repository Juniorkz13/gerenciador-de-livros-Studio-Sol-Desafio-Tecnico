import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Livro from './pages/Livro'
import Header from './components/Header'
import Footer from './components/Footer'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/livro/:id' element={<Livro />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesApp
