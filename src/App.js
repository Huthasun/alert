import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Alertpage from './Components/Alertpage'
import Alertsecondpage from './Components/Alertsecondpage'

const App = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Alertpage/>}/>
             <Route path="/alertcards" element={<Alertsecondpage/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App
