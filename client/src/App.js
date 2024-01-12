import './App.css';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import { BookingHomePage, EditBookingPage, HomePage } from './Routing';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';

function App() {
  return (
    
      <Router>
      <Navbar/>
      <Title/>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/booking' element={<BookingHomePage/>}/>
              <Route path='/editBooking/:id' element={<EditBookingPage/>}/>
            </Routes>
      </Router>
      
   
  );
}

export default App;
