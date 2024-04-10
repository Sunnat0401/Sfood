import React from 'react'
import HomePages from './Pages/HomePages/HomePages'
import './App.css'
import {Route ,Routes} from "react-router-dom";
import Fillial from './Pages/Fillial/Fillial';
import Info from './Pages/Info/Info';
import Contact from './Pages/Contact/Contact';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" component={<HomePages/>}/>
        <Route path="/fillial" component={<Fillial/>}/>
        <Route path="/info" component={<Info/>}/>
        <Route path="/contact" component={<Contact/>}/>
      </Routes>

    </div>
  )
}

export default App