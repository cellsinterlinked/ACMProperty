
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Landing from './Pages/Landing';
import Sales from './Pages/Sales';
import Contact from './Pages/Contact';
import HoaManagement from './Pages/HoaManagement';
import PropertyManagement from './Pages/PropertyManagement';
import OwnerResources from './Pages/OwnerResources';
import ResidentResources from './Pages/ResidentResources';
import About from './Pages/About';
import LocalServices from './Pages/LocalServices';
import Survey from './Pages/Survey';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hoamanagement" element={<HoaManagement />} />
        <Route path="/propertymanagement" element={<PropertyManagement />} />
        <Route path="/ownerresources" element={<OwnerResources />} />
        <Route path="/residentresources" element={<ResidentResources />} />
        <Route path="/about" element={<About />} />
        <Route path="/localservices" element={<LocalServices />} />
        <Route path="/survey" element={<Survey />} />

        
       
      </Routes>
     
    </div>
  );
}

export default App;
