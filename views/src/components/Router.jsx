// Ok, so in here, Outlet is basically Home.jsx.
import Header from './Header'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import ArticleDetails from '../pages/ArticleDetails';


export default function Router() {
    const Layout = () => {
        return (
          <>
            <Header />
            <Outlet /> 
          </>
        )
    }

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />}  />
                    <Route path="Contact_Us" element={<Contact />}  />
                    <Route path="article/:id" element={<ArticleDetails />}  /> 
                 
                  
                  </Route>
                </Routes>
              </BrowserRouter> 

        )
    }
    return (
        <>
        <BrowserRoutes />
        </>
    )
}
