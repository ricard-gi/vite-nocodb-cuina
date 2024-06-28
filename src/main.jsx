import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App.jsx'
import Recepta from './Recepta.jsx'
import Llista from './Llista.jsx'
import About from './About.jsx'
import NotFound from './NotFound.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Llista />} />
          <Route path="/recepta/:id" element={<Recepta />} />
          <Route path="/about" element={<About />} />
          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
