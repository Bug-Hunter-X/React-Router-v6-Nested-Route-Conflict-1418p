```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} >
          {/* Add nested routes within the Contact route if necessary */}
          <Route path=':id' element={<ContactDetails/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

function Home() {return <div>Home</div>}
function About() {return <div>About</div>}
function Contact() {return <div>Contact</div>}
function ContactDetails() {return <div>Contact Details</div>}
export default App;
```