import {FC} from 'react'
import {BrowserRouter as Router, Routes, Route, HashRouter} from 'react-router-dom'; 
import HOME from '../pages/home';
import CATEGORY from '../pages/category';
import DASHBOARD from '../pages/dashboard';

const ROUTES : FC = () => {
  return ( 
      <HashRouter> 
        <Routes>
          <Route path="/" element={<HOME/>}/> 
          <Route path="/dash123" element={<DASHBOARD/>}/> 
          <Route path="/category" element={<CATEGORY/>}/>
        </Routes>
      </HashRouter>
  )
}

export default ROUTES; 